# Trishuvaan - AI & EdTech Platform

A modern, full-featured website for Trishuvaan, an Advanced AI Software & EdTech organization.

## Features

- **Multi-page React Application** with smooth animations
- **AI-themed Design** with gradient effects and glassmorphism
- **Course Management** with detailed course pages
- **Razorpay Payment Integration** for course enrollments
- **Career Portal** with job and internship listings
- **Contact Form** with email notifications
- **Google Sheets Integration** for data storage
- **Responsive Design** for all device sizes

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- Razorpay for payments
- Nodemailer for emails
- Google Sheets API for data storage
- Multer for file uploads

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Google Cloud Service Account (for Sheets API)
- Razorpay Account
- SMTP Email Account

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Update the `.env` file with your credentials:

   ```env
   # Razorpay
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

   # Google Sheets
   GOOGLE_SHEET_ID=your_google_sheet_id
   GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}

   # Email
   SMTP_USER=support@trishuvaan.com
   SMTP_PASS=your_smtp_password

   # Server
   PORT=3001

   # WhatsApp Community Links (one for each course)
   WHATSAPP_AI_COURSE=https://chat.whatsapp.com/your_ai_course_group
   WHATSAPP_POWERBI=https://chat.whatsapp.com/your_powerbi_group
   WHATSAPP_SQL=https://chat.whatsapp.com/your_sql_group
   WHATSAPP_PYTHON=https://chat.whatsapp.com/your_python_group
   WHATSAPP_EXCEL=https://chat.whatsapp.com/your_excel_group
   WHATSAPP_DATAVERSE=https://chat.whatsapp.com/your_dataverse_group
   WHATSAPP_AI_FUSION=https://chat.whatsapp.com/your_ai_fusion_group
   ```

3. **WhatsApp Community Setup**

   For each course, create a WhatsApp group and get the invite link:
   - Open WhatsApp > Create Group
   - Add group description and course name
   - Go to Group Info > Invite via Link
   - Copy the link and add to `.env` file

4. **Google Sheets Setup**

   Create a Google Sheet with the following tabs:
   - `enrollments` - For course enrollments
   - `contacts` - For contact form submissions
   - `applications` - For job/internship applications

   Share the sheet with your service account email.

4. **Razorpay Setup**

   - Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Get your API keys from Settings > API Keys
   - Use test keys for development

### Running the Application

#### Development Mode

1. **Start Frontend (Port 5173)**
   ```bash
   npm run dev
   ```

2. **Start Backend (Port 3001)**
   ```bash
   npm run server
   ```

#### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
trishuvaan/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── GlowButton.tsx
│   │   └── CourseCard.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── EdTech.tsx
│   │   ├── CourseDetail.tsx
│   │   ├── Careers.tsx
│   │   ├── CareerDetail.tsx
│   │   ├── InternshipDetail.tsx
│   │   └── Contact.tsx
│   ├── data/            # Static data
│   │   ├── courses.ts
│   │   └── careers.ts
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── server/
│   └── index.js         # Express backend
├── public/              # Static assets
└── .env                 # Environment variables
```

## API Endpoints

### POST /api/enroll
Handles course enrollments with Razorpay payment

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "mobile": "string",
  "course": "string",
  "language": "string",
  "paymentId": "string",
  "amount": "string"
}
```

### POST /api/contact
Handles contact form submissions

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### POST /api/apply
Handles job/internship applications with resume upload

**Form Data:**
- `name`: string
- `email`: string
- `mobile`: string
- `position`: string
- `resume`: file (PDF/DOC/DOCX, max 5MB)

## Features in Detail

### Auto-Scrolling Hero Section
The home page features an auto-scrolling background with AI-themed images that change every 2 seconds.

### Course Enrollment Flow
1. User views course details
2. Clicks "Enroll Now"
3. Fills enrollment form
4. Razorpay payment modal opens
5. Payment confirmation
6. Data saved to Google Sheets
7. Confirmation email sent

### Career Applications
- Job listings with detailed descriptions
- Internship opportunities
- Resume upload functionality
- Email notifications to admin and applicant

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Smooth animations on all screen sizes

## Customization

### Adding New Courses
Edit `src/data/courses.ts` and add a new course object to the `courses` array.

### Adding Jobs/Internships
Edit `src/data/careers.ts` and add new entries to `jobs` or `internships` arrays.

### Changing Colors
Update the gradient classes in `src/index.css` and Tailwind config.

## Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend Deployment (Railway/Heroku/VPS)
```bash
# Set environment variables
# Deploy server/index.js
```

## Support

For issues or questions:
- Email: support@trishuvaan.com
- Website: www.trishuvaan.com

## License

© 2025 Trishuvaan. All rights reserved.
