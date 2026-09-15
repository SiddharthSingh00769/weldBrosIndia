"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function ElectricityAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const arcs = gsap.utils.toArray<SVGPathElement>(".electric-arc");
      if (reduceMotion) {
        gsap.set(arcs, { opacity: 0.28 });
        return;
      }
      arcs.forEach((arc, index) => {
        gsap.set(arc, { opacity: 0, strokeDasharray: 420, strokeDashoffset: 420 });
        gsap.to(arc, { opacity: 0.75, strokeDashoffset: 0, duration: 0.55 + index * 0.12, delay: index * 0.4, repeat: -1, repeatDelay: 1.4 + index * 0.3, yoyo: true, ease: "power2.inOut" });
      });
      gsap.to(".electric-glow", { opacity: 0.7, scale: 1.08, duration: 1.4, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.25 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 760" preserveAspectRatio="none">
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g filter="url(#electric-glow)" fill="none" strokeLinecap="round">
          <path className="electric-arc" stroke="#7dd3fc" strokeWidth="2.5" d="M80 260 C260 210 330 330 490 280 S740 230 930 320 S1180 470 1430 390" />
          <path className="electric-arc" stroke="#fbbf24" strokeWidth="2" d="M500 610 C650 520 715 430 825 470 S1040 570 1190 430 S1330 300 1480 330" />
          <path className="electric-arc" stroke="#38bdf8" strokeWidth="1.5" d="M-40 500 C170 420 270 500 430 445 S700 370 890 410 S1200 300 1500 220" />
          <path className="electric-arc" stroke="#fb923c" strokeWidth="1.5" d="M760 760 C820 650 910 620 980 520 S1120 390 1280 365 S1410 260 1520 170" />
        </g>
        <g className="electric-glow" fill="#bae6fd">
          <circle cx="490" cy="280" r="3" /><circle cx="930" cy="320" r="4" /><circle cx="1190" cy="430" r="3" /><circle cx="1280" cy="365" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default ElectricityAnimation;
