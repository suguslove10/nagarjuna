"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do I need prior trading experience to start?",
    a: "No. Indian Market Foundation and Forex Foundation assume zero prior exposure to exchange mechanics and build from first principles — market structure, instruments, and terminology — before moving into strategy and execution.",
  },
  {
    q: "How is this different from free content on YouTube?",
    a: "Free content is unstructured and rarely covers risk management or trade review in depth. Every program here follows a fixed curriculum sequence, includes mentor feedback on your actual trades, and requires you to log and review every position you take.",
  },
  {
    q: "What if I can't attend live sessions?",
    a: "Mentorship sessions are recorded and added to your library within 24 hours. All standalone courses are fully self-paced from day one.",
  },
  {
    q: "Is there a refund if the program isn't right for me?",
    a: "Yes — every program includes a 14-day money-back guarantee, no conditions attached.",
  },
  {
    q: "Do you guarantee trading profits?",
    a: "No program can guarantee results, and we won't claim otherwise. We teach process, risk management, and execution discipline — outcomes depend on your own execution and market conditions. See our Risk Disclosure for details.",
  },
  {
    q: "Is forex trading legal in India?",
    a: "Don't assume every overseas \"forex trading\" platform is legal for Indian residents. NSE and BSE operate SEBI-recognized currency-derivatives segments, and SEBI maintains an official list of registered currency-derivative brokers. Our Forex Foundation and Forex + Indian Market Pro courses teach you to trade currency pairs, gold, and crypto through this regulated framework rather than unregistered offshore platforms.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container-custom max-w-3xl">
        <Reveal className="mb-14">
          <span className="eyebrow mb-5 inline-block">Questions</span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#13515D] leading-[1.1]">
            Before you commit.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-[#13515D]/[0.1] bg-[#FDFCF5] overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-sm sm:text-base font-medium text-[#142B2E]">{item.q}</span>
                    <Plus className="w-4 h-4 text-[#D4782A] shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-[#4A6062] leading-relaxed data-[state=open]:animate-[accordionDown_0.3s_ease-out] data-[state=closed]:animate-[accordionUp_0.3s_ease-out]">
                  <div className="px-6 pb-5">{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
