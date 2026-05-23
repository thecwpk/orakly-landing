import { NextResponse } from "next/server";

/**
 * Lightweight waitlist endpoint for the standalone landing site.
 * Wire WAITLIST_WEBHOOK_URL (e.g. Formspree, Resend audience, Airtable) in Vercel env to forward signups.
 */
export async function POST(req: Request) {
  let body: { email?: string; company?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const company = String(body.company ?? "").trim();
  const source = String(body.source ?? "landing").trim();

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  const webhook = process.env.WAITLIST_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source, subscribedAt: new Date().toISOString() }),
      });
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "Could not save signup." }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ ok: false, error: "Waitlist service unavailable." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
