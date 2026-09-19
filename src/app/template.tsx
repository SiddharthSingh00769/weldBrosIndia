"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const wipeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop/medium devices or if prefers-reduced-motion is not set
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // The wipe curtain slides up, revealing the page
      tl.to(wipeRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power4.inOut",
      });
      
      // The content fades in and slightly slides up
      tl.from(
        contentRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Dark wipe curtain that covers the screen on load */}
      <div
        ref={wipeRef}
        className="pointer-events-none fixed inset-0 z-[100] bg-[#07111d]"
        style={{ transformOrigin: "top" }}
      />
      <div ref={contentRef} className="flex min-h-screen flex-col">
        {children}
      </div>
    </>
  );
}
