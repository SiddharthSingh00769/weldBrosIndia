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
        <g filter="url(#electric-glow)" fill="none" stroke="#7dd3fc" strokeLinecap="round">
          <path className="electric-arc" strokeWidth="2" d="M130 610 L245 520 L210 445 L355 375 L320 280 L470 215" />
          <path className="electric-arc" strokeWidth="1.5" d="M1300 150 L1185 232 L1230 310 L1080 365 L1125 470 L965 555" />
          <path className="electric-arc" strokeWidth="2" d="M360 110 L470 178 L445 250 L575 310" />
          <path className="electric-arc" strokeWidth="1.5" d="M1090 690 L1010 610 L1045 535 L910 470" />
        </g>
        <g className="electric-glow" fill="#bae6fd">
          <circle cx="470" cy="215" r="3" /><circle cx="1300" cy="150" r="3" /><circle cx="575" cy="310" r="2.5" /><circle cx="910" cy="470" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

export default ElectricityAnimation;
