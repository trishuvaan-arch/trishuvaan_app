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
   ✅ CORS Configuration (Allow domain + IP)
---------------------------------------------------- */
const allowedOrigins = [
  "http://68.178.160.4",
  "https://68.178.160.4",
  "https://trishuvaan.com",
  "https://www.trishuvaan.com",
  "http://localhost:5173" // optional for local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow REST tools (curl/Postman) without Origin header
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
   File Upload Configuration (Multer)
---------------------------------------------------- */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

/* ----------------------------------------------------
   Razorpay Setup
---------------------------------------------------- */
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ----------------------------------------------------
   Google Sheets Helper
---------------------------------------------------- */
async function appendToSheet(sheetName, valuesObject, headerValues = []) {
  try {
    console.log(`🟢 Writing to sheet: ${sheetName}`);
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
      console.log(`🆕 Creating new sheet '${sheetName}'`);
      sheet = await doc.addSheet({ title: sheetName, headerValues });
    } else {
      try {
        await sheet.loadHeaderRow();
      } catch {
        console.warn(`⚠️ No headers found in '${sheetName}', setting new ones...`);
        await sheet.setHeaderRow(headerValues);
      }
    }

    await sheet.addRow(valuesObject);
    console.log(`✅ Row added successfully to Google Sheet [${sheetName}]`);
    return true;
  } catch (err) {
    console.error(`❌ appendToSheet error (${sheetName}):`, err);
    return false;
  }
}

/* ----------------------------------------------------
   Google Drive Helper — Upload Resume
---------------------------------------------------- */
async function uploadToDrive(file) {
  try {
    console.log("📤 Uploading file to Google Drive:", file.originalname);

    if (!process.env.GOOGLE_DRIVE_FOLDER_ID)
      throw new Error("GOOGLE_DRIVE_FOLDER_ID not found in .env");

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

    console.log("✅ File uploaded successfully:", data.webViewLink);
    return data.webViewLink;
  } catch (err) {
    console.error("❌ uploadToDrive error:", err.response?.data || err.message);
    return "Upload Failed";
  }
}

/* ----------------------------------------------------
   WhatsApp Invite Helper
---------------------------------------------------- */
function getWhatsAppInviteMessage(name, groupId) {
  let inviteLink;
  switch (groupId) {
    case "AI": inviteLink = process.env.WHATSAPP_AI_COURSE; break;
    case "POWERBI": inviteLink = process.env.WHATSAPP_POWERBI; break;
    case "SQL": inviteLink = process.env.WHATSAPP_SQL; break;
    case "PYTHON": inviteLink = process.env.WHATSAPP_PYTHON; break;
    case "EXCEL": inviteLink = process.env.WHATSAPP_EXCEL; break;
    case "DATAVERSE": inviteLink = process.env.WHATSAPP_DATAVERSE; break;
    case "AI_FUSION": inviteLink = process.env.WHATSAPP_AI_FUSION; break;
    default: inviteLink = process.env.WHATSAPP_AI_COURSE;
  }

  return `👋 Hi ${name || "Learner"}!

Thank you for joining our community.  
You can now join your WhatsApp Group using this link:  
${inviteLink}

Stay connected and keep learning! 🚀`;
}

/* ----------------------------------------------------
   💼 API: Internship / Job Application
---------------------------------------------------- */
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name = "", email = "", mobile = "", position = "" } = req.body;
    const resume = req.file;

    let resumeLink = "No Resume Uploaded";
    if (resume) resumeLink = await uploadToDrive(resume);

    const timestamp = new Date().toLocaleString();
    const sheetRow = {
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Mobile: mobile,
      Position: position,
      Resume: resumeLink,
      Status: resumeLink === "Upload Failed" ? "UPLOAD FAILED" : "RECEIVED",
    };

    const success = await appendToSheet("applications", sheetRow, [
      "Timestamp", "Name", "Email", "Mobile", "Position", "Resume", "Status",
    ]);

    if (!success) throw new Error("Failed to write to applications sheet");

    const whatsappMessage = getWhatsAppInviteMessage(name, "AI");

    res.json({
      success: true,
      message: "Application submitted successfully!",
      whatsapp_invite: whatsappMessage,
    });
  } catch (err) {
    console.error("🔥 /api/apply error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   📩 API: Contact Form
---------------------------------------------------- */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const timestamp = new Date().toLocaleString();
    const row = { Timestamp: timestamp, Name: name, Email: email, Message: message, Status: "NEW" };

    const success = await appendToSheet("contacts", row, [
      "Timestamp", "Name", "Email", "Message", "Status",
    ]);

    if (!success) throw new Error("Failed to write to contacts sheet");

    res.json({ success: true, message: "Message received successfully" });
  } catch (err) {
    console.error("❌ /api/contact error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   🚀 Razorpay: Create Order
---------------------------------------------------- */
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount) return res.status(400).json({ success: false, message: "Amount required" });

    const options = {
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    console.log("✅ Razorpay order created:", order.id);
    res.json({ success: true, order });
  } catch (err) {
    console.error("❌ create-order error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   ✅ Razorpay: Verify Payment + Save + WhatsApp Link
---------------------------------------------------- */
app.post("/api/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id, razorpay_payment_id, razorpay_signature,
      name, email, mobile, course, groupId, language, amount,
    } = req.body;

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expected !== razorpay_signature)
      return res.status(400).json({ success: false, message: "Invalid payment signature" });

    const timestamp = new Date().toLocaleString();
    const row = {
      Timestamp: timestamp, Name: name, Email: email, Mobile: mobile,
      Course: course, Language: language, PaymentId: razorpay_payment_id,
      Amount: amount, Status: "SUCCESS (Auto Captured)",
    };

    const success = await appendToSheet("enrollments", row, [
      "Timestamp","Name","Email","Mobile","Course","Language","PaymentId","Amount","Status",
    ]);

    if (!success) throw new Error("Failed to append to enrollments sheet");

    const whatsappMessage = getWhatsAppInviteMessage(name, groupId || "AI");

    res.json({
      success: true,
      message: "Payment verified and recorded",
      whatsapp_invite: whatsappMessage,
    });
  } catch (err) {
    console.error("❌ verify-payment error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ----------------------------------------------------
   Health Check
---------------------------------------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Trishuvaan API is running" });
});

/* ----------------------------------------------------
   Start Server
---------------------------------------------------- */
app.listen(port, () => {
  console.log(`🚀 Trishuvaan backend running on port ${port}`);
});
