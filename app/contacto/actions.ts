"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const TIPO_LABELS: Record<string, string> = {
  capital: "💰 Inversión — FLIP Capital",
  obras: "🏗️ Solicitud de obra",
  constech: "⚙️ Constech — Early Access",
  perforaciones: "🔩 Perforaciones",
  general: "📩 Consulta general",
}

export type ContactState = {
  success: boolean
  error?: string
} | null

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim()
  const email = (formData.get("email") as string | null)?.trim()
  const company = (formData.get("company") as string | null)?.trim() ?? ""
  const tipo = (formData.get("tipo") as string | null) ?? "general"
  const message = (formData.get("message") as string | null)?.trim()

  if (!name || !email || !message) {
    return { success: false, error: "Nombre, email y mensaje son obligatorios." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "El email no parece válido." }
  }

  const label = TIPO_LABELS[tipo] ?? TIPO_LABELS.general

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Contacto FLIP Group</title>
</head>
<body style="margin:0;padding:0;background:#070A0F;font-family:'Segoe UI',system-ui,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#0D1320;border:1px solid #1E2E48;border-radius:16px;overflow:hidden;">

    <!-- Header -->
    <div style="padding:24px 32px;border-bottom:1px solid #1E2E48;background:#131D2E;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:32px;height:32px;border:1px solid #E86A1A;border-radius:4px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#E86A1A;font-weight:700;font-size:14px;">F</span>
        </div>
        <div>
          <div style="color:#EDF2F7;font-size:13px;font-weight:700;letter-spacing:0.15em;">FLIP GROUP</div>
          <div style="color:#455570;font-size:10px;letter-spacing:0.3em;">NUEVO CONTACTO</div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <div style="margin-bottom:24px;">
        <span style="display:inline-block;padding:4px 12px;background:rgba(232,106,26,0.12);border:1px solid rgba(232,106,26,0.25);border-radius:6px;color:#E86A1A;font-size:12px;font-weight:600;">
          ${label}
        </span>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#455570;font-size:12px;font-family:monospace;width:120px;">NOMBRE</td>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#EDF2F7;font-size:14px;font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#455570;font-size:12px;font-family:monospace;">EMAIL</td>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#EDF2F7;font-size:14px;">${email}</td>
        </tr>
        ${
          company
            ? `<tr>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#455570;font-size:12px;font-family:monospace;">EMPRESA</td>
          <td style="padding:12px 0;border-bottom:1px solid #1E2E48;color:#EDF2F7;font-size:14px;">${company}</td>
        </tr>`
            : ""
        }
      </table>

      <div style="margin-bottom:24px;">
        <div style="color:#455570;font-size:12px;font-family:monospace;margin-bottom:8px;">MENSAJE</div>
        <div style="background:#0A0F18;border:1px solid #1E2E48;border-radius:8px;padding:16px;color:#8896A8;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>

      <a href="mailto:${email}?subject=Re: Tu consulta en FLIP Group"
         style="display:inline-block;padding:12px 24px;background:#E86A1A;color:#070A0F;font-size:13px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.05em;">
        Responder a ${name} →
      </a>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;border-top:1px solid #1E2E48;text-align:center;">
      <p style="color:#455570;font-size:11px;margin:0;font-family:monospace;">
        flipgroup.com.ar · contacto@flipgroup.com.ar
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()

  try {
    await resend.emails.send({
      // IMPORTANTE: Verificar flipgroup.com.ar en Resend dashboard
      // Mientras tanto usar: onboarding@resend.dev
      from: "FLIP Group <noreply@flipgroup.com.ar>",
      to: ["contacto@flipgroup.com.ar"],
      replyTo: email,
      subject: `${label} — ${name}`,
      html,
    })

    return { success: true }
  } catch (err) {
    console.error("[Resend error]", err)
    return { success: false, error: "Error enviando el mensaje. Intentá de nuevo o escribinos directamente." }
  }
}
