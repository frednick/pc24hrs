import { NextResponse } from "next/server";

function clean(value, max = 1000) {
  return String(value ?? "").trim().replace(/[<>]/g, "").slice(0, max);
}

export async function POST(request) {
  try {
    const form = await request.formData();
    const name = clean(form.get("name"), 120);
    const business = clean(form.get("business"), 160);
    const email = clean(form.get("email"), 240);
    const phone = clean(form.get("phone"), 80);
    const message = clean(form.get("message"), 2000);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Please provide your name, a valid email, and a description of the problem." }, { status: 400 });
    }

    console.log("PC24HRS_USA_LEAD", JSON.stringify({ name, business, email, phone, message, receivedAt: new Date().toISOString() }));

    return new Response("Thanks! Your request has been received. PC24hrs will review it and get back to you.", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ ok: false, message: "We could not receive your request. Please try again." }, { status: 500 });
  }
}
