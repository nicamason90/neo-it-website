
# Neo IT Services — Next.js

Stack:
- Next.js (Pages Router)
- Tailwind CSS
- Framer Motion
- API route `/api/send-email` using Brevo (formerly Sendinblue)
- Simple i18n (ES/EN) via context + JSON
- Floating WhatsApp button

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment variables

Create `.env.local` in the project root:

```
BREVO_API_KEY=your_brevo_api_key_here
SENDER_EMAIL=contact@neoitservices.pro
RECIPIENT_EMAIL=contact@neoitservices.pro
```

## Deploy on Vercel
Just connect this repo to Vercel. Add environment variables in Project Settings.
