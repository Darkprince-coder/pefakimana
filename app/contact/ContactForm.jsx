"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <CheckCircle2 size={40} strokeWidth={1.6} />
        <h3>Thank you, {form.name.split(" ")[0] || "friend"}</h3>
        <p>
          Your message has been received. Someone from our team will get
          back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Wanjiku"
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+254 7XX XXX XXX"
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="Prayer request, visit, general question..."
          />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
        />
      </label>

      <button type="submit" className={styles.submit}>
        Send Message
        <Send size={16} strokeWidth={2} />
      </button>
    </form>
  );
}
