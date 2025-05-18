// /api/send.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'contact@mattiadanese.com',
      to: [process.env.TO_EMAIL],
      subject: `New Contact from ${name}`,
      reply_to: email,
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Email failed to send' });
  }
};
