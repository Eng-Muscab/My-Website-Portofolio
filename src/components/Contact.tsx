"use client";

import { FormEvent, useState } from "react";
import { Github, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useToast } from "@/components/providers/ToastProvider";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function Contact() {
  const locale = useLocale() as Locale;
  const tSection = useTranslations("sections.contact");
  const tForm = useTranslations("contact.form");
  const tValidation = useTranslations("contact.form.validation");
  const tQuick = useTranslations("contact.quick");
  const { showToast } = useToast();

  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(nextForm: ContactFormState): ContactFormErrors {
    const nextErrors: ContactFormErrors = {};

    if (!nextForm.name.trim()) nextErrors.name = tValidation("required");
    if (!nextForm.email.trim()) {
      nextErrors.email = tValidation("required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextForm.email)) {
      nextErrors.email = tValidation("email");
    }
    if (!nextForm.subject.trim()) nextErrors.subject = tValidation("required");
    if (!nextForm.message.trim()) {
      nextErrors.message = tValidation("required");
    } else if (nextForm.message.trim().length < 10) {
      nextErrors.message = tValidation("messageMin");
    }

    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(initialFormState);
      setErrors({});
      showToast(tForm("success"), "success");
    } catch {
      showToast(tForm("error"), "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactCards = [
    {
      key: "email",
      icon: Mail,
      label: tQuick("email"),
      value: profile.links.email,
      href: `mailto:${profile.links.email}`
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: tQuick("whatsapp"),
      value: profile.links.whatsapp,
      href: getWhatsAppUrl(profile.links.whatsapp)
    },
    {
      key: "github",
      icon: Github,
      label: "GitHub",
      value: "Eng-Muscab",
      href: profile.links.github
    },
    {
      key: "location",
      icon: MapPin,
      label: tQuick("location"),
      value: pickLocaleText(profile.location, locale)
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSection("eyebrow")} title={tSection("title")} description={tSection("description")} />
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-4">
              <div className="surface-card surface-card-hover relative overflow-hidden p-5">
                <div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {locale === "so" ? "La Xiriir" : "Work With Me"}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{pickLocaleText(profile.tagline, locale)}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <Reveal key={card.key} delay={index * 0.03}>
                      <div className="surface-card surface-card-hover flex h-full items-start gap-3 p-4">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted">
                          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</p>
                          {card.href ? (
                            <a
                              href={card.href}
                              target={card.key === "whatsapp" || card.key === "github" ? "_blank" : undefined}
                              rel={card.key === "whatsapp" || card.key === "github" ? "noreferrer" : undefined}
                              className="mt-1 block break-all text-sm font-medium text-foreground hover:text-primary"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm font-medium text-foreground">{card.value}</p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={onSubmit} noValidate className="surface-card relative overflow-hidden p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-cyan-400/80 to-accent/80" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 bottom-10 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />

              <div className="relative mb-4">
                <p className="text-sm font-semibold text-foreground">{locale === "so" ? "Aan wada hadalno project-kaaga" : "Let's talk about your project"}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {locale === "so"
                    ? "Buuxi foomka hoose. Waxaan ka jawaabi doonaa qorshe iyo tallaabooyin cad."
                    : "Fill the form below. I will respond with a practical plan and next steps."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="contact-name"
                  label={tForm("name")}
                  placeholder={tForm("placeholders.name")}
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                />
                <FormField
                  id="contact-email"
                  type="email"
                  label={tForm("email")}
                  placeholder={tForm("placeholders.email")}
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                />
              </div>

              <div className="mt-4">
                <FormField
                  id="contact-subject"
                  label={tForm("subject")}
                  placeholder={tForm("placeholders.subject")}
                  value={form.subject}
                  error={errors.subject}
                  onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
                />
              </div>

              <div className="mt-4">
                <FormField
                  id="contact-message"
                  label={tForm("message")}
                  placeholder={tForm("placeholders.message")}
                  value={form.message}
                  error={errors.message}
                  multiline
                  onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
                />
              </div>

              <div className="relative mt-5 flex flex-col gap-3 rounded-2xl border border-border/80 bg-muted/30 p-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-muted-foreground">{pickLocaleText(profile.cta, locale)}</p>
                <Button type="submit" disabled={isSubmitting} size="lg" className="min-w-40 shadow-sm hover:shadow-md">
                  {isSubmitting ? tForm("sending") : tForm("submit")}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  multiline = false
}: {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  multiline?: boolean;
}) {
  const baseClassName = cn(
    "w-full rounded-xl border bg-background/80 px-3 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70",
    "focus:border-primary focus:shadow-sm",
    "hover:border-primary/20",
    error ? "border-rose-400" : "border-border"
  );

  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {multiline ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(baseClassName, "min-h-[130px] py-2.5")}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(baseClassName, "h-11")}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-rose-500">
          {error}
        </p>
      ) : null}
    </label>
  );
}
