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
        gsap.set(heroItems, {
          opacity: 0,
          y: 50,
        });

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
       * Simple fade-up / lift animation
       * ==========================================
       */

      const productCards = gsap.utils.toArray<HTMLElement>(
        "[data-product-card]",
      );

      productCards.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          y: 50,
          scale: 0.985,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 92%",
          once: true,

          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.15,
              ease: "power3.out",
              overwrite: true,
              clearProps: "transform,opacity",
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