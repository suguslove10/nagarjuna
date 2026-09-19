"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from(headlineRef.current?.querySelectorAll(".word") || [], {
        y: 70,
        opacity: 0,
        rotateX: -80,
        filter: "blur(8px)",
        transformOrigin: "50% 100%",
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.5)",
      })
        .from(subheadlineRef.current, { y: 18, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .from(buttonsRef.current, { y: 14, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.45")
        .from(tickerRef.current, { y: 12, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.35")
        .from(videoCardRef.current, { y: 28, opacity: 0, scale: 0.97, duration: 0.9, ease: "power3.out" }, "-=0.7");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-24 pb-14 bg-[#FDFCF5]">
      <div ref={videoCardRef} className="hidden lg:block absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-right"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/hero-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FDFCF5_0%,#FDFCF5_32%,transparent_62%)]" />
      </div>
      <div className="market-grid opacity-70 lg:hidden" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          {/* Left Column */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#D4782A]/30 bg-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              <span className="eyebrow">Institutional Orderflow Education</span>
            </div>

            <h1
              ref={headlineRef}
              className="mb-7 text-4xl sm:text-5xl md:text-[3.75rem] font-medium leading-[1.05] tracking-tight text-[#13515D] [perspective:1000px]"
            >
              <span className="inline-block overflow-hidden pb-1">
                <span className="inline-block word">
                  <span className="hero-word-hover">Your Journey From Learner</span>
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-2">
                <span className="inline-block word">
                  <span className="hero-word-hover relative inline-block">
                    <span className="text-shimmer-gold bg-clip-text text-transparent">to Professional Trader</span>
                  </span>
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-1">
                <span className="inline-block word">
                  <span className="hero-word-hover text-[#7A8C5F]">Starts Here.</span>
                </span>
              </span>
            </h1>

            <p ref={subheadlineRef} className="mb-9 text-base sm:text-lg text-[#4A6062] leading-relaxed max-w-lg">
              A structured curriculum in market microstructure, liquidity, and risk-managed execution across{" "}
              <span className="ticker-chip" style={{ animationDelay: "0s" }}>
                Bitcoin
              </span>{" "}
              <span className="ticker-chip chip-gold" style={{ animationDelay: "0.4s" }}>
                XAUUSD
              </span>{" "}
              <span className="ticker-chip chip-bull" style={{ animationDelay: "0.8s" }}>
                NSE
              </span>{" "}
              <span className="ticker-chip" style={{ animationDelay: "1.2s" }}>
                BSE
              </span>{" "}
              charts — built for the global markets that move them. Taught by mentors who trade every session they teach.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap items-center gap-5">
              <Magnetic strength={0.25}>
                <a
                  href="#pricing"
                  className="btn-shine group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#13515D] text-[#FDFCF5] font-semibold text-sm hover:bg-[#0C3841] transition-all interactive"
                >
                  Explore Programs
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href="#learning-system"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4A6062] hover:text-[#13515D] transition-all interactive"
              >
                See the method
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            <div ref={tickerRef} className="mt-10 flex items-center gap-6 text-xs font-mono text-[#6E8385] border-t border-[#13515D]/10 pt-6 max-w-md">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                <span>NIFTY FUT +1.24%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span>EUR/USD -0.15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
