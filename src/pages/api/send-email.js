
// src/pages/api/send-email.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Neo IT Services', email: process.env.SENDER_EMAIL || 'contact@neoitservices.pro' },
        to: [{ email: process.env.RECIPIENT_EMAIL || 'contact@neoitservices.pro' }],
        subject: `New contact request from ${name}`,
        htmlContent: `
          <div style="max-width:600px;margin:auto;font-family:Segoe UI,Arial,sans-serif;background:#111;color:#eee;padding:20px;border:1px solid #222;border-radius:8px;">
            <div style="text-align:center;margin-bottom:16px;">
              <img src="https://raw.githubusercontent.com/nicamason90/neo-it-assets/main/neo-it-services-logo.png" style="max-width:120px;height:auto" alt="NEO IT Logo" />
            </div>
            <h2 style="color:#e50914;text-align:center;margin:0 0 12px">📩 New Contact Request</h2>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p><strong>Message:</strong><br/>${String(message).replace(/</g, '&lt;')}</p>
            <hr style="border:none;border-top:1px solid #333;margin:20px 0" />
            <p style="font-size:12px;color:#aaa;text-align:center">— Neo IT Services · Network • Endpoint • Operations —</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error('Brevo error:', t);
      return res.status(422).json({ error: 'Brevo API error', details: t });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
