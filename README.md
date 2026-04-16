# InterviewIQ

InterviewIQ is an AI-powered mock interview platform that helps users practice role-based interviews with real-time feedback, resume analysis, scoring, and performance analytics.

## Features

- Google OAuth login
- Resume PDF analysis
- AI-generated interview questions
- Voice-to-text interview flow
- AI answer evaluation and feedback
- Interview history and reports
- PDF report download
- Credit-based interview access
- Razorpay payment integration
- HR and Technical interview modes

## Tech Stack

### Frontend
- React
- Vite
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- Recharts
- Web Speech API

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- OpenRouter AI
- Razorpay
- PDF.js

## Project Structure

```text
InterviewIQ/
├── client/
└── server/
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Firebase project
- OpenRouter API key
- Razorpay keys

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

## Environment Variables

### Client

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Server

```env
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## Main User Flow

1. Sign in with Google
2. Upload resume or continue manually
3. Choose role, experience, and interview mode
4. Generate interview questions
5. Answer questions using mic or keyboard
6. View score, feedback, and report
7. Purchase more credits if needed

## API Overview

### Auth
- POST /api/auth/google
- GET /api/auth/logout

### User
- GET /api/user/current-user

### Interview
- POST /api/interview/resume
- POST /api/interview/generate-questions
- POST /api/interview/submit-answer
- POST /api/interview/finish
- GET /api/interview/get-interview
- GET /api/interview/report/:id

### Payment
- POST /api/payment/order
- POST /api/payment/verify

## Notes

- The app uses cookie-based JWT authentication.
- Resume analysis and feedback generation are handled by OpenRouter AI.
- Interview scoring is stored in MongoDB and shown in the report dashboard.

## License

This project is for internship / educational use.
