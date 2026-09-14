"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "jane@company.com" },
  { name: "message", label: "What are you building?", textarea: true, placeholder: "Problem, timeline, stack if you know it." },
];

function validate(d) {
  const e = {};
  if (!d.name.trim()) e.name = "Please tell me your name.";
  if (!EMAIL_RE.test(d.email)) e.email = "Enter a valid email so I can reply.";
  if (d.message.trim().length < 10) e.message = "A few more words would help (10+ characters).";
  return e;
}

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [errors, setErrors] = useState({});

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus({ state: "sending", message: "" });
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      form.reset();
      setStatus({ state: "sent", message: "Thanks. I reply within one business day." });
    } catch (err) {
      setStatus({ state: "error", message: err?.text || "Something went wrong. Email me directly instead." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {fields.map((f) => {
        const { name, label, textarea, ...props } = f;
        const Tag = textarea ? "textarea" : "input";
        return (
          <div key={name}>
            <label htmlFor={name} className="mb-1.5 block text-sm text-muted">
              {label}
            </label>
            <Tag id={name} name={name} rows={textarea ? 5 : undefined} maxLength={textarea ? 1000 : 100} className={`field ${textarea ? "resize-y" : ""}`} aria-invalid={!!errors[name]} {...props} />
            {errors[name] && (
              <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors[name]}
              </p>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send message"}
          <HiArrowRight size={16} aria-hidden />
        </button>
        {status.message && (
          <p role="status" className={`text-sm ${status.state === "error" ? "text-red-600 dark:text-red-400" : "text-accent"}`}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
