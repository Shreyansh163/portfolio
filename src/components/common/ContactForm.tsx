"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <Button>{status === "loading" ? "Sending..." : "Send Message"}</Button>

      {status === "success" && (
        <p className="text-sm text-green-400">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
