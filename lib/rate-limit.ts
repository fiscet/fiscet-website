// Fixed-window counter kept in memory. It is per server instance, so it is a
// brake against casual abuse, not a hard guarantee: pair it with a Vercel
// Firewall rate-limit rule if the endpoint is ever attacked in earnest.
const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();

  for (const [k, entry] of hits) {
    if (entry.resetAt <= now) hits.delete(k);
  }

  const entry = hits.get(key);
  if (!entry) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
}

export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return (
    forwarded?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}
