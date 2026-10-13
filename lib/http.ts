import { NextResponse } from "next/server";

/** Unified success envelope (architecture_and_api.md §1). */
export function ok<T>(data: T, message: string, status = 200) {
  return NextResponse.json({ success: true, data, message }, { status });
}

/** Unified error envelope. */
export function fail(
  message: string,
  errors: unknown[] = [],
  status = 400
) {
  return NextResponse.json({ success: false, message, errors }, { status });
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

/** Human-friendly reference id, e.g. PRL-20261013-7Q4K. */
export function referenceId(prefix = "PRL"): string {
  const d = new Date();
  const ymd =
    d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0");
  const rand = Array.from({ length: 4 }, () =>
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789".charAt(Math.floor(Math.random() * 32))
  ).join("");
  return `${prefix}-${ymd}-${rand}`;
}
