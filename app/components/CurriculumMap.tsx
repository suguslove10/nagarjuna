"use client";

import React from "react";
import { Landmark, LineChart, BarChart3, Target, Layers3, ShieldCheck, Brain, PlayCircle } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";

const MODULES = [
  {
    n: "Module 1",
    icon: Landmark,
    accent: "#7A8C5F",
    tint: "bg-[#7A8C5F]/10",
    title: "Indian Financial Markets",
    topics: ["NSE/BSE", "Equity", "Indices", "Futures", "Options", "Currency Derivatives", "Commodities", "ETFs", "Broker Basics"],
  },
  {
    n: "Module 2",
    icon: LineChart,
    accent: "#D4782A",
    tint: "bg-[#D4782A]/10",
    title: "Forex Market",
    topics: ["Market Structure", "Currency Pairs", "Pips, Lots & Spreads", "Leverage", "Trading Sessions", "MT4/MT5", "Economic Calendar", "Interest Rates", "Central Banks", "CPI, GDP & NFP"],
  },
  {
    n: "Module 3",
    icon: BarChart3,
    accent: "#13515D",
    tint: "bg-[#13515D]/10",
    title: "Technical Analysis",
    topics: ["Candlesticks", "Support & Resistance", "Trendlines", "Market Structure", "Breakout/Breakdown", "Chart Patterns", "Volume", "RSI", "MACD", "Moving Averages", "Fibonacci"],
  },
  {
    n: "Module 4",
    icon: Target,
    accent: "#CBA35C",
    tint: "bg-[#CBA35C]/15",
    title: "Trading Strategies",
    topics: ["Intraday", "Swing Trading", "Scalping", "Positional Trading", "Price Action", "Liquidity Concepts", "FVG", "Order Blocks", "BOS/MSS"],
  },
  {
    n: "Module 5",
    icon: Layers3,
    accent: "#7A8C5F",
    tint: "bg-[#7A8C5F]/10",
    title: "Options",
    topics: ["Calls & Puts", "Option Chain", "Greeks", "IV", "Straddle", "Strangle", "Iron Condor", "Spreads", "Hedging"],
  },
  {
    n: "Module 6",
    icon: ShieldCheck,
    accent: "#D4782A",
    tint: "bg-[#D4782A]/10",
    title: "Risk Management",
    topics: ["Position Sizing", "Stop Loss", "Risk/Reward", "Maximum Daily Loss", "Capital Management", "Trading Journal"],
  },
  {
    n: "Module 7",
    icon: Brain,
    accent: "#13515D",
    tint: "bg-[#13515D]/10",
    title: "Psychology",
    topics: ["Discipline", "Revenge Trading", "FOMO", "Overtrading", "Emotional Control", "Developing a Trading Plan"],
  },
  {
    n: "Module 8",
    icon: PlayCircle,
    accent: "#CBA35C",
    tint: "bg-[#CBA35C]/15",
    title: "Live Practical Training",
    topics: ["Live Chart Analysis", "Trade Setup Identification", "Entry/SL/Target Planning", "Backtesting", "Trade Journal", "Weekly Review"],
  },
];

export default function CurriculumMap() {
  return (
    <section id="learning-system" className="py-24 sm:py-32 bg-[#FDFCF5]">
      <div className="container-custom">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block">Learning System</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1] mb-5">
            Everything inside The Capital Room.
          </h2>
          <p className="text-[#4A6062] text-base sm:text-lg leading-relaxed">
            Eight modules take you from exchange fundamentals to live, mentored execution — the full curriculum behind our Complete Trader Program.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.06}>
          {MODULES.map((mod) => (
            <RevealItem key={mod.title} className="h-full">
              <TiltCard max={4} className="group h-full flex flex-col p-6 rounded-2xl bg-white border border-[#13515D]/[0.08] hover:border-[#13515D]/20 transition-colors duration-300 shadow-sm hover:shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-2.5 rounded-xl ${mod.tint} flex items-center justify-center`}>
                    <mod.icon className="w-4 h-4" style={{ color: mod.accent }} />
                  </div>
                  <span className="font-mono text-[11px] text-[#6E8385]">{mod.n}</span>
                </div>

                <h3 className="text-sm font-bold text-[#13515D] font-heading leading-snug mb-4">{mod.title}</h3>

                <div className="flex flex-wrap gap-1.5">
                  {mod.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-full text-[11px] leading-none text-[#3D5254] bg-[#FDFCF5] border border-[#13515D]/[0.08]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
