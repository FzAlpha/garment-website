import { QuoteRequestSchema, formatZodErrors } from "@/lib/validation";
import { sendQuoteEmails, isEmailConfigured } from "@/lib/email";
import { ok, fail, getClientIp, referenceId } from "@/lib/http";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  // Spam guard: max 5 submissions per IP per 10 minutes.
  const limit = rateLimit(`quotes:${getClientIp(request)}`);
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

  const parsed = QuoteRequestSchema.safeParse(body);
  if (!parsed.success) {
    return fail("Validation failed.", formatZodErrors(parsed.error), 400);
  }

  const ref = referenceId();

  try {
    await sendQuoteEmails(parsed.data, ref);
  } catch (err) {
    console.error("[quotes] email dispatch failed:", err);
    if (isEmailConfigured()) {
      return fail(
        "We couldn't send your request right now. Please try again or email us directly.",
        [],
        502
      );
    }
  }

  return ok({ referenceId: ref }, "Quote request submitted successfully.");
}
