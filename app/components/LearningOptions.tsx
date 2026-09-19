"use client";

import React from "react";
import { ArrowUpRight, Sparkles, ShieldCheck, Users } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";

const COURSES = [
  {
    name: "Indian Market Foundation",
    priceValue: 14999,
    duration: "3 Weeks",
    tagline: "NSE/BSE, equities, indices, F&O and broker fundamentals",
    featured: false,
  },
  {
    name: "Forex Foundation",
    priceValue: 19999,
    duration: "3 Weeks",
    tagline: "Currency pairs, pips, leverage, MT4/MT5 and macro events",
    featured: false,
  },
  {
    name: "Technical Analysis Mastery",
    priceValue: 24999,
    duration: "4 Weeks",
    tagline: "Candlesticks, chart patterns, RSI, MACD and Fibonacci",
    featured: false,
  },
  {
    name: "Options & F&O Trading",
    priceValue: 19999,
    duration: "3 Weeks",
    tagline: "Option chain, Greeks, spreads, hedging and F&O strategy",
    featured: false,
  },
  {
    name: "Forex + Indian Market Pro",
    priceValue: 29999,
    duration: "4 Weeks",
    tagline: "The Indian market and forex foundations, combined",
    featured: false,
  },
  {
    name: "Complete Trader Program",
    priceValue: 34999,
    duration: "5 Weeks",
    tagline: "The Capital Room flagship — all 8 modules, start to execution",
    featured: true,
  },
];

const MENTORSHIP = [
  {
    name: "1-to-4 Mentorship",
    priceValue: 49999,
    groupNote: "Small group of 4 traders",
    featured: false,
  },
  {
    name: "1-to-2 Mentorship",
    priceValue: 69999,
    groupNote: "Paired with one other trader",
    featured: false,
  },
  {
    name: "1-to-1 Mentorship",
    priceValue: 89999,
    groupNote: "Fully personal, one-on-one",
    featured: true,
  },
];

const MENTORSHIP_FEATURES = [
  "Live chart analysis & trade setup identification",
  "Entry, stop-loss & target planning",
  "Weekly backtesting & trade journal review",
  "Direct mentor access for the full 6 months",
];

export default function LearningOptions() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FDFCF5]">
      <div className="container-custom">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="eyebrow mb-5 inline-block">Programs</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Choose your path.
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            Transparent, one-time course pricing in INR. Every program includes our full risk-management framework.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" stagger={0.08}>
          {COURSES.map((course) => (
            <RevealItem key={course.name} className="h-full">
              <div
                className={`h-full rounded-2xl p-6 flex flex-col justify-between relative transition-colors duration-300 ${
                  course.featured
                    ? "bg-[#13515D] border-2 border-[#D4782A] shadow-[0_25px_60px_-20px_rgba(212,120,42,0.35)]"
                    : "bg-white border border-[#13515D]/[0.1] shadow-sm hover:shadow-xl"
                }`}
              >
                {course.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4782A] text-[#FDFCF5] text-[11px] font-mono font-extrabold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship
                  </div>
                )}

                <div>
                  <h3 className={`text-base font-bold font-heading mb-1.5 ${course.featured ? "text-[#FDFCF5]" : "text-[#13515D]"}`}>
                    {course.name}
                  </h3>
                  <p className={`text-xs mb-4 leading-relaxed ${course.featured ? "text-[#93A7CB]" : "text-[#4A6062]"}`}>
                    {course.tagline}
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-mono font-extrabold ${course.featured ? "text-[#FDFCF5]" : "text-[#13515D]"}`}>
                      <CountUp value={course.priceValue} duration={1.2} format={(v) => `₹${Math.round(v).toLocaleString("en-IN")}`} />
                    </span>
                    <span className={`text-xs font-mono ${course.featured ? "text-[#93A7CB]" : "text-[#4A6062]"}`}>one-time</span>
                  </div>
                  <div className={`mt-1.5 text-[11px] font-mono uppercase tracking-wider ${course.featured ? "text-[#CBA35C]" : "text-[#D4782A]"}`}>
                    {course.duration}
                  </div>
                </div>

                <Magnetic strength={0.15} className="w-full mt-6">
                  <a
                    href="#contact"
                    className={`btn-shine w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all interactive ${
                      course.featured
                        ? "bg-[#D4782A] text-[#FDFCF5] hover:bg-[#B8651F]"
                        : "bg-[#13515D] text-[#FDFCF5] hover:bg-[#0C3841]"
                    }`}
                  >
                    Enroll Now
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Mentorship tiers */}
        <div id="mentorship-pricing" className="mt-24 max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="eyebrow mb-4 inline-block">1-to-1 Mentorship</span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-4">
              Personal mentorship, six months.
            </h3>
            <p className="text-[#4A6062] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Same curriculum, different group size — smaller groups mean more direct time with your mentor.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-3 gap-6 items-stretch" stagger={0.08}>
            {MENTORSHIP.map((tier) => (
              <RevealItem key={tier.name} className="h-full">
                <div
                  className={`h-full rounded-2xl p-6 flex flex-col justify-between relative transition-colors duration-300 ${
                    tier.featured
                      ? "bg-[#13515D] border-2 border-[#D4782A] shadow-[0_25px_60px_-20px_rgba(212,120,42,0.35)]"
                      : "bg-white border border-[#13515D]/[0.1] shadow-sm hover:shadow-xl"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4782A] text-[#FDFCF5] text-[11px] font-mono font-extrabold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Exclusive
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Users className={`w-4 h-4 ${tier.featured ? "text-[#CBA35C]" : "text-[#D4782A]"}`} />
                      <h4 className={`text-base font-bold font-heading ${tier.featured ? "text-[#FDFCF5]" : "text-[#13515D]"}`}>
                        {tier.name}
                      </h4>
                    </div>
                    <p className={`text-xs mb-4 ${tier.featured ? "text-[#93A7CB]" : "text-[#4A6062]"}`}>{tier.groupNote}</p>

                    <div className="flex items-baseline gap-1 mb-1.5">
                      <span className={`text-2xl font-mono font-extrabold ${tier.featured ? "text-[#FDFCF5]" : "text-[#13515D]"}`}>
                        <CountUp value={tier.priceValue} duration={1.2} format={(v) => `₹${Math.round(v).toLocaleString("en-IN")}`} />
                      </span>
                      <span className={`text-xs font-mono ${tier.featured ? "text-[#93A7CB]" : "text-[#4A6062]"}`}>/ 6 months</span>
                    </div>

                    <ul className="space-y-2 mb-6 mt-4">
                      {MENTORSHIP_FEATURES.map((f) => (
                        <li key={f} className={`flex items-start gap-2 text-xs leading-relaxed ${tier.featured ? "text-[#E5EDEE]" : "text-[#3D5254]"}`}>
                          <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${tier.featured ? "bg-[#CBA35C]" : "bg-[#D4782A]"}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Magnetic strength={0.15} className="w-full">
                    <a
                      href="#contact"
                      className={`btn-shine w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all interactive ${
                        tier.featured
                          ? "bg-[#D4782A] text-[#FDFCF5] hover:bg-[#B8651F]"
                          : "bg-[#13515D] text-[#FDFCF5] hover:bg-[#0C3841]"
                      }`}
                    >
                      Apply for Mentorship
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </Magnetic>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="text-center mt-14 text-xs font-mono text-[#4A6062] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#7A8C5F]" />
          <span>14-Day Money-Back Guarantee · Transparent Risk Disclosures</span>
        </div>
      </div>
    </section>
  );
}
