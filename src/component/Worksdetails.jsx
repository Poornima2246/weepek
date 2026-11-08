 


// import { useEffect, useRef, useState } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";
// import { projects, getProjectById, getNextProject } from "../data/slides";
// import { useContactModal } from "../Context/ContactModalContext";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";
// const ACCENT = "#ed710c";
// const PURPLE_SOFT = "#a78bfa";

// const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// const readableOn = (hex) => {
//   const h = hex.replace("#", "");
//   const n = parseInt(h.length === 3 ? h.replace(/(.)/g, "$1$1") : h, 16);
//   const r = (n >> 16) & 255,
//     g = (n >> 8) & 255,
//     b = n & 255;
//   return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#0a0a0a" : "#ffffff";
// };

// /* =====================================================
//    SMALL PIECES
// ===================================================== */
// function Label({ children, className = "" }) {
//   return (
//     <p
//       className={`flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70 ${className}`}
//     >
//       <span className="h-2 w-2 rounded-full" style={{ background: ORANGE }} />
//       {String(children).toUpperCase()}
//     </p>
//   );
// }

// function Accent({ children }) {
//   return (
//     <span className="  font-[bolteSemiBold] font-semibold" style={{ color: 'white' }}>
//       {children}
//     </span>
//   );
// }

// function Placeholder({ text = "IMAGE", className = "" }) {
//   return (
//     <div
//       className={`flex h-full w-full items-center justify-center bg-white/5 ${className}`}
//       style={{
//         backgroundImage:
//           "linear-gradient(135deg, rgba(167,139,250,0.14), rgba(249,115,22,0.14))",
//       }}
//     >
//       <span className="text-[10px] tracking-[0.25em] text-white/40">{text}</span>
//     </div>
//   );
// }

// function Media({ src, alt = "", className = "", placeholder }) {
//   return src ? (
//     <img
//       src={src}
//       alt={alt}
//       className={`h-full w-full object-cover ${className}`}
//       draggable={false}
//     />
//   ) : (
//     <Placeholder text={placeholder} />
//   );
// }

// function Counter({ prefix = "", to, suffix = "" }) {
//   const ref = useRef(null);
//   const [val, setVal] = useState(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setVal(to);
//       return;
//     }
//     let raf;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         io.disconnect();
//         const start = performance.now();
//         const tick = (now) => {
//           const t = Math.min(1, (now - start) / 1400);
//           setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
//           if (t < 1) raf = requestAnimationFrame(tick);
//         };
//         raf = requestAnimationFrame(tick);
//       },
//       { threshold: 0.4 }
//     );
//     io.observe(el);
//     return () => {
//       io.disconnect();
//       cancelAnimationFrame(raf);
//     };
//   }, [to]);

//   return (
//     <span ref={ref}>
//       {prefix}
//       {val}
//       {suffix}
//     </span>
//   );
// }

// function WordReveal({ text, className = "" }) {
//   const ref = useRef(null);
//   const words = text.split(" ");
//   const [lit, setLit] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const el = ref.current;
//       if (!el) return;
//       const r = el.getBoundingClientRect();
//       const vh = window.innerHeight;
//       setLit(
//         Math.round(clamp((vh * 0.9 - r.top) / (vh * 0.5), 0, 1) * words.length)
//       );
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [words.length]);

//   return (
//     <p ref={ref} className={className}>
//       {words.map((w, i) => (
//         <span
//           key={i}
//           className="transition-opacity duration-300"
//           style={{ opacity: i < lit ? 1 : 0.22 }}
//         >
//           {w}{" "}
//         </span>
//       ))}
//     </p>
//   );
// }

// function Devices({ laptop, phone }) {
//   return (
//     <div className="relative mx-auto mt-10 w-full max-w-4xl">
//       <div className="mx-auto aspect-[16/10] w-[88%] overflow-hidden rounded-t-xl border-[6px] border-black/80 bg-black/80 shadow-2xl">
//         <Media src={laptop} placeholder="LAPTOP SCREEN" />
//       </div>
//       <div className="mx-auto h-3 w-full rounded-b-2xl bg-black/80" />
//       <div className="absolute -bottom-4 right-0 aspect-[9/19] w-[17%] overflow-hidden rounded-2xl border-[5px] border-black/80 bg-black/80 shadow-2xl md:-bottom-6">
//         <Media src={phone} placeholder="PHONE" />
//       </div>
//     </div>
//   );
// }

// const CTA = {
//   text: "Want something like this?",
//   button: "START A PROJECT",
//   href: "#contact",
// };

// /* =====================================================
//    PAGE
// ===================================================== */
// export default function WeepekWorkDetail() {
//   const { id } = useParams();
//   const root = useRef(null); // ← hooks FIRST (no early return before this)
// const { openContact } = useContactModal();
//   const project = getProjectById(id);
//   const next = getNextProject(id);

// const moreProjects = projects
//   .filter(
//     (item) =>
//       item.id !== id &&
//       item.id !== "your-turn"
//   )
//   .slice(0, 3);

  
//   // Safe defaults so hooks never break
//   const p = project || {
//     name: "",
//     services: [],
//     year: "",
//     client: "",
//     timeline: "",
//     tagline: "",
//     cover: null,
//     brief: null,
//     statement: null,
//     process: [],
//     gallery: [],
//     brand: null,
//     devices: null,
//     results: [],
//     quote: null,
//     type: "",
//     liveUrl: null,
//   };
  
//   const nameWords = (p.name || "").split(" ");
//   const lastWord = nameWords.pop() || "";
//   const firstWords = nameWords.join(" ");
//   const nameSize = Math.min(22, 150 / Math.max((p.name || "A").length, 1));
//   const brandText = p.brand ? readableOn(p.brand.color) : "#fff";

//   /* ---------- scroll animations (always called) ---------- */
//   useGSAP(
//     () => {
//       // No project → skip animations
//       if (!project) return;

//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         gsap.to(".wp-name", {
//           xPercent: -5,
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".wp-hero",
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//           },
//         });

//         gsap.fromTo(
//           ".wp-cover-inner",
//           { scale: 1 },
//           {
//             scale: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: ".wp-cover",
//               start: "top bottom",
//               end: "bottom top",
//               scrub: true,
//             },
//           }
//         );

//         gsap.utils.toArray(".wp-brief").forEach((sec) => {
//   gsap.fromTo(
//     sec.querySelector(".wp-fill"),
//     { clipPath: "inset(0 100% 0 0)" },
//     {
//       clipPath: "inset(0 0% 0 0)",
//       ease: "none",
//       scrollTrigger: {
//         trigger: sec,
//         start: "top 75%",
//         end: "top 20%",
//         scrub: true,
//       },
//     }
//   );
// });

//         const words = gsap.utils.toArray(".wp-word");
//         if (words.length) {
//           gsap.set(words, { opacity: 0, yPercent: 60 });
//           const tl = gsap.timeline({
//             scrollTrigger: {
//               trigger: ".wp-statement",
//               start: "top top",
//               end: `+=${words.length * 90}%`,
//               pin: true,
//               scrub: true,
//             },
//           });
//           tl.fromTo(
//             ".wp-statement-img",
//             { scale: 1.25 },
//             { scale: 1, duration: words.length * 2.2, ease: "none" },
//             0
//           );
//           words.forEach((w, i) => {
//             const at = i * 2.2;
//             tl.to(w, { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.out" }, at);
//             if (i < words.length - 1) {
//               tl.to(w, { opacity: 0, yPercent: -60, duration: 0.8, ease: "power2.in" }, at + 1.5);
//             }
//           });
//         }
//       });

//       mm.add(
//         "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
//         () => {
//           const track = root.current?.querySelector(".wp-track");
//           if (!track) return;
//           const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
//           gsap.to(track, {
//             x: () => -dist(),
//             ease: "none",
//             scrollTrigger: {
//               trigger: ".wp-process",
//               start: "top top",
//               end: () => `+=${dist()}`,
//               pin: true,
//               scrub: 1,
//               invalidateOnRefresh: true,
//             },
//           });
//         }
//       );
 

//       mm.add(
//   "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
//   () => {
//     const panels = gsap.utils.toArray(".wp-story-panel");
//     if (!panels.length) return;

//     gsap.set(panels, { autoAlpha: 0 });
//     gsap.set(".wp-story-fill", { clipPath: "inset(0 100% 0 0)" });
//     gsap.set(".wp-story-text", { autoAlpha: 0, y: 40 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".wp-story",
//         start: "top top",
//         end: `+=${panels.length * 150}%`,
//         pin: true,
//         scrub: true,
//       },
//     });

//     panels.forEach((panel, i) => {
//       const fill = panel.querySelector(".wp-story-fill");
//       const text = panel.querySelector(".wp-story-text");
//       const isLast = i === panels.length - 1;

//       tl.to(panel, { autoAlpha: 1, duration: 0.3 })
//         .to(fill, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "none" })
//         .to(text, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")
//         .to({}, { duration: 1 }); // hold, reader padikka time

//       if (!isLast) {
//         tl.to(panel, { autoAlpha: 0, y: -40, duration: 0.5, ease: "power2.in" });
//       }
//     });
//   }
// );
//       const refresh = () => ScrollTrigger.refresh();
//       window.addEventListener("load", refresh);
//       return () => {
//         window.removeEventListener("load", refresh);
//         mm.revert();
//       };
//     },
//     { scope: root, dependencies: [id, project] }
//   );

//   // ---------- Early returns AFTER all hooks ----------
//   if (id === "your-turn") {
//     return <Navigate to="/#contact" replace />;
//   }

//   if (!project) {
//     return <Navigate to="/" replace />;
//   }

//   const galleryClass = {
//     wide: "col-span-2 md:col-span-4 aspect-[16/10]",
//     tall: "col-span-1 md:col-span-2 aspect-[3/4]",
//     full: "col-span-2 md:col-span-6 aspect-[21/9]",
//   };

//   const hasResults = (p.results && p.results.length > 0) || p.quote;
  

//   return (
//     <main ref={root} className="relative w-full overflow-x-clip text-white">
//       {/* ================= 1. HERO ================= */}
  

//      {/* ================= 1. HERO (full-bleed cover)  1920 × 1200 px ================= */}

// <section className="wp-hero relative h-[140svh] min-h-[200px] w-full overflow-hidden ">

//   {/* Cover image - 16:10 */}
  
 
// {/* Cover image - Show complete 16:10 image */}
// <div className="wp-cover absolute inset-0 overflow-hidden">
//   <div className="wp-cover-inner absolute inset-0 flex items-center justify-center  ">

//     <Media
//       src={p.cover}
//       alt={p.name}
//       placeholder="COVER IMAGE"
//       className="h-full w-full   [&_img]:!object-center"
//     />

//   </div>
// </div>



//   {/* Overlays */}
//   {/* <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/10 to-black/30" /> */}

//   {/* Top bar */}
//   <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-5 md:p-6">

//     <a
//       href="/work"
//       className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f97316]"
//     >
//       <span className="transition group-hover:-translate-x-1">
//         ←
//       </span>
//       Back to our work
//     </a>

//     <div className="hidden items-center rounded-full bg-black/60 px-5 py-3 backdrop-blur-md md:flex">
//       <Label>{(p.services || []).join(" · ")}</Label>
//     </div>

//   </div>

//   {/* Bottom: tagline + giant name */}
//   <div className="wp-name absolute inset-x-0 bottom-0 z-10 px-5 pb-6 md:px-8 md:pb-8">

//     <h1
//       className="select-none font-[bolteSemiBold] uppercase leading-[0.82] tracking-tight text-[#f8eee8]"
//       style={{
//         fontSize: `clamp(3.5rem, ${nameSize}vw, 14rem)`
//       }}
//     >
//       {firstWords && <>{firstWords} </>}
//       <Accent>{lastWord}</Accent>
//     </h1>

//   </div>

// </section>




 

 
// {/* ================= CONTEXT & SOLUTION (pinned swap) ================= */}
// {(p.context || p.solution) && (() => {
//   const panels = [
//     { key: "context", words: ["THE", "CONTEXT"], data: p.context },
//     { key: "solution", words: ["THE", "SOLUTION"], data: p.solution },
//   ].filter((s) => s.data);

//   return (
//     <section className="wp-story relative px-6 motion-safe:md:h-screen motion-safe:md:overflow-hidden md:px-10">
//       <div className="relative motion-safe:md:h-full">
//         {panels.map(({ key, words, data }, idx) => {
//           const [lead, ...rest] = data.paragraphs || [];

//           return (
//             <div
//               key={key}
//               className="wp-story-panel flex flex-col justify-center py-20 motion-safe:md:absolute motion-safe:md:inset-0 motion-safe:md:py-0"
//             >
//               <Label>{`0${idx + 1} / 0${panels.length}`}</Label>

//               <h2 className="relative mt-8 text-[17vw] font-semibold leading-[0.9] tracking-tight md:mt-10 md:text-[9vw] font-[bolteSemiBold]">
//                 <span
//                   aria-hidden
//                   className="block"
//                   style={{
//                     color: "transparent",
//                     WebkitTextStroke: "1.5px rgba(255,255,255,0.55)",
//                   }}
//                 >
//                   {words[0]}
//                   <br className="md:hidden" /> {words[1]}
//                 </span>
//                 <span
//                   aria-hidden
//                   className="wp-story-fill absolute inset-0 block"
//                   style={{ color: ORANGE }}
//                 >
//                   {words[0]}
//                   <br className="md:hidden" /> {words[1]}
//                 </span>
//                 <span className="sr-only">{words.join(" ")}</span>
//               </h2>

//               <div className="wp-story-text mt-10 space-y-8 md:ml-[40%] md:mt-14">
//                 {lead && (
//                   <p className="font-[NeueRegular] text-xl leading-[1.3] text-white/90 md:text-3xl">
//                     {lead}
//                   </p>
//                 )}
//                 {rest.length > 0 && (
//                   <div className="grid gap-6 font-[NeueRegular] text-sm leading-relaxed text-white/60 md:grid-cols-2 md:gap-10 md:text-base">
//                     {rest.map((paragraph, i) => (
//                       <p key={i}>{paragraph}</p>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// })()}

//       {/* ================= 2. FACTS ================= */}
//       {/* <section className="px-6 py-8 md:px-10">
//         <div className="grid grid-cols-2 border-y border-dashed border-white/25 md:grid-cols-5">
//           {[
//             ["Client", p.client],
//             ["Services", (p.services || []).join(" · ")],
//             ["Year", p.year],
//             ["Timeline", p.timeline],
//           ].map(([k, v], i) => (
//             <div
//               key={k}
//               className={`py-5 md:py-7 ${
//                 i !== 0 ? "md:border-l md:border-dashed md:border-white/25 md:pl-6" : ""
//               } ${i % 2 ? "pl-4 md:pl-6" : ""}`}
//             >
//               <p className="text-[10px] tracking-[0.25em] text-white/45">
//                 {k.toUpperCase()}
//               </p>
//               <p className="mt-2 text-sm font-semibold md:text-lg font-[bolteSemiBold]">
//                 {v || "—"}
//               </p>
//             </div>
//           ))}

//           <div className="col-span-2 flex items-center py-5 md:col-span-1 md:justify-end md:border-l md:border-dashed md:border-white/25 md:py-7">
//             {p.liveUrl && (
//               <a
//                 href={p.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex -rotate-3 items-center gap-2 border-2 px-4 py-2 text-xs font-semibold tracking-[0.25em] transition hover:rotate-0"
//                 style={{ borderColor: ORANGE, color: ORANGE }}
//               >
//                 LIVE
//                 <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
//                   ↗
//                 </span>
//               </a>
//             )}
//           </div>
//         </div>
//       </section> */}
 
//  {/* ================= 2. FACTS ================= */}
// <section className="px-6 py-10 md:px-10 md:py-14">
//   <div className="grid grid-cols-2 border-y border-dashed border-white/25 md:grid-cols-4">
//     {[
//       ["Client", p.client],
//       ["Year", p.year],
//       ["Timeline", p.timeline],
//     ].map(([k, v], i) => (
//       <div
//         key={k}
//         className={`group relative overflow-hidden py-6 md:py-10 ${
//           i !== 0 ? "md:border-l md:border-dashed md:border-white/25" : ""
//         } ${i % 2 ? "pl-4 md:pl-6" : "md:pl-0"} ${i !== 0 ? "md:pl-6" : ""}`}
//       >
//         <span
//           aria-hidden
//           className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//         />
//         <p className="relative text-[10px] tracking-[0.25em] text-white/45 transition-colors duration-300 group-hover:text-black/70">
//           {k.toUpperCase()}
//         </p>
//         <p className="relative mt-3 font-[bolteSemiBold] text-2xl leading-none transition-colors duration-300 group-hover:text-black md:text-4xl">
//           {v || "—"}
//         </p>
//       </div>
//     ))}

//     {/* Live cell */}
//     <div className="group relative col-span-2 overflow-hidden md:col-span-1 md:border-l md:border-dashed md:border-white/25">
//       {p.liveUrl ? (
//         <a
//           href={p.liveUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative flex h-full items-center justify-between px-0 py-6 md:px-6 md:py-10"
//           style={{ color: ORANGE }}
//         >
//           <span
//             aria-hidden
//             className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//           />
//           <span className="relative font-[bolteSemiBold] text-2xl tracking-tight transition-colors duration-300 group-hover:text-black md:text-4xl">
//             VIEW LIVE
//           </span>
//           <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-current transition-all duration-500 group-hover:rotate-45 group-hover:text-black">
//             ↗
//           </span>
//         </a>
//       ) : (
//         <div className="py-6 text-[10px] tracking-[0.25em] text-white/30 md:px-6 md:py-10">
//           COMING SOON
//         </div>
//       )}
//     </div>
//   </div>
// </section>
// {/* ================= 6. GALLERY ================= */}

// {p.gallery && p.gallery.length > 0 && (
//   <section className="wp-gallery overflow-hidden   px-4 py-20 md:px-10 md:py-18">

//     {/* Section Heading */}
//     <div className="mb-12 flex items-end justify-between">
//       <div>
//         <Label>The work</Label>

//         <h2 className="mt-4 font-[bolteSemiBold] text-4xl tracking-tight md:text-6xl">
//           BEHIND THE <Accent>DETAILS.</Accent>
//         </h2>
//       </div>

//       <span className="hidden text-xs tracking-[0.25em] text-white/60 md:block">
//         {String(p.gallery.length).padStart(2, "0")} VISUALS
//       </span>
//     </div>

//     {/* Dynamic Gallery */}
//     <div className="flex flex-wrap items-start justify-center gap-5 md:gap-8">

//       {p.gallery.map((g, i) => {

//         const imageWidth =
//           typeof g.width === "number"
//             ? `${g.width}px`
//             : g.width || "100%";

//         const imageHeight =
//           typeof g.height === "number"
//             ? `${g.height}px`
//             : g.height || "600px";

//         return (
//           <figure
//             key={i}
//             className="group relative shrink-0 overflow-hidden border border-white/15"
//           style={{
//     width: g.width === "100%"
//       ? "100%"
//       : `min(${g.width}px, 100%)`,
//     height: `${g.height || 600}px`,
//     flex: g.width === "100%"
//       ? "0 0 100%"
//       : "1 1 400px",
//   }}
//           >

//             {/* Image */}
//             <div className="h-full w-full overflow-hidden">
//               <Media
//                 src={g.img}
//                 alt={g.caption || `Visual ${i + 1}`}
//                 placeholder={g.caption?.toUpperCase()}
//                 className="transition-transform duration-700 ease-out "
//               />
//             </div>

            
            
//           </figure>
//         );
//       })}

//     </div>

//   </section>
// )}

//       {/* ================= 7. BRAND KIT ================= */}
     

//       {/* ================= 8. RESULTS ================= */}
//       {hasResults && (
//         <section className="relative px-6 py-24 md:px-10 md:py-40">
//           <p
//             className="absolute left-3 top-24 text-xs font-semibold tracking-[0.5em] text-white/60 md:left-8 md:top-40"
//             style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
//           >
//             <span style={{ color: ORANGE }}>●</span> THE RESULT
//           </p>

//           <div className="pl-8 md:pl-24">
//             {p.results && p.results.length > 0 && (
//               <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
//                 {p.results.map((r) => (
//                   <div key={r.label}>
//                     <p
//                       className="text-7xl font-black leading-none md:text-9xl"
//                       style={{
//                         color: "transparent",
//                         WebkitTextStroke: `1.5px ${PURPLE_SOFT}`,
//                       }}
//                     >
//                       <Counter prefix={r.prefix} to={r.to} suffix={r.suffix} />
//                     </p>
//                     <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-white/60">
//                       {r.label.toUpperCase()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {p.quote && (
//               <div className="mt-20 max-w-5xl">
//                 <WordReveal
//                   text={`“${p.quote.text}”`}
//                   className="text-3xl font-semibold leading-[1.1] tracking-tight md:text-6xl font-[bolteSemiBold]"
//                 />
//                 <p className="mt-8 text-sm text-white/70">
//                   <span className="font-semibold">{p.quote.name}</span>
//                   {p.quote.role && (
//                     <span className="text-white/45">, {p.quote.role}</span>
//                   )}
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* ================= 9. NEXT PROJECT ================= */}
     

//       {/* {moreProjects?.length > 0 && (
//   <section className="relative w-full bg-white px-5 py-24 md:px-10 md:py-12">

    
//     <div className="mb-12 flex items-end justify-between">
//       <div>
//         <p className="mb-4 text-xs tracking-[0.3em] text-white/40">
//           KEEP EXPLORING
//         </p>

//         <h2 className="font-[bolteSemiBold] text-5xl leading-none text-white md:text-7xl">
//           MORE <Accent>WORKS.</Accent>
//         </h2>
//       </div>

//       <span className="hidden text-xs tracking-widest text-white/40 md:block">
//         SELECTED PROJECTS
//       </span>
//     </div>

    
//     <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//       {moreProjects.slice(0, 3).map((item, i) => {
//         const hoverImage = item.gallery?.[0]?.img || item.cover;

//         return (
//           <a
//             key={item.id}
//             href={item.href}
//             className="group relative block"
//           >
            
//             <div className="relative aspect-[4/5] overflow-hidden bg-white/5">

              
//               <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
//                 <Media
//                   src={item.cover}
//                   placeholder="PROJECT IMAGE"
//                 />
//               </div>

              
//               <div
//                 className="absolute inset-0 transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
//               >
//                 <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
//                   <Media
//                     src={hoverImage}
//                     placeholder="PROJECT IMAGE"
//                   />
//                 </div>
//               </div>

              
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-50" />

               
//               <span className="absolute left-5 top-5 text-xs tracking-widest text-white/70">
//                 0{i + 1}
//               </span>

             
//               <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black">
//                 ↗
//               </div>

              
//               <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
//                 <p className="mb-2 text-[10px] tracking-[0.25em] text-white/60">
//                   {item.category || item.type}
//                 </p>

//                 <h3 className="font-[bolteSemiBold] text-3xl leading-none text-white md:text-4xl">
//                   {item.name}
//                 </h3>
//               </div>
//             </div>

          
//             <div className="mt-4 flex items-center justify-between border-b border-white/15 pb-4">
//               <span className="text-xs tracking-widest text-white/40">
//                 VIEW PROJECT
//               </span>

//               <span className="text-xs text-white/40 transition-colors duration-300 group-hover:text-[#ed710c]">
//                 EXPLORE ↗
//               </span>
//             </div>
//           </a>
//         );
//       })}
//     </div>
//   </section>
// )} */}

// {moreProjects?.length > 0 && (
//   <section className="relative w-full bg-[#f8eee8] px-5 py-20 md:px-10 md:py-24">
//     {/* Section heading */}
//     <div className="mb-12 flex items-end justify-between">
//       <div>
//         <p className="mb-4 text-xs tracking-[0.3em] text-black/40">
//           KEEP EXPLORING
//         </p>
//         <h2 className="font-[bolteSemiBold] text-5xl leading-none text-[#0a0a0a] md:text-7xl">
//           MORE <Accent>WORKS</Accent>
//         </h2>
//       </div>
//       <span className="hidden text-xs tracking-widest text-black/40 md:block">
//         SELECTED PROJECTS
//       </span>
//     </div>

//     {/* Cards */}
//     <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
//       {moreProjects.slice(0, 3).map((item) => {
//         const hoverImage = item.gallery?.[0]?.img || item.cover;

//         return (
//           <a key={item.id} href={item.href} className="group block">
//             {/* Image frame */}
//             <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5">
//               {/* Base image */}
//               <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
//                 <Media src={item.image} alt={item.name} placeholder="PROJECT IMAGE" />
//               </div>

//               {/* Hover image: wipes up from bottom */}
//               {/* <div className="absolute inset-0 [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:[clip-path:inset(0_0_0_0)]">
//                 <div className="h-full w-full scale-[1.15] transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100">
//                   <Media src={hoverImage} alt={item.name} placeholder="PROJECT IMAGE" />
//                 </div>
//               </div> */}
//             </div>

//             {/* Footer: logo + name/category + arrow */}
//             <div className="mt-4 flex items-center gap-4">
//               <div
//                 className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-bold text-white"
//                 style={{ background: ORANGE }}
//               >
//                 {item.logo ? (
//                   <img src={item.logo} alt="" className="h-full w-full object-cover" draggable={false} />
//                 ) : (
//                   (item.name || "?")[0]
//                 )}
//               </div>

//               <div className="min-w-0 flex-1">
//                 <h3 className="truncate font-[bolteSemiBold] text-2xl uppercase leading-none tracking-tight text-[#0a0a0a] md:text-3xl">
//                   {item.name}
//                 </h3>
//                 <p
//                   className="mt-1.5 truncate text-sm font-semibold uppercase tracking-wide"
//                   style={{ color: ORANGE }}
//                 >
//                   {item.category || item.type}
//                 </p>
//               </div>

//               <span
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black"
//                 style={{ background: ORANGE }}
//               >
//                 <ArrowUpRight size={18} strokeWidth={1.8} />
//               </span>
//             </div>
//           </a>
//         );
//       })}
//     </div>
//   </section>
// )}

//       {/* ================= 10. CTA ================= */}
//       <section className="px-6 py-24 md:px-10 md:py-36">
//         <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
//           <button
//             // href={CTA.href}
//             onClick={openContact}
//               type="button"
//             className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-white/25 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 md:text-2xl"
//           >
//             <span
//               aria-hidden
//               className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//             />
//             <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//               {CTA.button}
//             </span>
//             <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//               <ArrowUpRight
//                 size={19}
//                 strokeWidth={1.5}
//                 className="transition-all duration-500 group-hover:text-black"
//               />
//             </span>
//             <span
//               aria-hidden
//               className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
//             />
//           </button>

//           <h2 className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-right md:text-7xl font-[bolteSemiBold]">
//             {CTA.text.split(" ").slice(0, -2).join(" ")}
//             <br />
//             <Accent>{CTA.text.split(" ").slice(-2).join(" ")}</Accent>
//           </h2>
//         </div>
//       </section>
//     </main>
//   );
// }





import { useEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

import {
  projects,
  getProjectById,
  getNextProject,
} from "../data/slides";

import { useContactModal } from "../Context/ContactModalContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ---------- PALETTE ---------- */

const ORANGE = "#f97316";
const ACCENT = "#ed710c";
const PURPLE_SOFT = "#a78bfa";

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const readableOn = (hex) => {
  const h = hex.replace("#", "");
  const n = parseInt(
    h.length === 3 ? h.replace(/(.)/g, "$1$1") : h,
    16
  );

  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;

  return (r * 299 + g * 587 + b * 114) / 1000 > 150
    ? "#0a0a0a"
    : "#ffffff";
};

/* =====================================================
   SMALL COMPONENTS
===================================================== */

function Label({ children, className = "" }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em] ${className}`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2"
        style={{ background: ORANGE }}
      />
      {String(children).toUpperCase()}
    </p>
  );
}

function Accent({ children }) {
  return (
    <span
      className="font-[bolteSemiBold] font-semibold"
      style={{ color: "white" }}
    >
      {children}
    </span>
  );
}

function Placeholder({ text = "IMAGE", className = "" }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-white/5 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(167,139,250,0.14), rgba(249,115,22,0.14))",
      }}
    >
      <span className="text-[10px] tracking-[0.25em] text-white/40">
        {text}
      </span>
    </div>
  );
}

function Media({
  src,
  alt = "",
  className = "",
  placeholder,
  fit = "cover",
}) {
  return src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-${fit} ${className}`}
      draggable={false}
    />
  ) : (
    <Placeholder text={placeholder} />
  );
}

function Counter({ prefix = "", to, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    let raf;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        io.disconnect();

        const start = performance.now();

        const tick = (now) => {
          const t = Math.min(1, (now - start) / 1400);

          setVal(
            Math.round(to * (1 - Math.pow(1 - t, 3)))
          );

          if (t < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

function WordReveal({ text, className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ");
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      setLit(
        Math.round(
          clamp((vh * 0.9 - r.top) / (vh * 0.5), 0, 1) *
            words.length
        )
      );
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="transition-opacity duration-300"
          style={{ opacity: i < lit ? 1 : 0.22 }}
        >
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

function Devices({ laptop, phone }) {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-4xl sm:mt-10">
      <div className="mx-auto aspect-[16/10] w-[88%] overflow-hidden rounded-t-lg border-4 border-black/80 bg-black/80 shadow-2xl sm:rounded-t-xl sm:border-[6px]">
        <Media src={laptop} placeholder="LAPTOP SCREEN" />
      </div>

      <div className="mx-auto h-2 w-full rounded-b-xl bg-black/80 sm:h-3 sm:rounded-b-2xl" />

      <div className="absolute -bottom-3 right-0 aspect-[9/19] w-[19%] overflow-hidden rounded-xl border-4 border-black/80 bg-black/80 shadow-2xl sm:-bottom-6 sm:w-[17%] sm:rounded-2xl sm:border-[5px]">
        <Media src={phone} placeholder="PHONE" />
      </div>
    </div>
  );
}

const CTA = {
  text: "Want something like this?",
  button: "START A PROJECT",
  href: "#contact",
};

/* =====================================================
   PAGE
===================================================== */

export default function WeepekWorkDetail() {
  const { id } = useParams();
  const root = useRef(null);

  const { openContact } = useContactModal();

  const project = getProjectById(id);
  const next = getNextProject(id);

  const moreProjects = projects
    .filter(
      (item) =>
        item.id !== id &&
        item.id !== "your-turn"
    )
    .slice(0, 3);

  /* ---------- SAFE DEFAULTS ---------- */

  const p = project || {
    name: "",
    services: [],
    year: "",
    client: "",
    timeline: "",
    tagline: "",
    cover: null,
    brief: null,
    statement: null,
    process: [],
    gallery: [],
    brand: null,
    devices: null,
    results: [],
    quote: null,
    type: "",
    liveUrl: null,
  };

  const nameWords = (p.name || "").split(" ");
  const lastWord = nameWords.pop() || "";
  const firstWords = nameWords.join(" ");

  const nameSize = Math.min(
    22,
    150 / Math.max((p.name || "A").length, 1)
  );

  const brandText = p.brand
    ? readableOn(p.brand.color)
    : "#fff";

  /* =====================================================
     GSAP ANIMATIONS
  ===================================================== */

  useGSAP(
    () => {
      if (!project) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          /* HERO TITLE */

          gsap.to(".wp-name", {
            xPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: ".wp-hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          /* COVER */

          gsap.fromTo(
            ".wp-cover-inner",
            { scale: 1 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".wp-cover",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );

          /* BRIEF */

          gsap.utils.toArray(".wp-brief").forEach((sec) => {
            const fill = sec.querySelector(".wp-fill");
            if (!fill) return;

            gsap.fromTo(
              fill,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                ease: "none",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 75%",
                  end: "top 20%",
                  scrub: true,
                },
              }
            );
          });

          /* STATEMENT */

          const words = gsap.utils.toArray(".wp-word");

          if (words.length) {
            gsap.set(words, {
              opacity: 0,
              yPercent: 60,
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".wp-statement",
                start: "top top",
                end: `+=${words.length * 90}%`,
                pin: true,
                scrub: true,
              },
            });

            tl.fromTo(
              ".wp-statement-img",
              { scale: 1.25 },
              {
                scale: 1,
                duration: words.length * 2.2,
                ease: "none",
              },
              0
            );

            words.forEach((w, i) => {
              const at = i * 2.2;

              tl.to(
                w,
                {
                  opacity: 1,
                  yPercent: 0,
                  duration: 0.8,
                  ease: "power2.out",
                },
                at
              );

              if (i < words.length - 1) {
                tl.to(
                  w,
                  {
                    opacity: 0,
                    yPercent: -60,
                    duration: 0.8,
                    ease: "power2.in",
                  },
                  at + 1.5
                );
              }
            });
          }
        }
      );

      /* DESKTOP PROCESS */

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = root.current?.querySelector(".wp-track");
          if (!track) return;

          const dist = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          gsap.to(track, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: {
              trigger: ".wp-process",
              start: "top top",
              end: () => `+=${dist()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );

      /* DESKTOP STORY */

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const panels = gsap.utils.toArray(
            ".wp-story-panel"
          );

          if (!panels.length) return;

          gsap.set(panels, { autoAlpha: 0 });

          gsap.set(".wp-story-fill", {
            clipPath: "inset(0 100% 0 0)",
          });

          gsap.set(".wp-story-text", {
            autoAlpha: 0,
            y: 40,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".wp-story",
              start: "top top",
              end: `+=${panels.length * 150}%`,
              pin: true,
              scrub: true,
            },
          });

          panels.forEach((panel, i) => {
            const fill = panel.querySelector(
              ".wp-story-fill"
            );

            const text = panel.querySelector(
              ".wp-story-text"
            );

            const isLast = i === panels.length - 1;

            tl.to(panel, {
              autoAlpha: 1,
              duration: 0.3,
            })
              .to(fill, {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.2,
                ease: "none",
              })
              .to(
                text,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                },
                "-=0.5"
              )
              .to({}, { duration: 1 });

            if (!isLast) {
              tl.to(panel, {
                autoAlpha: 0,
                y: -40,
                duration: 0.5,
                ease: "power2.in",
              });
            }
          });
        }
      );

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    {
      scope: root,
      dependencies: [id, project],
    }
  );

  /* ---------- REDIRECTS ---------- */

  if (id === "your-turn") {
    return <Navigate to="/#contact" replace />;
  }

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const hasResults =
    (p.results && p.results.length > 0) || p.quote;

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <main
      ref={root}
      className="relative w-full min-w-0 overflow-x-clip text-white"
    >
      {/* ================================================
          1. HERO
      ================================================ */}

 <section className="wp-hero relative flex w-full min-w-0 items-center justify-center overflow-hidden bg-[#0b0613] aspect-[4/5] sm:aspect-[16/10] md:aspect-auto md:h-[100svh] md:min-h-[700px] md:max-h-[1100px]">

  {/* COVER IMAGE */}
  <div className="wp-cover absolute inset-0 overflow-hidden">
    <div className="wp-cover-inner absolute inset-0 flex h-full w-full items-center justify-center">
      <Media
        src={p.cover}
        alt={p.name}
        placeholder="COVER IMAGE"
        fit="cover"
        className="h-full w-full max-w-full object-cover object-[72%_center] sm:object-[60%_center] md:object-center"
      />
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
  </div>

  {/* TOP BAR */}
  <div className="absolute inset-x-0 top-0 z-20 flex min-w-0 items-start justify-between gap-3 p-4 sm:p-5 md:p-6 pt-20">
    <a
      href="/work"
      className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-medium text-black transition hover:bg-[#f97316] sm:px-5 sm:py-3 sm:text-sm"
    >
      <span className="transition group-hover:-translate-x-1">←</span>
      Back to our work
    </a>

    <div className="hidden min-w-0 max-w-[60%] items-center rounded-full bg-black/60 px-4 py-3 backdrop-blur-md md:flex lg:px-5">
      <Label>{(p.services || []).join(" · ")}</Label>
    </div>
  </div>

  {/* BOTTOM TITLE */}
  <div className="wp-name absolute inset-x-0 bottom-0 z-10 min-w-0 px-4 pb-5 sm:px-6 sm:pb-8 md:px-8 md:pb-10">
    <h1
      className="select-none break-words font-[bolteSemiBold] uppercase leading-[0.82] tracking-tight text-[#f8eee8]"
      style={{
        fontSize: `clamp(2.6rem, ${nameSize}vw, 14rem)`,
        overflowWrap: "break-word",
      }}
    >
      {firstWords && <>{firstWords} </>}
      <Accent>{lastWord}</Accent>
    </h1>
  </div>
</section>
      {/* ================================================
          2. CONTEXT & SOLUTION
      ================================================ */}

      {(p.context || p.solution) &&
        (() => {
          const panels = [
            {
              key: "context",
              words: ["THE", "CONTEXT"],
              data: p.context,
            },
            {
              key: "solution",
              words: ["THE", "SOLUTION"],
              data: p.solution,
            },
          ].filter((s) => s.data);

          return (
            <section className="wp-story relative px-5 py-8 sm:px-8 md:h-screen md:overflow-hidden md:px-10 md:py-0">

              <div className="relative md:h-full">

                {panels.map(({ key, words, data }, idx) => {
                  const [lead, ...rest] =
                    data.paragraphs || [];

                  return (
                    <div
                      key={key}
                      className="wp-story-panel flex flex-col justify-center py-12 sm:py-16 md:absolute md:inset-0 md:py-0"
                    >
                      <Label>
                        {`0${idx + 1} / 0${panels.length}`}
                      </Label>

                      <h2 className="relative mt-7 break-words font-[bolteSemiBold] text-[clamp(3.5rem,13vw,9rem)] font-semibold leading-[0.9] tracking-tight sm:mt-10 md:text-[9vw]">

                        <span
                          aria-hidden
                          className="block"
                          style={{
                            color: "transparent",
                            WebkitTextStroke:
                              "1.5px rgba(255,255,255,0.55)",
                          }}
                        >
                          {words[0]}
                          <br className="md:hidden" />{" "}
                          {words[1]}
                        </span>

                        <span
                          aria-hidden
                          className="wp-story-fill absolute inset-0 block"
                          style={{ color: ORANGE }}
                        >
                          {words[0]}
                          <br className="md:hidden" />{" "}
                          {words[1]}
                        </span>

                        <span className="sr-only">
                          {words.join(" ")}
                        </span>
                      </h2>

                      <div className="wp-story-text mt-8 space-y-6 sm:mt-10 sm:space-y-8 md:ml-[40%] md:mt-14">

                        {lead && (
                          <p className="font-[NeueRegular] text-lg leading-[1.35] text-white/90 sm:text-2xl md:text-3xl">
                            {lead}
                          </p>
                        )}

                        {rest.length > 0 && (
                          <div className="grid gap-5 font-[NeueRegular] text-sm leading-relaxed text-white/60 sm:gap-7 md:grid-cols-2 md:gap-10 md:text-base">
                            {rest.map((paragraph, i) => (
                              <p key={i}>{paragraph}</p>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}

              </div>
            </section>
          );
        })()}

      {/* ================================================
          3. PROJECT FACTS
      ================================================ */}

      <section className="px-5 py-8 sm:px-8 sm:py-12 md:px-10 md:py-14">

        <div className="grid grid-cols-2 border-y border-dashed border-white/25 md:grid-cols-4">

          {[
            ["Client", p.client],
            ["Year", p.year],
            ["Timeline", p.timeline],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`group relative min-w-0 overflow-hidden py-5 sm:py-7 md:py-10 ${
                i % 2 !== 0
                  ? "border-l border-dashed border-white/25 pl-4 sm:pl-6"
                  : "pr-3 sm:pr-6"
              } ${
                i === 2
                  ? "border-t border-dashed border-white/25 md:border-t-0"
                  : ""
              } md:border-l md:border-dashed md:border-white/25 md:pl-6`}
            >

              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <p className="relative text-[9px] tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-black/70 sm:text-[10px] sm:tracking-[0.25em]">
                {k.toUpperCase()}
              </p>

              <p className="relative mt-2 break-words font-[bolteSemiBold] text-xl leading-tight transition-colors duration-300 group-hover:text-black sm:mt-3 sm:text-2xl md:text-4xl">
                {v || "—"}
              </p>
            </div>
          ))}

          {/* LIVE CELL */}

          <div className="group relative col-span-2 min-w-0 overflow-hidden border-t border-dashed border-white/25 md:col-span-1 md:border-l md:border-t-0 md:pl-6">

            {p.liveUrl ? (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex min-h-[85px] items-center justify-between gap-3 py-5 md:h-full md:py-10"
                style={{ color: ORANGE }}
              >

                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <span className="relative font-[bolteSemiBold] text-2xl tracking-tight transition-colors duration-300 group-hover:text-black sm:text-3xl md:text-4xl">
                  VIEW LIVE
                </span>

                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current transition-all duration-500 group-hover:rotate-45 group-hover:text-black sm:h-10 sm:w-10">
                  ↗
                </span>

              </a>
            ) : (
              <div className="py-6 text-[10px] tracking-[0.25em] text-white/30 md:py-10">
                COMING SOON
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ================================================
          4. GALLERY
      ================================================ */}

      {p.gallery && p.gallery.length > 0 && (
        <section className="wp-gallery w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20">

          {/* HEADING */}

          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">

            <div className="min-w-0">
              <Label>The work</Label>

              <h2 className="mt-3 break-words font-[bolteSemiBold] text-3xl tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
                BEHIND THE <Accent>DETAILS.</Accent>
              </h2>
            </div>

            <span className="hidden shrink-0 text-xs tracking-[0.25em] text-white/60 sm:block">
              {String(p.gallery.length).padStart(2, "0")} VISUALS
            </span>

          </div>

          {/* RESPONSIVE GALLERY */}

          <div className="flex w-full flex-wrap items-start justify-center gap-3 sm:gap-5 md:gap-8">

            {p.gallery.map((g, i) => {
              const isFull = g.width === "100%";

              const numericWidth =
                typeof g.width === "number" ? g.width : null;

              const numericHeight =
                typeof g.height === "number" ? g.height : null;

              const ratio =
                numericWidth && numericHeight
                  ? `${numericWidth} / ${numericHeight}`
                  : "4 / 5";

              return (
                <figure
                  key={i}
                  className="group relative min-w-0 w-full shrink-0 overflow-hidden border border-white/15 sm:w-[calc(50%-10px)] md:w-auto"
                  style={{
                    width: isFull
                      ? "100%"
                      : numericWidth
                        ? `min(100%, ${numericWidth}px)`
                        : undefined,

                    maxWidth: "100%",

                    flex: isFull
                      ? "0 0 100%"
                      : "1 1 320px",

                    aspectRatio: ratio,
                  }}
                >

                  <div className="h-full w-full overflow-hidden">

                    <Media
                      src={g.img}
                      alt={g.caption || `Visual ${i + 1}`}
                      placeholder={g.caption?.toUpperCase()}
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                  </div>

                </figure>
              );
            })}

          </div>
        </section>
      )}

      {/* ================================================
          5. RESULTS
      ================================================ */}

      {hasResults && (
        <section className="relative px-5 py-16 sm:px-8 sm:py-24 md:px-10 md:py-40">

          <p
            className="absolute left-2 top-16 text-[9px] font-semibold tracking-[0.3em] text-white/60 sm:left-4 sm:top-24 sm:text-xs md:left-8 md:top-40 md:tracking-[0.5em]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <span style={{ color: ORANGE }}>●</span> THE RESULT
          </p>

          <div className="min-w-0 pl-7 sm:pl-10 md:pl-24">

            {/* RESULTS COUNTERS */}

            {p.results && p.results.length > 0 && (
              <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">

                {p.results.map((r) => (
                  <div key={r.label} className="min-w-0">

                    <p
                      className="break-words font-black leading-none text-[clamp(3.5rem,12vw,9rem)]"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: `1.5px ${PURPLE_SOFT}`,
                      }}
                    >
                      <Counter
                        prefix={r.prefix}
                        to={r.to}
                        suffix={r.suffix}
                      />
                    </p>

                    <p className="mt-3 text-[10px] font-semibold tracking-[0.15em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                      {r.label.toUpperCase()}
                    </p>

                  </div>
                ))}

              </div>
            )}

            {/* TESTIMONIAL */}

            {p.quote && (
              <div className="mt-14 max-w-5xl sm:mt-20">

                <WordReveal
                  text={`“${p.quote.text}”`}
                  className="break-words font-[bolteSemiBold] text-[clamp(1.8rem,5vw,4rem)] font-semibold leading-[1.1] tracking-tight"
                />

                <p className="mt-6 text-xs text-white/70 sm:mt-8 sm:text-sm">
                  <span className="font-semibold">
                    {p.quote.name}
                  </span>

                  {p.quote.role && (
                    <span className="text-white/45">
                      , {p.quote.role}
                    </span>
                  )}
                </p>

              </div>
            )}

          </div>
        </section>
      )}

      {/* ================================================
          6. MORE WORKS
      ================================================ */}

      {moreProjects?.length > 0 && (
        <section className="relative w-full overflow-hidden bg-[#f8eee8] px-5 py-14 sm:px-8 sm:py-20 md:px-10 md:py-24">

          {/* HEADING */}

          <div className="mb-9 flex items-end justify-between gap-3 sm:mb-12">

            <div className="min-w-0">
              <p className="mb-3 text-[10px] tracking-[0.25em] text-black/40 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
                KEEP EXPLORING
              </p>

              <h2 className="break-words font-[bolteSemiBold] text-4xl leading-none text-[#0a0a0a] sm:text-5xl md:text-7xl">
                MORE <Accent>WORKS</Accent>
              </h2>
            </div>

            <span className="hidden shrink-0 text-xs tracking-widest text-black/40 md:block">
              SELECTED PROJECTS
            </span>

          </div>

          {/* PROJECT CARDS */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">

            {moreProjects.slice(0, 3).map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group block min-w-0"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/5 sm:rounded-3xl">

                    <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">

                      <Media
                        src={item.image || item.cover}
                        alt={item.name}
                        placeholder="PROJECT IMAGE"
                      />

                    </div>

                  </div>

                  {/* CARD FOOTER */}

                  <div className="mt-4 flex min-w-0 items-center gap-3 sm:gap-4">

                    {/* LOGO */}

                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-base font-bold text-white sm:h-14 sm:w-14 sm:text-lg"
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

                    {/* DETAILS */}

                    <div className="min-w-0 flex-1">

                      <h3 className="truncate font-[bolteSemiBold] text-xl uppercase leading-none tracking-tight text-[#0a0a0a] sm:text-2xl md:text-3xl">
                        {item.name}
                      </h3>

                      <p
                        className="mt-1.5 truncate text-[10px] font-semibold uppercase tracking-wide sm:text-sm"
                        style={{ color: ORANGE }}
                      >
                        {item.category || item.type}
                      </p>

                    </div>

                    {/* ARROW */}

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-black sm:h-10 sm:w-10"
                      style={{ background: ORANGE }}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                  </div>

                </a>
              );
            })}

          </div>
        </section>
      )}

      {/* ================================================
          7. CTA
      ================================================ */}

      <section className="w-full overflow-hidden px-5 py-16 sm:px-8 sm:py-24 md:px-10 md:py-36">

        <div className="flex flex-col items-start justify-between gap-9 md:flex-row md:items-end md:gap-10">

          {/* CTA BUTTON */}

          <button
            type="button"
            onClick={openContact}
            className="group relative inline-flex min-h-[64px] max-w-full items-center gap-4 overflow-hidden rounded-xl border border-white/25 px-4 py-4 font-[bolteSemiBold] text-base tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 sm:gap-8 sm:rounded-2xl sm:px-6 sm:py-5 sm:text-xl md:text-2xl"
          >

            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />

            <span className="relative z-10 whitespace-nowrap transition-colors duration-300 group-hover:text-black">
              {CTA.button}
            </span>

            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10 sm:h-9 sm:w-9">

              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
                className="transition-all duration-500 group-hover:text-black"
              />

            </span>

            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
            />

          </button>

          {/* CTA HEADING */}

          <h2 className="max-w-full break-words font-[bolteSemiBold] text-[clamp(2.3rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight md:text-right">

            {CTA.text.split(" ").slice(0, -2).join(" ")}

            <br />

            <Accent>
              {CTA.text.split(" ").slice(-2).join(" ")}
            </Accent>

          </h2>

        </div>
      </section>

    </main>
  );
}
