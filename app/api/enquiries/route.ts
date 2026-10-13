import { ContactEnquirySchema, formatZodErrors } from "@/lib/validation";
import { sendEnquiryEmails, isEmailConfigured } from "@/lib/email";
import { ok, fail, getClientIp, referenceId } from "@/lib/http";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const limit = rateLimit(`enquiries:${getClientIp(request)}`);
  if (!limit.allowed) {
    return fail(
      "Too many requests. Please try again in a few minutes.",
      [],
      429
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid JSON body.", [], 400);
  }

  const parsed = ContactEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return fail("Validation failed.", formatZodErrors(parsed.error), 400);
  }

  const ref = referenceId("PRL-ENQ");

  try {
    await sendEnquiryEmails(parsed.data, ref);
  } catch (err) {
    console.error("[enquiries] email dispatch failed:", err);
    if (isEmailConfigured()) {
      return fail(
        "We couldn't send your message right now. Please try again or email us directly.",
        [],
        502
      );
    }
  }

  return ok({ referenceId: ref }, "Enquiry sent successfully.");
}
