"use client";

import React, { useMemo, useState } from "react";
import { Calculator as CalcIcon, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import AnimatedNumber from "./AnimatedNumber";

export default function Calculator() {
  const [capital, setCapital] = useState(100000);
  const [riskPct, setRiskPct] = useState(1);
  const [rrRatio, setRrRatio] = useState(3);
  const [winRate, setWinRate] = useState(45);
  const [tradesPerMonth, setTradesPerMonth] = useState(20);

  const projected = useMemo(() => {
    const riskAmount = capital * (riskPct / 100);
    const wins = Math.round(tradesPerMonth * (winRate / 100));
    const losses = tradesPerMonth - wins;
    const monthlyPnl = wins * riskAmount * rrRatio - losses * riskAmount;
    const monthlyReturnPct = (monthlyPnl / capital) * 100;
    const compounded = capital * Math.pow(1 + monthlyReturnPct / 100, 12);
    return { monthlyPnl, monthlyReturnPct, compounded };
  }, [capital, riskPct, rrRatio, winRate, tradesPerMonth]);

  const sliders = [
    { label: "Starting Capital", value: capital, set: setCapital, min: 10000, max: 1000000, step: 10000, format: (v: number) => `₹${v.toLocaleString("en-IN")}` },
    { label: "Risk Per Trade", value: riskPct, set: setRiskPct, min: 0.25, max: 3, step: 0.25, format: (v: number) => `${v}%` },
    { label: "Reward : Risk Ratio", value: rrRatio, set: setRrRatio, min: 1, max: 6, step: 0.5, format: (v: number) => `1 : ${v}` },
    { label: "Win Rate", value: winRate, set: setWinRate, min: 20, max: 75, step: 1, format: (v: number) => `${v}%` },
    { label: "Trades / Month", value: tradesPerMonth, set: setTradesPerMonth, min: 5, max: 60, step: 1, format: (v: number) => `${v}` },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F5EA]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Your Potential</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Calculate your trading potential.
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            Adjust the variables below to see how disciplined risk-reward mathematics compounds over a year.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="max-w-5xl grid lg:grid-cols-5 gap-6">
          {/* Sliders */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#13515D]/[0.08] p-7 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-7">
              <CalcIcon className="w-4 h-4 text-[#D4782A]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#13515D]">Risk & Reward Inputs</span>
            </div>

            <div className="flex flex-col gap-6">
              {sliders.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#142B2E]">{s.label}</span>
                    <span className="text-sm font-mono font-bold text-[#D4782A]">{s.format(s.value)}</span>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={s.value}
                    onChange={(e) => s.set(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-[#EBE3CC] accent-[#D4782A] cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 bg-[#13515D] rounded-2xl p-7 sm:p-8 text-[#FDFCF5] flex flex-col justify-between shadow-[0_25px_60px_-25px_rgba(19,81,93,0.5)]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-[#CBA35C]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#93A7CB]">Projected Outcome</span>
              </div>

              <div className="mb-6">
                <div className="text-xs text-[#93A7CB] mb-1">Estimated Monthly P&amp;L</div>
                <div className={`text-3xl font-mono font-bold ${projected.monthlyPnl >= 0 ? "text-[#6EE7B7]" : "text-[#FCA5A5]"}`}>
                  {projected.monthlyPnl >= 0 ? "+" : ""}
                  <AnimatedNumber value={projected.monthlyPnl} format={(v) => `₹${Math.round(v).toLocaleString("en-IN")}`} />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs text-[#93A7CB] mb-1">Monthly Return</div>
                <div className="text-xl font-mono font-bold text-[#CBA35C]">
                  {projected.monthlyReturnPct >= 0 ? "+" : ""}
                  <AnimatedNumber value={projected.monthlyReturnPct} format={(v) => `${v.toFixed(2)}%`} />
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs text-[#93A7CB] mb-1">12-Month Compounded Capital</div>
                <div className="text-2xl font-mono font-bold text-[#FDFCF5]">
                  <AnimatedNumber
                    value={Math.max(projected.compounded, 0)}
                    format={(v) => `₹${Math.round(v).toLocaleString("en-IN")}`}
                  />
                </div>
              </div>
            </div>

            <Magnetic strength={0.15} className="w-full">
              <a
                href="#pricing"
                className="btn-shine w-full py-3.5 rounded-full bg-[#D4782A] text-[#FDFCF5] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#B8651F] transition-all interactive"
              >
                See The Programs
              </a>
            </Magnetic>

            <p className="text-[10px] text-[#93A7CB] mt-4 leading-relaxed">
              Illustrative projection assuming consistent execution. Not a guarantee of future results — trading involves risk of loss.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
