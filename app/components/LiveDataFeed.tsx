"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import CountUp from "./CountUp";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const FEEDS = [
  { id: 1, name: "NSE Index", pair: "NIFTY 50", value: 24812.35, decimals: 2, change: "+1.24%", up: true },
  { id: 2, name: "FOREX Majors", pair: "EUR/USD", value: 1.0842, decimals: 4, change: "-0.15%", up: false },
  { id: 3, name: "Crypto Volumes", pair: "BTC/USD", value: 96420.0, decimals: 2, change: "+4.12%", up: true },
  { id: 4, name: "Crypto Pillars", pair: "ETH/USD", value: 3384.2, decimals: 2, change: "+2.67%", up: true },
  { id: 5, name: "Nifty Futures", pair: "NIFTY FUT", value: 24838.5, decimals: 2, change: "+1.31%", up: true },
  { id: 6, name: "Commodity Indices", pair: "GOLD (XAU)", value: 2912.4, decimals: 2, change: "+0.85%", up: true },
];

function MiniChart({ up, seed }: { up: boolean; seed: number }) {
  return (
    <div className="flex items-end gap-[2px] h-12">
      {Array.from({ length: 18 }).map((_, i) => {
        const h = Math.round(25 + seededRandom(seed + i) * 75);
        const opacity = Math.round((0.35 + (h / 100) * 0.5) * 100) / 100;
        return (
          <motion.div
            key={i}
            className="flex-1 rounded-[1px]"
            style={{ backgroundColor: up ? "#059669" : "#DC2626", opacity }}
            initial={{ height: "0%" }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </div>
  );
}

export default function LiveDataFeed() {
  return (
    <section id="live-data" className="py-24 sm:py-32 bg-[#0C3841] relative overflow-hidden">
      <div className="absolute inset-0 market-grid market-grid-dark opacity-[0.1]" />
      <div className="container-custom relative z-10">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow mb-5 inline-block !text-[#CBA35C]">Always On</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#FDFCF5] leading-[1.1] mb-5">
            Live global data feed.
          </h2>
          <p className="text-[#93A7CB] text-base sm:text-lg leading-relaxed">
            The same correlated markets we teach you to trade, streamed in real time.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto" stagger={0.08}>
          {FEEDS.map((f, i) => (
            <RevealItem
              key={f.id}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-[#D4782A]/40 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#93A7CB]">{f.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              </div>
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm font-bold text-[#FDFCF5]">{f.pair}</span>
                <span className={`text-xs font-mono font-semibold ${f.up ? "text-[#6EE7B7]" : "text-[#FCA5A5]"}`}>
                  {f.change}
                </span>
              </div>
              <div className="text-lg font-mono font-extrabold text-[#FDFCF5] mb-3">
                <CountUp
                  value={f.value}
                  duration={1.6}
                  format={(v) => v.toLocaleString("en-US", { minimumFractionDigits: f.decimals, maximumFractionDigits: f.decimals })}
                />
              </div>
              <MiniChart up={f.up} seed={i * 13 + 1} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
