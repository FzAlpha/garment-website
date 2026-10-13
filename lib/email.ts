import nodemailer from "nodemailer";
import { company } from "./company";
import { colors } from "./tokens";
import type { QuoteRequest, ContactEnquiry } from "./validation";

const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = "465",
  SMTP_USER,
  SMTP_PASS,
  NOTIFICATION_RECEIVER_EMAIL,
} = process.env;

export function isEmailConfigured(): boolean {
  return Boolean(SMTP_USER && SMTP_PASS);
}

const salesInbox = NOTIFICATION_RECEIVER_EMAIL || SMTP_USER || "";

let transporter: nodemailer.Transporter | null = null;
function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    const port = Number(SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return transporter;
}

/** Send one message; throws on failure (callers decide how to handle). */
async function dispatch(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  await getTransporter().sendMail({
    from: `"${company.name}" <${SMTP_USER}>`,
    ...opts,
  });
}

/* ── Branded HTML shell ──────────────────────────────────────────────────── */

function shell(title: string, inner: string): string {
  return `<!doctype html><html><body style="margin:0;background:${colors.ivory};font-family:Arial,Helvetica,sans-serif;color:${colors.ink};">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:${colors.maroonDeep};border-radius:14px 14px 0 0;padding:22px 28px;">
      <div style="color:${colors.ivory};font-size:22px;font-weight:700;letter-spacing:.04em;">${company.name}</div>
      <div style="color:${colors.goldSoft};font-size:12px;letter-spacing:.18em;text-transform:uppercase;margin-top:4px;">${company.tagline}</div>
    </div>
    <div style="background:#ffffff;border:1px solid #e2d3b8;border-top:0;border-radius:0 0 14px 14px;padding:28px;">
      <h1 style="margin:0 0 16px;font-size:20px;color:${colors.maroon};">${title}</h1>
      ${inner}
    </div>
    <div style="text-align:center;color:${colors.muted};font-size:12px;padding:18px 8px;line-height:1.6;">
      ${company.legalName}<br/>
      ${company.address.line1}, ${company.address.line2}, ${company.address.country}<br/>
      ${company.phone} · ${company.email}
    </div>
  </div>
</body></html>`;
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px 8px 0;color:${colors.muted};font-size:13px;vertical-align:top;white-space:nowrap;">${label}</td>
    <td style="padding:8px 0;color:${colors.ink};font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

function table(rows: string): string {
  return `<table style="width:100%;border-collapse:collapse;border-top:1px solid #e2d3b8;margin:8px 0;">${rows}</table>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const categoryLabels: Record<string, string> = {
  "security-uniforms": "Security Uniforms",
  "premium-formal": "Premium Formal",
  "premium-tshirts": "Premium T-Shirts",
  "custom-manufacturing": "Custom / Contract Manufacturing",
};

/* ── Quote emails ────────────────────────────────────────────────────────── */

export async function sendQuoteEmails(data: QuoteRequest, ref: string) {
  if (!isEmailConfigured()) {
    console.warn(
      `[email] SMTP not configured — quote ${ref} accepted but no email sent. Set SMTP_USER/SMTP_PASS.`
    );
    return;
  }

  const attachments = (data.attachmentUrls ?? [])
    .map(
      (u, i) =>
        `<a href="${u}" style="color:${colors.maroon};">Attachment ${i + 1}</a>`
    )
    .join(" &nbsp;·&nbsp; ");

  const details = table(
    row("Reference", ref) +
      row("Name", data.fullName) +
      row("Company", data.companyName) +
      row("Email", data.email) +
      row("Phone", data.phone) +
      row("Location", data.country) +
      row("Category", categoryLabels[data.productCategory] ?? data.productCategory) +
      row("Product SKU", data.productSku) +
      row("Quantity", `${data.estimatedQuantity} pcs`) +
      row("Target date", data.targetDate) +
      row("Fabric", data.fabricSpecifications) +
      row("Notes", data.customizationNotes) +
      (attachments
        ? `<tr><td style="padding:8px 12px 8px 0;color:${colors.muted};font-size:13px;">Attachments</td><td style="padding:8px 0;font-size:14px;">${attachments}</td></tr>`
        : "")
  );

  // 1) Customer confirmation
  await dispatch({
    to: data.email,
    subject: `We've received your quote request — ${ref}`,
    html: shell(
      "Thank you — your quote request is in.",
      `<p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
        Hi ${escapeHtml(data.fullName.split(" ")[0] || "there")}, thanks for reaching out to ${company.name}.
        Our team is reviewing your requirements and will respond with a tailored quotation shortly.
      </p>
      <p style="margin:0 0 6px;font-size:14px;">Your reference number is
        <strong style="color:${colors.maroon};">${ref}</strong>.</p>
      <h2 style="font-size:15px;color:${colors.ink};margin:20px 0 4px;">Summary</h2>
      ${details}`
    ),
  });

  // 2) Sales-team notification
  if (salesInbox) {
    await dispatch({
      to: salesInbox,
      replyTo: data.email,
      subject: `New quote request — ${data.companyName} (${ref})`,
      html: shell(
        "New B2B quote request",
        `<p style="margin:0 0 14px;font-size:14px;">A new quotation request was submitted via the website.</p>
        ${details}`
      ),
    });
  }
}

/* ── Enquiry emails ──────────────────────────────────────────────────────── */

export async function sendEnquiryEmails(data: ContactEnquiry, ref: string) {
  if (!isEmailConfigured()) {
    console.warn(
      `[email] SMTP not configured — enquiry ${ref} accepted but no email sent. Set SMTP_USER/SMTP_PASS.`
    );
    return;
  }

  const details = table(
    row("Reference", ref) +
      row("Name", data.fullName) +
      row("Email", data.email) +
      row("Phone", data.phone) +
      row("Subject", data.subject) +
      row("Message", data.message)
  );

  // Sales-team notification
  if (salesInbox) {
    await dispatch({
      to: salesInbox,
      replyTo: data.email,
      subject: `New enquiry: ${data.subject} (${ref})`,
      html: shell("New website enquiry", details),
    });
  }

  // Customer acknowledgement
  await dispatch({
    to: data.email,
    subject: `We've received your message — ${ref}`,
    html: shell(
      "Thanks for getting in touch.",
      `<p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
        Hi ${escapeHtml(data.fullName.split(" ")[0] || "there")}, we've received your enquiry and our team will
        reply within one business day. Your reference is
        <strong style="color:${colors.maroon};">${ref}</strong>.
      </p>
      ${details}`
    ),
  });
}
