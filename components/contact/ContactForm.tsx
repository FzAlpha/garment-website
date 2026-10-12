"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface State {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
const empty: State = { fullName: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<State>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  function set<K extends keyof State>(k: K, v: State[K]) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (form.fullName.trim().length < 2) e.fullName = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.phone.trim().length < 7) e.phone = "Enter a valid phone number.";
    if (form.subject.trim().length < 3) e.subject = "Add a short subject.";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fullName: form.fullName.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "We couldn't send your message. Please try again.");
      }
      setStatus("ok");
      setMessage("Thanks — your enquiry has been sent. Our team will be in touch shortly.");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {status === "ok" && <div className={`${styles.banner} ${styles.ok}`}>{message}</div>}
      {status === "error" && <div className={`${styles.banner} ${styles.bad}`}>{message}</div>}

      <div className="field">
        <label htmlFor="c-name">Full Name</label>
        <input id="c-name" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" />
        {errors.fullName && <span className={styles.err}>{errors.fullName}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input id="c-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        {errors.email && <span className={styles.err}>{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-phone">Phone</label>
        <input id="c-phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        {errors.phone && <span className={styles.err}>{errors.phone}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-subject">Subject</label>
        <input id="c-subject" value={form.subject} onChange={(e) => set("subject", e.target.value)} />
        {errors.subject && <span className={styles.err}>{errors.subject}</span>}
      </div>
      <div className={`field ${styles.wide}`}>
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} />
        {errors.message && <span className={styles.err}>{errors.message}</span>}
      </div>
      <div className={styles.wide}>
        <button type="submit" className="btn" disabled={status === "sending"} aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
