"use client";
import React from "react";
import { Logo } from "./Navbar";

const FOOTER_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#" },
      { label: "Learning System", href: "#learning-system" },
      { label: "Mentorship", href: "#mentorship" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Indian Market Foundation", href: "#pricing" },
      { label: "Forex Foundation", href: "#pricing" },
      { label: "Complete Trader Program", href: "#pricing" },
      { label: "1-to-1 Mentorship", href: "#mentorship-pricing" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Risk Disclosure", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#13515D] text-[#93A7CB]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-white/10 mb-10">
          <div className="space-y-4 max-w-sm">
            <Logo className="h-8 w-auto" invert />
            <p className="text-xs leading-relaxed text-[#FDFCF5]">
              Bridging global orderflow methodology with Indian equities, futures, and correlated markets — taught by mentors who trade what they teach.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#FDFCF5] mb-4">
                  {col.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-xs text-[#FDFCF5] hover:text-[#D4782A] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[11px] font-mono text-center text-[#93A7CB]">
          &copy; {new Date().getFullYear()} IND-GLOBAL Trade Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
