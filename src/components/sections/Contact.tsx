"use client";

import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const roles = [
    t("contact.availability.roles.devops"),
    t("contact.availability.roles.backend"),
  ];

  const workPreferences = [
    t("contact.availability.workPreferences.onSite"),
    t("contact.availability.workPreferences.remote"),
    t("contact.availability.workPreferences.hybrid"),
  ];

  const contactDetails = [
    {
      icon: Phone,
      label: t("contact.details.phone.label"),
      value: t("contact.details.phone.value"),
      href: `tel:${t("contact.details.phone.value").replaceAll(" ", "")}`,
    },
    {
      icon: Mail,
      label: t("contact.details.email.label"),
      value: t("contact.details.email.value"),
      href: `mailto:${t("contact.details.email.value")}`,
    },
    {
      icon: Send,
      label: t("contact.details.telegram.label"),
      value: t("contact.details.telegram.value"),
      href: t("contact.details.telegram.href"),
    },
    {
      icon: MapPin,
      label: t("contact.details.address.label"),
      value: t("contact.details.address.value"),
    },
  ];

  const submitText = {
    idle: t("contact.form.submit.idle"),
    sending: t("contact.form.submit.sending"),
    sent: t("contact.form.submit.sent"),
    error: t("contact.form.submit.error"),
  }[status];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS integration
      const serviceID = "service_f9qgu4i";
      const templateID = "template_4p9s2bf";
      const publicKey = "sjbBj5W8oH4XRp3mW";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Toch Ratana",
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("EmailJS send failed:", {
          status: response.status,
          message: responseText,
        });
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[var(--site-page-bg)] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[color:var(--site-text)]">
            {t("contact.title")}
          </h1>
          <p className="text-[color:var(--site-muted-text)] text-lg max-w-2xl mx-auto">
            {t("contact.description.line1")}
            <br />
            {t("contact.description.line2")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <div className="bg-[var(--site-card-bg)] border border-[color:var(--site-card-border)] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-[color:var(--site-text)]" />
                <h2 className="text-2xl font-bold text-[color:var(--site-text)]">
                  {t("contact.details.title")}
                </h2>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[var(--site-button-primary-bg)] text-[color:var(--site-button-primary-text)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase text-[color:var(--site-muted-text)]">
                          {detail.label}
                        </span>
                        <span className="mt-1 block break-words text-base font-medium leading-6 text-[color:var(--site-text)]">
                          {detail.value}
                        </span>
                      </span>
                    </>
                  );

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-start gap-4 rounded-[8px] p-2 transition-colors hover:bg-[var(--site-chip-bg)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-[8px] p-2"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-[var(--site-card-bg)] border border-[color:var(--site-card-border)] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[color:var(--site-text)]" />
                <h2 className="text-2xl font-bold text-[color:var(--site-text)]">
                  {t("contact.availability.title")}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--site-muted-text)] mb-2">
                    {t("contact.availability.statusLabel")}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[var(--site-status-success-bg)] text-[color:var(--site-status-success-text)] text-sm font-medium rounded">
                    {t("contact.availability.statusValue")}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--site-muted-text)] mb-2">
                    {t("contact.availability.availableFromLabel")}
                  </h3>
                  <p className="text-[color:var(--site-text)]">
                    {t("contact.availability.availableFromValue")}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--site-muted-text)] mb-3">
                    {t("contact.availability.preferredRolesLabel")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 bg-[var(--site-chip-bg)] text-[color:var(--site-chip-text)] text-sm rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--site-muted-text)] mb-3">
                    {t("contact.availability.workPreferenceLabel")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {workPreferences.map((preference) => (
                      <span
                        key={preference}
                        className="px-3 py-1 bg-[var(--site-chip-bg)] text-[color:var(--site-chip-text)] text-sm rounded"
                      >
                        {preference}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--site-card-bg)] border border-[color:var(--site-card-border)] rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[color:var(--site-text)]">
                {t("contact.form.title")}
              </h2>
              <p className="text-[color:var(--site-muted-text)]">
                {t("contact.form.description")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[color:var(--site-text)]"
                >
                  {t("contact.form.fields.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--site-field-bg)] border border-[color:var(--site-field-border)] focus:border-[color:var(--site-focus-border)] focus:ring-2 focus:ring-[var(--site-focus-ring)] transition-all outline-none text-[color:var(--site-text)] placeholder:text-[color:var(--site-field-placeholder)]"
                  placeholder={t("contact.form.fields.name.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[color:var(--site-text)]"
                >
                  {t("contact.form.fields.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--site-field-bg)] border border-[color:var(--site-field-border)] focus:border-[color:var(--site-focus-border)] focus:ring-2 focus:ring-[var(--site-focus-ring)] transition-all outline-none text-[color:var(--site-text)] placeholder:text-[color:var(--site-field-placeholder)]"
                  placeholder={t("contact.form.fields.email.placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[color:var(--site-text)]"
                >
                  {t("contact.form.fields.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--site-field-bg)] border border-[color:var(--site-field-border)] focus:border-[color:var(--site-focus-border)] focus:ring-2 focus:ring-[var(--site-focus-ring)] transition-all outline-none resize-none text-[color:var(--site-text)] placeholder:text-[color:var(--site-field-placeholder)]"
                  placeholder={t("contact.form.fields.message.placeholder")}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex-1 py-4 bg-[var(--site-button-primary-bg)] text-[color:var(--site-button-primary-text)] rounded-lg font-medium hover:bg-[var(--site-button-primary-hover-bg)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {submitText}
                </button>

                <button
                  type="button"
                  className="px-6 py-4 bg-[var(--site-button-secondary-bg)] text-[color:var(--site-button-secondary-text)] rounded-lg font-medium hover:bg-[var(--site-button-secondary-hover-bg)] transition-all duration-300"
                >
                  {t("contact.form.downloadResume")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
