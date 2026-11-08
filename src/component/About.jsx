 
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Den from "../assets/den1.png";
// import d6 from "../assets/d61.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";
// import { useContactModal } from "../Context/ContactModalContext";
// import Founder from '../assets/Founder.png'
// /* =====================================================
//    HERO (Option E: statement with inline pill images)
//    - images: dummy photos for now → replace `src` later
//      (w = pill width in "em", relative to the heading size)
//    - statement: strings = words, { img: n } = pill image,
//      { accent: "WORD" } = italic orange word
// ===================================================== */
// const ABOUT_HERO = {
//   tag: "About Weepek",
//   place: "CHENNAI, INDIA",
//   images: [
//     { src: "https://picsum.photos/seed/weepek-team/600/400", w: "1.7em" },
//     { src: "https://picsum.photos/seed/weepek-studio/600/400", w: "1.35em" },
//     { src: "https://picsum.photos/seed/weepek-work/600/400", w: "1.9em" },
//     { src: "https://picsum.photos/seed/weepek-founder/600/400", w: "1.5em" },
//   ],
//   statement: [
//     "WE'RE",
//     "A",
//     { img: 0 },
//     "SMALL",
//     "STUDIO",
//     "IN",
//    "CHENNAI," ,
//     "BUILDING",
//     { img: 1 },
//     { accent: "BRANDS," },
//      {accent: "WEBSITES"},
//     { img: 2 },
//     "AND",
//     "STORES",
//     "FOR",
//     "PEOPLE",
//     "WHO",
//     { img: 3 },
//     { accent: "BELIEVE" },
//     "IN",
//     "THEIR",
//     "OWN",
//     "BUSINESS.",
//   ],
//   stats: [
//     { to: 10, suffix: "+", label: "Team members" },
//     { to: 20, suffix: "+", label: "Projects delivered" },
//     { text: "Chennai", label: "Based in" },
//   ],
// };

// const MARQUEE = [
//   "BRAND",
//   "WEBSITES",
//   "APPS",
//   "E-COMMERCE",
//   "SEO",
//   "MOTION",
//   "MARKETING",
// ];

// const STORY = {
//   label: "How we started",
//   sticky: ["It began with", "one website."],
//   chapters: [
//     {
//       title: "One website.",
//       text: "We just wanted to build something of our own. So we built websites, learned, broke things and got better.",
//     },
//     {
//       title: "Then branding.",
//       text: "Our clients needed more than a site. They needed a name, a look and a voice. So we grew into branding.",
//     },
//     {
//       title: "Now, everything.",
//       text: "Brand, digital and e-commerce under one roof, with one team that cares about all of it.",
//     },
//   ],
// };

// const FOUNDER = {
//   label: "The founder",
//   name: "Poornima",
//   role: "Founder & CEO",
//   img: Founder,
//   quote: "I wanted to build something of my own, where every detail has a purpose.",
//   link: {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//   },
// };

// const SERVICES = {
//   label: "What we do",
//   title: "We've got range.",
//   items: [
//     { name: "Brand identity", group: "Brand", img: Den },
//     { name: "Logo & graphics", group: "Brand", img: d6 },
//     { name: "Video & motion", group: "Brand", img: null },
//     { name: "Websites", group: "Build", img: web },
//     { name: "Mobile apps", group: "Build", img: null },
//     { name: "E-commerce", group: "Build", img: web1 },
//     { name: "Automation (RPA)", group: "Build", img: null },
//     { name: "SEO", group: "Grow", img: null },
//     { name: "Digital marketing", group: "Grow", img: null },
//   ],
// };

// const BEHIND = {
//   label: "Behind the work",
//   title: "Off the clock.",
//   photos: [
//     { img: web, caption: "Late nights" },
//     { img: web1, caption: "First ideas" },
//     { img: Branding, caption: "Team lunch" },
//     { img: Branding1, caption: "Shoot day" },
//     { img: white3, caption: "Whiteboard" },
//     { img: null, caption: "Launch day" },
//   ],
// };

// const CLOSING = {
//   lines: ["Enough about us.", "Tell us about"],
//   accent: "you",
//   email: "hello@weepek.com",
//   cta: "START A PROJECT",
//   href: "#contact",
// };

// const ORANGE = "#f97316";
// const ACCENT = "#ed710c";
// const PURPLE_SOFT = "#a78bfa";

// const H2 =
//   "text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl font-[bolteSemiBold]";

// /* ================= SMALL COMPONENTS ================= */

// function Label({ children }) {
//   return (
//     <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70">
//       <span
//         className="h-2 w-2 rounded-full"
//         style={{ background: ORANGE }}
//       />
//       {children.toUpperCase()}
//     </p>
//   );
// }

// function Accent({ children, className = "" }) {
//   return (
//     <span
//       className={`italic font-[bolteSemiBold]  font-semibold ${className}`}
//       style={{ color: ACCENT }}
//     >
//       {children}
//     </span>
//   );
// }

// function Counter({ to, suffix = "" }) {
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
//     const el = ref.current;
//     if (!el) return;

//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setLit(words.length);
//       return;
//     }

//     let ticking = false;

//     const onScroll = () => {
//       if (ticking) return;
//       ticking = true;

//       requestAnimationFrame(() => {
//         const element = ref.current;

//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const vh = window.innerHeight;
//           const progress = Math.min(
//             1,
//             Math.max(0, (vh * 0.9 - rect.top) / (vh * 0.5))
//           );

//           setLit(Math.round(progress * words.length));
//         }

//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [words.length]);

//   return (
//     <p ref={ref} className={className}>
//       {words.map((word, i) => (
//         <span
//           key={`${word}-${i}`}
//           className="transition-opacity duration-300"
//           style={{ opacity: i < lit ? 1 : 0.22 }}
//         >
//           {word}{" "}
//         </span>
//       ))}
//     </p>
//   );
// }

// function Placeholder({ text, className = "" }) {
//   return (
//     <div
//       className={`flex h-full w-full items-center justify-center bg-white/5 ${className}`}
//       style={{
//         backgroundImage:
//           "linear-gradient(135deg, rgba(167,139,250,0.14), rgba(249,115,22,0.14))",
//       }}
//     >
//       <span className="text-[10px] tracking-[0.25em] text-white/40">
//         {text}
//       </span>
//     </div>
//   );
// }

// /* ================= ABOUT PAGE ================= */

// export default function WeepekAboutPage() {
//   const rootRef = useRef(null);
//   const listRef = useRef(null);
//   const previewRef = useRef(null);
//   const { openContact } = useContactModal();

//   const [hovered, setHovered] = useState(null);

//   const onListMove = (e) => {
//     const box = listRef.current?.getBoundingClientRect();
//     const preview = previewRef.current;

//     if (!box || !preview) return;

//     preview.style.transform = `translate(
//       ${e.clientX - box.left + 28}px,
//       ${e.clientY - box.top - 100}px
//     )`;
//   };

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const root = rootRef.current;
//     if (!root) return;

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (reduceMotion) return;

//     const ctx = gsap.context(() => {
//       // sections are picked by data-sec (not by index), so commenting a section in/out never breaks the animations
//       const pick = (name) => root.querySelector(`[data-sec="${name}"]`);

//       const hero = pick("hero");
//       const story = pick("story");
//       const founder = pick("founder");
//       const services = pick("services");
//       const behind = pick("behind");
//       const closing = pick("closing");

//       /* ================= HERO ANIMATION ================= */

//       if (hero) {
//         // words rise in, one by one
//         gsap.from(hero.querySelectorAll(".ab-tok"), {
//           opacity: 0,
//           y: "0.35em",
//           duration: 0.8,
//           ease: "power3.out",
//           stagger: 0.045,
//         });

//         // pill images "open up" from zero width, pushing the words apart
//         gsap.from(hero.querySelectorAll(".ab-pill"), {
//           width: 0,
//           duration: 0.9,
//           ease: "power3.inOut",
//           stagger: 0.15,
//           delay: 0.5,
//           clearProps: "width",
//         });

//         // photos drift inside their pills while scrolling
//         const pillImgs = hero.querySelectorAll(".ab-pill img");
//         const title = hero.querySelector(".ab-title");
//         if (pillImgs.length && title) {
//           gsap.fromTo(
//             pillImgs,
//             { yPercent: -10 },
//             {
//               yPercent: 10,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: title,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//               },
//             }
//           );
//         }

//         // meta row + stats
//         gsap.from(hero.querySelectorAll(".ab-meta, .ab-stat"), {
//           opacity: 0,
//           y: 20,
//           duration: 0.7,
//           ease: "power2.out",
//           stagger: 0.1,
//           delay: 0.3,
//         });
//       }

//       /* ================= STORY ANIMATION ================= */

//       if (story) {
//         const storyLabel = story.querySelector(":scope > p");
//         const storyHeading = story.querySelector("h2");
//         const chapters = story.querySelectorAll(".space-y-14 > div");

//         if (storyLabel) {
//           gsap.from(storyLabel, {
//             x: -18,
//             autoAlpha: 0,
//             duration: 0.7,
//             scrollTrigger: {
//               trigger: story,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (storyHeading) {
//           gsap.from(storyHeading, {
//             y: 38,
//             autoAlpha: 0,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: storyHeading,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (chapters.length) {
//           gsap.from(chapters, {
//             y: 48,
//             autoAlpha: 0,
//             duration: 0.9,
//             stagger: 0.18,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: chapters[0].parentElement,
//               start: "top 78%",
//               once: true,
//             },
//           });
//         }
//       }

//       /* ================= FOUNDER ANIMATION ================= */

//       if (founder) {
//         const portrait = founder.querySelector(".wp-tilt");
//         const details = founder.querySelector(
//           ".mt-8.flex.items-end.justify-between"
//         );
//         const quoteMark = founder.querySelector('[aria-hidden="true"]');
//         const statement = founder.querySelector(".mt-12.flex.items-center");

//         if (portrait) {
//           gsap.from(portrait, {
//             clipPath: "inset(12% 0 12% 0)",
//             autoAlpha: 0,
//             duration: 1.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: portrait,
//               start: "top 78%",
//               once: true,
//             },
//           });
//         }

//         if (details) {
//           gsap.from(details, {
//             y: 18,
//             autoAlpha: 0,
//             duration: 0.8,
//             delay: 0.15,
//             scrollTrigger: {
//               trigger: founder,
//               start: "top 72%",
//               once: true,
//             },
//           });
//         }

//         if (quoteMark) {
//           gsap.from(quoteMark, {
//             y: 24,
//             scale: 0.85,
//             autoAlpha: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: quoteMark,
//               start: "top 85%",
//               once: true,
//             },
//           });
//         }

//         if (statement) {
//           gsap.from(statement, {
//             x: -16,
//             autoAlpha: 0,
//             duration: 0.7,
//             scrollTrigger: {
//               trigger: statement,
//               start: "top 92%",
//               once: true,
//             },
//           });
//         }
//       }

//       /* ================= SERVICES ANIMATION ================= */

//       if (services) {
//         const serviceHeading = services.querySelector("h2");
//         const rows = services.querySelectorAll(
//           ".group.relative.flex.items-center.justify-between"
//         );

//         if (serviceHeading) {
//           gsap.from(serviceHeading, {
//             y: 32,
//             autoAlpha: 0,
//             duration: 0.9,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: serviceHeading,
//               start: "top 85%",
//               once: true,
//             },
//           });
//         }

//         if (rows.length) {
//           gsap.from(rows, {
//             y: 24,
//             autoAlpha: 0,
//             duration: 0.7,
//             stagger: 0.075,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: rows[0].parentElement,
//               start: "top 78%",
//               once: true,
//             },
//           });
//         }
//       }

//       /* ================= BEHIND THE WORK ================= */

//       if (behind) {
//         const label = behind.querySelector(":scope > div > div > p");
//         const heading = behind.querySelector("h2");
//         const headingWords = behind.querySelectorAll(".wp-behind-word");
//         const headingRule = behind.querySelector(".wp-behind-rule");
//         const headingMeta = behind.querySelector(".wp-behind-meta");
//         const headingDescription = behind.querySelector(".wp-behind-description");
//         const figures = behind.querySelectorAll("figure");

//         if (label) {
//           gsap.from(label, {
//             x: -16,
//             autoAlpha: 0,
//             duration: 0.7,
//             scrollTrigger: {
//               trigger: behind,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (heading) {
//           gsap.from(heading, {
//             y: 18,
//             autoAlpha: 0,
//             duration: 0.7,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: heading,
//               start: "top 86%",
//               once: true,
//             },
//           });
//         }

//         if (headingWords.length) {
//           gsap.from(headingWords, {
//             yPercent: 115,
//             rotate: 3,
//             autoAlpha: 0,
//             duration: 0.95,
//             stagger: 0.12,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: heading,
//               start: "top 84%",
//               once: true,
//             },
//           });
//         }

//         if (headingRule) {
//           gsap.from(headingRule, {
//             scaleX: 0,
//             transformOrigin: "left center",
//             duration: 1,
//             ease: "power3.inOut",
//             scrollTrigger: {
//               trigger: heading,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (headingMeta) {
//           gsap.from(headingMeta, {
//             x: 18,
//             autoAlpha: 0,
//             duration: 0.7,
//             delay: 0.12,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: heading,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (headingDescription) {
//           gsap.from(headingDescription, {
//             y: 12,
//             autoAlpha: 0,
//             duration: 0.75,
//             delay: 0.1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: heading,
//               start: "top 82%",
//               once: true,
//             },
//           });
//         }

//         if (figures.length) {
//           gsap.from(figures, {
//             y: 42,
//             autoAlpha: 0,
//             scale: 0.97,
//             duration: 0.85,
//             stagger: 0.11,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: figures[0].parentElement,
//               start: "top 78%",
//               once: true,
//             },
//           });
//         }
//       }

//       /* ================= CLOSING: WOBBLE TEXT ================= */

//       if (closing) {
//         const closingHeading = closing.querySelector("h2");
//         const emailLink = closing.querySelector('a[href^="mailto:"]');
//         const ctaLink = closing.querySelector('a[href="#contact"]');

//         if (closingHeading) {
//           const closingWords = closingHeading.querySelectorAll(
//             ".wp-closing-word"
//           );

//           gsap.from(closingWords, {
//             y: 55,
//             rotate: 6,
//             scale: 0.9,
//             autoAlpha: 0,
//             transformOrigin: "50% 100%",
//             duration: 1.1,
//             stagger: 0.08,
//             ease: "elastic.out(1, 0.55)",
//             scrollTrigger: {
//               trigger: closingHeading,
//               start: "top 85%",
//               once: true,
//             },
//           });
//         }

//         if (emailLink) {
//           gsap.set(emailLink, {
//             autoAlpha: 1,
//             y: 0,
//           });

//           gsap.from(emailLink, {
//             y: 20,
//             autoAlpha: 0,
//             duration: 0.8,
//             delay: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: emailLink,
//               start: "top 95%",
//               once: true,
//             },
//           });
//         }

//         if (ctaLink) {
//           gsap.set(ctaLink, {
//             autoAlpha: 1,
//             y: 0,
//           });

//           gsap.from(ctaLink, {
//             y: 20,
//             autoAlpha: 0,
//             duration: 0.8,
//             delay: 0.25,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: ctaLink,
//               start: "top 95%",
//               once: true,
//             },
//           });
//         }
//       }
//     }, root);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <main
//       ref={rootRef}
//       className="relative w-full overflow-x-clip text-white"
//     >
//       <style>{`
//         @keyframes wp-marquee {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         .wp-marquee {
//           animation: wp-marquee 28s linear infinite;
//         }

//         .wp-behind-word,
//         .wp-closing-word {
//           display: inline-block;
//           will-change: transform, opacity;
//         }

//         .wp-behind-rule {
//           transform-origin: left center;
//         }

//         .wp-tilt {
//           transform: rotate(var(--r, 0deg));
//           transition: transform .5s cubic-bezier(.22,1,.36,1);
//         }

//         .wp-tilt:hover {
//           transform: rotate(0deg) scale(1.03);
//         }

//         .wp-scroll::-webkit-scrollbar {
//           display: none;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .wp-marquee {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* ================= HERO (statement + pill images) ================= */}

//       <section
//         data-sec="hero"
//         className="relative w-full px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40"
//       >
//         {/* Top meta row */}
//         <div className="ab-meta mb-10 flex items-center justify-between border-b border-dashed border-white/25 pb-5 md:mb-16">
//           <Label>{ABOUT_HERO.tag}</Label>
//           <span className="text-xs tracking-[0.25em] text-white/45">
//             {ABOUT_HERO.place}
//           </span>
//         </div>

//         {/* Statement with inline pill images */}
//         <h1
//           className="ab-title flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-[0.06em] font-[bolteSemiBold] uppercase leading-[1] tracking-tight"
//           style={{ fontSize: "clamp(2.2rem, 5.5vw, 8.5rem)" }}
//         >
//           {ABOUT_HERO.statement.map((t, i) => {
//             if (typeof t === "string") {
//               return (
//                 <span key={i} className="ab-tok inline-block">
//                   {t}
//                 </span>
//               );
//             }

//             if (t.accent) {
//               return (
//                 <span
//                   key={i}
//                   className="ab-tok inline-block font-[NeueRegular] italic"
//                   style={{ color: ACCENT }}
//                 >
//                   {t.accent}
//                 </span>
//               );
//             }

//             const im = ABOUT_HERO.images[t.img];
//             if (!im) return null;

//             return (
//               <span
//                 key={i}
//                 aria-hidden
//                 className="ab-tok ab-pill relative inline-block h-[0.78em] w-[var(--pw)] overflow-hidden rounded-full bg-white/10"
//                 style={{ "--pw": im.w }}
//               >
//                 <img
//                   src={im.src}
//                   alt=""
//                   draggable={false}
//                   className="absolute inset-0 h-full w-full scale-[1.3] object-cover"
//                 />
//               </span>
//             );
//           })}
//         </h1>

//         {/* Stats strip (same dashed language as the work detail page) */}
//         <div className="mt-16 grid grid-cols-2 border-y border-dashed border-white/25 md:mt-24 md:grid-cols-3">
//           {ABOUT_HERO.stats.map((s, i) => (
//             <div
//               key={s.label}
//               className={`ab-stat py-6 md:py-9 ${
//                 i !== 0
//                   ? "md:border-l md:border-dashed md:border-white/25 md:pl-8"
//                   : ""
//               } ${i % 2 ? "pl-4 md:pl-8" : ""}`}
//             >
//               <p className="text-[10px] tracking-[0.25em] text-white/45">
//                 {s.label.toUpperCase()}
//               </p>
//               <p className="mt-3 font-[bolteSemiBold] text-4xl leading-none md:text-6xl">
//                 {s.text ? s.text : <Counter to={s.to} suffix={s.suffix} />}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= MARQUEE ================= */}

//       <section
//         data-sec="marquee"
//         className="overflow-hidden border-y border-white/15 py-5 md:py-7"
//       >
//         <div className="wp-marquee flex w-max whitespace-nowrap">
//           {[0, 1].map((k) => (
//             <div key={k} className="flex shrink-0 items-center">
//               {MARQUEE.map((item) => (
//                 <span
//                   key={`${item}-${k}`}
//                   className="flex items-center font-[bolteSemiBold] text-3xl font-semibold tracking-tight md:text-6xl"
//                 >
//                   <span className="px-6 md:px-10">{item}</span>
//                   <span style={{ color: ORANGE }}>✦</span>
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= HOW WE STARTED ================= */}

//       <section data-sec="story" className="px-6 py-24 md:px-10 md:py-36">
//         <Label>{STORY.label}</Label>

//         <div className="mt-12 grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-20">
//           <div className="md:sticky md:top-32 md:self-start">
//             <h2 className={H2}>
//               {STORY.sticky[0]}
//               <br />
//               <Accent>{STORY.sticky[1]}</Accent>
//             </h2>
//           </div>

//           <div className="space-y-14 md:space-y-24">
//             {STORY.chapters.map((chapter) => (
//               <div
//                 key={chapter.title}
//                 className="border-t border-white/15 pt-6"
//               >
//                 <h3 className="font-[bolteSemiBold] text-2xl font-semibold tracking-tight md:text-4xl">
//                   {chapter.title}
//                 </h3>

//                 <p className="mt-4 max-w-md font-[NeueRegular] text-sm leading-relaxed text-white/60 md:text-lg">
//                   {chapter.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= THE FOUNDER ================= */}

//       <section
//         data-sec="founder"
//         className="relative overflow-hidden px-6 py-28 md:px-10 md:py-10"
//       >
//         <div className="mx-auto max-w-9xl">
//           <div className="flex items-center justify-end">
//             <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 md:text-xs">
//               THE MIND BEHIND THE DETAILS
//             </span>
//           </div>

//           <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:items-start md:gap-8">
//             {/* Portrait */}

//             <div className="md:col-span-4 md:col-start-2">
//               <div
//                 className="wp-tilt relative aspect-[3/4] w-full max-w-sm overflow-hidden border-2"
//                 style={{
//                   "--r": "-3deg",
//                   borderColor: ORANGE,
//                 }}
//               >
//               {/* {FOUNDER.img ? (
//                   <img
//                     src={FOUNDER.img}
//                     alt={FOUNDER.name}
//                     className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                     draggable={false}
//                   />
//                 ) : (
//                   <Placeholder text="FOUNDER PHOTO" />
//                 )}   */}


//    {FOUNDER.img ? (
//   <div className="relative h-full w-full overflow-hidden bg-neutral-900">
//     <img
//       src={FOUNDER.img}
//       alt={FOUNDER.name}
//       className="h-full w-full object-cover contrast-[1.05] saturate-[0.80]"
//       draggable={false}
//     />

//     {/* Subtle Grey Tone */}
//     {/* <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-color" /> */}

//     {/* Film Grain */}
//     <div
//       className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-overlay"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")`,
//       }}
//     />
//   </div>
// ) : (
//   <Placeholder text="FOUNDER PHOTO" />
// )}

//                 <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-4 backdrop-blur-sm">
//                   <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
//                     WEEPEK STUDIO
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/15 pt-5">
//                 <div>
//                   <p className="font-[bolteSemiBold] text-xl md:text-2xl">
//                     {FOUNDER.name}
//                   </p>

//                   <p className="mt-2 text-[9px] tracking-[0.2em] text-white/50 md:text-xs">
//                     {FOUNDER.role.toUpperCase()}
//                   </p>
//                 </div>

//                 <a
//                   href={FOUNDER.link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-2 pb-1 text-[10px] font-semibold tracking-[0.15em] text-white/70 transition-colors hover:text-[#ed710c]"
//                 >
//                   {FOUNDER.link.label.toUpperCase()}

//                   <span className="text-base text-[#ed710c] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
//                     ↗
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* Quote */}

//             <div className="relative md:col-span-7 md:col-start-6 md:pt-16">
//               <span
//                 aria-hidden="true"
//                 className="font-[bolteSemiBold] text-7xl leading-none text-[#ed710c] md:text-9xl"
//               >
//                 “
//               </span>

//               <WordReveal
//                 text={FOUNDER.quote}
//                 className="font-[bolteSemiBold] text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
//               />

//               <div className="mt-12 flex items-center gap-4 md:mt-16">
//                 <p className="text-[9px] uppercase tracking-[0.22em] text-white/45 md:text-xs">
//                   Built With Intention
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= WHAT WE DO ================= */}

//       <section data-sec="services" className="px-6 py-24 md:px-10 md:py-4">
//         <h2 className={`${H2} mt-10 text-end`}>
//           <Accent>{SERVICES.title}</Accent>
//         </h2>

//         <div
//           ref={listRef}
//           onMouseMove={onListMove}
//           onMouseLeave={() => setHovered(null)}
//           className="relative mt-14"
//         >
//           {SERVICES.items.map((service, i) => (
//             <div
//               key={service.name}
//               onMouseEnter={() => setHovered(i)}
//               className="group relative flex items-center justify-between gap-6 border-b border-white/15 py-5 md:py-7"
//             >
//               <span
//                 aria-hidden
//                 className="pointer-events-none absolute -bottom-px left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
//                 style={{ background: ORANGE }}
//               />

//               <h3 className="font-[bolteSemiBold] text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-5xl">
//                 {service.name}
//               </h3>

//               <div className="flex items-center gap-5">
//                 <span className="text-[10px] tracking-[0.25em] text-white/45 md:text-xs">
//                   {service.group.toUpperCase()}
//                 </span>

//                 <span className="text-xl text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
//                   ↗
//                 </span>
//               </div>
//             </div>
//           ))}

//           <div
//             ref={previewRef}
//             aria-hidden
//             className="pointer-events-none absolute left-0 top-0 z-10 hidden h-44 w-64 overflow-hidden md:block"
//             style={{
//               opacity: hovered === null ? 0 : 1,
//               transition: "opacity .3s ease, transform .15s ease-out",
//             }}
//           >
//             {hovered !== null && SERVICES.items[hovered].img ? (
//               <img
//                 src={SERVICES.items[hovered].img}
//                 alt=""
//                 className="h-full w-full object-cover"
//               />
//             ) : (
//               <div
//                 className="flex h-full w-full items-end p-4"
//                 style={{
//                   background: `linear-gradient(135deg, ${PURPLE_SOFT}55, ${ORANGE}88)`,
//                 }}
//               >
//                 <span className="font-[bolteSemiBold] text-xl font-semibold leading-tight">
//                   {hovered !== null ? SERVICES.items[hovered].name : ""}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= BEHIND THE WORK (disabled; add data-sec="behind" to the <section> if you bring it back) ================= */}

//       {/* <section data-sec="behind" className="px-6 py-24 md:px-10 md:py-10">

//         <div className="relative mb-16   py-7 md:py-9">

//           <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-end">
//             <h2 className={`${H2} m-0 overflow-hidden`}>
//               <span className="wp-behind-word">Off</span>{" "}
//               <span className="wp-behind-word">the</span>{" "}
//               <span
//                 className="wp-behind-word font-[bolte] italic"
//                 style={{ color: ACCENT }}
//               >
//                 clock.
//               </span>
//             </h2>

//             <p className="wp-behind-description max-w-[220px] pb-2 text-xs leading-relaxed tracking-[0.16em] text-white/45 md:text-right">
//               THE PEOPLE, IDEAS & LITTLE MOMENTS BEHIND THE PIXELS.
//             </p>
//           </div>

//           <div className="wp-behind-rule mt-8 h-px w-full bg-gradient-to-r from-orange-500/80 via-white/20 to-transparent" />
//         </div>

//         <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
//           {BEHIND.photos.map((photo, i) => {
//             const rotations = [-2.5, 2, -1.5, 3, -3, 1.5];
//             const drops = [
//               "",
//               "md:mt-16",
//               "md:mt-6",
//               "md:-mt-6",
//               "md:mt-10",
//               "",
//             ];

//             return (
//               <figure
//                 key={i}
//                 className={`wp-tilt ${drops[i % drops.length]}`}
//                 style={{
//                   "--r": `${rotations[i % rotations.length]}deg`,
//                 }}
//               >
//                 <div
//                   className={`${
//                     i % 2 ? "aspect-[3/4]" : "aspect-[4/3]"
//                   } w-full overflow-hidden border border-white/15`}
//                 >
//                   {photo.img ? (
//                     <img
//                       src={photo.img}
//                       alt={photo.caption}
//                       className="h-full w-full object-cover"
//                       draggable={false}
//                     />
//                   ) : (
//                     <Placeholder text="PHOTO" />
//                   )}
//                 </div>

//                 <figcaption className="mt-3 text-xs tracking-[0.2em] text-white/55">
//                   {photo.caption.toUpperCase()}
//                 </figcaption>
//               </figure>
//             );
//           })}
//         </div>
//       </section> */}

//       {/* ================= CLOSING ================= */}

//       <section data-sec="closing" className="px-6 py-28 md:px-10 md:py-44">
//         <h2 className="font-[bolteSemiBold] text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl md:text-[10rem]">
//           <span className="wp-closing-word">Enough</span>{" "}
//           <span className="wp-closing-word">about</span>{" "}
//           <span className="wp-closing-word">us.</span>
//           <br />

//           <span className="wp-closing-word">Tell</span>{" "}
//           <span className="wp-closing-word">us</span>{" "}
//           <span className="wp-closing-word">about</span>{" "}
//           <span className="wp-closing-word">
//             <Accent>{CLOSING.accent}</Accent>
//           </span>
//         </h2>

//         <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <a
//             href={`mailto:${CLOSING.email}`}
//             className="group inline-flex items-center gap-2 font-[NeueRegular] text-lg text-white/75 transition hover:text-orange-400 md:text-2xl"
//           >
//             {CLOSING.email}

//             <span
//               className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               style={{ color: ORANGE }}
//             >
//               ↗
//             </span>
//           </a>

//           <button
//           onClick={openContact}
//               type="button"
//             // href={CLOSING.href}
//             className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-white/25 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 md:text-2xl"
//           >
//             <span
//               aria-hidden="true"
//               className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//             />

//             <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//               {CLOSING.cta}
//             </span>

//             <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//               <ArrowUpRight
//                 size={19}
//                 strokeWidth={1.5}
//                 className="transition-all duration-500 group-hover:text-black"
//               />
//             </span>

//             <span
//               aria-hidden="true"
//               className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
//             />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }



 
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import web from "../assets/shinobi_mockup.png";
import web1 from "../assets/tada_mockup.png";
import Den from "../assets/den1.png";
import d6 from "../assets/d61.png";
import Branding from "../assets/Branding_mockup.png";
import Branding1 from "../assets/Branding1_mockup.png";
import white3 from "../assets/lap2.jpg";
import { useContactModal } from "../Context/ContactModalContext";
import Founder from '../assets/Founder.png'

//pills
import Kolam from '../assets/kolam.png';
import Game from '../assets/game.png';
import Aura from '../assets/aura.png';
import Div from '../assets/div.png';



/* =====================================================
   HERO (Option E: statement with inline pill images)
   - images: dummy photos for now → replace `src` later
     (w = pill width in "em", relative to the heading size)
   - statement: strings = words, { img: n } = pill image,
     { accent: "WORD" } = italic orange word
===================================================== */
const ABOUT_HERO = {
  tag: "About Weepek",
  place: "CHENNAI, INDIA",
  // images: [
  //   { src: Game, w: "1em", h: "4.5em"},
  //   // { src: Game, w: "1em" ,  },
  //   { src: Aura, w: "1em" },
  //   { src: Div, w: "1em" },
  //   { src: d6, w: "1.50em" },
  // ],
  
  images: [
  { src: Kolam, w: "1.6em", h: "1.6em" ,  marginTop: "-30px" },  // wide pill
  { src: Aura, w: "1.7em",   h: "1.6em" , marginTop: "-30px" ,  },  // square-ish
  { src: web,  w: "1.8em", h: "1.6em"    },  // wide
  { src: d6,   w: "1.1em", h: "0.9em"  },  // taller circle
],
  
  statement: [
    "WE'RE",
    "A",
    { img: 0 },
    // "SMALL",
    "STUDIO",
    "IN",
   "CHENNAI," ,
    "BUILDING",
    { img: 3 },
    { accent: "BRANDS," },
    { img: 2 },
     {accent: "WEBSITES"},
    
    "AND",
    "STORES",
    "FOR",
    "PEOPLE",
    "WHO",
    // { img: 3 },
    { accent: "BELIEVE" },
    "IN",
    "THEIR",
    { img: 1 },
    "OWN",
    "BUSINESS.",
  ],
  stats: [
    { to: 10, suffix: "+", label: "Team members" },
    { to: 20, suffix: "+", label: "Projects delivered" },
    { text: "Chennai", label: "Based in" },
  ],
};

const MARQUEE = [
  "BRAND",
  "WEBSITES",
  "APPS",
  "E-COMMERCE",
  "SEO",
  "MOTION",
  "MARKETING",
];

const STORY = {
  label: "How we started",
  sticky: ["It began with", "one website."],
  chapters: [
    {
      title: "One website.",
      text: "We just wanted to build something of our own. So we built websites, learned, broke things and got better.",
    },
    {
      title: "Then branding.",
      text: "Our clients needed more than a site. They needed a name, a look and a voice. So we grew into branding.",
    },
    {
      title: "Now, everything.",
      text: "Brand, digital and e-commerce under one roof, with one team that cares about all of it.",
    },
  ],
};

const FOUNDER = {
  label: "The founder",
  name: "Poornima",
  role: "Founder & CEO",
  img: Founder,
  quote: "I wanted to build something of my own, where every detail has a purpose.",
  link: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
};

const SERVICES = {
  label: "What we do",
  title: "We've got range.",
  items: [
    { name: "Brand identity", group: "Brand", img: Den },
    { name: "Logo & graphics", group: "Brand", img: d6 },
    { name: "Video & motion", group: "Brand", img: null },
    { name: "Websites", group: "Build", img: web },
    { name: "Mobile apps", group: "Build", img: null },
    { name: "E-commerce", group: "Build", img: web1 },
    { name: "Automation (RPA)", group: "Build", img: null },
    { name: "SEO", group: "Grow", img: null },
    { name: "Digital marketing", group: "Grow", img: null },
  ],
};

const BEHIND = {
  label: "Behind the work",
  title: "Off the clock.",
  photos: [
    { img: web, caption: "Late nights" },
    { img: web1, caption: "First ideas" },
    { img: Branding, caption: "Team lunch" },
    { img: Branding1, caption: "Shoot day" },
    { img: white3, caption: "Whiteboard" },
    { img: null, caption: "Launch day" },
  ],
};

const CLOSING = {
  lines: ["Enough about us.", "Tell us about"],
  accent: "you",
  email: "hello@weepek.com",
  cta: "START A PROJECT",
  href: "#contact",
};

const ORANGE = "#f97316";
const ACCENT = "#ed710c";
const PURPLE_SOFT = "#a78bfa";

const H2 =
  "text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl font-[bolteSemiBold]";

/* ================= SMALL COMPONENTS ================= */

function Label({ children }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/70">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: ORANGE }}
      />
      {children.toUpperCase()}
    </p>
  );
}

function Accent({ children, className = "" }) {
  return (
    <span
      className={`italic font-[bolteSemiBold]  font-semibold ${className}`}
      style={{ color: ACCENT }}
    >
      {children}
    </span>
  );
}

function Counter({ to, suffix = "" }) {
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
          setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
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
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(words.length);
      return;
    }

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const element = ref.current;

        if (element) {
          const rect = element.getBoundingClientRect();
          const vh = window.innerHeight;
          const progress = Math.min(
            1,
            Math.max(0, (vh * 0.9 - rect.top) / (vh * 0.5))
          );

          setLit(Math.round(progress * words.length));
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="transition-opacity duration-300"
          style={{ opacity: i < lit ? 1 : 0.22 }}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

function Placeholder({ text, className = "" }) {
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

/* ================= ABOUT PAGE ================= */

export default function WeepekAboutPage() {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);
  const { openContact } = useContactModal();

  const [hovered, setHovered] = useState(null);

  const onListMove = (e) => {
    const box = listRef.current?.getBoundingClientRect();
    const preview = previewRef.current;

    if (!box || !preview) return;

    preview.style.transform = `translate(
      ${e.clientX - box.left + 28}px,
      ${e.clientY - box.top - 100}px
    )`;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // sections are picked by data-sec (not by index), so commenting a section in/out never breaks the animations
      const pick = (name) => root.querySelector(`[data-sec="${name}"]`);

      const hero = pick("hero");
      const story = pick("story");
      const founder = pick("founder");
      const services = pick("services");
      const behind = pick("behind");
      const closing = pick("closing");

      /* ================= HERO ANIMATION ================= */

      if (hero) {
        // words rise in, one by one
        gsap.from(hero.querySelectorAll(".ab-tok"), {
          opacity: 0,
          y: "0.35em",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.045,
        });

        // pill images "open up" from zero width, pushing the words apart
        gsap.from(hero.querySelectorAll(".ab-pill"), {
          width: 0,
          duration: 0.9,
          ease: "power3.inOut",
          stagger: 0.15,
          delay: 0.5,
          clearProps: "width",
        });

        // photos drift inside their pills while scrolling
        const pillImgs = hero.querySelectorAll(".ab-pill img");
        const title = hero.querySelector(".ab-title");
        if (pillImgs.length && title) {
          gsap.fromTo(
            pillImgs,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // meta row + stats
        gsap.from(hero.querySelectorAll(".ab-meta, .ab-stat"), {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.3,
        });
      }

      /* ================= STORY ANIMATION ================= */

      if (story) {
        const storyLabel = story.querySelector(":scope > p");
        const storyHeading = story.querySelector("h2");
        const chapters = story.querySelectorAll(".space-y-14 > div");

        if (storyLabel) {
          gsap.from(storyLabel, {
            x: -18,
            autoAlpha: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: story,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (storyHeading) {
          gsap.from(storyHeading, {
            y: 38,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyHeading,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (chapters.length) {
          gsap.from(chapters, {
            y: 48,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chapters[0].parentElement,
              start: "top 78%",
              once: true,
            },
          });
        }
      }

      /* ================= FOUNDER ANIMATION ================= */

      if (founder) {
        const portrait = founder.querySelector(".wp-tilt");
        const details = founder.querySelector(
          ".mt-8.flex.items-end.justify-between"
        );
        const quoteMark = founder.querySelector('[aria-hidden="true"]');
        const statement = founder.querySelector(".mt-12.flex.items-center");

        if (portrait) {
          gsap.from(portrait, {
            clipPath: "inset(12% 0 12% 0)",
            autoAlpha: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: portrait,
              start: "top 78%",
              once: true,
            },
          });
        }

        if (details) {
          gsap.from(details, {
            y: 18,
            autoAlpha: 0,
            duration: 0.8,
            delay: 0.15,
            scrollTrigger: {
              trigger: founder,
              start: "top 72%",
              once: true,
            },
          });
        }

        if (quoteMark) {
          gsap.from(quoteMark, {
            y: 24,
            scale: 0.85,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteMark,
              start: "top 85%",
              once: true,
            },
          });
        }

        if (statement) {
          gsap.from(statement, {
            x: -16,
            autoAlpha: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: statement,
              start: "top 92%",
              once: true,
            },
          });
        }
      }

      /* ================= SERVICES ANIMATION ================= */

      if (services) {
        const serviceHeading = services.querySelector("h2");
        const rows = services.querySelectorAll(
          ".group.relative.flex.items-center.justify-between"
        );

        if (serviceHeading) {
          gsap.from(serviceHeading, {
            y: 32,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: serviceHeading,
              start: "top 85%",
              once: true,
            },
          });
        }

        if (rows.length) {
          gsap.from(rows, {
            y: 24,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.075,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rows[0].parentElement,
              start: "top 78%",
              once: true,
            },
          });
        }
      }

      /* ================= BEHIND THE WORK ================= */

      if (behind) {
        const label = behind.querySelector(":scope > div > div > p");
        const heading = behind.querySelector("h2");
        const headingWords = behind.querySelectorAll(".wp-behind-word");
        const headingRule = behind.querySelector(".wp-behind-rule");
        const headingMeta = behind.querySelector(".wp-behind-meta");
        const headingDescription = behind.querySelector(".wp-behind-description");
        const figures = behind.querySelectorAll("figure");

        if (label) {
          gsap.from(label, {
            x: -16,
            autoAlpha: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: behind,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (heading) {
          gsap.from(heading, {
            y: 18,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 86%",
              once: true,
            },
          });
        }

        if (headingWords.length) {
          gsap.from(headingWords, {
            yPercent: 115,
            rotate: 3,
            autoAlpha: 0,
            duration: 0.95,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 84%",
              once: true,
            },
          });
        }

        if (headingRule) {
          gsap.from(headingRule, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (headingMeta) {
          gsap.from(headingMeta, {
            x: 18,
            autoAlpha: 0,
            duration: 0.7,
            delay: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (headingDescription) {
          gsap.from(headingDescription, {
            y: 12,
            autoAlpha: 0,
            duration: 0.75,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (figures.length) {
          gsap.from(figures, {
            y: 42,
            autoAlpha: 0,
            scale: 0.97,
            duration: 0.85,
            stagger: 0.11,
            ease: "power3.out",
            scrollTrigger: {
              trigger: figures[0].parentElement,
              start: "top 78%",
              once: true,
            },
          });
        }
      }

      /* ================= CLOSING: WOBBLE TEXT ================= */

      if (closing) {
        const closingHeading = closing.querySelector("h2");
        const emailLink = closing.querySelector('a[href^="mailto:"]');
        const ctaLink = closing.querySelector('a[href="#contact"]');

        if (closingHeading) {
          const closingWords = closingHeading.querySelectorAll(
            ".wp-closing-word"
          );

          gsap.from(closingWords, {
            y: 55,
            rotate: 6,
            scale: 0.9,
            autoAlpha: 0,
            transformOrigin: "50% 100%",
            duration: 1.1,
            stagger: 0.08,
            ease: "elastic.out(1, 0.55)",
            scrollTrigger: {
              trigger: closingHeading,
              start: "top 85%",
              once: true,
            },
          });
        }

        if (emailLink) {
          gsap.set(emailLink, {
            autoAlpha: 1,
            y: 0,
          });

          gsap.from(emailLink, {
            y: 20,
            autoAlpha: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: emailLink,
              start: "top 95%",
              once: true,
            },
          });
        }

        if (ctaLink) {
          gsap.set(ctaLink, {
            autoAlpha: 1,
            y: 0,
          });

          gsap.from(ctaLink, {
            y: 20,
            autoAlpha: 0,
            duration: 0.8,
            delay: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaLink,
              start: "top 95%",
              once: true,
            },
          });
        }
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative w-full overflow-x-clip text-white"
    >
      <style>{`
        @keyframes wp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .wp-marquee {
          animation: wp-marquee 28s linear infinite;
        }

        .wp-behind-word,
        .wp-closing-word {
          display: inline-block;
          will-change: transform, opacity;
        }

        .wp-behind-rule {
          transform-origin: left center;
        }

        .wp-tilt {
          transform: rotate(var(--r, 0deg));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }

        .wp-tilt:hover {
          transform: rotate(0deg) scale(1.03);
        }

        .wp-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .wp-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* ================= HERO (statement + pill images) ================= */}

      <section
        data-sec="hero"
        className="relative w-full px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40"
      >
        {/* Top meta row */}
        <div className="ab-meta mb-10 flex items-center justify-between border-b border-dashed border-white/25 pb-5 md:mb-16">
          <Label>{ABOUT_HERO.tag}</Label>
          <span className="text-xs tracking-[0.25em] text-white/45">
            {ABOUT_HERO.place}
          </span>
        </div>

        {/* Statement with inline pill images */}
        <h1
          className="ab-title flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-[0.06em] font-[bolteSemiBold] uppercase leading-[1] tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 8.5rem)" }}
        >
          {ABOUT_HERO.statement.map((t, i) => {
            if (typeof t === "string") {
              return (
                <span key={i} className="ab-tok inline-block">
                  {t}
                </span>
              );
            }

            if (t.accent) {
              return (
                <span
                  key={i}
                  className="ab-tok inline-block font-[NeueRegular]  "
                  style={{ color: ACCENT }}
                >
                  {t.accent}
                </span>
              );
            }

            const im = ABOUT_HERO.images[t.img];
            if (!im) return null;

            return (
              // <span
              //   key={i}
              //   aria-hidden
              //   className="ab-tok ab-pill relative inline-block h-[0.98em] w-[var(--pw)] overflow-hidden rounded-full  "
              //   style={{ "--pw": im.w }}
              // >
              //   <img
              //     src={im.src}
              //     alt=""
              //     draggable={false}
              //     className="absolute inset-0 h-full w-full  "
              //   />
              // </span>

              <span
  key={i}
  aria-hidden
  className="ab-tok ab-pill relative inline-block w-[var(--pw)] h-[var(--ph)] overflow-hidden rounded-2xl mx-[-10px] align-middle"
  style={{ "--pw": im.w, "--ph": im.h ?? "1em" , marginTop: im.marginTop ?? undefined,}}
>
  <img
    src={im.src}
    alt=""
    draggable={false}
    className="absolute inset-0 h-full w-full object-cover"
  />
</span>
            );
          })}
        </h1>

        {/* Stats strip (same dashed language as the work detail page) */}
        <div className="mt-16 grid grid-cols-2 border-y border-dashed border-white/25 md:mt-24 md:grid-cols-3">
          {ABOUT_HERO.stats.map((s, i) => (
            <div
              key={s.label}
              className={`ab-stat py-6 md:py-9 ${
                i !== 0
                  ? "md:border-l md:border-dashed md:border-white/25 md:pl-8"
                  : ""
              } ${i % 2 ? "pl-4 md:pl-8" : ""}`}
            >
              <p className="text-[10px] tracking-[0.25em] text-white/45">
                {s.label.toUpperCase()}
              </p>
              <p className="mt-3 font-[bolteSemiBold] text-4xl leading-none md:text-6xl">
                {s.text ? s.text : <Counter to={s.to} suffix={s.suffix} />}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MARQUEE ================= */}

      <section
        data-sec="marquee"
        className="overflow-hidden border-y border-white/15 py-5 md:py-7"
      >
        <div className="wp-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {MARQUEE.map((item) => (
                <span
                  key={`${item}-${k}`}
                  className="flex items-center font-[bolteSemiBold] text-3xl font-semibold tracking-tight md:text-6xl"
                >
                  <span className="px-6 md:px-10">{item}</span>
                  <span style={{ color: ORANGE }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE STARTED ================= */}

      <section data-sec="story" className="px-6 py-24 md:px-10 md:py-36">
        <Label>{STORY.label}</Label>

        <div className="mt-12 grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <h2 className={H2}>
              {STORY.sticky[0]}
              <br />
              <Accent>{STORY.sticky[1]}</Accent>
            </h2>
          </div>

          <div className="space-y-14 md:space-y-24">
            {STORY.chapters.map((chapter) => (
              <div
                key={chapter.title}
                className="border-t border-white/15 pt-6"
              >
                <h3 className="font-[bolteSemiBold] text-2xl font-semibold tracking-tight md:text-4xl">
                  {chapter.title}
                </h3>

                <p className="mt-4 max-w-md font-[NeueRegular] text-sm leading-relaxed text-white/60 md:text-lg">
                  {chapter.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE FOUNDER ================= */}

      <section
        data-sec="founder"
        className="relative overflow-hidden px-6 py-28 md:px-10 md:py-10"
      >
        <div className="mx-auto max-w-9xl">
          <div className="flex items-center justify-end">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 md:text-xs">
              THE MIND BEHIND THE DETAILS
            </span>
          </div>

          <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:items-start md:gap-8">
            {/* Portrait */}

            <div className="md:col-span-4 md:col-start-2">
              <div
                className="wp-tilt relative aspect-[3/4] w-full max-w-sm overflow-hidden border-2"
                style={{
                  "--r": "-3deg",
                  borderColor: ORANGE,
                }}
              >
              {/* {FOUNDER.img ? (
                  <img
                    src={FOUNDER.img}
                    alt={FOUNDER.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    draggable={false}
                  />
                ) : (
                  <Placeholder text="FOUNDER PHOTO" />
                )}   */}


   {FOUNDER.img ? (
  <div className="relative h-full w-full overflow-hidden bg-neutral-900">
    <img
      src={FOUNDER.img}
      alt={FOUNDER.name}
      className="h-full w-full object-cover contrast-[1.05] saturate-[0.80]"
      draggable={false}
    />

    {/* Subtle Grey Tone */}
    {/* <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none mix-blend-color" /> */}

    {/* Film Grain */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
) : (
  <Placeholder text="FOUNDER PHOTO" />
)}

                <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-4 backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                    WEEPEK STUDIO
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                <div>
                  <p className="font-[bolteSemiBold] text-xl md:text-2xl">
                    {FOUNDER.name}
                  </p>

                  <p className="mt-2 text-[9px] tracking-[0.2em] text-white/50 md:text-xs">
                    {FOUNDER.role.toUpperCase()}
                  </p>
                </div>

                <a
                  href={FOUNDER.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 pb-1 text-[10px] font-semibold tracking-[0.15em] text-white/70 transition-colors hover:text-[#ed710c]"
                >
                  {FOUNDER.link.label.toUpperCase()}

                  <span className="text-base text-[#ed710c] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Quote */}

            <div className="relative md:col-span-7 md:col-start-6 md:pt-16">
              <span
                aria-hidden="true"
                className="font-[bolteSemiBold] text-7xl leading-none text-[#ed710c] md:text-9xl"
              >
                “
              </span>

              <WordReveal
                text={FOUNDER.quote}
                className="font-[bolteSemiBold] text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
              />

              <div className="mt-12 flex items-center gap-4 md:mt-16">
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/45 md:text-xs">
                  Built With Intention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}

      <section data-sec="services" className="px-6 py-24 md:px-10 md:py-4">
        <h2 className={`${H2} mt-10 text-end`}>
          <Accent>{SERVICES.title}</Accent>
        </h2>

        <div
          ref={listRef}
          onMouseMove={onListMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-14"
        >
          {SERVICES.items.map((service, i) => (
            <div
              key={service.name}
              onMouseEnter={() => setHovered(i)}
              className="group relative flex items-center justify-between gap-6 border-b border-white/15 py-5 md:py-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-px left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: ORANGE }}
              />

              <h3 className="font-[bolteSemiBold] text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-5xl">
                {service.name}
              </h3>

              <div className="flex items-center gap-5">
                <span className="text-[10px] tracking-[0.25em] text-white/45 md:text-xs">
                  {service.group.toUpperCase()}
                </span>

                <span className="text-xl text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                  ↗
                </span>
              </div>
            </div>
          ))}

          <div
            ref={previewRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-44 w-64 overflow-hidden md:block"
            style={{
              opacity: hovered === null ? 0 : 1,
              transition: "opacity .3s ease, transform .15s ease-out",
            }}
          >
            {hovered !== null && SERVICES.items[hovered].img ? (
              <img
                src={SERVICES.items[hovered].img}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-end p-4"
                style={{
                  background: `linear-gradient(135deg, ${PURPLE_SOFT}55, ${ORANGE}88)`,
                }}
              >
                <span className="font-[bolteSemiBold] text-xl font-semibold leading-tight">
                  {hovered !== null ? SERVICES.items[hovered].name : ""}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= BEHIND THE WORK (disabled; add data-sec="behind" to the <section> if you bring it back) ================= */}

      {/* <section data-sec="behind" className="px-6 py-24 md:px-10 md:py-10">

        <div className="relative mb-16   py-7 md:py-9">

          <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-end">
            <h2 className={`${H2} m-0 overflow-hidden`}>
              <span className="wp-behind-word">Off</span>{" "}
              <span className="wp-behind-word">the</span>{" "}
              <span
                className="wp-behind-word font-[bolte] italic"
                style={{ color: ACCENT }}
              >
                clock.
              </span>
            </h2>

            <p className="wp-behind-description max-w-[220px] pb-2 text-xs leading-relaxed tracking-[0.16em] text-white/45 md:text-right">
              THE PEOPLE, IDEAS & LITTLE MOMENTS BEHIND THE PIXELS.
            </p>
          </div>

          <div className="wp-behind-rule mt-8 h-px w-full bg-gradient-to-r from-orange-500/80 via-white/20 to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
          {BEHIND.photos.map((photo, i) => {
            const rotations = [-2.5, 2, -1.5, 3, -3, 1.5];
            const drops = [
              "",
              "md:mt-16",
              "md:mt-6",
              "md:-mt-6",
              "md:mt-10",
              "",
            ];

            return (
              <figure
                key={i}
                className={`wp-tilt ${drops[i % drops.length]}`}
                style={{
                  "--r": `${rotations[i % rotations.length]}deg`,
                }}
              >
                <div
                  className={`${
                    i % 2 ? "aspect-[3/4]" : "aspect-[4/3]"
                  } w-full overflow-hidden border border-white/15`}
                >
                  {photo.img ? (
                    <img
                      src={photo.img}
                      alt={photo.caption}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <Placeholder text="PHOTO" />
                  )}
                </div>

                <figcaption className="mt-3 text-xs tracking-[0.2em] text-white/55">
                  {photo.caption.toUpperCase()}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section> */}

      {/* ================= CLOSING ================= */}

      <section data-sec="closing" className="px-6 py-28 md:px-10 md:py-44">
        <h2 className="font-[bolteSemiBold] text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl md:text-[10rem]">
          <span className="wp-closing-word">Enough</span>{" "}
          <span className="wp-closing-word">about</span>{" "}
          <span className="wp-closing-word">us.</span>
          <br />

          <span className="wp-closing-word">Tell</span>{" "}
          <span className="wp-closing-word">us</span>{" "}
          <span className="wp-closing-word">about</span>{" "}
          <span className="wp-closing-word">
            <Accent>{CLOSING.accent}</Accent>
          </span>
        </h2>

        <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <a
            href={`mailto:${CLOSING.email}`}
            className="group inline-flex items-center gap-2 font-[NeueRegular] text-lg text-white/75 transition hover:text-orange-400 md:text-2xl"
          >
            {CLOSING.email}

            <span
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{ color: ORANGE }}
            >
              ↗
            </span>
          </a>

          <button
          onClick={openContact}
              type="button"
            // href={CLOSING.href}
            className="group relative inline-flex items-center gap-8 overflow-hidden rounded-2xl border border-white/25 px-6 py-5 font-[bolteSemiBold] text-lg tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              {CLOSING.cta}
            </span>

            <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
                className="transition-all duration-500 group-hover:text-black"
              />
            </span>

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
            />
          </button>
        </div>
      </section>
    </main>
  );
}