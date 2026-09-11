"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function TransformerHeroAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /*
       * ------------------------------------------------------------
       * INITIAL STATES
       * ------------------------------------------------------------
       */

      gsap.set(".steel-sheet", {
        opacity: 0,
        x: -55,
        y: 20,
        rotate: -5,
      });

      gsap.set(".steel-guide", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".fabrication-body", {
        opacity: 0,
        scale: 0.94,
        transformOrigin: "center bottom",
      });

      gsap.set(".fabrication-seam", {
        opacity: 0,
        strokeDasharray: 500,
        strokeDashoffset: 500,
      });

      gsap.set(".weld-trace", {
        opacity: 0,
        strokeDasharray: 320,
        strokeDashoffset: 320,
      });

      gsap.set(".component", {
        opacity: 0,
        scale: 0.7,
        y: -15,
        transformOrigin: "center",
      });

      gsap.set(".finished-outline", {
        opacity: 0,
        scale: 0.97,
        transformOrigin: "center",
      });

      gsap.set(".highlight-sweep", {
        opacity: 0,
        x: -170,
      });

      gsap.set(".callout", {
        opacity: 0,
        x: 15,
      });

      gsap.set(".stage-label", {
        opacity: 0,
        y: 8,
      });

      gsap.set(".stage-dot", {
        fill: "#647078",
      });

      gsap.set(".dimension", {
        opacity: 0,
      });

      /*
       * ------------------------------------------------------------
       * REDUCED MOTION
       * ------------------------------------------------------------
       */

      if (reduceMotion) {
        gsap.set(".steel-sheet", {
          opacity: 0,
        });

        gsap.set(".steel-guide", {
          opacity: 0,
        });

        gsap.set(".fabrication-body", {
          opacity: 1,
          scale: 1,
        });

        gsap.set(".fabrication-seam", {
          opacity: 1,
          strokeDashoffset: 0,
        });

        gsap.set(".weld-trace", {
          opacity: 0.8,
          strokeDashoffset: 0,
        });

        gsap.set(".component", {
          opacity: 1,
          scale: 1,
          y: 0,
        });

        gsap.set(".finished-outline", {
          opacity: 1,
          scale: 1,
        });

        gsap.set(".callout", {
          opacity: 1,
          x: 0,
        });

        gsap.set(".stage-label", {
          opacity: 1,
          y: 0,
        });

        gsap.set(".dimension", {
          opacity: 0.65,
        });

        gsap.set(".stage-dot-04", {
          fill: "#6fa3be",
        });

        return;
      }

      /*
       * ------------------------------------------------------------
       * MAIN 10 SECOND SEQUENCE
       * ------------------------------------------------------------
       */

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        repeat: -1,
        repeatDelay: 2,
      });

      /*
       * ============================================================
       * STAGE 01
       * RAW STEEL
       * ============================================================
       */

      timeline
        .to(".steel-sheet", {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.75,
          stagger: 0.12,
        })

        .to(
          ".steel-guide",
          {
            opacity: 0.6,
            scaleX: 1,
            duration: 0.65,
            stagger: 0.1,
          },
          "-=0.35",
        )

        .to(
          ".stage-label-01",
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.35",
        )

        .to(
          ".stage-dot-01",
          {
            fill: "#6fa3be",
            duration: 0.25,
          },
          "<",
        )

        /*
         * Steel leaves the scene.
         */
        .to(
          ".steel-sheet",
          {
            opacity: 0,
            x: 100,
            y: -35,
            rotate: 3,
            duration: 0.7,
            stagger: 0.06,
            ease: "power2.in",
          },
          "+=0.65",
        )

        .to(
          ".steel-guide",
          {
            opacity: 0,
            duration: 0.35,
          },
          "<",
        )

        /*
         * ============================================================
         * STAGE 02
         * FABRICATION
         * ============================================================
         */

        .to(
          ".fabrication-body",
          {
            opacity: 1,
            scale: 1,
            duration: 0.95,
            ease: "power2.out",
          },
          "-=0.15",
        )

        .to(
          ".stage-label-02",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.4",
        )

        .to(
          ".stage-dot-02",
          {
            fill: "#6fa3be",
            duration: 0.25,
          },
          "<",
        )

        /*
         * Main fabrication seams draw in.
         */
        .to(
          ".fabrication-seam",
          {
            opacity: 0.75,
            strokeDashoffset: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power2.inOut",
          },
          "-=0.2",
        )

        /*
         * Welding trace.
         */
        .to(
          ".weld-trace",
          {
            opacity: 0.9,
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power1.inOut",
          },
          "-=0.45",
        )

        /*
         * ============================================================
         * STAGE 03
         * COMPONENT ASSEMBLY
         * ============================================================
         */

        .to(
          ".stage-label-03",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.15",
        )

        .to(
          ".stage-dot-03",
          {
            fill: "#6fa3be",
            duration: 0.25,
          },
          "<",
        )

        .to(
          ".component",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.16,
            ease: "back.out(1.35)",
          },
          "-=0.15",
        )

        /*
         * ============================================================
         * STAGE 04
         * FINISHED TANK
         * ============================================================
         */

        .to(
          ".finished-outline",
          {
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
          },
          "-=0.2",
        )

        .to(
          ".stage-label-04",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )

        .to(
          ".stage-dot-04",
          {
            fill: "#6fa3be",
            duration: 0.25,
          },
          "<",
        )

        /*
         * Callouts.
         */
        .to(
          ".callout",
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.18,
          },
          "-=0.25",
        )

        /*
         * Dimensions.
         */
        .to(
          ".dimension",
          {
            opacity: 0.65,
            duration: 0.55,
          },
          "-=0.2",
        )

        /*
         * Premium metallic highlight.
         */
        .to(
          ".highlight-sweep",
          {
            opacity: 0.85,
            x: 170,
            duration: 1.5,
            ease: "power1.inOut",
          },
          "+=0.25",
        )

        /*
         * Finished-product hold.
         */
        .to({}, {
          duration: 2.4,
        })

        /*
         * Fade technical overlays before loop.
         */
        .to(
          ".callout, .dimension, .stage-label",
          {
            opacity: 0,
            duration: 0.45,
          },
        )

        .to(
          ".finished-outline, .component, .fabrication-body",
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2",
        );

      /*
       * ------------------------------------------------------------
       * SUBTLE FINISHED PRODUCT MOTION
       * ------------------------------------------------------------
       */

      gsap.to(".finished-product-group", {
        y: -3,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative aspect-[4/3] w-full overflow-hidden bg-[#1b2429]"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,rgba(111,163,190,0.13),transparent_38%)]"
      />

      {/* Technical grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 900 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="manufacturing-grid"
            width="45"
            height="45"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M45 0H0V45"
              stroke="#c4c5c3"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>

        <rect
          width="900"
          height="680"
          fill="url(#manufacturing-grid)"
        />
      </svg>

      {/* Main illustration */}
      <svg
        className="relative z-10 h-full w-full"
        viewBox="0 0 900 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated transformer tank manufacturing process"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Steel */}
          <linearGradient
            id="steel-gradient"
            x1="120"
            y1="240"
            x2="360"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d0d1cf" />
            <stop offset="0.35" stopColor="#9b9d9b" />
            <stop offset="0.72" stopColor="#6e7272" />
            <stop offset="1" stopColor="#454c4f" />
          </linearGradient>

          {/* Tank front */}
          <linearGradient
            id="tank-front-gradient"
            x1="290"
            y1="220"
            x2="570"
            y2="475"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4c585f" />
            <stop offset="0.35" stopColor="#344149" />
            <stop offset="1" stopColor="#222d32" />
          </linearGradient>

          {/* Tank side */}
          <linearGradient
            id="tank-side-gradient"
            x1="570"
            y1="225"
            x2="635"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#344047" />
            <stop offset="1" stopColor="#182227" />
          </linearGradient>

          {/* Tank top */}
          <linearGradient
            id="tank-top-gradient"
            x1="290"
            y1="195"
            x2="600"
            y2="235"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b0b1ae" />
            <stop offset="0.45" stopColor="#777b7b" />
            <stop offset="1" stopColor="#555b5e" />
          </linearGradient>

          {/* Highlight */}
          <linearGradient
            id="metal-highlight"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0"
              stopColor="#ffffff"
              stopOpacity="0"
            />
            <stop
              offset="0.5"
              stopColor="#ffffff"
              stopOpacity="0.28"
            />
            <stop
              offset="1"
              stopColor="#ffffff"
              stopOpacity="0"
            />
          </linearGradient>

          {/* Ground shadow */}
          <radialGradient
            id="ground-shadow"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(455 525) rotate(90) scale(34 230)"
          >
            <stop
              stopColor="#000000"
              stopOpacity="0.5"
            />
            <stop
              offset="1"
              stopColor="#000000"
              stopOpacity="0"
            />
          </radialGradient>

          <filter
            id="product-shadow"
            x="230"
            y="130"
            width="460"
            height="430"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#000000"
              floodOpacity="0.32"
            />
          </filter>
        </defs>

        {/* =======================================================
            FRAME
        ======================================================= */}

        <g
          stroke="#8f9190"
          strokeWidth="1"
          opacity="0.4"
        >
          <path d="M65 95V65H95" />
          <path d="M805 65H835V95" />
          <path d="M65 585V615H95" />
          <path d="M805 615H835V585" />
        </g>

        <g
          fill="#8f9190"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          letterSpacing="2"
          opacity="0.6"
        >
          <text x="65" y="50">
            WB / MANUFACTURING
          </text>

          <text x="752" y="50">
            01—04
          </text>

          <text x="65" y="640">
            TRANSFORMER TANKS
          </text>

          <text x="737" y="640">
            JAIPUR / IN
          </text>
        </g>

        {/* =======================================================
            STAGE 01 — RAW STEEL
        ======================================================= */}

        <g className="raw-material-group">
          {Array.from({ length: 5 }).map((_, index) => (
            <g
              className="steel-sheet"
              key={index}
            >
              <path
                d={`M${135 + index * 14} ${265 + index * 11}
                   L${325 + index * 14} ${265 + index * 11}
                   L${350 + index * 14} ${350 + index * 11}
                   L${160 + index * 14} ${350 + index * 11}
                   Z`}
                fill="url(#steel-gradient)"
                stroke="#d0d1cf"
                strokeOpacity="0.3"
              />

              <path
                d={`M${155 + index * 14} ${285 + index * 11}
                   H${305 + index * 14}`}
                stroke="#1b2429"
                strokeOpacity="0.25"
              />

              <path
                d={`M${160 + index * 14} ${320 + index * 11}
                   H${325 + index * 14}`}
                stroke="#f7f7f5"
                strokeOpacity="0.12"
              />
            </g>
          ))}
        </g>

        {/* Steel alignment guides */}
        <g
          className="steel-guide"
          stroke="#6fa3be"
          strokeWidth="1"
          strokeDasharray="4 6"
        >
          <path d="M145 390H355" />
          <path d="M145 398H355" />
          <path d="M145 406H355" />
        </g>

        {/* Stage 01 label */}
        <g
          className="stage-label stage-label-01"
          fontFamily="Inter, sans-serif"
        >
          <text
            x="110"
            y="175"
            fill="#a9b0b3"
            fontSize="10"
            letterSpacing="2"
          >
            01 / RAW MATERIAL
          </text>

          <text
            x="110"
            y="195"
            fill="#647078"
            fontSize="9"
            letterSpacing="1.3"
          >
            STEEL PLATE PREPARATION
          </text>

          <path
            d="M110 210H250"
            stroke="#6fa3be"
          />
        </g>

        {/* =======================================================
            FINISHED PRODUCT GROUP
        ======================================================= */}

        <g
          className="finished-product-group"
          filter="url(#product-shadow)"
        >
          {/* Ground shadow */}
          <ellipse
            cx="455"
            cy="525"
            rx="225"
            ry="32"
            fill="url(#ground-shadow)"
          />

          {/* =====================================================
              FABRICATION BODY
          ===================================================== */}

          <g className="fabrication-body">
            {/* Main front face */}
            <path
              d="M300 235H575V465L550 485H325L300 465V235Z"
              fill="url(#tank-front-gradient)"
              stroke="#a9adaa"
              strokeOpacity="0.75"
              strokeWidth="1.5"
            />

            {/* Right side */}
            <path
              d="M575 235L620 260V465L575 485V235Z"
              fill="url(#tank-side-gradient)"
              stroke="#8f9190"
              strokeOpacity="0.55"
            />

            {/* Bottom perspective */}
            <path
              d="M300 465L325 485H550L575 465"
              fill="#1b252a"
              stroke="#8f9190"
              strokeOpacity="0.45"
            />

            {/* Main horizontal seam */}
            <path
              className="fabrication-seam"
              d="M300 282H575"
              stroke="#c4c5c3"
              strokeWidth="1"
              strokeOpacity="0.45"
            />

            <path
              className="fabrication-seam"
              d="M300 442H575"
              stroke="#c4c5c3"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            {/* Vertical reinforcements */}
            <path
              className="fabrication-seam"
              d="M325 282V442"
              stroke="#c4c5c3"
              strokeOpacity="0.25"
            />

            <path
              className="fabrication-seam"
              d="M550 282V442"
              stroke="#c4c5c3"
              strokeOpacity="0.25"
            />

            {/* Front access panel */}
            <rect
              x="355"
              y="315"
              width="165"
              height="100"
              rx="2"
              fill="#202b30"
              stroke="#a9adaa"
              strokeOpacity="0.5"
            />

            <rect
              x="365"
              y="325"
              width="145"
              height="80"
              stroke="#8f9190"
              strokeOpacity="0.22"
            />

            {/* Panel bolts */}
            <g fill="#8f9190">
              <circle cx="378" cy="338" r="3" />
              <circle cx="497" cy="338" r="3" />
              <circle cx="378" cy="392" r="3" />
              <circle cx="497" cy="392" r="3" />
            </g>

            <text
              x="437"
              y="362"
              textAnchor="middle"
              fill="#a9b0b3"
              fontFamily="Manrope, sans-serif"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.4"
            >
              WELDBROS
            </text>

            <text
              x="437"
              y="380"
              textAnchor="middle"
              fill="#647078"
              fontFamily="Inter, sans-serif"
              fontSize="7"
              letterSpacing="1"
            >
              TRANSFORMER TANK
            </text>

            {/* Small side fittings */}
            <rect
              x="620"
              y="315"
              width="25"
              height="12"
              rx="2"
              fill="#8f9190"
            />

            <rect
              x="620"
              y="350"
              width="18"
              height="10"
              rx="2"
              fill="#717574"
            />

            <rect
              x="620"
              y="385"
              width="25"
              height="12"
              rx="2"
              fill="#8f9190"
            />
          </g>

          {/* =====================================================
              WELD TRACE
          ===================================================== */}

          <path
            className="weld-trace"
            d="M302 282H573V442H302V282Z"
            stroke="#6fa3be"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* =====================================================
              TOP COVER
          ===================================================== */}

          <g className="component">
            <path
              d="M292 215H590L617 238H275L292 215Z"
              fill="url(#tank-top-gradient)"
              stroke="#c4c5c3"
              strokeOpacity="0.75"
            />

            {/* Bolts */}
            <g fill="#252e33">
              {Array.from({ length: 9 }).map((_, index) => (
                <circle
                  key={index}
                  cx={305 + index * 31}
                  cy="231"
                  r="3.5"
                />
              ))}
            </g>
          </g>

          {/* =====================================================
              BUSHING
          ===================================================== */}

          <g className="component">
            <ellipse
              cx="432"
              cy="195"
              rx="25"
              ry="8"
              fill="#182227"
              stroke="#a9adaa"
              strokeOpacity="0.6"
            />

            <path
              d="M413 195V160C413 151 420 146 432 146C444 146 451 151 451 160V195"
              fill="#48545a"
              stroke="#b4b5b2"
              strokeOpacity="0.75"
            />

            <ellipse
              cx="432"
              cy="146"
              rx="19"
              ry="6"
              fill="#8f9190"
              fillOpacity="0.75"
            />

            <circle
              cx="432"
              cy="146"
              r="5"
              fill="#263137"
            />
          </g>

          {/* =====================================================
              LEFT LIFTING LUG
          ===================================================== */}

          <g className="component">
            <path
              d="M295 236V194H322V236"
              stroke="#a9adaa"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <circle
              cx="308"
              cy="196"
              r="7"
              fill="#20292e"
              stroke="#b4b5b2"
              strokeWidth="2"
            />
          </g>

          {/* =====================================================
              RIGHT LIFTING LUG
          ===================================================== */}

          <g className="component">
            <path
              d="M558 236V194H585V236"
              stroke="#a9adaa"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <circle
              cx="571"
              cy="196"
              r="7"
              fill="#20292e"
              stroke="#b4b5b2"
              strokeWidth="2"
            />
          </g>

          {/* =====================================================
              MOUNTING FEET
          ===================================================== */}

          <g className="component">
            <path
              d="M310 480V515H350V480"
              fill="#202a2f"
              stroke="#8f9190"
              strokeOpacity="0.6"
            />

            <path
              d="M545 480V515H585V480"
              fill="#202a2f"
              stroke="#8f9190"
              strokeOpacity="0.6"
            />

            <path
              d="M300 515H360"
              stroke="#a9adaa"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <path
              d="M535 515H595"
              stroke="#a9adaa"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* =====================================================
              FINISHED OUTLINE
          ===================================================== */}

          <path
            className="finished-outline"
            d="M292 215H590L620 260V465L575 485H300L275 465V238L292 215Z"
            stroke="#6fa3be"
            strokeWidth="1"
            strokeDasharray="5 8"
            opacity="0.7"
          />

          {/* =====================================================
              METALLIC LIGHT SWEEP
          ===================================================== */}

          <rect
            className="highlight-sweep"
            x="285"
            y="220"
            width="90"
            height="260"
            fill="url(#metal-highlight)"
            transform="skewX(-8)"
            pointerEvents="none"
          />
        </g>

        {/* =======================================================
            STAGE 02 LABEL
        ======================================================= */}

        <g
          className="stage-label stage-label-02"
          fontFamily="Inter, sans-serif"
        >
          <text
            x="665"
            y="300"
            fill="#a9b0b3"
            fontSize="10"
            letterSpacing="2"
          >
            02 / FABRICATION
          </text>

          <text
            x="665"
            y="320"
            fill="#647078"
            fontSize="9"
            letterSpacing="1.3"
          >
            PANEL ASSEMBLY &amp; WELDING
          </text>

          <path
            d="M665 334H795"
            stroke="#6fa3be"
          />
        </g>

        {/* =======================================================
            STAGE 03 LABEL
        ======================================================= */}

        <g
          className="stage-label stage-label-03"
          fontFamily="Inter, sans-serif"
        >
          <text
            x="100"
            y="470"
            fill="#a9b0b3"
            fontSize="10"
            letterSpacing="2"
          >
            03 / COMPONENT ASSEMBLY
          </text>

          <text
            x="100"
            y="490"
            fill="#647078"
            fontSize="9"
            letterSpacing="1.3"
          >
            FITTINGS &amp; MOUNTING DETAILS
          </text>

          <path
            d="M100 504H245"
            stroke="#6fa3be"
          />
        </g>

        {/* =======================================================
            STAGE 04 LABEL
        ======================================================= */}

        <g
          className="stage-label stage-label-04"
          fontFamily="Inter, sans-serif"
        >
          <text
            x="650"
            y="475"
            fill="#a9b0b3"
            fontSize="10"
            letterSpacing="2"
          >
            04 / FINISHED TANK
          </text>

          <text
            x="650"
            y="495"
            fill="#6fa3be"
            fontSize="9"
            letterSpacing="1.3"
          >
            READY FOR APPLICATION
          </text>
        </g>

        {/* =======================================================
            CALLOUT 01
        ======================================================= */}

        <g
          className="callout"
          fontFamily="Inter, sans-serif"
        >
          <path
            d="M432 146H650L680 125"
            stroke="#6fa3be"
            strokeWidth="1"
          />

          <circle
            cx="432"
            cy="146"
            r="3"
            fill="#6fa3be"
          />

          <text
            x="690"
            y="120"
            fill="#a9b0b3"
            fontSize="9"
            letterSpacing="1.5"
          >
            TOP ASSEMBLY
          </text>

          <text
            x="690"
            y="138"
            fill="#647078"
            fontSize="8"
            letterSpacing="1"
          >
            TRANSFORMER INTERFACE
          </text>
        </g>

        {/* =======================================================
            CALLOUT 02
        ======================================================= */}

        <g
          className="callout"
          fontFamily="Inter, sans-serif"
        >
          <path
            d="M520 365H660L690 385"
            stroke="#6fa3be"
            strokeWidth="1"
          />

          <circle
            cx="520"
            cy="365"
            r="3"
            fill="#6fa3be"
          />

          <text
            x="700"
            y="382"
            fill="#a9b0b3"
            fontSize="9"
            letterSpacing="1.5"
          >
            FABRICATED BODY
          </text>

          <text
            x="700"
            y="400"
            fill="#647078"
            fontSize="8"
            letterSpacing="1"
          >
            APPLICATION-SPECIFIC DESIGN
          </text>
        </g>

        {/* =======================================================
            DIMENSION LINE
        ======================================================= */}

        <g
          className="dimension"
          stroke="#8f9190"
          strokeWidth="1"
        >
          <path d="M275 545H620" />

          <path d="M275 537V553" />
          <path d="M620 537V553" />

          <path d="M275 545L283 541" />
          <path d="M275 545L283 549" />

          <path d="M620 545L612 541" />
          <path d="M620 545L612 549" />
        </g>

        <text
          className="dimension"
          x="447"
          y="568"
          textAnchor="middle"
          fill="#8f9190"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          letterSpacing="2"
        >
          ENGINEERED FABRICATION
        </text>

        {/* =======================================================
            STAGE PROGRESS
        ======================================================= */}

        <g
          className="dimension"
          fontFamily="Inter, sans-serif"
        >
          <text
            x="660"
            y="545"
            fill="#647078"
            fontSize="8"
            letterSpacing="1.5"
          >
            PROCESS
          </text>

          <circle
            className="stage-dot stage-dot-01"
            cx="660"
            cy="562"
            r="3"
            fill="#647078"
          />

          <path
            d="M672 562H700"
            stroke="#647078"
            strokeWidth="1"
          />

          <circle
            className="stage-dot stage-dot-02"
            cx="712"
            cy="562"
            r="3"
            fill="#647078"
          />

          <path
            d="M724 562H752"
            stroke="#647078"
            strokeWidth="1"
          />

          <circle
            className="stage-dot stage-dot-03"
            cx="764"
            cy="562"
            r="3"
            fill="#647078"
          />

          <path
            d="M776 562H804"
            stroke="#647078"
            strokeWidth="1"
          />

          <circle
            className="stage-dot stage-dot-04"
            cx="816"
            cy="562"
            r="3"
            fill="#647078"
          />
        </g>
      </svg>

      {/* Bottom manufacturing indicator */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 border border-white/10 bg-[#1b2429]/80 px-3 py-2 backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-[#6fa3be]" />

        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/60">
          Manufacturing View
        </span>
      </div>
    </div>
  );
}