"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().trim().min(1, "Message is required."),
});

type ContactInput = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, values, { publicKey });
        setStatus("Message sent successfully.");
      } else {
        const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
        const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`);
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${subject}&body=${body}`, "_blank");
        setStatus("Opening your email client.");
      }
      reset();
    } catch {
      setStatus("Unable to send right now. Please use the email link below.");
    }
  }

  return (
    <section id="contact" className="bg-[var(--teal)] text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow text-white/60">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Have a product, platform, or AI problem worth solving?</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72">Tell me what you are building, where the complexity sits, and what a successful result looks like.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--ink)]"><Mail size={15} /> Email</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 py-2.5 text-sm font-semibold text-white"><Linkedin size={15} /> LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 py-2.5 text-sm font-semibold text-white"><Github size={15} /> GitHub</a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[32px] bg-[var(--cream)] p-6 text-[var(--ink)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className="text-sm font-semibold">Name</span>
              <input {...register("name")} className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none" />
              {errors.name ? <span className="mt-1 block text-xs text-[var(--coral)]">{errors.name.message}</span> : null}
            </label>
            <label>
              <span className="text-sm font-semibold">Email</span>
              <input type="email" {...register("email")} className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none" />
              {errors.email ? <span className="mt-1 block text-xs text-[var(--coral)]">{errors.email.message}</span> : null}
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold">Message</span>
            <textarea {...register("message")} rows={6} className="mt-2 w-full resize-none rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none" />
            {errors.message ? <span className="mt-1 block text-xs text-[var(--coral)]">{errors.message.message}</span> : null}
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit" disabled={isSubmitting} variant="coral"><Send size={15} /> {isSubmitting ? "Sending..." : "Send message"}</Button>
            {status ? <p role="status" className="text-sm text-[var(--ink-soft)]">{status}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
