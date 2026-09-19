"use client";

import React from "react";
import { Check, X, TrendingUp, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const FEATURES = [
  { label: "Live Orderflow Signal Engine", basic: false, pro: true },
  { label: "Daily Market Analysis Calls", basic: false, pro: true },
  { label: "DOM & Footprint Charting", basic: true, pro: true },
  { label: "1-on-1 Mentor Reviews", basic: false, pro: true },
  { label: "Risk & Position Sizing Tools", basic: true, pro: true },
  { label: "Institutional Research Desk", basic: false, pro: false },
];

const EXECUTION_LOG = [
  { time: "09:16:04", pair: "NIFTY FUT", action: "SHORT ENTRY", price: "24,812.00", result: "+3.6R", up: true },
  { time: "09:42:11", pair: "BANKNIFTY", action: "LONG ENTRY", price: "51,240.50", result: "+2.1R", up: true },
  { time: "10:08:53", pair: "EUR/USD", action: "SHORT ENTRY", price: "1.0842", result: "-1.0R", up: false },
  { time: "11:24:37", pair: "GOLD (XAU)", action: "LONG ENTRY", price: "2,912.40", result: "+4.2R", up: true },
];

export default function CourseComparison() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F5EA]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Feature Comparison</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            What Mentorship unlocks.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Feature matrix */}
          <Reveal className="lg:col-span-2 bg-white rounded-2xl border border-[#13515D]/[0.08] p-7 sm:p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-2 pb-4 mb-4 border-b border-[#13515D]/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A6062]">Feature</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4A6062] text-center">Courses</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4782A] text-center font-bold">Mentorship</span>
            </div>
            <div className="flex flex-col gap-3.5">
              {FEATURES.map((f) => (
                <div key={f.label} className="grid grid-cols-3 gap-2 items-center text-sm">
                  <span className="text-[#142B2E]">{f.label}</span>
                  <span className="flex justify-center">
                    {f.basic ? <Check className="w-4 h-4 text-[#7A8C5F]" /> : <X className="w-4 h-4 text-[#4A6062]/30" />}
                  </span>
                  <span className="flex justify-center">
                    {f.pro ? <Check className="w-4 h-4 text-[#D4782A]" /> : <X className="w-4 h-4 text-[#4A6062]/30" />}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Case study: execution log */}
          <Reveal delay={0.15} className="lg:col-span-3 bg-[#13515D] rounded-2xl p-7 sm:p-8 text-[#FDFCF5] shadow-[0_25px_60px_-25px_rgba(19,81,93,0.5)]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#93A7CB]">Live Execution Log — Mentorship</span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#6EE7B7]">
                <TrendingUp className="w-3.5 h-3.5" />
                +<CountUp value={8.9} duration={1.4} format={(v) => v.toFixed(1)} />R Today
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              {EXECUTION_LOG.map((row, i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-2 text-xs font-mono px-3 py-2.5 rounded-lg bg-white/5">
                  <span className="text-[#93A7CB]">{row.time}</span>
                  <span className="text-[#FDFCF5]">{row.pair}</span>
                  <span className="text-[#CBA35C]">{row.action}</span>
                  <span className={row.up ? "text-[#6EE7B7] text-right font-bold" : "text-[#FCA5A5] text-right font-bold"}>
                    {row.result}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4782A] hover:gap-2.5 transition-all interactive"
            >
              See full case study
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
