"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Send, Mail, Phone, ChevronDown, Loader2, ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const PROGRAM_OPTIONS = [
  "Indian Market Foundation",
  "Forex Foundation",
  "Technical Analysis Mastery",
  "Options & F&O Trading",
  "Forex + Indian Market Pro",
  "Complete Trader Program",
  "1-to-4 Mentorship",
  "1-to-2 Mentorship",
  "1-to-1 Mentorship",
  "Not Sure — Help Me Choose",
] as const;

const MENTORSHIP_PROGRAMS = ["1-to-4 Mentorship", "1-to-2 Mentorship", "1-to-1 Mentorship"];

const EXPERIENCE_OPTIONS = [
  "Complete Beginner",
  "Beginner — Learning Basics",
  "Intermediate Trader",
  "Experienced Trader",
  "Already Trading but Not Consistently Profitable",
];

const MARKET_OPTIONS = [
  "Indian Stock Market (NSE/BSE)",
  "Forex",
  "Gold (XAU/USD)",
  "Cryptocurrency (Bitcoin)",
  "Options & F&O",
];

const FORMAT_OPTIONS = ["Live Online Classes", "Recorded Classes", "Live + Recorded", "Personal Mentorship"];

const CONTACT_METHOD_OPTIONS = ["WhatsApp", "Phone Call", "Email"];

const MENTORSHIP_EXPERIENCE_OPTIONS = ["Never traded", "Less than 6 months", "6–12 months", "1–3 years", "3+ years"];

const PRIMARY_GOAL_OPTIONS = [
  "Learn Trading from Scratch",
  "Improve My Technical Analysis",
  "Become Consistently Profitable",
  "Improve Risk Management",
  "Build a Professional Trading Career",
];

const START_TIMELINE_OPTIONS = ["Immediately", "Within 1 Week", "Within 1 Month", "Just Exploring"];

const INDIAN_PHONE_REGEX = /^(?:\+?91)?[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  interestedIn: string;
  experience: string;
  markets: string[];
  learningFormat: string;
  contactMethod: string;
  goals: string;
  mentorshipExperience: string;
  primaryGoal: string;
  startTimeline: string;
}

// Shape a submission is normalized to before it's handed off to
// email / WhatsApp / CRM / Google Sheets / a backend API.
interface LeadSubmission extends LeadFormData {
  submittedAt: string;
  source: "website-contact-form";
}

const INITIAL_FORM_DATA: LeadFormData = {
  fullName: "",
  whatsappNumber: "",
  email: "",
  interestedIn: "",
  experience: "",
  markets: [],
  learningFormat: "",
  contactMethod: "",
  goals: "",
  mentorshipExperience: "",
  primaryGoal: "",
  startTimeline: "",
};

type FormErrors = Partial<Record<keyof LeadFormData, string>>;

function validate(data: LeadFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name looks too short.";
  }

  const phone = data.whatsappNumber.replace(/[\s-]/g, "");
  if (!phone) {
    errors.whatsappNumber = "Please enter your WhatsApp number.";
  } else if (!INDIAN_PHONE_REGEX.test(phone)) {
    errors.whatsappNumber = "Enter a valid 10-digit Indian mobile number.";
  }

  if (data.email.trim() && !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.interestedIn) errors.interestedIn = "Please select a program.";
  if (!data.experience) errors.experience = "Please select your experience level.";
  if (data.markets.length === 0) errors.markets = "Select at least one market.";
  if (!data.contactMethod) errors.contactMethod = "Please choose a contact method.";

  if (MENTORSHIP_PROGRAMS.includes(data.interestedIn)) {
    if (!data.mentorshipExperience) errors.mentorshipExperience = "Please select your trading experience.";
    if (!data.primaryGoal) errors.primaryGoal = "Please select your primary goal.";
    if (!data.startTimeline) errors.startTimeline = "Please select a start timeline.";
  }

  return errors;
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-mono uppercase tracking-wider text-[#4A6062] mb-2">
      {children}
      {required && <span className="text-[#D4782A] ml-1">*</span>}
    </label>
  );
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-[#DC2626]">{message}</p>;
}

function SelectField({
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-[#FDFCF5] border text-sm ${
            value ? "text-[#142B2E]" : "text-[#4A6062]/50"
          } ${error ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"}`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#142B2E]">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-[#4A6062] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      <ErrorText message={error} />
    </div>
  );
}

function CheckboxPills({
  label,
  required,
  values,
  options,
  onToggle,
  error,
}: {
  label: string;
  required?: boolean;
  values: string[];
  options: readonly string[];
  onToggle: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-all interactive ${
                active
                  ? "bg-[#13515D] border-[#13515D] text-[#FDFCF5]"
                  : "bg-[#FDFCF5] border-[#13515D]/[0.14] text-[#3D5254] hover:border-[#13515D]/30"
              }`}
            >
              {active && <Check className="w-3 h-3" />}
              {opt}
            </button>
          );
        })}
      </div>
      <ErrorText message={error} />
    </div>
  );
}

function RadioPills({
  label,
  required,
  value,
  options,
  onChange,
  error,
}: {
  label: string;
  required?: boolean;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={active}
              className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all interactive ${
                active
                  ? "bg-[#D4782A] border-[#D4782A] text-[#FDFCF5]"
                  : "bg-[#FDFCF5] border-[#13515D]/[0.14] text-[#3D5254] hover:border-[#13515D]/30"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <ErrorText message={error} />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const showMentorshipFields = MENTORSHIP_PROGRAMS.includes(formData.interestedIn);

  function updateField<K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function toggleMarket(market: string) {
    setFormData((prev) => ({
      ...prev,
      markets: prev.markets.includes(market)
        ? prev.markets.filter((m) => m !== market)
        : [...prev.markets, market],
    }));
    setErrors((prev) => {
      if (!prev.markets) return prev;
      const next = { ...prev };
      delete next.markets;
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const lead: LeadSubmission = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: "website-contact-form",
      };
      // Wire this up to email / WhatsApp / CRM / Google Sheets / a backend API, e.g.:
      // await fetch("/api/leads", { method: "POST", body: JSON.stringify(lead) });
      console.log("New lead submission", lead);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F5EA]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            Visit or reach our academy HQ.
          </h2>
        </Reveal>

        <div className="max-w-5xl grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: India map with HQ pin */}
          <Reveal className="rounded-2xl bg-[#13515D] p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[380px]">
            <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
            <svg viewBox="0 0 200 220" className="w-56 h-auto relative z-10" fill="none">
              <path
                d="M95 8 L120 14 L128 30 L145 34 L150 50 L142 62 L150 72 L140 90 L148 100 L138 118 L142 135 L128 150 L130 165 L115 178 L110 195 L98 210 L88 195 L82 178 L68 168 L60 150 L48 140 L52 122 L40 108 L45 92 L38 78 L48 64 L44 48 L58 38 L62 22 L80 16 Z"
                fill="#0C3841"
                stroke="#93A7CB"
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* HQ pin — Bangalore */}
              <g>
                <circle cx="95" cy="172" r="14" fill="#D4782A" opacity="0.2">
                  <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="95" cy="172" r="6" fill="#D4782A" stroke="#FDFCF5" strokeWidth="1.5" />
              </g>
            </svg>
            <div className="relative z-10 mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#FDFCF5] text-xs font-mono uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D4782A]" />
              Academy HQ — Bangalore, India
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-2.5 text-sm text-[#CBD9DA] w-full max-w-xs">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#93A7CB]" />
                <span>contact@indglobaltrade.academy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#93A7CB]" />
                <span>+91 80 4000 5678</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Enquiry form */}
          <Reveal delay={0.15} className="rounded-2xl bg-white border border-[#13515D]/[0.08] p-7 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#7A8C5F]/10 flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-[#7A8C5F]" />
                </div>
                <h3 className="text-lg font-bold text-[#13515D] mb-2">You're on your way.</h3>
                <p className="text-sm text-[#4A6062] max-w-xs">
                  Thanks for reaching out — our team will contact you within one business day to help you choose the right program.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="mb-1">
                  <h3 className="text-xl font-bold font-heading text-[#13515D] mb-2">Start Your Trading Journey</h3>
                  <p className="text-sm text-[#4A6062] leading-relaxed">
                    Fill in your details and our team will help you choose the right trading program.
                  </p>
                </div>

                <div>
                  <FieldLabel required>Full Name</FieldLabel>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                      errors.fullName ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                    }`}
                  />
                  <ErrorText message={errors.fullName} />
                </div>

                <div>
                  <FieldLabel required>WhatsApp Number</FieldLabel>
                  <input
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsappNumber}
                    onChange={(e) => updateField("whatsappNumber", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                      errors.whatsappNumber ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                    }`}
                  />
                  <ErrorText message={errors.whatsappNumber} />
                </div>

                <div>
                  <FieldLabel>Email Address</FieldLabel>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 ${
                      errors.email ? "border-[#DC2626]" : "border-[#13515D]/[0.12]"
                    }`}
                  />
                  <ErrorText message={errors.email} />
                </div>

                <SelectField
                  label="I'm Interested In"
                  required
                  value={formData.interestedIn}
                  onChange={(v) => updateField("interestedIn", v)}
                  options={PROGRAM_OPTIONS}
                  placeholder="Select a program"
                  error={errors.interestedIn}
                />

                <SelectField
                  label="My Trading Experience"
                  required
                  value={formData.experience}
                  onChange={(v) => updateField("experience", v)}
                  options={EXPERIENCE_OPTIONS}
                  placeholder="Select your experience level"
                  error={errors.experience}
                />

                <CheckboxPills
                  label="Markets I'm Interested In"
                  required
                  values={formData.markets}
                  options={MARKET_OPTIONS}
                  onToggle={toggleMarket}
                  error={errors.markets}
                />

                <RadioPills
                  label="Preferred Learning Format"
                  value={formData.learningFormat}
                  options={FORMAT_OPTIONS}
                  onChange={(v) => updateField("learningFormat", v)}
                />

                <RadioPills
                  label="Preferred Contact Method"
                  required
                  value={formData.contactMethod}
                  options={CONTACT_METHOD_OPTIONS}
                  onChange={(v) => updateField("contactMethod", v)}
                  error={errors.contactMethod}
                />

                <AnimatePresence initial={false}>
                  {showMentorshipFields && (
                    <motion.div
                      key="mentorship-fields"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-5 pt-5 border-t border-[#13515D]/[0.08]">
                        <p className="-mt-1 text-xs text-[#4A6062]">
                          A few more details so we can match you with the right mentor.
                        </p>
                        <SelectField
                          label="Current Trading Experience"
                          required
                          value={formData.mentorshipExperience}
                          onChange={(v) => updateField("mentorshipExperience", v)}
                          options={MENTORSHIP_EXPERIENCE_OPTIONS}
                          placeholder="Select an option"
                          error={errors.mentorshipExperience}
                        />
                        <SelectField
                          label="What Is Your Primary Goal?"
                          required
                          value={formData.primaryGoal}
                          onChange={(v) => updateField("primaryGoal", v)}
                          options={PRIMARY_GOAL_OPTIONS}
                          placeholder="Select your primary goal"
                          error={errors.primaryGoal}
                        />
                        <SelectField
                          label="How Soon Do You Want to Start?"
                          required
                          value={formData.startTimeline}
                          onChange={(v) => updateField("startTimeline", v)}
                          options={START_TIMELINE_OPTIONS}
                          placeholder="Select a timeline"
                          error={errors.startTimeline}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <FieldLabel>Tell Us About Your Trading Goals</FieldLabel>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trading goals or ask any questions."
                    value={formData.goals}
                    onChange={(e) => updateField("goals", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFCF5] border border-[#13515D]/[0.12] text-sm text-[#142B2E] placeholder:text-[#4A6062]/50 resize-none"
                  />
                </div>

                <Magnetic strength={0.15} className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine w-full py-3.5 rounded-full bg-[#D4782A] text-[#FDFCF5] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#B8651F] transition-all interactive disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Start My Trading Journey
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
