"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({
  value,
  format = (v: number) => Math.round(v).toLocaleString(),
  className,
}: {
  value: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const [display, setDisplay] = useState(format(value));
  const prev = useRef(value);

  useEffect(() => {
    const controls = animate(prev.current, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v)),
    });
    prev.current = value;
    return () => controls.stop();
  }, [value]);

  return <span className={className}>{display}</span>;
}
