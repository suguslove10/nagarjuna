"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function FinalCta() {
  return (
    <section className="py-28 sm:py-36 bg-[#13515D] relative overflow-hidden">
      <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4782A]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow mb-6 inline-block !text-[#CBA35C]">Start When You're Ready</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] text-[#FDFCF5] mb-8">
            Structure beats guesswork.
            <br />
            <span className="italic text-shimmer-gold bg-clip-text text-transparent">Every time.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD9DA] leading-relaxed max-w-xl mx-auto mb-10">
            Every program includes our full risk-management framework, live mentor access, and a 14-day money-back guarantee. Talk to us before you commit to anything.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={0.25}>
              <a
                href="#pricing"
                className="btn-shine inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D4782A] text-[#FDFCF5] font-bold text-sm uppercase tracking-wider hover:bg-[#B8651F] transition-all interactive"
              >
                View Programs
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-[#FDFCF5] font-semibold text-sm hover:bg-white/[0.06] transition-all interactive"
            >
              Book a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
