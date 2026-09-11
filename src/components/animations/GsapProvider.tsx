"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function GSAPProvider() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * ==================================================
       * GLOBAL FADE UP
       * ==================================================
       */

      const fadeUpElements = gsap.utils.toArray<HTMLElement>(
        "[data-gsap='fade-up']",
      );

      fadeUpElements.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          y: 45,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1.25,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      });

      /*
       * ==================================================
       * GLOBAL STAGGER GROUP
       * ==================================================
       */

      const groups = gsap.utils.toArray<HTMLElement>(
        "[data-gsap-group]",
      );

      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(
          "[data-gsap-item]",
        );

        if (!items.length) {
          return;
        }

        gsap.set(items, {
          opacity: 0,
          y: 35,
        });

        ScrollTrigger.create({
          trigger: group,
          start: "top 84%",
          once: true,

          onEnter: () => {
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.16,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      });

      /*
       * ==================================================
       * GLOBAL IMAGE REVEAL
       * ==================================================
       */

      const imageElements = gsap.utils.toArray<HTMLElement>(
        "[data-gsap-image]",
      );

      imageElements.forEach((element) => {
        gsap.set(element, {
          opacity: 0,
          y: 30,
          scale: 1.025,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              clearProps: "transform,opacity",
            });
          },
        });
      });

      /*
       * ==================================================
       * CLIP PATH REVEAL
       * ==================================================
       */

      const revealElements = gsap.utils.toArray<HTMLElement>(
        "[data-gsap-reveal]",
      );

      revealElements.forEach((element) => {
        gsap.set(element, {
          clipPath: "inset(0 0 100% 0)",
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.to(element, {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.35,
              ease: "power3.inOut",
              clearProps: "clipPath",
            });
          },
        });
      });

      /*
       * ==================================================
       * SECTION LINES
       * ==================================================
       */

      const lineElements = gsap.utils.toArray<HTMLElement>(
        "[data-gsap-line]",
      );

      lineElements.forEach((element) => {
        gsap.set(element, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          once: true,

          onEnter: () => {
            gsap.to(element, {
              scaleX: 1,
              duration: 1.05,
              ease: "power3.inOut",
              clearProps: "transform",
            });
          },
        });
      });

      /*
       * ==================================================
       * PRODUCTS — HERO
       * ==================================================
       */

      const productHeroItems = gsap.utils.toArray<HTMLElement>(
        "[data-product-hero-item]",
      );

      if (productHeroItems.length) {
        gsap.set(productHeroItems, {
          opacity: 0,
          y: 55,
        });

        gsap.to(productHeroItems, {
          opacity: 1,
          y: 0,
          duration: 1.25,
          stagger: 0.14,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });
      }

      /*
       * ==================================================
       * PRODUCTS — CARDS
       * ==================================================
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

      // PRODUCTS — LAYERED CARD CONTENT REVEAL
      productCards.forEach((card) => {
        const image = card.querySelector<HTMLElement>(
          "[data-product-image]",
        );

        const content = card.querySelector<HTMLElement>(
          "[data-product-content]",
        );

        if (!image || !content) return;

        gsap.set(image, {
          opacity: 0,
          x: 20,
        });

        gsap.set(content, {
          opacity: 0,
          x: 20,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 92%",
          once: true,

          onEnter: () => {
            const timeline = gsap.timeline();

            timeline
              .to(image, {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
              })
              .to(
                content,
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.9,
                  ease: "power3.out",
                },
                "-=0.65",
              );
          },
        });
      });

      /*
       * ==================================================
       * PRODUCTS — SPECIALIZATION IMAGE
       * ==================================================
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
       * ==================================================
       * PRODUCTS — SPECIALIZATION TEXT
       * ==================================================
       */

      const specializationItems =
        gsap.utils.toArray<HTMLElement>(
          "[data-product-specialization-item]",
        );

      if (specializationItems.length) {
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
       * ==================================================
       * PRODUCTS — APPLICATIONS
       * ==================================================
       */

      const applicationRows = gsap.utils.toArray<HTMLElement>(
        "[data-product-application]",
      );

      if (applicationRows.length) {
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
       * ==================================================
       * PRODUCTS — FABRICATION
       * ==================================================
       */

      const fabricationSteps =
        gsap.utils.toArray<HTMLElement>(
          "[data-product-fabrication-step]",
        );

      if (fabricationSteps.length) {
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
       * ==================================================
       * PRODUCTS — CTA
       * ==================================================
       */

      const productCtaItems = gsap.utils.toArray<HTMLElement>(
        "[data-product-cta]",
      );

      if (productCtaItems.length) {
        gsap.set(productCtaItems, {
          opacity: 0,
          y: 35,
        });

        ScrollTrigger.create({
          trigger: productCtaItems[0],
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.to(productCtaItems, {
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
       * ==================================================
       * REFRESH SCROLLTRIGGER
       * ==================================================
       */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return null;
}