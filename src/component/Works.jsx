// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// import lap from "../assets/lap.jpg";
// import lap1 from "../assets/lap1.jpg";
// import lap2 from "../assets/lap2.jpg";
// import lap3 from "../assets/lap3.jpg";
// import Poster from "../assets/poster1.jpg";
// import Poster1 from "../assets/poster2.jpg";

// gsap.registerPlugin(ScrollTrigger);

// // Add/remove projects here. The stage and navigation update automatically.
// // const slides = [
// //   { id: "rhea", number: "01", label: "RHEA JEWELS", type: "Web", category: "WEB · 2025", titleLine1: "Rhea", titleLine2: "Jewels", desc: "An elegant digital storefront designed to make every piece feel as precious as it is. Refined visuals, seamless browsing, and a shopping experience built to turn admiration into action. +62% leads.", cta: "View the work", href: "#work-01", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80" },
// //   { id: "blur", number: "02", label: "BLUR STUDIO", type: "Brand", category: "BRAND · 2025", titleLine1: "Blur", titleLine2: "Studio", desc: "We don't follow templates. We architect from first principles — fast, accessible, and unmistakably yours. A complete brand overhaul from the ground up.", cta: "Discover", href: "#work-02", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80" },
// //   { id: "white", number: "03", label: "WHITE ROOM", type: "App", category: "APP · 2025", titleLine1: "White", titleLine2: "Room", desc: "Motion, typography, timing — the invisible things that make the experience feel inevitable. A spatial computing app designed for focus.", cta: "View work", href: "#work-03", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600&q=80" },
// //   { id: "north", number: "04", label: "NORTH AVENUE", type: "SEO", category: "SEO · 2025", titleLine1: "North", titleLine2: "Avenue", desc: "From zero to launch and every iteration after — we stay in the room until it's right. A comprehensive SEO strategy that doubled organic reach.", cta: "Let's talk", href: "#contact", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=80" },
// // ];

// const slides = [
//   {
//     id: "rhea",
//     number: "01",
//     label: "RHEA JEWELS",
//     type: "Web",
//     category: "WEB · 2025",
//     titleLine1: "Rhea",
//     titleLine2: "Jewels",
//     desc:
//       "An elegant digital storefront designed to make every piece feel as precious as it is. Refined visuals, seamless browsing, and a shopping experience built to turn admiration into action. +62% leads.",
//     cta: "View the work",
//     href: "#work-01",
//     image: web
//   },
//   {
//     id: "blur",
//     number: "02",
//     label: "BLUR STUDIO",
//     type: "Brand",
//     category: "BRAND · 2025",
//     titleLine1: "Blur",
//     titleLine2: "Studio",
//     desc:
//       "A distinctive visual identity built for a studio that refuses to blend in. From its visual language to its smallest details, every element works together to create a brand that feels bold, consistent, and impossible to overlook.",
//     cta: "View the work",
//     href: "#work-02",
//     image: web1
//   },
//   {
//     id: "white",
//     number: "03",
//     label: "WHITE ROOM",
//     type: "App",
//     category: "APP · 2024",
//     titleLine1: "White",
//     titleLine2: "Room",
//     desc:
//       "A quieter, more considered approach to the booking experience. Clean interfaces, effortless navigation, and thoughtful interactions remove the friction from every visit, giving users more reasons to return. +48% repeat bookings.",
//     cta: "View the work",
//     href: "#work-03",
//     image: Branding
//   },
//   {
//     id: "north",
//     number: "04",
//     label: "NORTH AVENUE",
//     type: "SEO",
//     category: "SEO · 2025",
//     titleLine1: "North",
//     titleLine2: "Avenue",
//     desc:
//       "A search strategy designed to put the brand where its audience is already looking. Through focused keyword targeting, technical refinement, and content optimisation, we turned online visibility into a stronger digital presence.",
//     cta: "View the work",
//     href: "#work-04",
//     image: Branding1
//   },
//   {
//     id: "your-turn",
//     number: "05",
//     label: "YOUR TURN",
//     type: "Your turn",
//     category: "YOUR TURN",
//     titleLine1: "Make it",
//     titleLine2: "unforgettable",
//     desc:
//       "Every great project starts with an idea worth exploring. Whether you're building something new or reimagining what already exists, let's create something meaningful, distinctive, and impossible to ignore. Your next chapter starts here.",
//     cta: "Start a project",
//     href: "#contact",
//     image: white3
//   }
// ];

// const COLORS = {
//   bg: "#0b0613",
//   orange: "#f97316",
//   accent: "#ed710c",
//   purpleSoft: "#a78bfa",
//   white: "#ffffff"
// };

// const TOTAL_DISPLAY = "05"; // Screenshot uses 05. Set to String(slides.length).padStart(2,"0") if preferred.

// export default function StickyShowcase() {
//   const sectionRef = useRef(null);
//   const heroRef = useRef(null);
//   const stageRef = useRef(null);
//   const stageBgRef = useRef(null);
//   const imageWrapRef = useRef(null);
//   const progressRef = useRef(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     if (!section || !slides.length) return;
//     const ctx = gsap.context(() => {
//       const images = gsap.utils.toArray("[data-slide-image]", section);
//       const contents = gsap.utils.toArray("[data-slide-content]", section);
//       const navRows = gsap.utils.toArray("[data-project-row]", section);
//       const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
//         .matches;
//       const N = slides.length;
//       const timeline = gsap.timeline({
//         defaults: { ease: "power2.inOut" },
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: () => `+=${(N + 0.5) * window.innerHeight}`,
//           scrub: reduced ? true : 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true
//         }
//       });

//       // Stage exists beneath the hero from frame one; only its backdrop + image fade in on scroll.
//       gsap.set(stageRef.current, { autoAlpha: 1 });
//       gsap.set(stageBgRef.current, { opacity: 0 });
//       gsap.set(imageWrapRef.current, { opacity: 0 });
//       gsap.set(imageWrapRef.current, {
//         width: "100%",
//         height: "100%",
//         xPercent: -50,
//         yPercent: -50,
//         borderRadius: 0
//       });
//       images.forEach((el, i) =>
//         gsap.set(el, {
//           autoAlpha: i === 0 ? 1 : 0,
//           clipPath: "inset(0% 0% 0% 0%)",
//           scale: 1
//         })
//       );
//       contents.forEach(el => {
//         gsap.set(el, { autoAlpha: 0 });
//         gsap.set(el.querySelectorAll("[data-stagger]"), {
//           autoAlpha: 0,
//           y: 32
//         });
//       });
//       gsap.set(progressRef.current, {
//         scaleY: 0,
//         transformOrigin: "top center"
//       });

//       // Initial screenshot stays completely visible until the user scrolls.
//       timeline.to(heroRef.current, { autoAlpha: 0, y: -28, duration: 0.48 }, 0);
//       timeline.to(
//         stageBgRef.current,
//         { opacity: 1, duration: 0.65, ease: "power2.out" },
//         0.05
//       );
//       timeline.to(
//         imageWrapRef.current,
//         { opacity: 1, duration: 0.65, ease: "power2.out" },
//         0.05
//       );
//       // Final frame: image spans x 1.1% → 53.5%, y 2% → 98% (matches reference screenshot).
//       // w- 52.4%  h-96%
//       timeline.to(
//         imageWrapRef.current,
//         {
//           width: () => (window.innerWidth < 768 ? "88%" : "52.4%"),
//           height: () => (window.innerWidth < 768 ? "45%" : "96%"),
//           xPercent: () => (window.innerWidth < 768 ? -50 : -93.3),
//           yPercent: -50,
//           borderRadius: 18,
//           duration: 1
//         },
//         0
//       );
//       timeline.to(progressRef.current, { scaleY: 1 / N, duration: 1 }, 0);
//       timeline.to(contents[0], { autoAlpha: 1, duration: 0.15 }, 0.45);
//       timeline.to(
//         contents[0].querySelectorAll("[data-stagger]"),
//         { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.48 },
//         0.45
//       );

//       for (let i = 0; i < N - 1; i++) {
//         const at = i + 1;
//         const next = images[i + 1];
//         const current = contents[i];
//         const following = contents[i + 1];
//         timeline.to(
//           current.querySelectorAll("[data-stagger]"),
//           { autoAlpha: 0, y: -24, stagger: 0.035, duration: 0.3 },
//           at
//         );
//         timeline.to(current, { autoAlpha: 0, duration: 0.2 }, at + 0.3);
//         timeline.fromTo(
//           next,
//           { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)", scale: 1.08 },
//           { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 0.85 },
//           at
//         );
//         timeline.set(images[i], { autoAlpha: 0 }, at + 0.86);
//         timeline.to(following, { autoAlpha: 1, duration: 0.12 }, at + 0.32);
//         timeline.fromTo(
//           following.querySelectorAll("[data-stagger]"),
//           { autoAlpha: 0, y: 32 },
//           { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.45 },
//           at + 0.32
//         );
//         timeline.to(
//           progressRef.current,
//           { scaleY: (i + 2) / N, duration: 0.8 },
//           at
//         );
//       }

//       // Keep the project list decorative, just like the reference screenshot.
//       navRows.forEach((row, i) => {
//         if (i === 0) return;
//         timeline.to(
//           navRows[i - 1],
//           { color: "rgba(255,255,255,.46)", duration: 0.15 },
//           i
//         );
//         timeline.to(row, { color: COLORS.orange, duration: 0.15 }, i);
//       });
//     }, section);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate h-[100svh] min-h-[580px] w-full overflow-hidden   text-white"
//     >
//       {/* Initial hero: matches the supplied screenshot */}
//       <div ref={heroRef} className="absolute inset-0 z-30">
//         <div className="absolute left-6 right-6 top-8 flex items-center justify-between md:left-12 md:right-12 md:top-6">
//           <p
//             className="text-[10px] font-semibold uppercase tracking-[0.3em] md:text-xs"
//             style={{ color: COLORS.orange }}
//           >
//             SELECTED WORK
//           </p>
//           <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-xs">
//             2025 – Yours Next
//           </p>
//         </div>

//         <div className="absolute inset-x-0 top-[45.5%] flex -translate-y-1/2 flex-col items-center px-4 text-center sm:top-[45%]">
//           <h1 className="text-[clamp(3.5rem,10vw,9.5rem)] font-semibold leading-[0.92]  ">
//             <span className="block font-[bolteSemiBold]">We quietly</span>
//             <span className="block font-[bolteSemiBold] italic text-[#ed710c]">
//               obsessed
//             </span>
//           </h1>
//         </div>

//         <div className="absolute bottom-10 left-6 w-[min(300px,60vw)] md:bottom-16 md:left-12">
//           {slides.map((s, i) =>
//             <div
//               key={s.id}
//               className="flex h-[34px] items-center justify-between gap-2 border-t border-white/15   text-[10px]  tracking-[0.2em] sm:text-[12px]"
//               style={{
//                 color: i === 0 ? COLORS.orange : "rgba(255,255,255,.46)"
//               }}
//               data-project-row
//             >
//               <div className="flex  items-center gap-5">
//                 <span
//                   className="text-[10px]"
//                   style={{ color: i === 0 ? COLORS.orange : COLORS.purpleSoft }}
//                 >
//                   {s.number}
//                 </span>
//                 <span className="truncate">
//                   {s.label}
//                 </span>
//               </div>

//               <span className="shrink-0 text-[10px] normal-case tracking-[0.2em] text-white/40">
//                 {s.type}
//               </span>
//             </div>
//           )}
//           <div className="h-px bg-white/15" />
//         </div>

//         <div className="absolute bottom-[10.7%] right-[2.6%] text-right">
//           <div
//             className="font-black text-[clamp(5rem,12vw,12.5rem)] leading-[.8] tracking-[-.075em] text-transparent"
//             style={{ WebkitTextStroke: "1px rgba(160,117,218,.37)" }}
//           >
//             {TOTAL_DISPLAY}
//           </div>

//           <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-xs">
//             PROJECTS · NOTHING ORDINARY
//           </div>
//         </div>
//       </div>

//       {/* Vertical accent indicator */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[1.1%] top-1/2 z-40 hidden h-[112px] w-px -translate-y-1/2 bg-white/20 md:block"
//       >
//         <div ref={progressRef} className="h-full w-full bg-[#f47700]" />
//       </div>

//       {/* Stage appears as the hero scales into a left-aligned project image */}
//       <div ref={stageRef} className="absolute inset-0 z-20">
//         {/* Stage backdrop: deep violet atmosphere (fades in with the image) */}
//         <div
//           ref={stageBgRef}
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 z-0  "
//         >
//           <div className="absolute inset-0" />
//         </div>

//         <div
//           ref={imageWrapRef}
//           className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#120b1d] will-change-transform"
//         >
//           {slides.map(s =>
//             <img
//               key={s.id}
//               data-slide-image
//               src={s.image}
//               alt={s.label}
//               className="absolute inset-0 h-full w-full object-cover will-change-transform"
//             />
//           )}
//           <div className="pointer-events-none absolute inset-0 bg-black/25" />
//         </div>

//         {/* Content column: x 57.3% → 93.4% on desktop */}
//         <div className="pointer-events-none absolute inset-x-[6%] bottom-[3%] top-[54%] z-20 md:bottom-[90px] md:left-[57.3%] md:right-[6.6%] md:top-10">
//           <div className="relative h-full w-full">
//             {slides.map(s =>
//               <article
//                 key={s.id}
//                 data-slide-content
//                 className="invisible absolute inset-0 flex flex-col justify-center overflow-hidden md:justify-start"
//               >
//                 {/* Top meta row */}
//                 <div className="mb-3 flex items-center gap-3 md:mb-0 md:gap-5 md:pt-[7%]">
//                   <span
//                     data-stagger
//                     className=" font-black text-2xl leading-none text-transparent md:text-[3.2rem]"
//                     style={{ WebkitTextStroke: "1px rgba(167,139,250,.5)" }}
//                   >
//                     {s.number}
//                   </span>

//                   <span
//                     data-stagger
//                     className="text-[10px] font-semibold uppercase tracking-[0.3em]"
//                     style={{ color: COLORS.orange }}
//                   >
//                     {s.category}
//                   </span>
//                 </div>

//                 {/* Title / description / CTA — anchored low, like the reference */}
//                 <div className="md:mb-[7%] md:mt-auto">
//                   <div className="mb-3 md:mb-8">
//                     <h2
//                       data-stagger
//                       className="font-[bolteSemiBold] text-[clamp(2.7rem,5.2vw,6.5rem)] leading-[.88] tracking-[-.05em] "
//                     >
//                       {s.titleLine1}
//                     </h2>

//                     <h2
//                       data-stagger
//                       className=" font-[bolte] italic font-semibold text-[clamp(2.7rem,5.2vw,6.5rem)] italic leading-[.94] tracking-[-.05em]  "
//                       style={{ color: COLORS.orange }}
//                     >
//                       {s.titleLine2}
//                     </h2>
//                   </div>
//                   <p
//                     data-stagger
//                     className="mb-4 max-w-[440px] font-[NeueRegular] text-[11px]  md:text-base leading-relaxed"
//                     style={{ color: "rgba(255,255,255,0.6)" }}
//                   >
//                     {s.desc}
//                   </p>

//                   {/* <div data-stagger>
//                     <a href={s.href} className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]">
//                       {s.cta}
//                       <ArrowUpRight className="h-4 w-4" style={{ color: COLORS.orange }} />
//                     </a>
//                   </div> */}

//                   <div data-stagger>
//                     <Link
//                       to={`/works/${s.id}`}
//                       state={{ slide: s }} // 👈 full slide object pass
//                       className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
//                     >
//                       {s.cta}
//                       <ArrowUpRight
//                         className="h-4 w-4"
//                         style={{ color: COLORS.orange }}
//                       />
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Footer: hairline with bright segment + tagline / counter */}
//                 <div data-stagger className="hidden pb-[4%] md:block">
//                   <div className="relative h-px w-full bg-white/20">
//                     <span className="absolute left-0 top-0 h-px w-[40%] bg-white/60" />
//                   </div>
//                   <div className="mt-4 flex justify-between font-[NeueRegular] text-[9px] tracking-[.18em] text-white/40 md:text-[10px]">
//                     <span>SMALL STUDIO, BIG DETAILS</span>
//                     <span className="tracking-[.08em]">
//                       {s.number} / {TOTAL_DISPLAY}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { slides, TOTAL_DISPLAY } from "../data/slides"; // ← common file

gsap.registerPlugin(ScrollTrigger);

const COLORS = {
  bg: "#0b0613",
  orange: "#f97316",
  accent: "#ed710c",
  purpleSoft: "#a78bfa",
  white: "#ffffff"
};

export default function StickyShowcase() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const stageBgRef = useRef(null);
  const imageWrapRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !slides.length) return;

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray("[data-slide-image]", section);
      const contents = gsap.utils.toArray("[data-slide-content]", section);
      const navRows = gsap.utils.toArray("[data-project-row]", section);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;
      const N = slides.length;

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${(N + 0.5) * window.innerHeight}`,
          scrub: reduced ? true : 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      gsap.set(stageRef.current, { autoAlpha: 1 });
      gsap.set(stageBgRef.current, { opacity: 0 });
      gsap.set(imageWrapRef.current, { opacity: 0 });
      gsap.set(imageWrapRef.current, {
        width: "100%",
        height: "100%",
        xPercent: -50,
        yPercent: -50,
        borderRadius: 0
      });

      images.forEach((el, i) =>
        gsap.set(el, {
          autoAlpha: i === 0 ? 1 : 0,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1
        })
      );

      contents.forEach(el => {
        gsap.set(el, { autoAlpha: 0 });
        gsap.set(el.querySelectorAll("[data-stagger]"), {
          autoAlpha: 0,
          y: 32
        });
      });

      gsap.set(progressRef.current, {
        scaleY: 0,
        transformOrigin: "top center"
      });

      timeline.to(heroRef.current, { autoAlpha: 0, y: -28, duration: 0.48 }, 0);
      timeline.to(
        stageBgRef.current,
        { opacity: 1, duration: 0.65, ease: "power2.out" },
        0.05
      );
      timeline.to(
        imageWrapRef.current,
        { opacity: 1, duration: 0.65, ease: "power2.out" },
        0.05
      );

      timeline.to(
        imageWrapRef.current,
        {
          width: () => (window.innerWidth < 768 ? "88%" : "52.4%"),
          height: () => (window.innerWidth < 768 ? "45%" : "96%"),
          xPercent: () => (window.innerWidth < 768 ? -50 : -93.3),
          yPercent: -50,
          borderRadius: 18,
          duration: 1
        },
        0
      );

      timeline.to(progressRef.current, { scaleY: 1 / N, duration: 1 }, 0);
      timeline.to(contents[0], { autoAlpha: 1, duration: 0.15 }, 0.45);
      timeline.to(
        contents[0].querySelectorAll("[data-stagger]"),
        { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.48 },
        0.45
      );

      for (let i = 0; i < N - 1; i++) {
        const at = i + 1;
        const next = images[i + 1];
        const current = contents[i];
        const following = contents[i + 1];

        timeline.to(
          current.querySelectorAll("[data-stagger]"),
          { autoAlpha: 0, y: -24, stagger: 0.035, duration: 0.3 },
          at
        );
        timeline.to(current, { autoAlpha: 0, duration: 0.2 }, at + 0.3);

        timeline.fromTo(
          next,
          { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)", scale: 1.08 },
          { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 0.85 },
          at
        );

        timeline.set(images[i], { autoAlpha: 0 }, at + 0.86);
        timeline.to(following, { autoAlpha: 1, duration: 0.12 }, at + 0.32);
        timeline.fromTo(
          following.querySelectorAll("[data-stagger]"),
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.45 },
          at + 0.32
        );
        timeline.to(
          progressRef.current,
          { scaleY: (i + 2) / N, duration: 0.8 },
          at
        );
      }

      navRows.forEach((row, i) => {
        if (i === 0) return;
        timeline.to(
          navRows[i - 1],
          { color: "rgba(255,255,255,.46)", duration: 0.15 },
          i
        );
        timeline.to(row, { color: COLORS.orange, duration: 0.15 }, i);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[100svh] min-h-[580px] w-full overflow-hidden text-white"
    >
      {/* Initial hero */}
      <div ref={heroRef} className="absolute inset-0 z-30">
        <div className="absolute left-6 right-6 top-8 flex items-center justify-between md:left-12 md:right-12 md:top-6">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.3em] md:text-xs"
            style={{ color: COLORS.orange }}
          >
            SELECTED WORK
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-xs">
            2025 – Yours Next
          </p>
        </div>

        <div className="absolute inset-x-0 top-[45.5%] flex -translate-y-1/2 flex-col items-center px-4 text-center sm:top-[45%]">
          <h1 className="text-[clamp(3.5rem,10vw,9.5rem)] font-semibold leading-[0.92]">
            <span className="block font-[bolteSemiBold]">We quietly</span>
            <span className="block font-[bolteSemiBold] italic text-[#ed710c]">
              obsessed
            </span>
          </h1>
        </div>

        <div className="absolute bottom-10 left-6 w-[min(300px,60vw)] md:bottom-16 md:left-12">
          {slides.map((s, i) =>
            <div
              key={s.id}
              className="flex h-[34px] items-center justify-between gap-2 border-t border-white/15 text-[10px] tracking-[0.2em] sm:text-[12px]"
              style={{
                color: i === 0 ? COLORS.orange : "rgba(255,255,255,.46)"
              }}
              data-project-row
            >
              <div className="flex items-center gap-5">
                <span
                  className="text-[10px]"
                  style={{ color: i === 0 ? COLORS.orange : COLORS.purpleSoft }}
                >
                  {s.number}
                </span>
                <span className="truncate">
                  {s.label}
                </span>
              </div>
              <span className="shrink-0 text-[10px] normal-case tracking-[0.2em] text-white/40">
                {s.type}
              </span>
            </div>
          )}
          <div className="h-px bg-white/15" />
        </div>

        <div className="absolute bottom-[5%] right-[2.6%] text-right">
          <div
            className="font-black text-[clamp(5rem,12vw,12.5rem)] leading-[.8] tracking-[-.075em] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(160,117,218,.37)" }}
          >
            {TOTAL_DISPLAY}
          </div>
          <div className="mt-3 text-[4px] md:text-[10px] uppercase tracking-[0.3em] text-white/50  bottom-[-2%] md:bottom-0"> 
            PROJECTS · NOTHING ORDINARY
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[1.1%] top-1/2 z-40 hidden h-[112px] w-px -translate-y-1/2 bg-white/20 md:block"
      >
        <div ref={progressRef} className="h-full w-full bg-[#f47700]" />
      </div>

      {/* Stage */}
      <div ref={stageRef} className="absolute inset-0 z-20">
        <div
          ref={stageBgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute inset-0" />
        </div>

        <div
          ref={imageWrapRef}
          className="absolute left-1/2   top-[30%] md:top-1/2 z-10 aspect-[12/16]  overflow-hidden bg-[#120b1d] will-change-transform  "
        >
          {slides.map(s =>
            <img
              key={s.id}
              data-slide-image
              src={s.image}
              alt={s.label}
              className="absolute inset-0 h-full w-full   "
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-black/25" />
        </div>

        {/* Content column */}
        <div className="pointer-events-none absolute inset-x-[6%] bottom-[3%] top-[54%] z-20 md:bottom-[90px] md:left-[57.3%] md:right-[6.6%] md:top-10">
          <div className="relative h-full w-full">
            {slides.map(s =>
              <article
                key={s.id}
                data-slide-content
                className="invisible absolute inset-0 flex flex-col justify-center overflow-hidden md:justify-start"
              >
                <div className="mb-3 flex items-center gap-3 md:mb-0 md:gap-5 md:pt-[7%]">
                  <span
                    data-stagger
                    className="font-black text-2xl leading-none text-transparent md:text-[3.2rem]"
                    style={{ WebkitTextStroke: "1px rgba(167,139,250,.5)" }}
                  >
                    {s.number}
                  </span>
                  <span
                    data-stagger
                    className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: COLORS.orange }}
                  >
                    {s.category}
                  </span>
                </div>

                <div className="md:mb-[7%] md:mt-auto">
                  <div className="mb-3 md:mb-8">
                    <h2
                      data-stagger
                      className="font-[bolteSemiBold] text-[clamp(2.7rem,5.2vw,6.5rem)] leading-[.88] tracking-[-.05em]"
                    >
                      {s.titleLine1}
                    </h2>
                    <h2
                      data-stagger
                      className="font-[bolte] italic font-semibold text-[clamp(2.7rem,5.2vw,6.5rem)] italic leading-[.94] tracking-[-.05em]"
                      style={{ color: COLORS.orange }}
                    >
                      {s.titleLine2}
                    </h2>
                  </div>

                  <p
                    data-stagger
                    className="mb-4 max-w-[440px] font-[NeueRegular] text-[11px] md:text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {s.desc}
                  </p>

                  {/* <div data-stagger>
                    {s.id === "your-turn" ? (
                      <a
                        href="#contact"
                        className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                      >
                        {s.cta}
                        <ArrowUpRight className="h-4 w-4" style={{ color: COLORS.orange }} />
                      </a>
                    ) : (
                      <Link
                        to={`/works/${s.id}`}
                        className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                      >
                        {s.cta}
                        <ArrowUpRight className="h-4 w-4" style={{ color: COLORS.orange }} />
                      </Link>
                    )}
                  </div> */}

                  <div data-stagger className="pointer-events-auto">
                    {s.id === "your-turn"
                      ? <a
                          href="#contact"
                          className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                        >
                          {s.cta}
                          <ArrowUpRight
                            className="h-4 w-4"
                            style={{ color: COLORS.orange }}
                          />
                        </a>
                      : <Link
                          to={`/works/${s.id}`}
                          className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                        >
                          {s.cta}
                          <ArrowUpRight
                            className="h-4 w-4"
                            style={{ color: COLORS.orange }}
                          />
                        </Link>}
                  </div>
                </div>

                <div data-stagger className="hidden pb-[4%] md:block">
                  <div className="relative h-px w-full bg-white/20">
                    <span className="absolute left-0 top-0 h-px w-[40%] bg-white/60" />
                  </div>
                  <div className="mt-4 flex justify-between font-[NeueRegular] text-[9px] tracking-[.18em] text-white/40 md:text-[10px]">
                    <span>SMALL STUDIO, BIG DETAILS</span>
                    <span className="tracking-[.08em]">
                      {s.number} / {TOTAL_DISPLAY}
                    </span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
