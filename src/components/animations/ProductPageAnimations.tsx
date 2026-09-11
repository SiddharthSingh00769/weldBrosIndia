"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProductPageAnimations() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * HERO ANIMATION
       * ==========================================
       */

      const heroItems = gsap.utils.toArray<HTMLElement>(
        "[data-product-hero-item]",
      );

      if (heroItems.length > 0) {
        // Explicitly establish the starting state.
        gsap.set(heroItems, {
          opacity: 0,
          y: 50,
        });

        // Animate them into place.
        gsap.to(heroItems, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.2,
          clearProps: "transform,opacity",
        });
      }

      /*
       * ==========================================
       * PRODUCT CARDS
       * ==========================================
       */

      const productCards = gsap.utils.toArray<HTMLElement>(
        "[data-product-card]",
        );

        productCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        // Initial state
        gsap.set(card, {
            opacity: 1,
            rotationY: direction * 360,
            rotationX: 0,
            scale: 0.96,
            transformPerspective: 1200,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
        });

        ScrollTrigger.create({
            trigger: card,
            start: "top 95%",
            once: true,

            onEnter: () => {
            gsap.to(card, {
                rotationY: 0,
                scale: 1,
                duration: 1.8,
                ease: "power2.out",
                overwrite: true,
            });
            },
        });
        });

      /*
       * ==========================================
       * SPECIALIZATION IMAGE
       * ==========================================
       */

      const specializationImage =
        document.querySelector<HTMLElement>(
          "[data-product-specialization-image]",
        );

      if (specializationImage) {
        gsap.set(specializationImage, {
          opacity: 0,
          y: 50,
          scale: 1.04,
        });

        ScrollTrigger.create({
          trigger: specializationImage,
          start: "top 82%",
          once: true,

          onEnter: () => {
            gsap.to(specializationImage, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.3,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      }

      /*
       * ==========================================
       * SPECIALIZATION TEXT
       * ==========================================
       */

      const specializationItems =
        gsap.utils.toArray<HTMLElement>(
          "[data-product-specialization-item]",
        );

      if (specializationItems.length > 0) {
        gsap.set(specializationItems, {
          opacity: 0,
          y: 40,
        });

        ScrollTrigger.create({
          trigger: specializationItems[0],
          start: "top 84%",
          once: true,

          onEnter: () => {
            gsap.to(specializationItems, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      }

      /*
       * ==========================================
       * APPLICATIONS
       * ==========================================
       */

      const applicationRows =
        gsap.utils.toArray<HTMLElement>(
          "[data-product-application]",
        );

      if (applicationRows.length > 0) {
        gsap.set(applicationRows, {
          opacity: 0,
          y: 35,
        });

        ScrollTrigger.create({
          trigger: applicationRows[0],
          start: "top 84%",
          once: true,

          onEnter: () => {
            gsap.to(applicationRows, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      }

      /*
       * ==========================================
       * CUSTOM FABRICATION
       * ==========================================
       */

      const fabricationSteps =
        gsap.utils.toArray<HTMLElement>(
          "[data-product-fabrication-step]",
        );

      if (fabricationSteps.length > 0) {
        gsap.set(fabricationSteps, {
          opacity: 0,
          y: 35,
        });

        ScrollTrigger.create({
          trigger: fabricationSteps[0],
          start: "top 84%",
          once: true,

          onEnter: () => {
            gsap.to(fabricationSteps, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      }

      /*
       * ==========================================
       * FINAL CTA
       * ==========================================
       */

      const ctaItems = gsap.utils.toArray<HTMLElement>(
        "[data-product-cta]",
      );

      if (ctaItems.length > 0) {
        gsap.set(ctaItems, {
          opacity: 0,
          y: 35,
        });

        ScrollTrigger.create({
          trigger: ctaItems[0],
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.to(ctaItems, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      }

      /*
       * Recalculate trigger positions after
       * images/layout have had a chance to settle.
       */
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}