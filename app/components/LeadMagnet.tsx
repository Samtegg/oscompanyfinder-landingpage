"use client";

import { useState } from "react";
import {
  IconBuilding,
  IconMail,
  IconPhone,
  IconMapPin,
  IconUsers,
  IconCircleCheck,
  IconSend,
  IconSparkles,
  IconArrowRight,
} from "@tabler/icons-react";

const INDUSTRIES = [
  "Select your industry",
  "Insurance",
  "Real Estate",
  "Fintech / Banking",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Telecommunications",
  "Healthcare",
  "Retail & FMCG",
  "IT & Technology",
  "Consulting & Professional Services",
  "Other",
];

const SAMPLE_FIELDS = [
  { icon: <IconBuilding size={15} />, label: "Company name & website" },
  { icon: <IconMail size={15} />,     label: "Verified business email" },
  { icon: <IconPhone size={15} />,    label: "Direct phone number"     },
  { icon: <IconMapPin size={15} />,   label: "Location & state"        },
  { icon: <IconUsers size={15} />,    label: "Company size range"      },
];

export default function LeadMagnet() {
  const [email, setEmail]       = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid business email address");
      return;
    }
    if (!industry || industry === "Select your industry") {
      setError("Please select your industry");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1000);
  }

  return (
    <section id="free-sample" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: copy ── */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#00C48C]/10 border border-[#00C48C]/20 text-[#00C48C] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <IconSparkles size={13} />
              Free Sample — No Credit Card
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] leading-tight">
              See real Nigerian company data before you commit
            </h2>
            <p className="mt-4 text-[#888888] text-base leading-relaxed">
              We&apos;ll send you a sample list of 20 verified companies in your industry —
              complete with contacts — within 24 hours. Zero commitment.
            </p>

            {/* What's included */}
            <div className="mt-8">
              <p className="text-[#888888] text-xs uppercase tracking-widest font-semibold mb-4">
                Each record includes
              </p>
              <div className="grid grid-cols-1 gap-3">
                {SAMPLE_FIELDS.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#006285]/10 flex items-center justify-center text-[#006285] flex-shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-[#1A3A5C] text-sm">{f.label}</span>
                    <IconCircleCheck size={14} className="text-[#00A86B] ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Proof strip */}
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-2xl font-black text-[#006285]">500+</p>
                <p className="text-[#888888] text-xs uppercase tracking-wide">Samples sent</p>
              </div>
              <div className="w-px h-10 bg-[#E5E7EB]" />
              <div>
                <p className="text-2xl font-black text-[#006285]">24 hrs</p>
                <p className="text-[#888888] text-xs uppercase tracking-wide">Delivery time</p>
              </div>
              <div className="w-px h-10 bg-[#E5E7EB]" />
              <div>
                <p className="text-2xl font-black text-[#006285]">20</p>
                <p className="text-[#888888] text-xs uppercase tracking-wide">Records per sample</p>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="bg-[#F8FAFC] rounded-xl p-7 border border-[#E5E7EB]">
            {done ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#e6f7f1] rounded-full flex items-center justify-center mx-auto mb-5">
                  <IconCircleCheck size={32} color="#00A86B" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-2">
                  Your sample list is on its way!
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-6">
                  Check your inbox within 24 hours. We&apos;ll send 20 verified company
                  contacts in your industry, ready to use.
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#006285] hover:underline"
                >
                  Want the full list? Talk to us
                  <IconArrowRight size={14} />
                </a>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0A1628]">
                    Get your free sample list
                  </h3>
                  <p className="text-[#888888] text-sm mt-1">
                    20 verified contacts delivered to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                      Your industry <span className="text-[#EF4444]">*</span>
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => { setIndustry(e.target.value); setError(""); }}
                      className={`w-full px-3 py-3 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition appearance-none bg-white ${
                        !industry || industry === "Select your industry"
                          ? "text-[#888888]"
                          : "text-[#0A1628]"
                      } ${error && (!industry || industry === "Select your industry") ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
                    >
                      {INDUSTRIES.map((opt) => (
                        <option key={opt} value={opt} disabled={opt === "Select your industry"}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1A3A5C] mb-1.5">
                      Business email <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <IconMail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        className={`w-full pl-9 pr-3 py-3 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006285] focus:border-transparent transition ${
                          error && !email ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E7EB]"
                        }`}
                      />
                    </div>
                    {error && (
                      <p className="mt-1.5 text-xs text-[#EF4444]">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#00C48C] hover:bg-[#00A86B] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <IconSend size={15} />
                        Send me the free sample
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-[#888888]">
                  No spam. No credit card. Your sample list arrives within 24 hours.
                </p>

                {/* Mini trust */}
                <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-center gap-2">
                  <IconCircleCheck size={14} color="#00A86B" />
                  <span className="text-xs text-[#888888]">
                    Joined by 500+ Nigerian businesses
                  </span>
                </div>
              </>
            )}
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
