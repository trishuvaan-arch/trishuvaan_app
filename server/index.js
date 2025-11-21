import express from "express";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import cors from "cors";
import Razorpay from "razorpay";
import multer from "multer";
import dotenv from "dotenv";
import crypto from "crypto";
import { Readable } from "stream";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

/* ----------------------------------------------------
   CORS Allowed Origins
---------------------------------------------------- */
const allowedOrigins = [
  "http://68.178.160.4",
  "https://68.178.160.4",
  "https://trishuvaan.com",
  "https://www.trishuvaan.com",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`🚫 Blocked by CORS: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ----------------------------------------------------
   Multer Upload Config
---------------------------------------------------- */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* ----------------------------------------------------
   Razorpay Setup
---------------------------------------------------- */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ----------------------------------------------------
   Google Sheet Helper
---------------------------------------------------- */
async function appendToSheet(sheetName, valuesObject, headerValues = []) {
  try {
    const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    const authClient = new JWT({
      email: creds.client_email,
      key: creds.private_key.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, authClient);
    await doc.loadInfo();

    let sheet = doc.sheetsByTitle[sheetName];
    if (!sheet) {
      sheet = await doc.addSheet({ title: sheetName, headerValues });
    } else {
      try {
        await sheet.loadHeaderRow();
      } catch {
        await sheet.setHeaderRow(headerValues);
      }
    }

    await sheet.addRow(valuesObject);
    return true;
  } catch (err) {
    console.error(`❌ appendToSheet error (${sheetName}):`, err);
    return false;
  }
}

/* ----------------------------------------------------
   Google Drive - Resume Upload
---------------------------------------------------- */
async function uploadToDrive(file) {
  try {
    const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    const auth = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    const fileMetadata = {
      name: file.originalname,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    };

    const media = {
      mimeType: file.mimetype,
      body: Readable.from(file.buffer),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id, webViewLink",
    });

    const fileId = response.data.id;

    await drive.permissions.create({
      fileId,
      requestBody: { role: "reader", type: "anyone" },
    });

    const { data } = await drive.files.get({
      fileId,
      fields: "webViewLink",
    });

    return data.webViewLink;
  } catch (err) {
    console.error("❌ uploadToDrive error:", err);
    return "Upload Failed";
  }
}

/* ----------------------------------------------------
   WhatsApp Group Helper
---------------------------------------------------- */
function getWhatsAppInviteMessage(name, groupId) {
  let invite;
  switch (groupId) {
    case "AI": invite = process.env.WHATSAPP_AI_COURSE; break;
    case "POWERBI": invite = process.env.WHATSAPP_POWERBI; break;
    case "SQL": invite = process.env.WHATSAPP_SQL; break;
    case "PYTHON": invite = process.env.WHATSAPP_PYTHON; break;
    case "EXCEL": invite = process.env.WHATSAPP_EXCEL; break;
    case "DATAVERSE": invite = process.env.WHATSAPP_DATAVERSE; break;
    case "AI_FUSION": invite = process.env.WHATSAPP_AI_FUSION; break;
    default: invite = process.env.WHATSAPP_AI_COURSE;
  }

  return `👋 Hi ${name}!\n\nWelcome to Trishuvaan 🎓\nJoin your WhatsApp group:\n${invite}\n\nLet’s begin your AI journey! 🚀`;
}

/* ----------------------------------------------------
   Apply API
---------------------------------------------------- */
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name = "", email = "", mobile = "", position = "" } = req.body;
    const resume = req.file;

    let resumeLink = "No Resume Uploaded";
    if (resume) resumeLink = await uploadToDrive(resume);

    const timestamp = new Date().toLocaleString();
    const row = {
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Mobile: mobile,
      Position: position,
      Resume: resumeLink,
      Status: resumeLink === "Upload Failed" ? "UPLOAD FAILED" : "RECEIVED",
    };

    await appendToSheet("applications", row, [
      "Timestamp","Name","Email","Mobile","Position","Resume","Status",
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   Contact Form API
---------------------------------------------------- */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const timestamp = new Date().toLocaleString();
    const row = {
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Message: message,
      Status: "NEW",
    };

    await appendToSheet("contacts", row, [
      "Timestamp","Name","Email","Message","Status",
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   Razorpay: Create Order
---------------------------------------------------- */
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

/* ----------------------------------------------------
   Razorpay Verify + Save Enrollment
   🔥 UPDATED: Internship Added
---------------------------------------------------- */
app.post("/api/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      mobile,
      course,
      groupId,
      language,
      internship,  // <---- NEW FIELD
      amount,
    } = req.body;

    // Verify Signature
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expected !== razorpay_signature)
      return res.status(400).json({ success: false, message: "Invalid payment signature" });

    const timestamp = new Date().toLocaleString();

    const row = {
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Mobile: mobile,
      Course: course,
      Language: language,
      Internship: internship || "No",   // <-- STORED HERE
      PaymentId: razorpay_payment_id,
      Amount: amount,
      Status: "SUCCESS",
    };

    await appendToSheet("enrollments", row, [
      "Timestamp","Name","Email","Mobile","Course","Language","Internship","PaymentId","Amount","Status"
    ]);

    const whatsapp = getWhatsAppInviteMessage(name, groupId);

    res.json({ success: true, whatsapp_invite: whatsapp });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   HEALTH CHECK
---------------------------------------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* ----------------------------------------------------
   START SERVER
---------------------------------------------------- */
app.listen(port, () => {
  console.log(`🚀 Backend running on port ${port}`);
});
