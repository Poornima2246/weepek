// "use client";

// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// /* ---------- content ---------- */
// const EYEBROW = "ABOUT WEEPEK";
// const PAGE_TAG = "ABOUT Us";

// const HEADLINE = ["SMALL STUDIO", "BIG DETAILS"];

// const COPY =
//   "We're not here to make more noise. We're here to make things matter.";

// const STEPS = [
//   {
//     no: "01",
//     title: "DISCOVER",
//     description: "Listen first.",
//   },
//   {
//     no: "02",
//     title: "DESIGN",
//     description: "Craft with intent.",
//   },
//   {
//     no: "03",
//     title: "DEVELOP",
//     description: "Build it right.",
//   },
//   {
//     no: "04",
//     title: "SCALE",
//     description: "Grow together.",
//   },
// ];

// const FOOT_LINE = "BUILT WITH INTENTION.";
// const CTA = "START PROJECT";
// const CTA_HREF = "#contact";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";
// const PURPLE_SOFT = "#a78bfa";

// export default function WeepekAbout() {
//   return (
//     <section
//       id="about"
//       className="relative w-full overflow-hidden px-6 py-20 text-white md:px-10 md:py-28 lg:px-16"
//     >
//       <div className="relative mx-auto max-w-[1600px]">

//         {/* ==========================================
//             TOP META
//         ========================================== */}
//         <div className="flex items-center justify-between">
//           {/* <p
//             className="font-[NeueRegular] text-[11px] font-semibold tracking-[0.3em] md:text-xs"
//             style={{ color: ORANGE }}
//           >
//             {EYEBROW}
//           </p> */}

//           <span className="font-[NeueRegular] text-[11px] tracking-[0.2em] text-white/40 md:text-xs">
//             {PAGE_TAG}
//           </span>
//         </div>

//         {/* ==========================================
//             HERO TYPOGRAPHY
//         ========================================== */}
//         <div className="relative mt-14 md:mt-20">

//           {/* Main headline */}
//           <div className="relative">

//             <h2 className="font-[bolteSemiBold] text-[clamp(3.5rem,9vw,10rem)] leading-[0.95] tracking-[-0.055em]">
//               {HEADLINE[0]}
//             </h2>

//             <div className="relative mt-2 flex items-start gap-3 md:mt-4 md:gap-8">

//               <h2
//                 className="font-[bolte] text-[clamp(3.5rem,9vw,10rem)] italic leading-[0.95] tracking-[-0.055em]"
//                 style={{ color: ORANGE }}
//               >
//                 {HEADLINE[1]}
//               </h2>

//               <ArrowUpRight
//                 className="mt-2 h-7 w-7 shrink-0 md:mt-5 md:h-14 md:w-14 lg:h-20 lg:w-20"
//                 strokeWidth={1.2}
//                 style={{ color: ORANGE }}
//               />

//             </div>
//           </div>

//           {/* Centered statement */}
//           <div className="mt-14 flex justify-center md:mt-20 lg:mt-24">
//             <p className="max-w-[620px] text-center font-[NeueRegular] text-xl leading-[1.5] tracking-[-0.02em] text-white/65 md:text-2xl lg:text-[30px]">
//               {COPY}
//             </p>
//           </div>

//         </div>

//         {/* ==========================================
//             TOP DIVIDER
//         ========================================== */}
//         <div className="mt-20 h-px w-full bg-white/20 md:mt-28" />

//         {/* ==========================================
//             PROCESS GRID
//         ========================================== */}
//         <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-12 md:grid-cols-4 md:gap-x-10 md:py-16 lg:gap-x-16">

//           {STEPS.map((step) => (
//             <div
//               key={step.no}
//               className="group relative flex flex-col"
//             >

//               {/* Step heading */}
//               <div className="flex items-baseline gap-2 md:gap-3">

//                 <span
//                   className="font-[NeueRegular] text-xs tracking-[0.08em] md:text-sm"
//                   style={{ color: PURPLE_SOFT }}
//                 >
//                   {step.no}
//                 </span>

//                 <span className="text-white/30">/</span>

//                 <h3 className="font-[bolteSemiBold] text-base tracking-[0.02em] md:text-lg lg:text-xl">
//                   {step.title}
//                 </h3>

//               </div>

//               {/* Animated underline */}
//               <div className="relative mt-5 h-px w-full overflow-hidden bg-white/20">

//                 <span
//                   className="absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover:w-full"
//                   style={{ backgroundColor: ORANGE }}
//                 />

//               </div>

//               {/* Description */}
//               <p className="mt-5 font-[NeueRegular] text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/80 md:text-base">
//                 {step.description}
//               </p>

//             </div>
//           ))}

//         </div>

//         {/* ==========================================
//             BOTTOM DIVIDER
//         ========================================== */}
//         <div className="h-px w-full bg-white/20" />

//         {/* ==========================================
//             FOOTER CTA
//         ========================================== */}
//         <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center md:mt-14">

//           <p className="font-[bolteSemiBold] text-xs tracking-[0.2em] text-white/70 md:text-sm">
//             {FOOT_LINE}
//           </p>

//           <a
//             href={CTA_HREF}
//             className="group inline-flex items-center justify-center gap-5 rounded-full border border-white bg-white px-7 py-4 font-[NeueRegular] text-xs font-semibold tracking-[0.12em] text-black transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white md:px-9 md:text-sm"
//           >
//             {CTA}

//             <ArrowUpRight
//               size={18}
//               strokeWidth={1.8}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }

 


// "use client";

// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// /* ---------- content ---------- */
// const EYEBROW = "ABOUT WEEPEK";
// const PAGE_TAG = "A BIT ABOUT US ";

// const HEADLINE = ["SMALL STUDIO", "BIG DETAILS"];

// const COPY =
//   "We're not here to make more noise. We're here to make things matter.";

// const STORY_COPY =
//   "Weepek was started with one idea: businesses deserve work that feels crafted, not assembled. No layers, no handoffs.";

// const STEPS = [
//   {
//     no: "01",
//     title: "DISCOVER",
//     description: "Listen first.",
//   },
//   {
//     no: "02",
//     title: "DESIGN",
//     description: "Craft with intent.",
//   },
//   {
//     no: "03",
//     title: "DEVELOP",
//     description: "Build it right.",
//   },
//   {
//     no: "04",
//     title: "SCALE",
//     description: "Grow together.",
//   },
// ];

// const FOOT_LINE = "BUILT WITH INTENTION.";
// const CTA = "START PROJECT";
// const CTA_HREF = "#contact";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";
// const PURPLE_SOFT = "#a78bfa";

// export default function WeepekAbout() {
//   return (
//     <section
//       id="about"
//       className="relative w-full overflow-hidden px-6 py-20 text-white md:px-10 md:py-10 lg:px-14"
//     >
//       <div className="relative mx-auto  w-9xl">

//         {/* ==========================================
//             TOP META
//         ========================================== */}
//         <div className="flex items-center justify-end">
//           <span className="font-[NeueRegular] text-[10px] tracking-[0.2em] text-white/40 md:text-xs">
//             {PAGE_TAG}
//           </span>
//         </div>

//         {/* ==========================================
//             HERO: HEADLINE LEFT / STORY RIGHT
//         ========================================== */}
//         <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-12 md:gap-8 lg:mt-28 lg:gap-12">

//           {/* LEFT: HEADLINE */}
//           <div className="md:col-span-7">
//             <div className="flex flex-col items-start">

//               <h2 className="font-[bolteSemiBold] text-[clamp(3.3rem,8.8vw,9.5rem)] leading-[0.88] tracking-[-0.06em]">
//                 {HEADLINE[0]}
//               </h2>

//               <div className="mt-3 flex items-start gap-2 sm:gap-4 md:mt-5">

//                 <h2
//                   className="font-[bolte] text-[clamp(3.3rem,8.8vw,9.5rem)] italic leading-[0.88] tracking-[-0.065em]"
//                   style={{ color: ORANGE }}
//                 >
//                   {HEADLINE[1]}
//                 </h2>

//                 <ArrowUpRight
//                   className="mt-1 h-7 w-7 shrink-0 sm:h-9 sm:w-9 md:mt-3 md:h-12 md:w-12 lg:mt-5 lg:h-16 lg:w-16"
//                   strokeWidth={1.2}
//                   style={{ color: ORANGE }}
//                 />

//               </div>
//             </div>
//           </div>

//           {/* RIGHT: TWO PARAGRAPHS */}
//           <div className="flex flex-col justify-end md:col-span-5 md:pb-2 lg:pb-4">

//             {/* First paragraph */}
//             <p className="max-w-[480px] font-[NeueRegular] text-xl leading-[1.5] tracking-[-0.025em] text-white/75 sm:text-2xl lg:text-[clamp(1.5rem,2.1vw,2rem)]">
//               {COPY}
//             </p>

//             {/* Divider */}
//             <div className="my-8 h-px w-full max-w-[460px] bg-white/20 md:my-9 lg:my-11">
//               <span
//                 className="block h-px w-1/4"
//                 style={{ backgroundColor: ORANGE }}
//               />
//             </div>

//             {/* Second paragraph */}
//             <p className="max-w-[440px] font-[NeueRegular] text-sm leading-[1.9] tracking-[0.005em] text-white/45 sm:text-base lg:text-lg">
//               {STORY_COPY}
//             </p>

//           </div>
//         </div>

//         {/* ==========================================
//             TOP DIVIDER
//         ========================================== */}
//         {/* <div className="mt-20 h-px w-full bg-white/20 md:mt-28 lg:mt-32" /> */}

//         {/* ==========================================
//             PROCESS GRID
//         ========================================== */}
//         <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:gap-x-8 md:grid-cols-4 md:gap-x-10 md:py-14 lg:gap-x-16 lg:py-16">

//           {STEPS.map((step) => (
//             <div
//               key={step.no}
//               className="group relative flex flex-col"
//             >

//               {/* Step heading */}
//               <div className="flex items-baseline gap-2 md:gap-3">

//                 <span
//                   className="font-[NeueRegular] text-xs tracking-[0.08em] md:text-sm"
//                   style={{ color: PURPLE_SOFT }}
//                 >
//                   {step.no}
//                 </span>

//                 <span className="text-white/30">/</span>

//                 <h3 className="font-[bolteSemiBold] text-sm tracking-[0.02em] sm:text-base md:text-lg lg:text-xl">
//                   {step.title}
//                 </h3>

//               </div>

//               {/* Animated underline */}
//               <div className="relative mt-5 h-px w-full overflow-hidden bg-white/20">

//                 <span
//                   className="absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover:w-full"
//                   style={{ backgroundColor: ORANGE }}
//                 />

//               </div>

//               {/* Description */}
//               <p className="mt-5 font-[NeueRegular] text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/80 md:text-base">
//                 {step.description}
//               </p>

//             </div>
//           ))}

//         </div>

//         {/* ==========================================
//             BOTTOM DIVIDER
//         ========================================== */}
//         {/* <div className="h-px w-full bg-white/20" /> */}

      

//       </div>
//     </section>
//   );
// }
 



"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------- content ---------- */

const EYEBROW = "ABOUT WEEPEK";
const PAGE_TAG = "A BIT ABOUT US ";

const HEADLINE = ["STUDIO WITH", "BIG DETAILS"];

const COPY =
  "We're not here to make more noise. We're here to make things matter.";

const STORY_COPY =
  "Weepek was started with one idea: businesses deserve work that feels crafted, not assembled. No layers, no handoffs.";

const STEPS = [
  {
    no: "01",
    title: "DISCOVER",
    description: "Listen first.",
  },
  {
    no: "02",
    title: "DESIGN",
    description: "Craft with intent.",
  },
  {
    no: "03",
    title: "DEVELOP",
    description: "Build it right.",
  },
  {
    no: "04",
    title: "SCALE",
    description: "Grow together.",
  },
];

const FOOT_LINE = "BUILT WITH INTENTION.";
const CTA = "START PROJECT";
const CTA_HREF = "#contact";

/* ---------- palette ---------- */

const ORANGE = "#f97316";
const PURPLE_SOFT = "#a78bfa";

export default function WeepekAbout() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Respect the user's reduced-motion preference.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      /* ==========================================
         1. TOP LABEL
      ========================================== */

      gsap.fromTo(
        "[data-about-meta]",
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* ==========================================
         2. HERO HEADLINE
      ========================================== */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      heroTimeline
        .fromTo(
          "[data-about-headline-one]",
          {
            opacity: 0,
            y: 55,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          }
        )
        .fromTo(
          "[data-about-headline-two]",
          {
            opacity: 0,
            y: 55,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .fromTo(
          "[data-about-arrow]",
          {
            opacity: 0,
            rotation: -35,
            scale: 0.75,
          },
          {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.7)",
          },
          "-=0.55"
        );

      /* ==========================================
         3. RIGHT CONTENT
      ========================================== */

      gsap.fromTo(
        "[data-about-copy]",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-copy]",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Divider expands from left to right.
      gsap.fromTo(
        "[data-about-divider]",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.85,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "[data-about-divider]",
            start: "top 90%",
            once: true,
          },
        }
      );

      // Orange accent reveal.
      gsap.fromTo(
        "[data-about-accent]",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.65,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-divider]",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-about-story]",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-story]",
            start: "top 88%",
            once: true,
          },
        }
      );

      /* ==========================================
         4. PROCESS GRID
      ========================================== */

      const processItems = gsap.utils.toArray(
        "[data-about-step]",
        section
      );

      gsap.fromTo(
        processItems,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-process]",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-20 text-white md:px-10 md:py-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-[1600px]">

        {/* ==========================================
            TOP META
        ========================================== */}

        <div
          data-about-meta
          className="flex items-center justify-end"
        >
          <span className="font-[NeueRegular] text-[10px] tracking-[0.2em] text-white/40 md:text-xs">
            {PAGE_TAG}
          </span>
        </div>

        {/* ==========================================
            HERO: HEADLINE LEFT / STORY RIGHT
        ========================================== */}

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-12 md:gap-8 lg:mt-28 lg:gap-12">

          {/* LEFT: HEADLINE */}

          <div className="md:col-span-7">
            <div className="flex flex-col items-start">

              <h2
                data-about-headline-one
                className="font-[bolteSemiBold] text-[clamp(3.3rem,7vw,9.5rem)] leading-[0.88] tracking-[-0.06em]"
              >
                {HEADLINE[0]}
              </h2>

              <div className="mt-3 flex items-start gap-2 sm:gap-4 md:mt-5">

                <h2
                  data-about-headline-two
                  className="font-[bolteSemiBold] text-[clamp(3.3rem,8.8vw,9.5rem)] italic leading-[0.88] tracking-[-0.065em]"
                  style={{ color: ORANGE }}
                >
                  {HEADLINE[1]}
                </h2>

                <ArrowUpRight
                  data-about-arrow
                  className="mt-1 h-7 w-7 shrink-0 sm:h-9 sm:w-9 md:mt-3 md:h-12 md:w-12 lg:mt-5 lg:h-16 lg:w-16"
                  strokeWidth={1.2}
                  style={{ color: ORANGE }}
                />

              </div>
            </div>
          </div>

          {/* RIGHT: TWO PARAGRAPHS */}

          <div className="flex flex-col justify-end md:col-span-5 md:pb-2 lg:pb-4">

            {/* First paragraph */}

            <p
              data-about-copy
              className="max-w-[480px] font-[NeueRegular] text-xl leading-[1.5] tracking-[-0.025em] text-white/75 sm:text-2xl lg:text-[clamp(1.5rem,2.1vw,2rem)]"
            >
              {COPY}
            </p>

            {/* Divider */}

            <div
              data-about-divider
              className="my-8 h-px w-full max-w-[460px] bg-white/20 md:my-9 lg:my-11"
            >
              <span
                data-about-accent
                className="block h-px w-1/4"
                style={{ backgroundColor: ORANGE }}
              />
            </div>

            {/* Second paragraph */}

            <p
              data-about-story
              className="max-w-[440px] font-[NeueRegular] text-sm leading-[1.9] tracking-[0.005em] text-white/45 sm:text-base lg:text-lg"
            >
              {STORY_COPY}
            </p>

          </div>
        </div>

        {/* ==========================================
            PROCESS GRID
        ========================================== */}

        <div
          data-about-process
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:gap-x-8 md:grid-cols-4 md:gap-x-10 md:py-14 lg:gap-x-16 lg:py-16"
        >

          {STEPS.map((step) => (
            <div
              key={step.no}
              data-about-step
              className="group relative flex flex-col"
            >

              {/* Step heading */}

              <div className="flex items-baseline gap-2 md:gap-3">

                <span
                  className="font-[NeueRegular] text-xs tracking-[0.08em] md:text-sm"
                  style={{ color: PURPLE_SOFT }}
                >
                  {step.no}
                </span>

                <span className="text-white/30">/</span>

                <h3 className="font-[bolteSemiBold] text-sm tracking-[0.02em] sm:text-base md:text-lg lg:text-xl">
                  {step.title}
                </h3>

              </div>

              {/* Existing hover underline */}

              <div className="relative mt-5 h-px w-full overflow-hidden bg-white/20">

                <span
                  className="absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover:w-full"
                  style={{ backgroundColor: ORANGE }}
                />

              </div>

              {/* Description */}

              <p className="mt-5 font-[NeueRegular] text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/80 md:text-base">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}