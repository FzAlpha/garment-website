/**
 * Simple in-memory IP rate limiter (architecture_and_api.md §4).
 * Sliding window; adequate for spam prevention on a single serverless instance.
 * Note: serverless instances don't share memory, so this is best-effort — a
 * durable store (Upstash/Redis) would be the upgrade if stricter limits matter.
 */

type Hit = { count: number; resetAt: number };

const buckets = new Map<string, Hit>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const hit = buckets.get(key);

  if (!hit || now >= hit.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  if (hit.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((hit.resetAt - now) / 1000),
    };
  }

  hit.count += 1;
  return {
    allowed: true,
    remaining: limit - hit.count,
    retryAfterSeconds: 0,
  };
}
