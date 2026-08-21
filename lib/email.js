import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!resend) {
    console.warn("Resend API Key missing. Skipping email.");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Makhtar Portfolio <contact@makhtar.sn>',
      to: ['contact@makhtar.sn'], // Admin email
      reply_to: email,
      subject: `Nouveau message de ${name} : ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h1 style="color: #16a34a;">Nouveau Message Portfolio</h1>
          <p><strong>De :</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
          <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">Makhtar Portfolio - Développeur Full Stack & Designer</p>
        </div>
      `,
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
