"use client";

import React from "react";
import { Crosshair, Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function LivePractice() {
  return (
    <section id="live-practice" className="py-24 sm:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Algorithmic Signal Module */}
          <Reveal>
            <div className="rounded-2xl bg-[#FDFCF5] border border-[#13515D]/[0.08] p-6 sm:p-8 relative overflow-hidden shadow-[0_25px_60px_-25px_rgba(19,81,93,0.3)]">
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#13515D]/[0.08]">
                <div className="flex items-center gap-2.5">
                  <Crosshair className="w-4 h-4 text-[#D4782A]" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#13515D]">
                    Stop-Hunt Detection — Active
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              </div>

              <div className="relative h-56 flex items-end gap-1.5 px-2 mb-5">
                {Array.from({ length: 28 }).map((_, i) => {
                  const height = Math.round(22 + seededRandom(i * 3 + 1) * 72);
                  const isUp = seededRandom(i * 5) > 0.4;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full relative">
                      <div className={`w-full rounded-sm ${isUp ? "bg-[#059669]" : "bg-[#DC2626]"}`} style={{ height: `${height}%`, opacity: 0.85 }} />
                    </div>
                  );
                })}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <polyline points="5,80 35,55 60,62 95,20" fill="none" stroke="#D4782A" strokeWidth="0.6" strokeDasharray="2,2" />
                </svg>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#D4782A]/10 border border-[#D4782A]/25 text-xs font-mono text-[#B8651F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4782A] animate-pulse" />
                <span>LIQUIDITY SWEEP @ 24,812.00 — ENTRY CONFIRMED 1:3.4 R:R</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Testimonial */}
          <Reveal delay={0.15}>
            <span className="eyebrow mb-5 inline-block">Practical Experience</span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-8">
              Signals built on real orderflow — not guesswork.
            </h2>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#CBA35C] text-[#CBA35C]" />
              ))}
            </div>

            <div className="relative pl-8 mb-8">
              <Quote className="w-8 h-8 text-[#13515D]/10 absolute top-0 left-0" />
              <p className="text-xl sm:text-2xl font-medium text-[#142B2E] leading-relaxed font-heading">
                "Finally understood the DOM on Nifty futures. Within three weeks I could see the sweeps happening before the reversal printed."
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#13515D]/5 border border-[#13515D]/10 flex items-center justify-center text-sm font-semibold text-[#13515D] font-mono">
                RS
              </div>
              <div>
                <div className="text-sm font-semibold text-[#13515D]">R. Sharma</div>
                <div className="text-xs text-[#4A6062] font-mono">Mumbai, India</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
