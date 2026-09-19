"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Center the custom cursors initially
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0, ease: "none" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0, ease: "none" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3.out" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      // Show cursor only on movement
      if (cursor.classList.contains("opacity-0")) {
        cursor.classList.remove("opacity-0");
        follower.classList.remove("opacity-0");
      }
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute("data-cursor-hover");

      if (isClickable) {
        gsap.to(cursor, { scale: 0, duration: 0.2 });
        gsap.to(follower, { 
          scale: 1.5, 
          backgroundColor: "rgba(240, 90, 24, 0.1)", // Orange tint
          borderColor: "#f05a18",
          duration: 0.3 
        });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, { 
          scale: 1, 
          backgroundColor: "transparent",
          borderColor: "rgba(255, 255, 255, 0.4)",
          duration: 0.3 
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-2 opacity-0 rounded-full bg-[#f05a18] mix-blend-difference transition-opacity duration-300 md:block"
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden size-8 opacity-0 rounded-full border border-white/40 transition-colors duration-300 transition-opacity md:block"
      />
    </>
  );
}
