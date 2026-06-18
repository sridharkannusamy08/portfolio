"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function CountUpNumber({ end, suffix = "", duration = 2.5 }: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp end={end} duration={duration} suffix={suffix} enableScrollSpy={false} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}
