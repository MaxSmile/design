import crypto from "crypto";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_EMAIL_FROM = process.env.BREVO_EMAIL_FROM || "team@2ul.top";
const BREVO_EMAIL_TO = process.env.BREVO_EMAIL_TO || "dev@vasilkoff.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  if (!BREVO_API_KEY) {
    return res.status(500).json({ success: false, message: "Missing BREVO_API_KEY" });
  }

  const { name, email, message, capToken, sourceMetadata } = req.body || {};

  if (!name || !email || !message || !capToken) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const capCheck = await fetch("https://vasilkoff.info/cap/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: capToken }),
    });

    const capRawBody = await capCheck.text().catch(() => "");

    if (!capCheck.ok || capRawBody === "") {
      console.error("CAPTCHA verification failed:", {
        status: capCheck.status,
        statusText: capCheck.statusText,
        body: capRawBody,
      });
      return res.status(400).json({ success: false, message: "Failed to send message." });
    }

    let capData = {};
    try {
      capData = JSON.parse(capRawBody);
    } catch (error) {
      console.error("CAPTCHA verification response was not valid JSON:", capRawBody);
      return res.status(400).json({ success: false, message: "Failed to send message." });
    }

    if (!capData?.success) {
      console.error("CAPTCHA verification rejected:", capData);
      return res.status(400).json({ success: false, message: "Failed to send message." });
    }

    const emailHtml = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
      <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
      <p><strong>Source:</strong> ${escapeHtml(String(sourceMetadata?.sourceSite || "design.vasilkoff.com"))}</p>
      <p><strong>URL:</strong> ${escapeHtml(String(sourceMetadata?.sourceUrl || ""))}</p>
      <p><strong>Referrer:</strong> ${escapeHtml(String(sourceMetadata?.referrer || ""))}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(String(message)).replace(/\n/g, "<br />")}</div>
    `;

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Iryna Vasylkova Portfolio", email: BREVO_EMAIL_FROM },
        to: [{ email: BREVO_EMAIL_TO, name: "Iryna Vasylkova" }],
        replyTo: { email: String(email), name: String(name) },
        subject: `New contact form message from ${name}`,
        htmlContent: emailHtml,
      }),
    });

    const brevoRawBody = await brevoResponse.text().catch(() => "");

    if (!brevoResponse.ok) {
      const brevoDebug = {
        status: brevoResponse.status,
        statusText: brevoResponse.statusText,
        rawBody: brevoRawBody,
      };

      console.error("BREVO email send failed:", brevoDebug);

      return res.status(502).json({
        success: false,
        message: "Failed to send message.",
        debug: brevoDebug,
      });
    }

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact API send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
      debug: { error: String(error) },
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
