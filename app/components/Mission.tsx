"use client";

import React from "react";
import { Target, Users, LineChart } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  { icon: Target, label: "Precision Execution", detail: "Entries built on liquidity, not indicators." },
  { icon: LineChart, label: "Data-Driven Method", detail: "Every setup is measured, logged, reviewed." },
  { icon: Users, label: "Community Mentorship", detail: "Mentors who trade the sessions they teach." },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#13515D] py-24 sm:py-32">
      <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#D4782A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Positioning */}
        <Reveal>
          <span className="eyebrow mb-6 inline-block !text-[#CBA35C]">The Difference</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] text-[#FDFCF5] mb-7">
            Most traders lose money predicting.
            <br />
            <span className="text-[#93A7CB]">We teach you to react to structure.</span>
          </h2>
          <p className="text-[#CBD9DA] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            New traders fail because they trade patterns without understanding why liquidity moves. IND-GLOBAL closes that gap — combining institutional-grade orderflow methodology with local execution on NSE and BSE, taught by mentors who trade the same markets they teach.
          </p>

          <div className="flex flex-col gap-5">
            {PILLARS.map((p) => (
              <div key={p.label} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                <div className="p-2.5 rounded-lg bg-white/10 shrink-0">
                  <p.icon className="w-4 h-4 text-[#D4782A]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#FDFCF5] mb-0.5">{p.label}</div>
                  <div className="text-sm text-[#93A7CB]">{p.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right: Signal vs noise — structural visual, not stock photography */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-[#0C3841] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-6">
                <div className="eyebrow !text-[#93A7CB] mb-4">Guessing</div>
                <svg viewBox="0 0 140 100" className="w-full h-28" fill="none">
                  <polyline
                    points="4,60 18,40 30,72 44,28 58,66 72,20 86,58 100,34 114,70 128,44"
                    stroke="#93A7CB" strokeWidth="1.5" fill="none" opacity="0.6"
                  />
                  {[4,18,30,44,58,72,86,100,114,128].map((x, i) => {
                    const ys = [60,40,72,28,66,20,58,34,70,44];
                    return <circle key={i} cx={x} cy={ys[i]} r="2" fill="#93A7CB" opacity="0.7" />;
                  })}
                </svg>
                <p className="text-xs text-[#93A7CB] leading-relaxed mt-2">Reacting to price after the move — no read on who's actually in control.</p>
              </div>
              <div className="p-6">
                <div className="eyebrow mb-4">Structure</div>
                <svg viewBox="0 0 140 100" className="w-full h-28" fill="none">
                  <path d="M4,78 L28,78 L28,52 L52,52 L52,66 L76,66 L76,30 L100,30 L100,44 L128,44" stroke="#D4782A" strokeWidth="1.5" fill="none" />
                  <rect x="24" y="48" width="8" height="30" fill="#059669" opacity="0.5" />
                  <rect x="72" y="26" width="8" height="40" fill="#059669" opacity="0.5" />
                  <rect x="96" y="26" width="8" height="18" fill="#DC2626" opacity="0.5" />
                </svg>
                <p className="text-xs text-[#CBD9DA] leading-relaxed mt-2">Reading liquidity before the move — absorption, imbalance, and intent.</p>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 bg-white/[0.03]">
              <p className="text-[#FDFCF5] font-medium text-base leading-snug">
                "Every mentor here still trades live — we teach what we practice, not what we read."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
