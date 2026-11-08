// import { useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";
// import { projects } from "../data/slides";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const ORANGE = "#ff5a0b";

// /* =====================================================
//    EDIT YOUR TEXT HERE
// ===================================================== */
// const WORK_PAGE = {
//   lines: ["YOUR HEADING", "LINE TWO HERE"], // line 1 → right aligned, line 2 → left
//   pills: ["Pill one", "Pill two"], // tilted black stickers (set "" to hide one)
//   para: "Your short intro paragraph goes here. Two or three lines works best.",
//   filterAll: "ALL",
//   cta: { text: "Have a project in mind?", button: "START A PROJECT", href: "/#contact" },
// };

// /* =====================================================
//    PROJECT CARD (hover = clip-path wipe reveal)
// ===================================================== */
// function CardMedia({ src, alt = "" }) {
//   return src ? (
//     <img
//       src={src}
//       alt={alt}
//       className="h-full w-full object-cover"
//       draggable={false}
//     />
//   ) : (
//     <div
//       className="flex h-full w-full items-center justify-center bg-black/5"
//       style={{
//         backgroundImage:
//           "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(249,115,22,0.18))",
//       }}
//     >
//       <span className="text-[10px] tracking-[0.25em] text-black/40">IMAGE</span>
//     </div>
//   );
// }

// function ProjectCard({ item, className = "" }) {
//   const hoverImage = item.hover || item.gallery?.[0]?.img || item.cover;

//   return (
//     <a href={item.href} className={`group block ${className}`}>
//       {/* Image frame */}
//       <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5">
//         {/* Base image */}
//         <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
//           <CardMedia src={item.cover} alt={item.name} />
//         </div>

//         {/* Hover image: wipes up from the bottom */}
//         <div className="absolute inset-0 [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[clip-path:inset(0_0_0_0)]">
//           <div className="h-full w-full scale-[1.15] transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100">
//             <CardMedia src={hoverImage} alt={item.name} />
//           </div>
//         </div>
//       </div>

//       {/* Footer: logo + name/category + arrow */}
//       <div className="mt-4 flex items-center gap-4">
//         <div
//           className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-bold text-white"
//           style={{ background: ORANGE }}
//         >
//           {item.logo ? (
//             <img
//               src={item.logo}
//               alt=""
//               className="h-full w-full object-cover"
//               draggable={false}
//             />
//           ) : (
//             (item.name || "?")[0]
//           )}
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3 className="truncate font-[bolteSemiBold] text-2xl uppercase leading-none tracking-tight text-[#0a0a0a] md:text-3xl">
//             {item.name}
//           </h3>
//           <p
//             className="mt-1.5 truncate text-sm font-semibold uppercase tracking-wide"
//             style={{ color: ORANGE }}
//           >
//             {item.category || item.type}
//           </p>
//         </div>

//         <span
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black"
//           style={{ background: ORANGE }}
//         >
//           <ArrowUpRight size={18} strokeWidth={1.8} />
//         </span>
//       </div>
//     </a>
//   );
// }

// /* =====================================================
//    PAGE
// ===================================================== */
// export default function WorkPage() {
//   const root = useRef(null);
//   const [active, setActive] = useState(WORK_PAGE.filterAll);

//   // every project except the "your-turn" placeholder
//   const all = useMemo(() => projects.filter((p) => p.id !== "your-turn"), []);

//   const catOf = (p) => (p.category || p.type || "").toUpperCase();

//   const categories = useMemo(() => {
//     const set = new Set(all.map(catOf));
//     return [WORK_PAGE.filterAll, ...[...set].filter(Boolean)];
//   }, [all]);

//   const visible = useMemo(
//     () =>
//       active === WORK_PAGE.filterAll ? all : all.filter((p) => catOf(p) === active),
//     [all, active]
//   );

//   const countFor = (c) =>
//     c === WORK_PAGE.filterAll ? all.length : all.filter((p) => catOf(p) === c).length;

//   /* ---------- animations ---------- */
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         // heading intro
//         gsap.from(".wk-line", {
//           yPercent: 40,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.12,
//         });
//         gsap.from(".wk-pill", {
//           scale: 0,
//           opacity: 0,
//           duration: 0.6,
//           ease: "back.out(2)",
//           stagger: 0.15,
//           delay: 0.6,
//         });
//         gsap.from(".wk-para", {
//           y: 24,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.out",
//           delay: 0.5,
//         });

//         // cards reveal row by row (re-runs when the filter changes)
//         gsap.set(".wk-card", { opacity: 0, y: 70 });
//         ScrollTrigger.batch(".wk-card", {
//           start: "top 90%",
//           once: true,
//           onEnter: (els) =>
//             gsap.to(els, {
//               opacity: 1,
//               y: 0,
//               duration: 0.9,
//               ease: "power3.out",
//               stagger: 0.12,
//             }),
//         });
//         ScrollTrigger.refresh();
//       });

//       return () => mm.revert();
//     },
//     { scope: root, dependencies: [active], revertOnUpdate: true }
//   );

//   return (
//     <main
//       ref={root}
//       className="relative min-h-screen w-full overflow-x-clip bg-[#f8eee8] px-5 pb-24 pt-32 text-[#0a0a0a] md:px-8 md:pt-40"
//     >
//       {/* ================= HEADING ================= */}
//       <header>
//         <h1
//           className="font-[bolteSemiBold] uppercase leading-[0.85] tracking-tight"
//           style={{ color: ORANGE, fontSize: "clamp(3rem, 10.5vw, 11rem)" }}
//         >
//           <span className="wk-line relative block md:text-right">
//             {WORK_PAGE.lines[0]}
//             {WORK_PAGE.pills[0] && (
//               <span className="wk-pill absolute -bottom-3 left-4 -rotate-3 rounded-full bg-black px-4 py-2 font-[NeueRegular] text-xs font-medium normal-case tracking-normal text-white md:-bottom-4 md:left-[34%] md:px-5 md:py-2.5 md:text-base">
//                 {WORK_PAGE.pills[0]}
//               </span>
//             )}
//           </span>

//           <span className="wk-line relative mt-2 block md:mt-0">
//             {WORK_PAGE.lines[1]}
//             {WORK_PAGE.pills[1] && (
//               <span className="wk-pill absolute -bottom-3 right-4 rotate-2 rounded-full bg-black px-4 py-2 font-[NeueRegular] text-xs font-medium normal-case tracking-normal text-white md:-bottom-4 md:right-[30%] md:px-5 md:py-2.5 md:text-base">
//                 {WORK_PAGE.pills[1]}
//               </span>
//             )}
//           </span>
//         </h1>

//         <p
//           className="wk-para mt-16 max-w-xl font-[NeueRegular] text-lg leading-snug md:ml-[52%] md:mt-10 md:text-2xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.para}
//         </p>
//       </header>

//       {/* ================= FILTERS ================= */}
//       {categories.length > 2 && (
//         <nav
//           aria-label="Filter projects"
//           className="mt-16 border-b border-dashed border-black/25 md:mt-24"
//         >
//           <ul className="flex gap-2 overflow-x-auto pb-5 [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden">
//             {categories.map((c) => {
//               const on = c === active;
//               return (
//                 <li key={c} className="shrink-0">
//                   <button
//                     type="button"
//                     onClick={() => setActive(c)}
//                     aria-pressed={on}
//                     className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.2em] transition-colors duration-300 md:text-sm ${
//                       on
//                         ? "border-black bg-black text-white"
//                         : "border-black/20 text-black/60 hover:border-black hover:text-black"
//                     }`}
//                   >
//                     {c}
//                     <sup className="ml-1.5 text-[10px] opacity-60">{countFor(c)}</sup>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       )}

//       {/* ================= GRID (3 columns) ================= */}
//       <section
//         className={`grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ${
//           categories.length > 2 ? "mt-10" : "mt-16 md:mt-24"
//         }`}
//       >
//         {visible.map((item) => (
//           <ProjectCard key={item.id} item={item} className="wk-card" />
//         ))}
//       </section>

//       {visible.length === 0 && (
//         <p className="mt-20 text-center text-sm tracking-[0.25em] text-black/40">
//           NO PROJECTS YET
//         </p>
//       )}

//       {/* ================= CTA ================= */}
//       <section className="mt-28 flex flex-col items-start justify-between gap-10 border-t border-dashed border-black/25 pt-16 md:mt-40 md:flex-row md:items-end md:pt-20">
//         <a
//           href={WORK_PAGE.cta.href}
//           className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-black/30 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#ff5a0b] md:text-2xl"
//         >
//           <span
//             aria-hidden
//             className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//             style={{ background: ORANGE }}
//           />
//           <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//             {WORK_PAGE.cta.button}
//           </span>
//           <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-black/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/50 group-hover:text-white">
//             <ArrowUpRight size={19} strokeWidth={1.5} />
//           </span>
//         </a>

//         <h2
//           className="font-[bolteSemiBold] text-4xl font-semibold leading-[1.02] tracking-tight md:text-right md:text-7xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.cta.text}
//         </h2>
//       </section>
//     </main>
//   );
// }


// import { useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";
// import { projects } from "../data/slides";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const ORANGE = "#ff5a0b";

// /* =====================================================
//    EDIT YOUR TEXT HERE
// ===================================================== */
// const WORK_PAGE = {
//   lines: ["PROJECTS WE", "BOAST ABOUT"], // last word of line 2 renders as black italic
//   para: "We turn bold ideas into brands and digital experiences that stand apart. Every detail has a purpose, every project has its own character, and creativity is what we do best.",
//   filterAll: "ALL",
//   cta: { text: "Have a project in mind?", button: "START A PROJECT", href: "/#contact" },
// };

// /* last word in black italic (same language as <Accent> on the detail page) */
// const accentLast = (text) => {
//   const w = text.split(" ");
//   const last = w.pop();
//   return (
//     <>
//       {w.join(" ")}{" "}
//       <span className="font-[bolteSemiBold] italic" style={{ color: "#ee6002" }}>
//         {last}
//       </span>
//     </>
//   );
// };

// /* =====================================================
//    PROJECT CARD (hover = clip-path wipe reveal)
// ===================================================== */
// function CardMedia({ src, alt = "" }) {
//   return src ? (
//     <img
//       src={src}
//       alt={alt}
//       className="h-full w-full object-cover"
//       draggable={false}
//     />
//   ) : (
//     <div
//       className="flex h-full w-full items-center justify-center bg-black/5"
//       style={{
//         backgroundImage:
//           "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(249,115,22,0.18))",
//       }}
//     >
//       <span className="text-[10px] tracking-[0.25em] text-black/40">IMAGE</span>
//     </div>
//   );
// }

// function ProjectCard({ item, className = "" }) {
//   const hoverImage = item.hover || item.gallery?.[0]?.img || item.cover;

//   return (
//     <a href={item.href} className={`group block ${className}`}>
//       {/* Image frame */}
//       <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5">
//         {/* Base image */}
//         <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
//           <CardMedia src={item.cover} alt={item.name} />
//         </div>

//         {/* Hover image: wipes up from the bottom */}
//         <div className="absolute inset-0 [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[clip-path:inset(0_0_0_0)]">
//           <div className="h-full w-full scale-[1.15] transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100">
//             <CardMedia src={hoverImage} alt={item.name} />
//           </div>
//         </div>
//       </div>

//       {/* Footer: logo + name/category + arrow */}
//       <div className="mt-4 flex items-center gap-4">
//         <div
//           className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-bold text-white"
//           style={{ background: ORANGE }}
//         >
//           {item.logo ? (
//             <img
//               src={item.logo}
//               alt=""
//               className="h-full w-full object-cover"
//               draggable={false}
//             />
//           ) : (
//             (item.name || "?")[0]
//           )}
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3 className="truncate font-[bolteSemiBold] text-2xl uppercase leading-none tracking-tight text-white md:text-3xl">
//             {item.name}
//           </h3>
//           <p
//             className="mt-1.5 truncate text-sm font-semibold uppercase tracking-wide"
//             style={{ color: ORANGE }}
//           >
//             {item.category || item.type}
//           </p>
//         </div>

//         <span
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black"
//           style={{ background: ORANGE }}
//         >
//           <ArrowUpRight size={18} strokeWidth={1.8} />
//         </span>
//       </div>
//     </a>
//   );
// }

// /* =====================================================
//    PAGE
// ===================================================== */
// export default function WorkPage() {
//   const root = useRef(null);
//   const [active, setActive] = useState(WORK_PAGE.filterAll);

//   // every project except the "your-turn" placeholder
//   const all = useMemo(() => projects.filter((p) => p.id !== "your-turn"), []);

//   const catOf = (p) => (p.category || p.type || "").toUpperCase();

//   const categories = useMemo(() => {
//     const set = new Set(all.map(catOf));
//     return [WORK_PAGE.filterAll, ...[...set].filter(Boolean)];
//   }, [all]);

//   const visible = useMemo(
//     () =>
//       active === WORK_PAGE.filterAll ? all : all.filter((p) => catOf(p) === active),
//     [all, active]
//   );

//   const countFor = (c) =>
//     c === WORK_PAGE.filterAll ? all.length : all.filter((p) => catOf(p) === c).length;

//   /* ---------- animations ---------- */
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         // heading intro
//         gsap.from(".wk-line", {
//           yPercent: 40,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.12,
//         });
//         gsap.from(".wk-para", {
//           y: 24,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.out",
//           delay: 0.4,
//         });

//         // cards reveal row by row (re-runs when the filter changes)
//         gsap.set(".wk-card", { opacity: 0, y: 70 });
//         ScrollTrigger.batch(".wk-card", {
//           start: "top 90%",
//           once: true,
//           onEnter: (els) =>
//             gsap.to(els, {
//               opacity: 1,
//               y: 0,
//               duration: 0.9,
//               ease: "power3.out",
//               stagger: 0.12,
//             }),
//         });
//         ScrollTrigger.refresh();
//       });

//       return () => mm.revert();
//     },
//     { scope: root, dependencies: [active], revertOnUpdate: true }
//   );

//   return (

//     // bg-[#f8eee8]
//     <main
//       ref={root}
//       className="relative min-h-screen w-full overflow-x-clip  px-5 pb-24 pt-32 text-[#0a0a0a] md:px-8 md:pt-40"
//     >
//       {/* ================= HEADING ================= */}
//       <header>
//         {/* Top meta row (dashed, same language as the detail page) */}
//         <div className="mb-10 flex items-center justify-between  border-white/25 pb-5 md:mb-14">
//           <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70">
//             <span
//               className="h-2 w-2 rounded-full"
//               style={{ background: ORANGE }}
//             />
//             SELECTED WORK
//           </p>
//           {/* <span className="text-xs tracking-[0.25em] text-black/45">
//             {String(all.length).padStart(2, "0")} PROJECTS
//           </span> */}
//         </div>

//         {/* Line 1 left, line 2 right */}
//         <h1
//           className="font-[bolteSemiBold] uppercase leading-[0.85] tracking-tight"
//           style={{ color: 'white', fontSize: "clamp(3rem, 10.5vw, 11rem)" }}
//         >
//           <span className="wk-line block">{WORK_PAGE.lines[0]}</span>
//           <span className="wk-line block md:text-right">
//             {accentLast(WORK_PAGE.lines[1])}
//           </span>
//         </h1>

//         {/* Para on the left, tucked under line 1 */}
//         <p
//           className="wk-para mt-12 max-w-2xl font-[NeueRegular] text-lg   md:mt-[2vw] md:max-w-xl md:text-3xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.para}
//         </p>
//       </header>

//       {/* ================= FILTERS ================= */}
//       {categories.length > 2 && (
//         <nav
//           aria-label="Filter projects"
//           className="mt-16 border-b border-dashed border-white/25 md:mt-24"
//         >
//           <ul className="flex gap-2 overflow-x-auto pb-5 [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden">
//             {categories.map((c) => {
//               const on = c === active;
//               return (
//                 <li key={c} className="shrink-0">
//                   <button
//                     type="button"
//                     onClick={() => setActive(c)}
//                     aria-pressed={on}
//                     className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.2em] transition-colors duration-300 md:text-sm ${
//                       on
//                         ? "border-[#f97316] bg-[#f97316] text-black"
//                         : "border-white/20 text-white/60 hover:border-white hover:text-white"
//                     }`}
//                   >
//                     {c}
//                     <sup className="ml-1.5 text-[10px] opacity-60">{countFor(c)}</sup>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       )}

//       {/* ================= GRID (3 columns) ================= */}
//       <section
//         className={`grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ${
//           categories.length > 2 ? "mt-10" : "mt-16 md:mt-24"
//         }`}
//       >
//         {visible.map((item) => (
//           <ProjectCard key={item.id} item={item} className="wk-card" />
//         ))}
//       </section>

//       {visible.length === 0 && (
//         <p className="mt-20 text-center text-sm tracking-[0.25em] text-black/40">
//           NO PROJECTS YET
//         </p>
//       )}

//       {/* ================= CTA ================= */}
//       <section className="mt-28 flex flex-col items-start justify-between gap-10 border-t border-dashed border-black/25 pt-16 md:mt-40 md:flex-row md:items-end md:pt-20">
//         <a
//           href={WORK_PAGE.cta.href}
//           className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-black/30 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#ff5a0b] md:text-2xl"
//         >
//           <span
//             aria-hidden
//             className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//             style={{ background: ORANGE }}
//           />
//           <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//             {WORK_PAGE.cta.button}
//           </span>
//           <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-black/30 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/50 group-hover:text-white">
//             <ArrowUpRight size={19} strokeWidth={1.5} />
//           </span>
//         </a>

//         <h2
//           className="font-[bolteSemiBold] text-white text-4xl font-semibold leading-[1.02] tracking-tight md:text-right md:text-7xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.cta.text}
//         </h2>
//       </section>
//     </main>
//   );
// }





// import { useEffect, useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";
// import { projects } from "../data/slides";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const ORANGE = "#ff5a0b";

// const WORK_PAGE = {
//   lines: ["PROJECTS WE", "BOAST ABOUT"],
//   para: "We turn bold ideas into brands and digital experiences that stand apart. Every detail has a purpose, every project has its own character, and creativity is what we do best.",
//   filterAll: "ALL",
//   cta: {
//     text: "Have a project in mind?",
//     button: "START A PROJECT",
//     href: "/#contact",
//   },
// };

// const accentLast = (text) => {
//   const words = text.split(" ");
//   const last = words.pop();

//   return (
//     <>
//       {words.join(" ")}{" "}
//       <span
//         className="font-[bolteSemiBold] italic"
//         style={{ color: "#ee6002" }}
//       >
//         {last}
//       </span>
//     </>
//   );
// };

// /*
//   Organic reveal edge.
//   Both polygons use the same number of points, allowing GSAP
//   to interpolate the clip-path smoothly.
// */
// const EDGE_POINTS = [
//   { y: 0, offset: 0 },
//   { y: 8, offset: -2.5 },
//   { y: 17, offset: 2 },
//   { y: 26, offset: -1.5 },
//   { y: 35, offset: 2.8 },
//   { y: 44, offset: -2 },
//   { y: 53, offset: 1.5 },
//   { y: 62, offset: -2.8 },
//   { y: 71, offset: 2 },
//   { y: 80, offset: -1.8 },
//   { y: 90, offset: 2.5 },
//   { y: 100, offset: 0 },
// ];

// const revealClip = (progress) => {
//   const points = EDGE_POINTS.map(({ y, offset }) => {
//     const organicOffset = Math.sin(progress * Math.PI) * offset;
//     const x = Math.max(0, Math.min(100, progress * 100 + organicOffset));
//     return `${x}% ${y}%`;
//   });

//   return `polygon(0% 0%, ${points.join(", ")}, 0% 100%)`;
// };

// function CardMedia({ src, alt = "" }) {
//   if (!src) {
//     return (
//       <div
//         className="flex h-full w-full items-center justify-center bg-black/5"
//         style={{
//           backgroundImage:
//             "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(249,115,22,0.18))",
//         }}
//       >
//         <span className="text-[10px] tracking-[0.25em] text-black/40">
//           IMAGE
//         </span>
//       </div>
//     );
//   }

//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="h-full w-full object-cover"
//       draggable={false}
//       loading="lazy"
//     />
//   );
// }

// function ProjectCard({ item, className = "" }) {
//   const hoverImage = item.hover || item.gallery?.[0]?.img || item.cover;
//   const revealRef = useRef(null);

//   // Capture the actual DOM node so cleanup never targets a null ref.
//   useEffect(() => {
//     const element = revealRef.current;

//     return () => {
//       if (element) gsap.killTweensOf(element);
//     };
//   }, []);

//   const onPointerEnter = (event) => {
//     if (
//       event.pointerType === "touch" ||
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//     ) {
//       return;
//     }

//     const element = revealRef.current;
//     if (!element || !hoverImage || hoverImage === item.cover) return;

//     gsap.killTweensOf(element);

//     gsap.to(element, {
//       clipPath: revealClip(1),
//       duration: 1.05,
//       ease: "power3.inOut",
//       overwrite: true,
//     });
//   };

//   const onPointerLeave = () => {
//     const element = revealRef.current;
//     if (!element) return;

//     gsap.killTweensOf(element);

//     gsap.to(element, {
//       clipPath: revealClip(0),
//       duration: 0.75,
//       ease: "power3.inOut",
//       overwrite: true,
//     });
//   };

//   return (
//     <a href={item.href} className={`group block ${className}`}>
//       <div
//         onPointerEnter={onPointerEnter}
//         onPointerLeave={onPointerLeave}
//         className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5"
//       >
//         {/* Original project image */}
//         <div className="absolute inset-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]">
//           <CardMedia src={item.cover} alt={item.name} />
//         </div>

//         {/* Automatically revealed hover image */}
//         {hoverImage && hoverImage !== item.cover && (
//           <div
//             ref={revealRef}
//             className="pointer-events-none absolute inset-0"
//             style={{ clipPath: revealClip(0), willChange: "clip-path" }}
//           >
//             <div className="h-full w-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]">
//               <CardMedia src={hoverImage} alt={`${item.name} preview`} />
//             </div>
//           </div>
//         )}

//         {/* Subtle hover treatment */}
//         <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.035]" />
//       </div>

//       {/* Project details */}
//       <div className="mt-4 flex items-center gap-4">
//         <div
//           className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-bold text-white"
//           style={{ background: ORANGE }}
//         >
//           {item.logo ? (
//             <img
//               src={item.logo}
//               alt=""
//               className="h-full w-full object-cover"
//               draggable={false}
//             />
//           ) : (
//             (item.name || "?")[0]
//           )}
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3 className="truncate font-[bolteSemiBold] text-2xl uppercase leading-none tracking-tight text-white md:text-3xl">
//             {item.name}
//           </h3>
//           <p
//             className="mt-1.5 truncate text-sm font-semibold uppercase tracking-wide"
//             style={{ color: ORANGE }}
//           >
//             {item.category || item.type}
//           </p>
//         </div>

//         <span
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black"
//           style={{ background: ORANGE }}
//         >
//           <ArrowUpRight size={18} strokeWidth={1.8} />
//         </span>
//       </div>
//     </a>
//   );
// }

// export default function WorkPage() {
//   const root = useRef(null);
//   const prevActive = useRef(WORK_PAGE.filterAll);
//   const [active, setActive] = useState(WORK_PAGE.filterAll);

//   const all = useMemo(
//     () => projects.filter((project) => project.id !== "your-turn"),
//     []
//   );

//   const catOf = (project) =>
//     (project.category || project.type || "").toUpperCase();

//   const categories = useMemo(() => {
//     const available = new Set(all.map(catOf).filter(Boolean));
//     return [WORK_PAGE.filterAll, ...available];
//   }, [all]);

//   const visible = useMemo(
//     () =>
//       active === WORK_PAGE.filterAll
//         ? all
//         : all.filter((project) => catOf(project) === active),
//     [all, active]
//   );

//   const countFor = (category) =>
//     category === WORK_PAGE.filterAll
//       ? all.length
//       : all.filter((project) => catOf(project) === category).length;

//   // Heading animation: runs once, independently of project filtering.
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         gsap.from(".wk-line", {
//           yPercent: 40,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.12,
//         });

//         gsap.from(".wk-para", {
//           y: 24,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.out",
//           delay: 0.4,
//         });
//       });

//       return () => mm.revert();
//     },
//     { scope: root, dependencies: [] }
//   );

//   // Card entrance animation. Previous filter animations are reverted
//   // before the next set of cards is animated.
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         const cards = gsap.utils.toArray(".wk-card");
//         const isFilterChange = prevActive.current !== active;

//         prevActive.current = active;

//         if (!cards.length) {
//           ScrollTrigger.refresh();
//           return;
//         }

//         if (!isFilterChange) {
//           gsap.set(cards, { autoAlpha: 0, y: 65 });

//           ScrollTrigger.batch(cards, {
//             start: "top 90%",
//             once: true,
//             onEnter: (elements) => {
//               gsap.to(elements, {
//                 autoAlpha: 1,
//                 y: 0,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 stagger: 0.12,
//                 overwrite: true,
//               });
//             },
//           });
//         } else {
//           gsap.fromTo(
//             cards,
//             { autoAlpha: 0, y: 28 },
//             {
//               autoAlpha: 1,
//               y: 0,
//               duration: 0.6,
//               ease: "power3.out",
//               stagger: 0.07,
//               overwrite: true,
//               onComplete: () => ScrollTrigger.refresh(),
//             }
//           );
//         }
//       });

//       return () => mm.revert();
//     },
//     { scope: root, dependencies: [active] }
//   );

//   return (
//     <main
//       ref={root}
//       className="relative min-h-screen w-full overflow-x-clip px-5 pb-24 pt-32 text-[#0a0a0a] md:px-8 md:pt-40"
//     >
//       {/* HEADING */}
//       <header>
//         <div className="mb-10 flex items-center justify-between border-white/25 pb-5 md:mb-14">
//           <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70">
//             <span
//               className="h-2 w-2 rounded-full"
//               style={{ background: ORANGE }}
//             />
//             SELECTED WORK
//           </p>
//         </div>

//         <h1
//           className="font-[bolteSemiBold] uppercase leading-[0.85] tracking-tight"
//           style={{
//             color: "white",
//             fontSize: "clamp(3rem, 10.5vw, 11rem)",
//           }}
//         >
//           <span className="wk-line block">{WORK_PAGE.lines[0]}</span>
//           <span className="wk-line block md:text-right">
//             {accentLast(WORK_PAGE.lines[1])}
//           </span>
//         </h1>

//         <p
//           className="wk-para mt-12 max-w-2xl font-[NeueRegular] text-lg md:mt-[2vw] md:max-w-xl md:text-3xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.para}
//         </p>
//       </header>

//       {/* FILTERS */}
//       {categories.length > 2 && (
//         <nav
//           aria-label="Filter projects"
//           className="mt-16 border-b border-dashed border-white/25 md:mt-24"
//         >
//           <ul className="flex gap-2 overflow-x-auto pb-5 [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden">
//             {categories.map((category) => {
//               const selected = category === active;

//               return (
//                 <li key={category} className="shrink-0">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (category !== active) setActive(category);
//                     }}
//                     aria-pressed={selected}
//                     className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.2em] transition-colors duration-300 md:text-sm ${
//                       selected
//                         ? "border-[#f97316] bg-[#f97316] text-black"
//                         : "border-white/20 text-white/60 hover:border-white hover:text-white"
//                     }`}
//                   >
//                     {category}
//                     <sup className="ml-1.5 text-[10px] opacity-60">
//                       {countFor(category)}
//                     </sup>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       )}

//       {/* PROJECT GRID */}
//       <section
//         className={`grid min-h-[60vh] grid-cols-1 content-start gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ${
//           categories.length > 2 ? "mt-10" : "mt-16 md:mt-24"
//         }`}
//       >
//         {visible.map((item) => (
//           <ProjectCard key={item.id} item={item} className="wk-card" />
//         ))}
//       </section>

//       {visible.length === 0 && (
//         <p className="mt-20 text-center text-sm tracking-[0.25em] text-white/40">
//           NO PROJECTS YET
//         </p>
//       )}

//       {/* CTA */}
//       <section className="mt-28 flex flex-col items-start justify-between gap-10 border-t border-dashed border-white/25 pt-16 md:mt-40 md:flex-row md:items-end md:pt-20">
//         <a
//           href={WORK_PAGE.cta.href}
//           className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-white/30 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#ff5a0b] md:text-2xl"
//         >
//           <span
//             aria-hidden
//             className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//             style={{ background: ORANGE }}
//           />

//           <span className="relative z-10 text-white transition-colors duration-300">
//             {WORK_PAGE.cta.button}
//           </span>

//           <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-white/50">
//             <ArrowUpRight size={19} strokeWidth={1.5} />
//           </span>
//         </a>

//         <h2
//           className="font-[bolteSemiBold] text-4xl font-semibold leading-[1.02] tracking-tight md:text-right md:text-7xl"
//           style={{ color: ORANGE }}
//         >
//           {WORK_PAGE.cta.text}
//         </h2>
//       </section>
//     </main>
//   );
// }



import { useEffect, useId, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/slides";
import { useContactModal } from "../Context/ContactModalContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ORANGE = "#ff5a0b";

const WORK_PAGE = {
  lines: ["PROJECTS WE", "BOAST ABOUT"],
  para: "We turn bold ideas into brands and digital experiences that stand apart. Every detail has a purpose, every project has its own character, and creativity is what we do best.",
  filterAll: "ALL",
  cta: {
    text: "Have a project in mind?",
    button: "START A PROJECT",
    // href: "/#contact",
  },
};

const accentLast = (text) => {
  const words = text.split(" ");
  const last = words.pop();

  return (
    <>
      {words.join(" ")}{" "}
      <span
        className="font-[bolteSemiBold] italic"
        style={{ color: "#ee6002" }}
      >
        {last}
      </span>
    </>
  );
};

/*
  Brush reveal (sharp edges).
  Slanted straight bands in a 100 x 125 box (matches aspect-[4/5]).
  Each band overshoots the box so only the leading tip is visible.
  strokeLinecap="butt" + straight lines = crisp, angled cut.
*/
const STROKES = [
  { from: [-10, 10], to: [110, -2] },
  { from: [110, 35], to: [-10, 23] },
  { from: [-10, 60], to: [110, 48] },
  { from: [110, 85], to: [-10, 73] },
  { from: [-10, 110], to: [110, 98] },
  { from: [110, 132], to: [-10, 120] },
];

const STROKE_WIDTH = 34; // thinner = more streaks, thicker = bolder swipes
const STROKE_DURATION = 0.5;
const STROKE_STAGGER = 0.09; // swipe, swipe, swipe rhythm
const REVERSE_SPEED = 1.8; // hover-out speed

function BrushReveal({ src, controlRef }) {
  const uid = useId().replace(/:/g, "");
  const maskId = `brush-${uid}`;
  const pathRefs = useRef([]);

  useEffect(() => {
    const paths = pathRefs.current.filter(Boolean);
    if (!paths.length) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      paths,
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        duration: STROKE_DURATION,
        ease: "power2.out",
        stagger: STROKE_STAGGER,
      }
    );

    if (controlRef) {
      controlRef.current = {
        play: () => tl.timeScale(1).play(),
        reverse: () => tl.timeScale(REVERSE_SPEED).reverse(),
      };
    }

    return () => {
      tl.kill();
      if (controlRef) controlRef.current = null;
    };
  }, [controlRef]);

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 125"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="125"
        >
          {STROKES.map((s, i) => (
            <path
              key={i}
              ref={(el) => (pathRefs.current[i] = el)}
              d={`M${s.from[0]} ${s.from[1]} L${s.to[0]} ${s.to[1]}`}
              pathLength="1"
              stroke="#fff"
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
          ))}
        </mask>
      </defs>

      <image
        href={src}
        x="0"
        y="0"
        width="100"
        height="125"
        preserveAspectRatio="xMidYMid slice"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

function CardMedia({ src, alt = "" }) {
  if (!src) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-black/5"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(167,139,250,0.18), rgba(249,115,22,0.18))",
        }}
      >
        <span className="text-[10px] tracking-[0.25em] text-black/40">
          IMAGE
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      draggable={false}
      loading="lazy"
    />
  );
}

function ProjectCard({ item, className = "" }) {
  const hoverImage = item.hover || item.gallery?.[0]?.img  ;
  const brush = useRef(null);
  const canReveal = Boolean(hoverImage) && hoverImage !== item.cover;

  const onPointerEnter = (event) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !canReveal
    ) {
      return;
    }
    brush.current?.play();
  };

  const onPointerLeave = () => {
    brush.current?.reverse();
  };

  return (
    <a href={item.href} className={`group block ${className}`}>
      <div
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="relative aspect-[11/16] overflow-hidden rounded-3xl bg-black/5"
      >
        {/* Original project image */}
        <div className="absolute inset-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] h-full w-full  ">
          <CardMedia src={item.image} alt={item.name} />
        </div>

        {/* Brush-revealed hover image */}
        {/* {canReveal && (
          <div className="pointer-events-none absolute inset-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] h-full w-full">
            <BrushReveal src={hoverImage} controlRef={brush} />
          </div>
        )} */}

        {/* Subtle hover treatment */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.035]" />
      </div>

      {/* Project details */}
      <div className="mt-4 flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-bold text-white"
          style={{ background: ORANGE }}
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            (item.name || "?")[0]
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-[bolteSemiBold] text-2xl uppercase leading-none tracking-tight text-white md:text-3xl">
            {item.name}
          </h3>
          <p
            className="mt-1.5 truncate text-sm font-semibold uppercase tracking-wide"
            style={{ color: ORANGE }}
          >
            {item.category || item.type}
          </p>
        </div>

        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black"
          style={{ background: ORANGE }}
        >
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </span>
      </div>
    </a>
  );
}

export default function WorkPage() {
  const root = useRef(null);
  const prevActive = useRef(WORK_PAGE.filterAll);
  const [active, setActive] = useState(WORK_PAGE.filterAll);
    const { openContact } = useContactModal();

  const all = useMemo(
    () => projects.filter((project) => project.id !== "your-turn"),
    []
  );

  const catOf = (project) =>
    (project.category || project.type || "").toUpperCase();

  const categories = useMemo(() => {
    const available = new Set(all.map(catOf).filter(Boolean));
    return [WORK_PAGE.filterAll, ...available];
  }, [all]);

  const visible = useMemo(
    () =>
      active === WORK_PAGE.filterAll
        ? all
        : all.filter((project) => catOf(project) === active),
    [all, active]
  );

  const countFor = (category) =>
    category === WORK_PAGE.filterAll
      ? all.length
      : all.filter((project) => catOf(project) === category).length;

  // Heading animation: runs once, independently of project filtering.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wk-line", {
          yPercent: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.from(".wk-para", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [] }
  );

  // Card entrance animation. Previous filter animations are reverted
  // before the next set of cards is animated.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(".wk-card");
        const isFilterChange = prevActive.current !== active;

        prevActive.current = active;

        if (!cards.length) {
          ScrollTrigger.refresh();
          return;
        }

        if (!isFilterChange) {
          gsap.set(cards, { autoAlpha: 0, y: 65 });

          ScrollTrigger.batch(cards, {
            start: "top 90%",
            once: true,
            onEnter: (elements) => {
              gsap.to(elements, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                overwrite: true,
              });
            },
          });
        } else {
          gsap.fromTo(
            cards,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.07,
              overwrite: true,
              onComplete: () => ScrollTrigger.refresh(),
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [active] }
  );

  return (
    <main
      ref={root}
      className="relative min-h-screen w-full overflow-x-clip px-5 pb-24 pt-32 text-[#0a0a0a] md:px-8 md:pt-40"
    >
      {/* HEADING */}
      <header>
        <div className="mb-10 flex items-center justify-between border-white/25 pb-5 md:mb-14">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: ORANGE }}
            />
            SELECTED WORK
          </p>
        </div>

        <h1
          className="font-[bolteSemiBold] uppercase leading-[0.85] tracking-tight"
          style={{
            color: "white",
            fontSize: "clamp(3rem, 10.5vw, 11rem)",
          }}
        >
          <span className="wk-line block">{WORK_PAGE.lines[0]}</span>
          <span className="wk-line block md:text-right">
            {accentLast(WORK_PAGE.lines[1])}
          </span>
        </h1>

        <p
          className="wk-para mt-12 max-w-2xl font-[NeueRegular] text-lg md:mt-[2vw] md:max-w-xl md:text-3xl"
          style={{ color: ORANGE }}
        >
          {WORK_PAGE.para}
        </p>
      </header>

      {/* FILTERS */}
      {/* {categories.length > 2 && (
        <nav
          aria-label="Filter projects"
          className="mt-16 border-b border-dashed border-white/25 md:mt-24"
        >
          <ul className="flex gap-2 overflow-x-auto pb-5 [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const selected = category === active;

              return (
                <li key={category} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (category !== active) setActive(category);
                    }}
                    aria-pressed={selected}
                    className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.2em] transition-colors duration-300 md:text-sm ${
                      selected
                        ? "border-[#f97316] bg-[#f97316] text-black"
                        : "border-white/20 text-white/60 hover:border-white hover:text-white"
                    }`}
                  >
                    {category}
                    <sup className="ml-1.5 text-[10px] opacity-60">
                      {countFor(category)}
                    </sup>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )} */}

      
{categories.length > 2 && (
  <nav
    aria-label="Filter projects"
    className="mt-10 w-full min-w-0 border-b border-dashed border-white/25 sm:mt-14 md:mt-24"
  >
    <ul
      className="
        flex w-full min-w-0
        items-center gap-2
        overflow-x-auto overflow-y-hidden
        overscroll-x-contain
        whitespace-nowrap
        pb-4
        snap-x snap-proximity
        touch-pan-x
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        sm:gap-3 sm:pb-5
      "
    >
      {categories.map((category) => {
        const selected = category === active;

        return (
          <li
            key={category}
            className="shrink-0 snap-start"
          >
            <button
              type="button"
              onClick={() => {
                if (category !== active) setActive(category);
              }}
              aria-pressed={selected}
              className={`
                inline-flex
                min-h-[38px]
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                px-3.5 py-2
                text-[10px]
                font-semibold
                leading-none
                tracking-[0.08em]
                whitespace-nowrap
                transition-all
                duration-300
                active:scale-95

                sm:min-h-[42px]
                sm:px-5 sm:py-2.5
                sm:text-xs
                sm:tracking-[0.15em]

                md:text-sm
                md:tracking-[0.2em]

                ${
                  selected
                    ? "border-[#f97316] bg-[#f97316] text-black"
                    : "border-white/20 text-white/60 hover:border-white hover:text-white"
                }
              `}
            >
              <span>{category}</span>

              <sup className="text-[9px] leading-none opacity-60 sm:text-[10px]">
                {countFor(category)}
              </sup>
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
)}


      {/* PROJECT GRID */}
      <section
        className={`grid min-h-[60vh] grid-cols-1 content-start gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ${
          categories.length > 2 ? "mt-10" : "mt-16 md:mt-24"
        }`}
      >
        {visible.map((item) => (
          <ProjectCard key={item.id} item={item} className="wk-card" />
        ))}
      </section>

      {visible.length === 0 && (
        <p className="mt-20 text-center text-sm tracking-[0.25em] text-white/40">
          NO PROJECTS YET
        </p>
      )}

      {/* CTA */}
      <section className="mt-28 flex flex-col items-start justify-between gap-10 border-t border-dashed border-white/25 pt-16 md:mt-40 md:flex-row md:items-end md:pt-20">
        <button
          href={WORK_PAGE.cta.href}
           onClick={openContact}
             type="button"
          className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-white/30 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#ff5a0b] md:text-2xl"
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            style={{ background: ORANGE }}
          />

          <span className="relative z-10 text-white transition-colors duration-300">
            {WORK_PAGE.cta.button}
          </span>

          <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-white/50">
            <ArrowUpRight size={19} strokeWidth={1.5} />
          </span>
        </button>

        <h2
          className="font-[bolteSemiBold] text-4xl font-semibold leading-[1.02] tracking-tight md:text-right md:text-7xl"
          style={{ color: ORANGE }}
        >
          {WORK_PAGE.cta.text}
        </h2>
      </section>
    </main>
  );
}