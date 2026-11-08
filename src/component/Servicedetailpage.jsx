// import { useEffect, useMemo, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "../App.css";

// /* ---------- image imports (same as home page) ---------- */
// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";
// const PURPLE_SOFT = "#a78bfa";

// /* height of your fixed navbar, so sticky bar + scroll offsets sit below it */
// const NAV_OFFSET = 72;

// /* ---------- content (edit here) ---------- */
// const PILLARS = [
//   {
//     id: "brand",
//     no: "01",
//     title: "Brand",
//     text: "Identities and creatives people remember.",
//     intro:
//       "A brand is what people feel when they see you. We build identities that look sharp, stay consistent everywhere and are easy to grow with.",
//     match: ["Brand", "Branding", "Design", "Video"],
//     services: [
//       {
//         id: "logo-identity",
//         name: "Logo & Brand Identity",
//         desc: "A complete visual identity: logo, colours, type and the rules that keep everything consistent.",
//         includes: [
//           "Logo suite (primary, secondary, icon)",
//           "Colour palette and typography system",
//           "Brand guidelines document",
//           "Stationery and social media kit",
//         ],
//         time: "2 – 4 weeks",
//         best: "New businesses and rebrands",
//       },
//       {
//         id: "graphic-design",
//         name: "Graphic Design & Creatives",
//         desc: "Posts, ads, brochures, packaging and decks, designed to stop the scroll and match your brand.",
//         includes: [
//           "Social media creatives",
//           "Ad banners and campaign visuals",
//           "Brochures, menus and print collateral",
//           "Pitch and presentation decks",
//         ],
//         time: "Ongoing or per project",
//         best: "Brands that post and promote often",
//       },
//       {
//         id: "video-motion",
//         name: "Video Editing & Motion",
//         desc: "Reels, promos and motion graphics that give your brand movement and personality.",
//         includes: [
//           "Reels and short-form edits",
//           "Promo and product videos",
//           "Logo animation and motion graphics",
//           "Subtitles, colour grade and sound mix",
//         ],
//         time: "3 days – 2 weeks",
//         best: "Social-first brands and launches",
//       },
//     ],
//   },
//   {
//     id: "build",
//     no: "02",
//     title: "Build",
//     text: "Websites, apps and systems that scale with you.",
//     intro:
//       "From a fast marketing site to a full product, we design and develop things that work on every screen and are easy to maintain.",
//     match: ["Web", "Ecom", "App", "UIUX", "RPA"],
//     services: [
//       {
//         id: "website",
//         name: "Custom Website Development",
//         desc: "Hand-built, responsive websites with smooth interactions, designed around your goals, not a template.",
//         includes: [
//           "UI/UX design in Figma",
//           "React / modern front-end build",
//           "CMS or e-commerce integration",
//           "Performance, SEO-ready structure and hosting setup",
//         ],
//         time: "3 – 8 weeks",
//         best: "Businesses, portfolios and online stores",
//       },
//       {
//         id: "mobile-app",
//         name: "Mobile App Development",
//         desc: "Android and iOS apps with clean UI and reliable back-ends, from MVP to production.",
//         includes: [
//           "Product flow and app UI design",
//           "Cross-platform app development",
//           "API and admin panel",
//           "Store publishing support",
//         ],
//         time: "6 – 12 weeks",
//         best: "Startups and service businesses",
//       },
//       {
//         id: "rpa",
//         name: "Robotic Process Automation",
//         desc: "Bots that take over repetitive tasks like data entry, reports and approvals so your team saves hours.",
//         includes: [
//           "Process audit and automation plan",
//           "Bot development and testing",
//           "Integration with your existing tools",
//           "Monitoring and handover docs",
//         ],
//         time: "2 – 6 weeks",
//         best: "Teams with repetitive manual work",
//       },
//     ],
//   },
//   {
//     id: "grow",
//     no: "03",
//     title: "Grow",
//     text: "Get found, get remembered, get leads.",
//     intro:
//       "Great work needs an audience. We help the right people find you, and turn that attention into enquiries.",
//     match: ["SEO", "Marketing"],
//     services: [
//       {
//         id: "seo",
//         name: "SEO Optimization",
//         desc: "Technical, on-page and content SEO that moves you up search results and keeps you there.",
//         includes: [
//           "Site audit and keyword research",
//           "On-page and technical fixes",
//           "Content and backlink strategy",
//           "Monthly ranking and traffic reports",
//         ],
//         time: "3 months+ for results",
//         best: "Sites that depend on search traffic",
//       },
//       {
//         id: "marketing",
//         name: "Digital Marketing",
//         desc: "Social and paid campaigns built around your audience, with clear tracking from click to lead.",
//         includes: [
//           "Strategy and content calendar",
//           "Meta and Google ad campaigns",
//           "Landing pages and lead tracking",
//           "Monthly performance reports",
//         ],
//         time: "Monthly retainer",
//         best: "Brands ready to scale leads",
//       },
//     ],
//   },
// ];

// const PROJECTS = [
//   { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
//   { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
//   { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
//   { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
//   { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
// ];

// const PROCESS = [
//   { no: "01", title: "Discover", text: "We learn your business, audience and goals before touching a pixel." },
//   { no: "02", title: "Design", text: "Concepts, moodboards and prototypes you can react to early." },
//   { no: "03", title: "Build", text: "Clean, tested development with weekly progress updates." },
//   { no: "04", title: "Launch", text: "Go live, track results and keep improving after day one." },
// ];

// const FAQS = [
//   {
//     q: "Can I pick services from different pillars?",
//     a: "Yes. Most clients mix them, for example a new brand identity along with a website and SEO. We'll put together one plan and one timeline.",
//   },
//   {
//     q: "How is pricing decided?",
//     a: "Based on scope, not hourly guesses. Share your requirements and we'll send a clear quote with what's included.",
//   },
//   {
//     q: "Do you work with existing brands and websites?",
//     a: "Absolutely. We can refresh, extend or fix what you already have without starting from scratch.",
//   },
//   {
//     q: "What do you need from me to start?",
//     a: "A short brief, any existing brand assets and a point person for feedback. We'll guide you through the rest.",
//   },
// ];

// const totalServices = PILLARS.reduce((n, p) => n + p.services.length, 0);

// /* ---------- small pieces ---------- */
// function Eyebrow({ children }) {
//   return (
//     <p className="text-xs font-semibold tracking-[0.3em]" style={{ color: ORANGE }}>
//       {children}
//     </p>
//   );
// }

// function ServiceRow({ index, service, open, onToggle, relatedHref }) {
//   return (
//     <div className="group relative border-b border-white/15">
//       <span
//         className="pointer-events-none absolute -bottom-px left-0 h-px transition-all duration-500"
//         style={{ background: ORANGE, width: open ? "100%" : "0%" }}
//       />
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={open}
//         className="flex w-full items-center gap-4 py-5 text-left md:gap-8 md:py-6"
//       >
//         <span
//           className="w-10 text-xl font-black md:w-16 md:text-3xl"
//           style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>
//         <h3 className="flex-1 text-xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl font-[bolteSemiBold]">
//           {service.name}
//         </h3>
//         <span
//           className="text-2xl text-white/50 transition-transform duration-300 md:text-3xl"
//           style={{ transform: open ? "rotate(45deg)" : "none", color: open ? ORANGE : undefined }}
//         >
//           +
//         </span>
//       </button>

//       <div
//         className="grid transition-[grid-template-rows] duration-500 ease-out"
//         style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
//       >
//         <div className="overflow-hidden">
//           <div className="grid gap-8 pb-8 pl-14 md:grid-cols-[1.2fr_1fr] md:pl-24">
//             <div>
//               <p className="text-sm leading-relaxed text-white/70 md:text-base font-[NeueRegular]">
//                 {service.desc}
//               </p>
//               <ul className="mt-5 space-y-2">
//                 {service.includes.map((item) => (
//                   <li key={item} className="flex gap-3 text-sm text-white/80">
//                     <span style={{ color: ORANGE }}>→</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="space-y-5 border-l border-white/10 pl-6">
//               <div>
//                 <p className="text-[11px] tracking-[0.25em] text-white/40">TIMELINE</p>
//                 <p className="mt-1 text-sm text-white">{service.time}</p>
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.25em] text-white/40">BEST FOR</p>
//                 <p className="mt-1 text-sm text-white">{service.best}</p>
//               </div>
//               <div className="flex flex-col items-start gap-2 pt-1">
//                 <a
//                   href={`#contact`}
//                   className="rounded-full px-5 py-2.5 text-xs font-semibold text-black transition hover:scale-[1.03]"
//                   style={{ background: ORANGE }}
//                 >
//                   Start a project
//                 </a>
//                 <a
//                   href={relatedHref}
//                   className="text-xs text-white/60 underline-offset-4 transition hover:text-white hover:underline"
//                 >
//                   View related work ↓
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- page ---------- */
// export default function Services() {
//   const [params, setParams] = useSearchParams();
//   const pillarParam = params.get("pillar");
//   const validParam = PILLARS.some((p) => p.id === pillarParam) ? pillarParam : null;

//   const [activePillar, setActivePillar] = useState(validParam || "all");
//   const [openMap, setOpenMap] = useState(() =>
//     Object.fromEntries(PILLARS.map((p) => [p.id, p.services[0].id]))
//   );
//   const [openFaq, setOpenFaq] = useState(0);
//   const [filter, setFilter] = useState(validParam || "all");

//   const sectionRefs = useRef({});
//   const programmatic = useRef(false);

//   /* scroll to pillar when ?pillar= changes (home links land here) */
//   useEffect(() => {
//     if (!validParam) {
//       setActivePillar("all");
//       return;
//     }
//     setActivePillar(validParam);
//     setFilter(validParam);
//     programmatic.current = true;
//     const t = setTimeout(() => {
//       sectionRefs.current[validParam]?.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => (programmatic.current = false), 900);
//     }, 120);
//     return () => clearTimeout(t);
//   }, [validParam]);

//   /* highlight the tab of the section currently in view */
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         if (programmatic.current) return;
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActivePillar(e.target.dataset.pillar);
//         });
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );
//     Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   const goTo = (id) => {
//     if (id === "all") {
//       setParams({}, { replace: true });
//       setActivePillar("all");
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     setParams({ pillar: id }, { replace: true });
//   };

//   const filteredProjects = useMemo(() => {
//     if (filter === "all") return PROJECTS;
//     const keys = PILLARS.find((p) => p.id === filter).match;
//     return PROJECTS.filter((pr) => keys.some((k) => pr.service.includes(k)));
//   }, [filter]);

//   const tabs = [{ id: "all", title: "All" }, ...PILLARS];

//   return (
//     <main className="relative w-full text-white">
//       {/* ========== HERO ========== */}
//       <section className="mx-auto max-w-9xl px-6 pb-14 md:px-10" style={{ paddingTop: NAV_OFFSET + 56 }}>
//         <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//           <div>
//             <Eyebrow>OUR SERVICES</Eyebrow>
//             <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
//               Three pillars.
//               <br />
//               {totalServices} ways to build
//               <br />
//               your <span className="font-[bolteItalic] text-[#ed710c]">brand</span>.
//             </h1>
//           </div>
//           <div className="max-w-[300px] md:text-right">
//             <p className="text-sm leading-relaxed text-white/60 font-[NeueRegular]">
//               Everything under one roof, from the first logo sketch to the leads that follow.
//             </p>
//             <p className="mt-4 text-[11px] tracking-[0.25em] text-white/40">
//               {totalServices} SERVICES · {PILLARS.length} PILLARS
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ========== STICKY PILLAR TABS ========== */}
//       <div
//         className="sticky z-30 border-y border-white/15 bg-black/30 backdrop-blur-md"
//         style={{ top: NAV_OFFSET }}
//       >
//         <div className="mx-auto flex max-w-9xl items-center gap-2 overflow-x-auto px-6 py-3 md:px-10">
//           {tabs.map((t) => {
//             const on = activePillar === t.id;
//             return (
//               <button
//                 key={t.id}
//                 type="button"
//                 onClick={() => goTo(t.id)}
//                 className="shrink-0 rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition"
//                 style={{
//                   borderColor: on ? ORANGE : "rgba(255,255,255,0.25)",
//                   background: on ? ORANGE : "transparent",
//                   color: on ? "#000" : "rgba(255,255,255,0.8)",
//                 }}
//               >
//                 {t.title}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* ========== PILLAR SECTIONS ========== */}
//       {PILLARS.map((p) => (
//         <section
//           key={p.id}
//           id={p.id}
//           data-pillar={p.id}
//           ref={(el) => (sectionRefs.current[p.id] = el)}
//           className="mx-auto max-w-9xl px-6 py-16 md:px-10 md:py-24"
//           style={{ scrollMarginTop: NAV_OFFSET + 56 }}
//         >
//           <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] md:gap-16">
//             {/* LEFT : sticky title */}
//             <div className="md:sticky md:self-start" style={{ top: NAV_OFFSET + 90 }}>
//               <span
//                 className="block text-7xl font-black leading-none md:text-9xl"
//                 style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//               >
//                 {p.no}
//               </span>
//               <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl font-[bolteSemiBold]">
//                 {p.title}
//               </h2>
//               <p className="mt-3 text-base text-white/80">{p.text}</p>
//               <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55 font-[NeueRegular]">
//                 {p.intro}
//               </p>
//               <p className="mt-6 text-[11px] tracking-[0.25em] text-white/40">
//                 {p.services.length} SERVICES
//               </p>
//             </div>

//             {/* RIGHT : service rows */}
//             <div className="border-t border-white/15">
//               {p.services.map((s, i) => (
//                 <ServiceRow
//                   key={s.id}
//                   index={i}
//                   service={s}
//                   open={openMap[p.id] === s.id}
//                   onToggle={() =>
//                     setOpenMap((m) => ({ ...m, [p.id]: m[p.id] === s.id ? null : s.id }))
//                   }
//                   relatedHref="#related-work"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* ========== PROCESS ========== */}
//       <section className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24">
//         <Eyebrow>HOW WE WORK</Eyebrow>
//         <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//           Simple process.
//           <br />
//           No surprises.
//         </h2>
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {PROCESS.map((s, i) => (
//             <div key={s.no} className="border-t pt-5" style={{ borderColor: i === 0 ? ORANGE : "rgba(255,255,255,0.2)" }}>
//               <span
//                 className="text-4xl font-black"
//                 style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//               >
//                 {s.no}
//               </span>
//               <h3 className="mt-3 text-xl font-semibold font-[bolteSemiBold]">{s.title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-white/60 font-[NeueRegular]">{s.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ========== RELATED WORK ========== */}
//       <section
//         id="related-work"
//         className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24"
//         style={{ scrollMarginTop: NAV_OFFSET }}
//       >
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <Eyebrow>SELECTED WORK</Eyebrow>
//             <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//               Proof, not promises.
//             </h2>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {[{ id: "all", title: "All" }, ...PILLARS].map((t) => (
//               <button
//                 key={t.id}
//                 type="button"
//                 onClick={() => setFilter(t.id)}
//                 className="rounded-full border px-4 py-1.5 text-xs transition"
//                 style={{
//                   borderColor: filter === t.id ? ORANGE : "rgba(255,255,255,0.25)",
//                   color: filter === t.id ? ORANGE : "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 {t.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProjects.map((pr) => (
//             <article key={pr.name} className="group">
//               <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
//                 <img
//                   src={pr.img}
//                   alt={pr.name}
//                   draggable={false}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//                 <div className="project-grain pointer-events-none absolute inset-0" aria-hidden="true" />
//                 <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
//                   {pr.service}
//                 </span>
//               </div>
//               <div className="mt-3 flex items-center justify-between">
//                 <p className="text-lg font-medium">{pr.name}</p>
//                 <p className="text-xs tracking-[0.2em] text-white/50">{pr.year}</p>
//               </div>
//             </article>
//           ))}
//           {filteredProjects.length === 0 && (
//             <p className="text-sm text-white/50">New case studies for this pillar are coming soon.</p>
//           )}
//         </div>
//       </section>

//       {/* ========== FAQ ========== */}
//       <section className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24">
//         <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] md:gap-16">
//           <div>
//             <Eyebrow>FAQ</Eyebrow>
//             <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//               Good questions.
//             </h2>
//           </div>
//           <div className="border-t border-white/15">
//             {FAQS.map((f, i) => {
//               const on = openFaq === i;
//               return (
//                 <div key={f.q} className="border-b border-white/15">
//                   <button
//                     type="button"
//                     onClick={() => setOpenFaq(on ? null : i)}
//                     aria-expanded={on}
//                     className="flex w-full items-center justify-between gap-6 py-5 text-left"
//                   >
//                     <span className="text-base font-medium md:text-lg">{f.q}</span>
//                     <span
//                       className="text-2xl transition-transform duration-300"
//                       style={{ transform: on ? "rotate(45deg)" : "none", color: on ? ORANGE : "rgba(255,255,255,0.5)" }}
//                     >
//                       +
//                     </span>
//                   </button>
//                   <div
//                     className="grid transition-[grid-template-rows] duration-500 ease-out"
//                     style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
//                   >
//                     <p className="overflow-hidden pr-10 text-sm leading-relaxed text-white/60 font-[NeueRegular]">
//                       <span className="block pb-6">{f.a}</span>
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section id="contact" className="mx-auto max-w-9xl border-t border-white/15 px-6 py-20 text-center md:px-10 md:py-32">
//         <Eyebrow>LET'S TALK</Eyebrow>
//         <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
//           Have a project in <span className="font-[bolteItalic] text-[#ed710c]">mind</span>?
//         </h2>
//         <a
//           href="mailto:hello@weepek.com"
//           className="mt-10 inline-block rounded-full px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
//           style={{ background: ORANGE }}
//         >
//           Start a project
//         </a>
//         <p className="mt-5 text-xs tracking-[0.2em] text-white/40">HELLO@WEEPEK.COM</p>
//       </section>
//     </main>
//   );
// }


// import { useEffect, useMemo, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "../App.css";

// /* ---------- image imports (same as home page) ---------- */
// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";
// const PURPLE_SOFT = "#2e0753";

// /* height of your fixed navbar, so sticky bar + scroll offsets sit below it */
// const NAV_OFFSET = 72;

// /* ---------- content (edit here) ---------- */
// const PILLARS = [
//   {
//     id: "brand",
//     no: "01",
//     title: "Brand",
//     text: "Identities and creatives people remember.",
//     intro:
//       "A brand is what people feel when they see you. We build identities that look sharp, stay consistent everywhere and are easy to grow with.",
//     match: ["Brand", "Branding", "Design", "Video"],
//     services: [
//       {
//         id: "logo-identity",
//         name: "Logo & Brand Identity",
//         desc: "A complete visual identity: logo, colours, type and the rules that keep everything consistent.",
//         includes: [
//           "Logo suite (primary, secondary, icon)",
//           "Colour palette and typography system",
//           "Brand guidelines document",
//           "Stationery and social media kit",
//         ],
//         time: "2 – 4 weeks",
//         best: "New businesses and rebrands",
//       },
//       {
//         id: "graphic-design",
//         name: "Graphic Design & Creatives",
//         desc: "Posts, ads, brochures, packaging and decks, designed to stop the scroll and match your brand.",
//         includes: [
//           "Social media creatives",
//           "Ad banners and campaign visuals",
//           "Brochures, menus and print collateral",
//           "Pitch and presentation decks",
//         ],
//         time: "Ongoing or per project",
//         best: "Brands that post and promote often",
//       },
//       {
//         id: "video-motion",
//         name: "Video Editing & Motion",
//         desc: "Reels, promos and motion graphics that give your brand movement and personality.",
//         includes: [
//           "Reels and short-form edits",
//           "Promo and product videos",
//           "Logo animation and motion graphics",
//           "Subtitles, colour grade and sound mix",
//         ],
//         time: "3 days – 2 weeks",
//         best: "Social-first brands and launches",
//       },
//     ],
//   },
//   {
//     id: "build",
//     no: "02",
//     title: "Build",
//     text: "Websites, apps and systems that scale with you.",
//     intro:
//       "From a fast marketing site to a full product, we design and develop things that work on every screen and are easy to maintain.",
//     match: ["Web", "Ecom", "App", "UIUX", "RPA"],
//     services: [
//       {
//         id: "website",
//         name: "Custom Website Development",
//         desc: "Hand-built, responsive websites with smooth interactions, designed around your goals, not a template.",
//         includes: [
//           "UI/UX design in Figma",
//           "React / modern front-end build",
//           "CMS or e-commerce integration",
//           "Performance, SEO-ready structure and hosting setup",
//         ],
//         time: "3 – 8 weeks",
//         best: "Businesses, portfolios and online stores",
//       },
//       {
//         id: "mobile-app",
//         name: "Mobile App Development",
//         desc: "Android and iOS apps with clean UI and reliable back-ends, from MVP to production.",
//         includes: [
//           "Product flow and app UI design",
//           "Cross-platform app development",
//           "API and admin panel",
//           "Store publishing support",
//         ],
//         time: "6 – 12 weeks",
//         best: "Startups and service businesses",
//       },
//       {
//         id: "rpa",
//         name: "Robotic Process Automation",
//         desc: "Bots that take over repetitive tasks like data entry, reports and approvals so your team saves hours.",
//         includes: [
//           "Process audit and automation plan",
//           "Bot development and testing",
//           "Integration with your existing tools",
//           "Monitoring and handover docs",
//         ],
//         time: "2 – 6 weeks",
//         best: "Teams with repetitive manual work",
//       },
//     ],
//   },
//   {
//     id: "grow",
//     no: "03",
//     title: "Grow",
//     text: "Get found, get remembered, get leads.",
//     intro:
//       "Great work needs an audience. We help the right people find you, and turn that attention into enquiries.",
//     match: ["SEO", "Marketing"],
//     services: [
//       {
//         id: "seo",
//         name: "SEO Optimization",
//         desc: "Technical, on-page and content SEO that moves you up search results and keeps you there.",
//         includes: [
//           "Site audit and keyword research",
//           "On-page and technical fixes",
//           "Content and backlink strategy",
//           "Monthly ranking and traffic reports",
//         ],
//         time: "3 months+ for results",
//         best: "Sites that depend on search traffic",
//       },
//       {
//         id: "marketing",
//         name: "Digital Marketing",
//         desc: "Social and paid campaigns built around your audience, with clear tracking from click to lead.",
//         includes: [
//           "Strategy and content calendar",
//           "Meta and Google ad campaigns",
//           "Landing pages and lead tracking",
//           "Monthly performance reports",
//         ],
//         time: "Monthly retainer",
//         best: "Brands ready to scale leads",
//       },
//     ],
//   },
// ];

// const PROJECTS = [
//   { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
//   { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
//   { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
//   { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
//   { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
// ];

// const PROCESS = [
//   { no: "01", title: "Discover", text: "We learn your business, audience and goals before touching a pixel." },
//   { no: "02", title: "Design", text: "Concepts, moodboards and prototypes you can react to early." },
//   { no: "03", title: "Build", text: "Clean, tested development with weekly progress updates." },
//   { no: "04", title: "Launch", text: "Go live, track results and keep improving after day one." },
// ];

// const FAQS = [
//   {
//     q: "Can I pick services from different pillars?",
//     a: "Yes. Most clients mix them, for example a new brand identity along with a website and SEO. We'll put together one plan and one timeline.",
//   },
//   {
//     q: "How is pricing decided?",
//     a: "Based on scope, not hourly guesses. Share your requirements and we'll send a clear quote with what's included.",
//   },
//   {
//     q: "Do you work with existing brands and websites?",
//     a: "Absolutely. We can refresh, extend or fix what you already have without starting from scratch.",
//   },
//   {
//     q: "What do you need from me to start?",
//     a: "A short brief, any existing brand assets and a point person for feedback. We'll guide you through the rest.",
//   },
// ];

// const totalServices = PILLARS.reduce((n, p) => n + p.services.length, 0);

// /* ---------- small pieces ---------- */
// function Eyebrow({ children }) {
//   return (
//     <p className="text-xs font-semibold tracking-[0.3em]" style={{ color: ORANGE }}>
//       {children}
//     </p>
//   );
// }

// function ServiceRow({ index, service, open, onToggle, relatedHref }) {
//   return (
//     <div className="group relative border-b border-white/15">
//       <span
//         className="pointer-events-none absolute -bottom-px left-0 h-px transition-all duration-500"
//         style={{ background: ORANGE, width: open ? "100%" : "0%" }}
//       />
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={open}
//         className="flex w-full items-center gap-4 py-5 text-left md:gap-8 md:py-6"
//       >
//         <span
//           className="w-10 text-xl font-black md:w-16 md:text-3xl"
//           style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>
//         <h3 className="flex-1 text-xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 md:text-3xl font-[bolteSemiBold]">
//           {service.name}
//         </h3>
//         <span
//           className="text-2xl text-white/50 transition-transform duration-300 md:text-3xl"
//           style={{ transform: open ? "rotate(45deg)" : "none", color: open ? ORANGE : undefined }}
//         >
//           +
//         </span>
//       </button>

//       <div
//         className="grid transition-[grid-template-rows] duration-500 ease-out"
//         style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
//       >
//         <div className="overflow-hidden">
//           <div className="grid gap-8 pb-8 pl-14 md:grid-cols-[1.2fr_1fr] md:pl-24">
//             <div>
//               <p className="text-sm leading-relaxed text-white/70 md:text-base font-[NeueRegular]">
//                 {service.desc}
//               </p>
//               <ul className="mt-5 space-y-2">
//                 {service.includes.map((item) => (
//                   <li key={item} className="flex gap-3 text-sm text-white/80">
//                     <span style={{ color: ORANGE }}>→</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="space-y-5 border-l border-white/10 pl-6">
//               <div>
//                 <p className="text-[11px] tracking-[0.25em] text-white/40">TIMELINE</p>
//                 <p className="mt-1 text-sm text-white">{service.time}</p>
//               </div>
//               <div>
//                 <p className="text-[11px] tracking-[0.25em] text-white/40">BEST FOR</p>
//                 <p className="mt-1 text-sm text-white">{service.best}</p>
//               </div>
//               <div className="flex flex-col items-start gap-2 pt-1">
//                 <a
//                   href={`#contact`}
//                   className="rounded-full px-5 py-2.5 text-xs font-semibold text-black transition hover:scale-[1.03]"
//                   style={{ background: ORANGE }}
//                 >
//                   Start a project
//                 </a>
//                 <a
//                   href={relatedHref}
//                   className="text-xs text-white/60 underline-offset-4 transition hover:text-white hover:underline"
//                 >
//                   View related work ↓
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- page ---------- */
// export default function Services() {
//   const [params, setParams] = useSearchParams();
//   const pillarParam = params.get("pillar");
//   const validParam = PILLARS.some((p) => p.id === pillarParam) ? pillarParam : null;

//   const [activePillar, setActivePillar] = useState(validParam || "all");
//   const [openMap, setOpenMap] = useState(() =>
//     Object.fromEntries(PILLARS.map((p) => [p.id, p.services[0].id]))
//   );
//   const [openFaq, setOpenFaq] = useState(0);
//   const [filter, setFilter] = useState(validParam || "all");

//   const sectionRefs = useRef({});
//   const programmatic = useRef(false);

//   const scrollToPillar = (id) => {
//     if (id === "all") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     const el = sectionRefs.current[id];
//     if (!el) return;
//     programmatic.current = true;
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//     // release the guard after the smooth scroll settles
//     setTimeout(() => (programmatic.current = false), 900);
//   };

//   /* On mount / when ?pillar= comes from home: scroll once */
//   useEffect(() => {
//     if (!validParam) return;
//     setActivePillar(validParam);
//     setFilter(validParam);

//     // wait a tick so refs are attached
//     const t = setTimeout(() => scrollToPillar(validParam), 120);
//     return () => clearTimeout(t);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [validParam]);

//   /* Observe sections to highlight the active tab */
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         if (programmatic.current) return;
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActivePillar(e.target.dataset.pillar);
//         });
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );
//     Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   /* Sticky pillar tab click: update URL + scroll (no full re-render fl") */
//   const goTo = (id) => {
//     setActivePillar(id);
//     if (id === "all") {
//       setParams({}, { replace: true });
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     setParams({ pillar: id }, { replace: true });
//     scrollToPillar(id);
//   };

//   const filteredProjects = useMemo(() => {
//     if (filter === "all") return PROJECTS;
//     const keys = PILLARS.find((p) => p.id === filter).match;
//     return PROJECTS.filter((pr) => keys.some((k) => pr.service.includes(k)));
//   }, [filter]);

//   const tabs = [{ id: "all", title: "All" }, ...PILLARS];

//   return (
//     <main className="relative w-full text-white">
//       {/* ========== HERO ==========  faf5e6 #fffcf5  bg-[#fffcf5]*/}
//       <section className="mx-auto max-w-9xl px-6 pb-14 md:px-10" style={{ paddingTop: NAV_OFFSET + 56 }}>
//         <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//           <div>
//             <Eyebrow>OUR SERVICES</Eyebrow>
//             <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
//               Three pillars.
//               <br />
//               {totalServices} ways to build
//               <br />
//               your <span className="font-[bolteItalic] text-[#ed710c]">brand</span>.
//             </h1>
//           </div>
//           <div className="max-w-[300px] md:text-right">
//             <p className="text-sm leading-relaxed text-white/60 font-[NeueRegular]">
//               Everything under one roof, from the first logo sketch to the leads that follow.
//             </p>
//             <p className="mt-4 text-[11px] tracking-[0.25em] text-white/40">
//               {totalServices} SERVICES · {PILLARS.length} PILLARS
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ========== STICKY PILLAR TABS ========== */}
//       <div
//         className="sticky z-30 border-y border-white/15 bg-black/30 backdrop-blur-md"
//         style={{ top: NAV_OFFSET }}
//       >
//         <div className="mx-auto flex max-w-9xl items-center gap-2 overflow-x-auto px-6 py-3 md:px-10">
//           {tabs.map((t) => {
//             const on = activePillar === t.id;
//             return (
//               <button
//                 key={t.id}
//                 type="button"
//                 onClick={() => goTo(t.id)}
//                 className="shrink-0 rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition"
//                 style={{
//                   borderColor: on ? ORANGE : "rgba(255,255,255,0.25)",
//                   background: on ? ORANGE : "transparent",
//                   color: on ? "#000" : "rgba(255,255,255,0.8)",
//                 }}
//               >
//                 {t.title}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* ========== PILLAR SECTIONS ========== */}
//       {PILLARS.map((p) => (
//         <section
//           key={p.id}
//           id={p.id}
//           data-pillar={p.id}
//           ref={(el) => (sectionRefs.current[p.id] = el)}
//           className="mx-auto max-w-9xl px-6 py-16 md:px-10 md:py-24"
//           style={{ scrollMarginTop: NAV_OFFSET + 56 }}
//         >
//           <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] md:gap-16">
//             {/* LEFT : sticky title */}
//             <div className="md:sticky md:self-start" style={{ top: NAV_OFFSET + 90 }}>
//               <span
//                 className="block text-7xl font-black leading-none md:text-9xl"
//                 style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//               >
//                 {p.no}
//               </span>
//               <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl font-[bolteSemiBold]">
//                 {p.title}
//               </h2>
//               <p className="mt-3 text-base text-white/80">{p.text}</p>
//               <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55 font-[NeueRegular]">
//                 {p.intro}
//               </p>
//               <p className="mt-6 text-[11px] tracking-[0.25em] text-white/40">
//                 {p.services.length} SERVICES
//               </p>
//             </div>

//             {/* RIGHT : service rows */}
//             <div className="border-t border-white/15">
//               {p.services.map((s, i) => (
//                 <ServiceRow
//                   key={s.id}
//                   index={i}
//                   service={s}
//                   open={openMap[p.id] === s.id}
//                   onToggle={() =>
//                     setOpenMap((m) => ({ ...m, [p.id]: m[p.id] === s.id ? null : s.id }))
//                   }
//                   relatedHref="#related-work"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* ========== PROCESS ========== */}
//       <section className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24">
//         <Eyebrow>HOW WE WORK</Eyebrow>
//         <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//           Simple process.
//           <br />
//           No surprises.
//         </h2>
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {PROCESS.map((s, i) => (
//             <div key={s.no} className="border-t pt-5" style={{ borderColor: i === 0 ? ORANGE : "rgba(255,255,255,0.2)" }}>
//               <span
//                 className="text-4xl font-black"
//                 style={{ color: "transparent", WebkitTextStroke: `1px ${PURPLE_SOFT}80` }}
//               >
//                 {s.no}
//               </span>
//               <h3 className="mt-3 text-xl font-semibold font-[bolteSemiBold]">{s.title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-white/60 font-[NeueRegular]">{s.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ========== RELATED WORK ========== */}
//       <section
//         id="related-work"
//         className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24"
//         style={{ scrollMarginTop: NAV_OFFSET }}
//       >
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <Eyebrow>SELECTED WORK</Eyebrow>
//             <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//               Proof, not promises.
//             </h2>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {[{ id: "all", title: "All" }, ...PILLARS].map((t) => (
//               <button
//                 key={t.id}
//                 type="button"
//                 onClick={() => setFilter(t.id)}
//                 className="rounded-full border px-4 py-1.5 text-xs transition"
//                 style={{
//                   borderColor: filter === t.id ? ORANGE : "rgba(255,255,255,0.25)",
//                   color: filter === t.id ? ORANGE : "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 {t.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProjects.map((pr) => (
//             <article key={pr.name} className="group">
//               <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
//                 <img
//                   src={pr.img}
//                   alt={pr.name}
//                   draggable={false}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//                 <div className="project-grain pointer-events-none absolute inset-0" aria-hidden="true" />
//                 <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
//                   {pr.service}
//                 </span>
//               </div>
//               <div className="mt-3 flex items-center justify-between">
//                 <p className="text-lg font-medium">{pr.name}</p>
//                 <p className="text-xs tracking-[0.2em] text-white/50">{pr.year}</p>
//               </div>
//             </article>
//           ))}
//           {filteredProjects.length === 0 && (
//             <p className="text-sm text-white/50">New case studies for this pillar are coming soon.</p>
//           )}
//         </div>
//       </section>

//       {/* ========== FAQ ========== */}
//       <section className="mx-auto max-w-9xl border-t border-white/15 px-6 py-16 md:px-10 md:py-24">
//         <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] md:gap-16">
//           <div>
//             <Eyebrow>FAQ</Eyebrow>
//             <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
//               Good questions.
//             </h2>
//           </div>
//           <div className="border-t border-white/15">
//             {FAQS.map((f, i) => {
//               const on = openFaq === i;
//               return (
//                 <div key={f.q} className="border-b border-white/15">
//                   <button
//                     type="button"
//                     onClick={() => setOpenFaq(on ? null : i)}
//                     aria-expanded={on}
//                     className="flex w-full items-center justify-between gap-6 py-5 text-left"
//                   >
//                     <span className="text-base font-medium md:text-lg">{f.q}</span>
//                     <span
//                       className="text-2xl transition-transform duration-300"
//                       style={{ transform: on ? "rotate(45deg)" : "none", color: on ? ORANGE : "rgba(255,255,255,0.5)" }}
//                     >
//                       +
//                     </span>
//                   </button>
//                   <div
//                     className="grid transition-[grid-template-rows] duration-500 ease-out"
//                     style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
//                   >
//                     <p className="overflow-hidden pr-10 text-sm leading-relaxed text-white/60 font-[NeueRegular]">
//                       <span className="block pb-6">{f.a}</span>
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA ========== */}
//       <section id="contact" className="mx-auto max-w-9xl border-t border-white/15 px-6 py-20 text-center md:px-10 md:py-32">
//         <Eyebrow>LET'S TALK</Eyebrow>
//         <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
//           Have a project in <span className="font-[bolteItalic] text-[#ed710c]">mind</span>?
//         </h2>
//         <a
//           href="mailto:hello@weepek.com"
//           className="mt-10 inline-block rounded-full px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
//           style={{ background: ORANGE }}
//         >
//           Start a project
//         </a>
//         <p className="mt-5 text-xs tracking-[0.2em] text-white/40">HELLO@WEEPEK.COM</p>
//       </section>
//     </main>
//   );
// }
 






// import { useEffect, useMemo, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "../App.css";

// /* ---------- image imports ---------- */
// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// /* ---------- palette ---------- */
// const ORANGE = "#ed710c";
// const CREAM = "#fffcf5";
// const DARK = "#0b0613";
// const NAV_OFFSET = 72;

// /* ---------- content ---------- */

// const PILLARS = [
//   {
//     id: "brand",
//     no: "01",
//     title: "Brand",
//     text: "Identities and creatives people remember.",
//     intro:
//       "A brand is what people feel when they see you. We build identities that look sharp, stay consistent everywhere and are easy to grow with.",
//     match: ["Brand", "Branding", "Design", "Video"],
//     background: "#ed710c",
//     foreground: CREAM,
//     muted: "rgba(255,252,245,0.72)",
//     border: "rgba(255,252,245,0.25)",
//     accent: DARK,
//     services: [
//       {
//         id: "logo-identity",
//         name: "Logo & Brand Identity",
//         desc: "A complete visual identity: logo, colours, type and the rules that keep everything consistent.",
//         includes: [
//           "Logo suite (primary, secondary, icon)",
//           "Colour palette and typography system",
//           "Brand guidelines document",
//           "Stationery and social media kit",
//         ],
//         time: "2 – 4 weeks",
//         best: "New businesses and rebrands",
//       },
//       {
//         id: "graphic-design",
//         name: "Graphic Design & Creatives",
//         desc: "Posts, ads, brochures, packaging and decks, designed to stop the scroll and match your brand.",
//         includes: [
//           "Social media creatives",
//           "Ad banners and campaign visuals",
//           "Brochures, menus and print collateral",
//           "Pitch and presentation decks",
//         ],
//         time: "Ongoing or per project",
//         best: "Brands that post and promote often",
//       },
//       {
//         id: "video-motion",
//         name: "Video Editing & Motion",
//         desc: "Reels, promos and motion graphics that give your brand movement and personality.",
//         includes: [
//           "Reels and short-form edits",
//           "Promo and product videos",
//           "Logo animation and motion graphics",
//           "Subtitles, colour grade and sound mix",
//         ],
//         time: "3 days – 2 weeks",
//         best: "Social-first brands and launches",
//       },
//     ],
//   },
//   {
//     id: "build",
//     no: "02",
//     title: "Build",
//     text: "Websites, apps and systems that scale with you.",
//     intro:
//       "From a fast marketing site to a full product, we design and develop things that work on every screen and are easy to maintain.",
//     match: ["Web", "Ecom", "App", "UIUX", "RPA"],
//     background: "#0b0613",
//     foreground: CREAM,
//     muted: "rgba(255,252,245,0.65)",
//     border: "rgba(255,252,245,0.17)",
//     accent: ORANGE,
//     services: [
//       {
//         id: "website",
//         name: "Custom Website Development",
//         desc: "Hand-built, responsive websites with smooth interactions, designed around your goals, not a template.",
//         includes: [
//           "UI/UX design in Figma",
//           "React / modern front-end build",
//           "CMS or e-commerce integration",
//           "Performance, SEO-ready structure and hosting setup",
//         ],
//         time: "3 – 8 weeks",
//         best: "Businesses, portfolios and online stores",
//       },
//       {
//         id: "mobile-app",
//         name: "Mobile App Development",
//         desc: "Android and iOS apps with clean UI and reliable back-ends, from MVP to production.",
//         includes: [
//           "Product flow and app UI design",
//           "Cross-platform app development",
//           "API and admin panel",
//           "Store publishing support",
//         ],
//         time: "6 – 12 weeks",
//         best: "Startups and service businesses",
//       },
//       {
//         id: "rpa",
//         name: "Robotic Process Automation",
//         desc: "Bots that take over repetitive tasks like data entry, reports and approvals so your team saves hours.",
//         includes: [
//           "Process audit and automation plan",
//           "Bot development and testing",
//           "Integration with your existing tools",
//           "Monitoring and handover docs",
//         ],
//         time: "2 – 6 weeks",
//         best: "Teams with repetitive manual work",
//       },
//     ],
//   },
//   {
//     id: "grow",
//     no: "03",
//     title: "Grow",
//     text: "Get found, get remembered, get leads.",
//     intro:
//       "Great work needs an audience. We help the right people find you, and turn that attention into enquiries.",
//     match: ["SEO", "Marketing"],
//     background: "#f8eee8",
//     foreground: DARK,
//     muted: "rgba(11,6,19,0.62)",
//     border: "rgba(11,6,19,0.18)",
//     accent: ORANGE,
//     services: [
//       {
//         id: "seo",
//         name: "SEO Optimization",
//         desc: "Technical, on-page and content SEO that moves you up search results and keeps you there.",
//         includes: [
//           "Site audit and keyword research",
//           "On-page and technical fixes",
//           "Content and backlink strategy",
//           "Monthly ranking and traffic reports",
//         ],
//         time: "3 months+ for results",
//         best: "Sites that depend on search traffic",
//       },
//       {
//         id: "marketing",
//         name: "Digital Marketing",
//         desc: "Social and paid campaigns built around your audience, with clear tracking from click to lead.",
//         includes: [
//           "Strategy and content calendar",
//           "Meta and Google ad campaigns",
//           "Landing pages and lead tracking",
//           "Monthly performance reports",
//         ],
//         time: "Monthly retainer",
//         best: "Brands ready to scale leads",
//       },
//     ],
//   },
// ];

// const PROJECTS = [
//   { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
//   { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
//   { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
//   { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
//   { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
// ];

// const PROCESS = [
//   {
//     no: "01",
//     title: "Discover",
//     text: "We learn your business, audience and goals before touching a pixel.",
//   },
//   {
//     no: "02",
//     title: "Design",
//     text: "Concepts, moodboards and prototypes you can react to early.",
//   },
//   {
//     no: "03",
//     title: "Build",
//     text: "Clean, tested development with weekly progress updates.",
//   },
//   {
//     no: "04",
//     title: "Launch",
//     text: "Go live, track results and keep improving after day one.",
//   },
// ];

// const FAQS = [
//   {
//     q: "Can I pick services from different pillars?",
//     a: "Yes. Most clients mix them, for example a new brand identity along with a website and SEO. We'll put together one plan and one timeline.",
//   },
//   {
//     q: "How is pricing decided?",
//     a: "Based on scope, not hourly guesses. Share your requirements and we'll send a clear quote with what's included.",
//   },
//   {
//     q: "Do you work with existing brands and websites?",
//     a: "Absolutely. We can refresh, extend or fix what you already have without starting from scratch.",
//   },
//   {
//     q: "What do you need from me to start?",
//     a: "A short brief, any existing brand assets and a point person for feedback. We'll guide you through the rest.",
//   },
// ];

// const totalServices = PILLARS.reduce(
//   (n, p) => n + p.services.length,
//   0
// );

// /* ---------- small components ---------- */

// function Eyebrow({ children, color = ORANGE }) {
//   return (
//     <p
//       className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] md:text-xs"
//       style={{ color }}
//     >
//       <span
//         className="h-1.5 w-1.5 rounded-full"
//         style={{ background: color }}
//       />
//       {children}
//     </p>
//   );
// }

// /* ---------- service accordion ---------- */

// function ServiceRow({ index, service, open, onToggle, theme }) {
//   const isDark = theme.foreground === CREAM;

//   return (
//     <div
//       className="relative border-b"
//       style={{ borderColor: theme.border }}
//     >
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={open}
//         className="group flex w-full items-center gap-3 py-5 text-left md:gap-5 md:py-6"
//       >
//         <span
//           className="w-8 shrink-0 text-sm font-semibold md:w-10 md:text-base"
//           style={{ color: theme.accent }}
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         <h3
//           className="flex-1 text-base font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl lg:text-2xl font-[bolteSemiBold]"
//           style={{ color: theme.foreground }}
//         >
//           {service.name}
//         </h3>

//         <span
//           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 md:h-10 md:w-10"
//           style={{
//             borderColor: open ? theme.accent : theme.border,
//             color: theme.accent,
//             transform: open ? "rotate(45deg)" : "none",
//           }}
//         >
//           +
//         </span>
//       </button>

//       <div
//         className="grid transition-[grid-template-rows] duration-500 ease-out"
//         style={{
//           gridTemplateRows: open ? "1fr" : "0fr",
//         }}
//       >
//         <div className="overflow-hidden">
//           <div className="grid gap-7 pb-7 pl-11 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:pb-9 md:pl-14">
//             <div>
//               <p
//                 className="text-sm leading-relaxed md:text-base font-[NeueRegular]"
//                 style={{ color: theme.muted }}
//               >
//                 {service.desc}
//               </p>

//               <ul className="mt-5 space-y-3">
//                 {service.includes.map((item) => (
//                   <li
//                     key={item}
//                     className="flex gap-3 text-xs leading-relaxed md:text-sm"
//                     style={{ color: theme.foreground }}
//                   >
//                     <span style={{ color: theme.accent }}>↗</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div
//               className="space-y-5 border-l pl-5 md:pl-6"
//               style={{ borderColor: theme.border }}
//             >
//               <div>
//                 <p
//                   className="text-[10px] tracking-[0.22em]"
//                   style={{ color: theme.muted }}
//                 >
//                   TIMELINE
//                 </p>
//                 <p
//                   className="mt-1 text-sm font-medium"
//                   style={{ color: theme.foreground }}
//                 >
//                   {service.time}
//                 </p>
//               </div>

//               <div>
//                 <p
//                   className="text-[10px] tracking-[0.22em]"
//                   style={{ color: theme.muted }}
//                 >
//                   BEST FOR
//                 </p>
//                 <p
//                   className="mt-1 text-sm font-medium"
//                   style={{ color: theme.foreground }}
//                 >
//                   {service.best}
//                 </p>
//               </div>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition duration-300 hover:scale-105"
//                 style={{
//                   background: theme.accent,
//                   color: isDark ? DARK : CREAM,
//                 }}
//               >
//                 Start a project <span>↗</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- pillar card ---------- */

// function PillarCard({ pillar, index, openMap, setOpenMap, sectionRef }) {
//   const theme = pillar;
//   const isDark = theme.foreground === CREAM;

//   return (
//     <section
//       ref={sectionRef}
//       id={pillar.id}
//       data-pillar={pillar.id}
//       className="relative min-h-[110vh] px-4 pb-20 pt-5 md:px-10 md:pt-8"
//       style={{ zIndex: index + 10 }}
//     >
//       <div
//         className="relative mx-auto min-h-[620px] max-w-9xl rounded-[22px] px-6 py-9 shadow-2xl md:sticky md:top-[88px] md:min-h-[620px] md:rounded-[30px] md:px-12 md:py-12 lg:px-16 lg:py-14"
//         style={{
//           background: theme.background,
//           color: theme.foreground,
//         }}
//       >
//         {/* Top label */}
//         <div
//           className="flex items-center justify-between border-b pb-5"
//           style={{ borderColor: theme.border }}
//         >
//           <Eyebrow color={theme.foreground}>
//             PILLAR {pillar.no}
//           </Eyebrow>

//           <span
//             className="text-[10px] tracking-[0.2em] md:text-xs"
//             style={{ color: theme.muted }}
//           >
//             WEEPEK / SERVICES
//           </span>
//         </div>

//         <div className="grid gap-10 pt-9 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-20 lg:pt-12">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col">
//             <span
//               className="text-5xl font-black leading-none md:text-7xl lg:text-8xl"
//               style={{
//                 color: "transparent",
//                 WebkitTextStroke: `1px ${isDark ? "rgba(255,252,245,0.5)" : "rgba(11,6,19,0.35)"}`,
//               }}
//             >
//               {pillar.no}
//             </span>

//             <h2 className="mt-5 text-5xl font-semibold uppercase tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//               {pillar.title}
//               <span style={{ color: theme.accent }}>.</span>
//             </h2>

//             <p
//               className="mt-4 max-w-md text-lg leading-snug md:text-xl lg:text-2xl"
//               style={{ color: theme.muted }}
//             >
//               {pillar.text}
//             </p>

//             <p
//               className="mt-5 max-w-md text-sm leading-relaxed md:text-base font-[NeueRegular]"
//               style={{ color: theme.muted }}
//             >
//               {pillar.intro}
//             </p>

//             <div className="mt-8 flex items-center gap-3 md:mt-auto md:pt-12">
//               <span
//                 className="text-3xl font-bold md:text-4xl"
//                 style={{ color: theme.accent }}
//               >
//                 {pillar.services.length.toString().padStart(2, "0")}
//               </span>
//               <span
//                 className="text-[10px] tracking-[0.25em]"
//                 style={{ color: theme.muted }}
//               >
//                 SERVICES
//               </span>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div>
//             <div
//               className="mb-4 flex items-center justify-between border-b pb-4"
//               style={{ borderColor: theme.border }}
//             >
//               <span
//                 className="text-[10px] tracking-[0.25em]"
//                 style={{ color: theme.muted }}
//               >
//                 WHAT WE OFFER
//               </span>

//               <span
//                 className="text-[10px] tracking-[0.2em]"
//                 style={{ color: theme.muted }}
//               >
//                 {pillar.no} / 03
//               </span>
//             </div>

//             {pillar.services.map((service, i) => (
//               <ServiceRow
//                 key={service.id}
//                 index={i}
//                 service={service}
//                 theme={theme}
//                 open={openMap[pillar.id] === service.id}
//                 onToggle={() =>
//                   setOpenMap((current) => ({
//                     ...current,
//                     [pillar.id]:
//                       current[pillar.id] === service.id
//                         ? null
//                         : service.id,
//                   }))
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- main page ---------- */

// export default function Services() {
//   const [params] = useSearchParams();

//   const pillarParam = params.get("pillar");

//   const validParam = PILLARS.some(
//     (p) => p.id === pillarParam
//   )
//     ? pillarParam
//     : null;

//   const [openMap, setOpenMap] = useState(() =>
//     Object.fromEntries(
//       PILLARS.map((p) => [p.id, p.services[0].id])
//     )
//   );

//   const [openFaq, setOpenFaq] = useState(0);
//   const [filter, setFilter] = useState(validParam || "all");
//   const [copied, setCopied] = useState(false);

//   const sectionRefs = useRef({});
//   const processRef = useRef(null);
//   const processProgressRef = useRef(null);

//   /* ---------- URL pillar deep linking ---------- */

//   useEffect(() => {
//     if (!validParam) return;

//     setFilter(validParam);

//     const timer = setTimeout(() => {
//       const element = sectionRefs.current[validParam];

//       if (element) {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 150);

//     return () => clearTimeout(timer);
//   }, [validParam]);

//   /* ---------- process scroll progress ---------- */

//   useEffect(() => {
//     const section = processRef.current;
//     const progress = processProgressRef.current;

//     if (!section || !progress) return;

//     let rafId = null;

//     const updateProgress = () => {
//       const rect = section.getBoundingClientRect();
//       const viewport = window.innerHeight;

//       const start = viewport * 0.75;
//       const end = -rect.height * 0.3;

//       const value = Math.min(
//         1,
//         Math.max(0, (start - rect.top) / (start - end))
//       );

//       progress.style.transform = `scaleX(${value})`;
//     };

//     const handleScroll = () => {
//       if (rafId) return;

//       rafId = window.requestAnimationFrame(() => {
//         updateProgress();
//         rafId = null;
//       });
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     window.addEventListener("resize", handleScroll);

//     updateProgress();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);

//       if (rafId) {
//         window.cancelAnimationFrame(rafId);
//       }
//     };
//   }, []);

//   /* ---------- project filtering ---------- */

//   const filteredProjects = useMemo(() => {
//     if (filter === "all") return PROJECTS;

//     const pillar = PILLARS.find(
//       (p) => p.id === filter
//     );

//     if (!pillar) return PROJECTS;

//     return PROJECTS.filter((project) =>
//       pillar.match.some((key) =>
//         project.service.includes(key)
//       )
//     );
//   }, [filter]);

//   /* ---------- copy email ---------- */

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText("hello@weepek.com");
//       setCopied(true);

//       setTimeout(() => setCopied(false), 2000);
//     } catch (error) {
//       console.error("Unable to copy email:", error);
//     }
//   };

//   return (
//     <main className="w-full overflow-clip">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section
//         className="relative bg-[#fffcf5] px-6 pb-20 text-[#0b0613] md:px-10 md:pb-28"
//         style={{ paddingTop: NAV_OFFSET + 65 }}
//       >
//         <div className="mx-auto max-w-9xl">

//           {/* Top information */}
//           <div className="flex items-center justify-between border-b border-[#0b0613]/20 pb-5">
//             <Eyebrow>OUR SERVICES</Eyebrow>

//             <p className="text-[10px] tracking-[0.2em] md:text-xs">
//               {totalServices} SERVICES
//             </p>
//           </div>

//           {/* Editorial headline */}
//           <div className="relative mt-12 md:mt-20">

//             <h1 className="text-[clamp(3.2rem,9vw,9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em] font-[bolteSemiBold]">

//               <span className="block">
//                 Three pillars.
//               </span>

//               <span className="mt-3 block text-right">
//                 {totalServices} ways to{" "}
//                 <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                   build
//                 </span>
//               </span>

//               <span className="mt-3 block text-right">
//                 your brand.
//               </span>

//             </h1>
//           </div>

//           {/* Bottom description */}
//           <div className="mt-12 flex flex-col justify-between gap-7 border-t border-[#0b0613]/20 pt-6 md:mt-16 md:flex-row md:items-end">

//             <p className="max-w-md text-sm leading-relaxed text-[#0b0613]/65 md:text-base font-[NeueRegular]">
//               Everything under one roof, from the first logo sketch to the leads that follow.
//             </p>

//             <p className="text-[10px] tracking-[0.2em] text-[#0b0613]/45">
//               BRAND · BUILD · GROW
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           STICKY PILLAR CARDS
//       ================================================== */}

//       <div className="relative bg-[#fffcf5] pb-10">

//         {PILLARS.map((pillar, index) => (
//           <PillarCard
//             key={pillar.id}
//             pillar={pillar}
//             index={index}
//             openMap={openMap}
//             setOpenMap={setOpenMap}
//             sectionRef={(el) => {
//               sectionRefs.current[pillar.id] = el;
//             }}
//           />
//         ))}

//       </div>

//       {/* ==================================================
//           HOW WE WORK
//       ================================================== */}

//       <section
//         ref={processRef}
//         className="relative bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32"
//       >
//         <div className="mx-auto max-w-9xl">

//           <Eyebrow>HOW WE WORK</Eyebrow>

//           <h2 className="mt-8 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//             Simple process.
//             <br />
//             <span className="block text-right">
//               No{" "}
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 surprises.
//               </span>
//             </span>
//           </h2>

//           {/* Timeline */}
//           <div className="relative mt-16 md:mt-24">

//             {/* Base line */}
//             <div className="absolute left-0 right-0 top-[6px] hidden h-[2px] bg-[#0b0613]/15 md:block" />

//             {/* Animated line */}
//             <div
//               ref={processProgressRef}
//               className="absolute left-0 right-0 top-[6px] hidden h-[2px] origin-left bg-[#ed710c] md:block"
//               style={{
//                 transform: "scaleX(0)",
//                 willChange: "transform",
//               }}
//             />

//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">

//               {PROCESS.map((step, index) => (
//                 <div key={step.no} className="relative">

//                   {/* Timeline dot */}
//                   <div className="mb-6 flex items-center gap-4 md:mb-9">
//                     <span className="relative z-10 h-3.5 w-3.5 rounded-full border-2 border-[#ed710c] bg-[#fffcf5]" />

//                     <span className="text-xs tracking-[0.2em] text-[#0b0613]/45 md:hidden">
//                       STEP {step.no}
//                     </span>
//                   </div>

//                   <span className="text-sm font-semibold text-[#ed710c]">
//                     {step.no}
//                   </span>

//                   <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight md:text-3xl font-[bolteSemiBold]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 max-w-[250px] text-sm leading-relaxed text-[#0b0613]/60 font-[NeueRegular]">
//                     {step.text}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           SELECTED WORK
//       ================================================== */}

//       <section
//         id="related-work"
//         className="bg-[#0b0613] px-6 py-20 text-white md:px-10 md:py-28"
//       >
//         <div className="mx-auto max-w-9xl">

//           {/* Heading */}
//           <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

//             <div>
//               <Eyebrow>SELECTED WORK</Eyebrow>

//               <h2 className="mt-7 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//                 Proof, not
//                 <br />
//                 <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                   promises.
//                 </span>
//               </h2>
//             </div>

//             <a
//               href="/work"
//               className="group inline-flex items-center gap-3 self-start border-b border-white/30 pb-2 text-xs tracking-[0.15em] transition hover:border-[#ed710c] hover:text-[#ed710c] md:self-end"
//             >
//               SEE ALL WORK
//               <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>

//           </div>

//           {/* Filters */}
//           <div className="mt-12 flex flex-wrap gap-2">

//             {[{ id: "all", title: "All" }, ...PILLARS].map((tab) => (
//               <button
//                 key={tab.id}
//                 type="button"
//                 onClick={() => setFilter(tab.id)}
//                 className="rounded-full border px-5 py-2 text-[10px] font-semibold uppercase tracking-wider transition duration-300"
//                 style={{
//                   borderColor:
//                     filter === tab.id
//                       ? ORANGE
//                       : "rgba(255,255,255,0.25)",
//                   background:
//                     filter === tab.id
//                       ? ORANGE
//                       : "transparent",
//                   color:
//                     filter === tab.id
//                       ? DARK
//                       : "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 {tab.title}
//               </button>
//             ))}

//           </div>

//           {/* Project grid */}
//           <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

//             {filteredProjects.map((project) => (
//               <article
//                 key={project.name}
//                 className="group"
//               >

//                 {/* Project image */}
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5">

//                   <img
//                     src={project.img}
//                     alt={project.name}
//                     draggable={false}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />

//                   <div
//                     className="project-grain pointer-events-none absolute inset-0"
//                     aria-hidden="true"
//                   />

//                   <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
//                     {project.service}
//                   </span>

//                 </div>

//                 {/* Project details */}
//                 <div className="mt-5 flex items-center justify-between">

//                   <div className="flex items-center gap-3">

//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-[#ed710c]">
//                       {project.name.charAt(0)}
//                     </span>

//                     <div>
//                       <h3 className="text-base font-semibold tracking-tight md:text-lg">
//                         {project.name}
//                       </h3>

//                       <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
//                         {project.service}
//                       </p>
//                     </div>

//                   </div>

//                   <span className="text-lg text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ed710c]">
//                     ↗
//                   </span>

//                 </div>

//               </article>
//             ))}

//             {filteredProjects.length === 0 && (
//               <p className="text-sm text-white/50">
//                 New case studies for this pillar are coming soon.
//               </p>
//             )}

//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FAQ
//       ================================================== */}

//       <section className="bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32">

//         <div className="mx-auto grid max-w-9xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">

//           {/* Sticky left */}
//           <div className="md:sticky md:top-28 md:self-start">

//             <Eyebrow>FAQ</Eyebrow>

//             <h2 className="mt-8 text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//               Good
//               <br />
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 questions.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#0b0613]/55 font-[NeueRegular]">
//               A few things you might want to know before we get started.
//             </p>

//           </div>

//           {/* Right accordion */}
//           <div className="border-t border-[#0b0613]/20">

//             {FAQS.map((faq, index) => {
//               const isOpen = openFaq === index;

//               return (
//                 <div
//                   key={faq.q}
//                   className="border-b border-[#0b0613]/20"
//                 >

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenFaq(isOpen ? null : index)
//                     }
//                     aria-expanded={isOpen}
//                     className="group flex w-full items-center gap-5 py-6 text-left md:py-8"
//                   >

//                     <span className="text-xs text-[#ed710c]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span className="flex-1 text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#ed710c] md:text-xl font-[bolteSemiBold]">
//                       {faq.q}
//                     </span>

//                     <span
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0b0613]/20 text-xl transition-all duration-300"
//                       style={{
//                         transform: isOpen ? "rotate(45deg)" : "none",
//                         borderColor: isOpen ? ORANGE : undefined,
//                         color: isOpen ? ORANGE : DARK,
//                       }}
//                     >
//                       +
//                     </span>

//                   </button>

//                   <div
//                     className="grid transition-[grid-template-rows] duration-500 ease-out"
//                     style={{
//                       gridTemplateRows: isOpen ? "1fr" : "0fr",
//                     }}
//                   >

//                     <div className="overflow-hidden">
//                       <p className="max-w-xl pb-7 pl-8 text-sm leading-relaxed text-[#0b0613]/60 md:pl-10 md:text-base font-[NeueRegular]">
//                         {faq.a}
//                       </p>
//                     </div>

//                   </div>

//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </section>

//       {/* ==================================================
//           CLOSING CTA
//       ================================================== */}

//       <section
//         id="contact"
//         className="relative overflow-hidden bg-[#0b0613] px-6 py-24 text-white md:px-10 md:py-36"
//       >

//         <div className="relative z-10 mx-auto max-w-9xl">

//           <Eyebrow>LET'S TALK</Eyebrow>

//           {/* Headline */}
//           <h2 className="mt-10 text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem] font-[bolteSemiBold]">

//             <span className="block">
//               Have a project
//             </span>

//             <span className="mt-2 block text-right">
//               in mind?{" "}
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 Let's talk.
//               </span>
//             </span>

//           </h2>

//           {/* Bottom contact */}
//           <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:mt-24 md:flex-row md:items-end">

//             {/* Email copy */}
//             <div>

//               <p className="mb-4 text-[10px] tracking-[0.2em] text-white/40">
//                 HAVE SOMETHING IN MIND?
//               </p>

//               <button
//                 type="button"
//                 onClick={copyEmail}
//                 className="group flex items-center gap-3 text-base transition-colors hover:text-[#ed710c] md:text-xl"
//               >
//                 hello@weepek.com

//                 <span className="text-xs text-[#ed710c]">
//                   {copied ? "COPIED ✓" : "COPY ↗"}
//                 </span>
//               </button>

//             </div>

//             {/* CTA */}
//             <a
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-8 rounded-full bg-[#ed710c] px-8 py-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0b0613] transition-all duration-300 hover:scale-[1.03] hover:bg-[#fffcf5] md:px-10 md:py-6"
//             >
//               START A PROJECT

//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>

//           </div>

//         </div>

//         {/* Decorative background typography */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-12 left-0 select-none text-[22vw] font-black uppercase leading-none tracking-tighter text-white/[0.025] font-[bolteSemiBold]"
//         >
//           WEEPEK
//         </div>

//       </section>

//     </main>
//   );
// }



 



// import { useEffect, useMemo, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "../App.css";

// /* ---------- image imports ---------- */
// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// /* ---------- palette ---------- */
// const ORANGE = "#ed710c";
// const CREAM = "#fffcf5";
// const DARK = "#0b0613";
// const NAV_OFFSET = 72;

// /* ---------- content ---------- */

// const PILLARS = [
//   {
//     id: "brand",
//     no: "01",
//     title: "Brand",
//     text: "Identities and creatives people remember.",
//     intro:
//       "A brand is what people feel when they see you. We build identities that look sharp, stay consistent everywhere and are easy to grow with.",
//     match: ["Brand", "Branding", "Design", "Video"],
//     background: "#ed710c",
//     foreground: CREAM,
//     muted: "rgba(255,252,245,0.72)",
//     border: "rgba(255,252,245,0.25)",
//     accent: DARK,
//     services: [
//       {
//         id: "logo-identity",
//         name: "Logo & Brand Identity",
//         desc: "A complete visual identity: logo, colours, type and the rules that keep everything consistent.",
//         includes: [
//           "Logo suite (primary, secondary, icon)",
//           "Colour palette and typography system",
//           "Brand guidelines document",
//           "Stationery and social media kit",
//         ],
//         time: "2 – 4 weeks",
//         best: "New businesses and rebrands",
//       },
//       {
//         id: "graphic-design",
//         name: "Graphic Design & Creatives",
//         desc: "Posts, ads, brochures, packaging and decks, designed to stop the scroll and match your brand.",
//         includes: [
//           "Social media creatives",
//           "Ad banners and campaign visuals",
//           "Brochures, menus and print collateral",
//           "Pitch and presentation decks",
//         ],
//         time: "Ongoing or per project",
//         best: "Brands that post and promote often",
//       },
//       {
//         id: "video-motion",
//         name: "Video Editing & Motion",
//         desc: "Reels, promos and motion graphics that give your brand movement and personality.",
//         includes: [
//           "Reels and short-form edits",
//           "Promo and product videos",
//           "Logo animation and motion graphics",
//           "Subtitles, colour grade and sound mix",
//         ],
//         time: "3 days – 2 weeks",
//         best: "Social-first brands and launches",
//       },
//     ],
//   },
//   {
//     id: "build",
//     no: "02",
//     title: "Build",
//     text: "Websites, apps and systems that scale with you.",
//     intro:
//       "From a fast marketing site to a full product, we design and develop things that work on every screen and are easy to maintain.",
//     match: ["Web", "Ecom", "App", "UIUX", "RPA"],
//     background: "#0b0613",
//     foreground: CREAM,
//     muted: "rgba(255,252,245,0.65)",
//     border: "rgba(255,252,245,0.17)",
//     accent: ORANGE,
//     services: [
//       {
//         id: "website",
//         name: "Custom Website Development",
//         desc: "Hand-built, responsive websites with smooth interactions, designed around your goals, not a template.",
//         includes: [
//           "UI/UX design in Figma",
//           "React / modern front-end build",
//           "CMS or e-commerce integration",
//           "Performance, SEO-ready structure and hosting setup",
//         ],
//         time: "3 – 8 weeks",
//         best: "Businesses, portfolios and online stores",
//       },
//       {
//         id: "mobile-app",
//         name: "Mobile App Development",
//         desc: "Android and iOS apps with clean UI and reliable back-ends, from MVP to production.",
//         includes: [
//           "Product flow and app UI design",
//           "Cross-platform app development",
//           "API and admin panel",
//           "Store publishing support",
//         ],
//         time: "6 – 12 weeks",
//         best: "Startups and service businesses",
//       },
//       {
//         id: "rpa",
//         name: "Robotic Process Automation",
//         desc: "Bots that take over repetitive tasks like data entry, reports and approvals so your team saves hours.",
//         includes: [
//           "Process audit and automation plan",
//           "Bot development and testing",
//           "Integration with your existing tools",
//           "Monitoring and handover docs",
//         ],
//         time: "2 – 6 weeks",
//         best: "Teams with repetitive manual work",
//       },
//     ],
//   },
//   {
//     id: "grow",
//     no: "03",
//     title: "Grow",
//     text: "Get found, get remembered, get leads.",
//     intro:
//       "Great work needs an audience. We help the right people find you, and turn that attention into enquiries.",
//     match: ["SEO", "Marketing"],
//     background: "#f8eee8",
//     foreground: DARK,
//     muted: "rgba(11,6,19,0.62)",
//     border: "rgba(11,6,19,0.18)",
//     accent: ORANGE,
//     services: [
//       {
//         id: "seo",
//         name: "SEO Optimization",
//         desc: "Technical, on-page and content SEO that moves you up search results and keeps you there.",
//         includes: [
//           "Site audit and keyword research",
//           "On-page and technical fixes",
//           "Content and backlink strategy",
//           "Monthly ranking and traffic reports",
//         ],
//         time: "3 months+ for results",
//         best: "Sites that depend on search traffic",
//       },
//       {
//         id: "marketing",
//         name: "Digital Marketing",
//         desc: "Social and paid campaigns built around your audience, with clear tracking from click to lead.",
//         includes: [
//           "Strategy and content calendar",
//           "Meta and Google ad campaigns",
//           "Landing pages and lead tracking",
//           "Monthly performance reports",
//         ],
//         time: "Monthly retainer",
//         best: "Brands ready to scale leads",
//       },
//     ],
//   },
// ];

// const PROJECTS = [
//   { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
//   { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
//   { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
//   { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
//   { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
// ];

// const PROCESS = [
//   {
//     no: "01",
//     title: "Discover",
//     text: "We learn your business, audience and goals before touching a pixel.",
//   },
//   {
//     no: "02",
//     title: "Design",
//     text: "Concepts, moodboards and prototypes you can react to early.",
//   },
//   {
//     no: "03",
//     title: "Build",
//     text: "Clean, tested development with weekly progress updates.",
//   },
//   {
//     no: "04",
//     title: "Launch",
//     text: "Go live, track results and keep improving after day one.",
//   },
// ];

// const FAQS = [
//   {
//     q: "Can I pick services from different pillars?",
//     a: "Yes. Most clients mix them, for example a new brand identity along with a website and SEO. We'll put together one plan and one timeline.",
//   },
//   {
//     q: "How is pricing decided?",
//     a: "Based on scope, not hourly guesses. Share your requirements and we'll send a clear quote with what's included.",
//   },
//   {
//     q: "Do you work with existing brands and websites?",
//     a: "Absolutely. We can refresh, extend or fix what you already have without starting from scratch.",
//   },
//   {
//     q: "What do you need from me to start?",
//     a: "A short brief, any existing brand assets and a point person for feedback. We'll guide you through the rest.",
//   },
// ];

// const totalServices = PILLARS.reduce(
//   (n, p) => n + p.services.length,
//   0
// );

// /* ---------- small components ---------- */

// function Eyebrow({ children, color = ORANGE }) {
//   return (
//     <p
//       className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] md:text-xs"
//       style={{ color }}
//     >
//       <span
//         className="h-1.5 w-1.5 rounded-full"
//         style={{ background: color }}
//       />
//       {children}
//     </p>
//   );
// }

// /* ---------- service accordion ---------- */

// function ServiceRow({ index, service, open, onToggle, theme }) {
//   const isDark = theme.foreground === CREAM;

//   return (
//     <div
//       className="relative border-b"
//       style={{ borderColor: theme.border }}
//     >
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={open}
//         className="group flex w-full items-center gap-3 py-5 text-left md:gap-5 md:py-6"
//       >
//         <span
//           className="w-8 shrink-0 text-sm font-semibold md:w-10 md:text-base"
//           style={{ color: theme.accent }}
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         <h3
//           className="flex-1 text-base font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl lg:text-2xl font-[bolteSemiBold]"
//           style={{ color: theme.foreground }}
//         >
//           {service.name}
//         </h3>

//         <span
//           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 md:h-10 md:w-10"
//           style={{
//             borderColor: open ? theme.accent : theme.border,
//             color: theme.accent,
//             transform: open ? "rotate(45deg)" : "none",
//           }}
//         >
//           +
//         </span>
//       </button>

//       <div
//         className="grid transition-[grid-template-rows] duration-500 ease-out"
//         style={{
//           gridTemplateRows: open ? "1fr" : "0fr",
//         }}
//       >
//         <div className="overflow-hidden">
//           <div className="grid gap-7 pb-7 pl-11 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:pb-9 md:pl-14">
//             <div>
//               <p
//                 className="text-sm leading-relaxed md:text-base font-[NeueRegular]"
//                 style={{ color: theme.muted }}
//               >
//                 {service.desc}
//               </p>

//               <ul className="mt-5 space-y-3">
//                 {service.includes.map((item) => (
//                   <li
//                     key={item}
//                     className="flex gap-3 text-xs leading-relaxed md:text-sm"
//                     style={{ color: theme.foreground }}
//                   >
//                     <span style={{ color: theme.accent }}>↗</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div
//               className="space-y-5 border-l pl-5 md:pl-6"
//               style={{ borderColor: theme.border }}
//             >
//               <div>
//                 <p
//                   className="text-[10px] tracking-[0.22em]"
//                   style={{ color: theme.muted }}
//                 >
//                   TIMELINE
//                 </p>
//                 <p
//                   className="mt-1 text-sm font-medium"
//                   style={{ color: theme.foreground }}
//                 >
//                   {service.time}
//                 </p>
//               </div>

//               <div>
//                 <p
//                   className="text-[10px] tracking-[0.22em]"
//                   style={{ color: theme.muted }}
//                 >
//                   BEST FOR
//                 </p>
//                 <p
//                   className="mt-1 text-sm font-medium"
//                   style={{ color: theme.foreground }}
//                 >
//                   {service.best}
//                 </p>
//               </div>

//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition duration-300 hover:scale-105"
//                 style={{
//                   background: theme.accent,
//                   color: isDark ? DARK : CREAM,
//                 }}
//               >
//                 Start a project <span>↗</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- pillar card ---------- */

// function PillarCard({ pillar, index, openMap, setOpenMap, sectionRef }) {
//   const theme = pillar;
//   const isDark = theme.foreground === CREAM;

//   return (
//     <section
//       ref={sectionRef}
//       id={pillar.id}
//       data-pillar={pillar.id}
//       className="relative min-h-[110vh] px-4 pb-20 pt-5 md:px-10 md:pt-8"
//       style={{ zIndex: index + 10 }}
//     >
//       <div
//         className="relative mx-auto min-h-[620px] max-w-9xl rounded-[22px] px-6 py-9 shadow-2xl md:sticky md:top-[88px] md:min-h-[620px] md:rounded-[30px] md:px-12 md:py-12 lg:px-16 lg:py-14"
//         style={{
//           background: theme.background,
//           color: theme.foreground,
//         }}
//       >
//         {/* Top label */}
//         <div
//           className="flex items-center justify-between border-b pb-5"
//           style={{ borderColor: theme.border }}
//         >
//           <Eyebrow color={theme.foreground}>
//             PILLAR {pillar.no}
//           </Eyebrow>

//           <span
//             className="text-[10px] tracking-[0.2em] md:text-xs"
//             style={{ color: theme.muted }}
//           >
//             WEEPEK / SERVICES
//           </span>
//         </div>

//         <div className="grid gap-10 pt-9 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-20 lg:pt-12">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col">
//             <span
//               className="text-5xl font-black leading-none md:text-7xl lg:text-8xl"
//               style={{
//                 color: "transparent",
//                 WebkitTextStroke: `1px ${isDark ? "rgba(255,252,245,0.5)" : "rgba(11,6,19,0.35)"}`,
//               }}
//             >
//               {pillar.no}
//             </span>

//             <h2 className="mt-5 text-5xl font-semibold uppercase tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//               {pillar.title}
//               <span style={{ color: theme.accent }}>.</span>
//             </h2>

//             <p
//               className="mt-4 max-w-md text-lg leading-snug md:text-xl lg:text-2xl"
//               style={{ color: theme.muted }}
//             >
//               {pillar.text}
//             </p>

//             <p
//               className="mt-5 max-w-md text-sm leading-relaxed md:text-base font-[NeueRegular]"
//               style={{ color: theme.muted }}
//             >
//               {pillar.intro}
//             </p>

//             <div className="mt-8 flex items-center gap-3 md:mt-auto md:pt-12">
//               <span
//                 className="text-3xl font-bold md:text-4xl"
//                 style={{ color: theme.accent }}
//               >
//                 {pillar.services.length.toString().padStart(2, "0")}
//               </span>
//               <span
//                 className="text-[10px] tracking-[0.25em]"
//                 style={{ color: theme.muted }}
//               >
//                 SERVICES
//               </span>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div>
//             <div
//               className="mb-4 flex items-center justify-between border-b pb-4"
//               style={{ borderColor: theme.border }}
//             >
//               <span
//                 className="text-[10px] tracking-[0.25em]"
//                 style={{ color: theme.muted }}
//               >
//                 WHAT WE OFFER
//               </span>

//               <span
//                 className="text-[10px] tracking-[0.2em]"
//                 style={{ color: theme.muted }}
//               >
//                 {pillar.no} / 03
//               </span>
//             </div>

//             {pillar.services.map((service, i) => (
//               <ServiceRow
//                 key={service.id}
//                 index={i}
//                 service={service}
//                 theme={theme}
//                 open={openMap[pillar.id] === service.id}
//                 onToggle={() =>
//                   setOpenMap((current) => ({
//                     ...current,
//                     [pillar.id]:
//                       current[pillar.id] === service.id
//                         ? null
//                         : service.id,
//                   }))
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- main page ---------- */

// export default function Services() {
//   const [params] = useSearchParams();

//   const pillarParam = params.get("pillar");

//   const validParam = PILLARS.some(
//     (p) => p.id === pillarParam
//   )
//     ? pillarParam
//     : null;

//   const [openMap, setOpenMap] = useState(() =>
//     Object.fromEntries(
//       PILLARS.map((p) => [p.id, p.services[0].id])
//     )
//   );

//   const [openFaq, setOpenFaq] = useState(0);
//   const [filter, setFilter] = useState(validParam || "all");
//   const [copied, setCopied] = useState(false);

//   // Sticky Tab Bar State
//   const [activeTab, setActiveTab] = useState("all");

//   const sectionRefs = useRef({});
//   const processRef = useRef(null);
//   const processProgressRef = useRef(null);
//   const tabsRef = useRef(null);

//   /* ---------- URL pillar deep linking ---------- */

//   useEffect(() => {
//     if (!validParam) return;

//     setFilter(validParam);

//     const timer = setTimeout(() => {
//       const element = sectionRefs.current[validParam];

//       if (element) {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 150);

//     return () => clearTimeout(timer);
//   }, [validParam]);

//   /* ---------- scroll spy for sticky tabs ---------- */

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!tabsRef.current) return;

//       const tabsRect = tabsRef.current.getBoundingClientRect();
//       // Only check when tab bar is stuck at top (approx 72px + 12px)
//       if (tabsRect.top > 100) {
//         setActiveTab("all");
//         return;
//       }

//       const viewportMiddle = window.innerHeight / 2;
//       let currentPillar = "all";

//       PILLARS.forEach((pillar) => {
//         const el = sectionRefs.current[pillar.id];
//         if (!el) return;
        
//         const rect = el.getBoundingClientRect();
//         // If the pillar's top is above the middle and bottom is below the middle
//         if (rect.top < viewportMiddle && rect.bottom > viewportMiddle) {
//           currentPillar = pillar.id;
//         }
//       });

//       setActiveTab(currentPillar);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------- process scroll progress ---------- */

//   useEffect(() => {
//     const section = processRef.current;
//     const progress = processProgressRef.current;

//     if (!section || !progress) return;

//     let rafId = null;

//     const updateProgress = () => {
//       const rect = section.getBoundingClientRect();
//       const viewport = window.innerHeight;

//       const start = viewport * 0.75;
//       const end = -rect.height * 0.3;

//       const value = Math.min(
//         1,
//         Math.max(0, (start - rect.top) / (start - end))
//       );

//       progress.style.transform = `scaleX(${value})`;
//     };

//     const handleScroll = () => {
//       if (rafId) return;

//       rafId = window.requestAnimationFrame(() => {
//         updateProgress();
//         rafId = null;
//       });
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     window.addEventListener("resize", handleScroll);

//     updateProgress();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);

//       if (rafId) {
//         window.cancelAnimationFrame(rafId);
//       }
//     };
//   }, []);

//   /* ---------- project filtering ---------- */

//   const filteredProjects = useMemo(() => {
//     if (filter === "all") return PROJECTS;

//     const pillar = PILLARS.find(
//       (p) => p.id === filter
//     );

//     if (!pillar) return PROJECTS;

//     return PROJECTS.filter((project) =>
//       pillar.match.some((key) =>
//         project.service.includes(key)
//       )
//     );
//   }, [filter]);

//   /* ---------- copy email ---------- */

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText("hello@weepek.com");
//       setCopied(true);

//       setTimeout(() => setCopied(false), 2000);
//     } catch (error) {
//       console.error("Unable to copy email:", error);
//     }
//   };

//   /* ---------- Tab Click Handler ---------- */
//   const handleTabClick = (id) => {
//     setActiveTab(id);
//     if (id === "all") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const el = sectionRefs.current[id];
//       if (el) {
//         window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
//       }
//     }
//   };

//   // Helper to get active tab color
//   const getActiveTabColor = () => {
//     const activePillar = PILLARS.find(p => p.id === activeTab);
//     return activePillar ? activePillar.background : ORANGE;
//   };

//   const getActiveTabTextColor = () => {
//     const activePillar = PILLARS.find(p => p.id === activeTab);
//     if (!activePillar) return CREAM;
//     return activePillar.foreground;
//   };

//   return (
//     <main className="w-full overflow-clip">

//       {/* ==================================================
//           HERO
//       ================================================== */}

//       <section
//         className="relative bg-[#fffcf5] px-6 pb-20 text-[#0b0613] md:px-10 md:pb-28"
//         style={{ paddingTop: NAV_OFFSET + 65 }}
//       >
//         <div className="mx-auto max-w-9xl">

//           {/* Top information */}
//           <div className="flex items-center justify-between border-b border-[#0b0613]/20 pb-5">
//             <Eyebrow>OUR SERVICES</Eyebrow>

//             <p className="text-[10px] tracking-[0.2em] md:text-xs">
//               {totalServices} SERVICES
//             </p>
//           </div>

//           {/* Editorial headline */}
//           <div className="relative mt-12 md:mt-20">

//             <h1 className="text-[clamp(3.2rem,9vw,9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em] font-[bolteSemiBold]">

//               <span className="block">
//                 Three pillars
//               </span>

//               <span className="mt-3 block text-right">
//                 {totalServices} ways to{" "}
//                 <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                   build
//                 </span>
//               </span>

//               <span className="mt-3 block text-right">
//                 your brand
//               </span>

//             </h1>
//           </div>

//           {/* Bottom description */}
//           <div className="mt-12 flex flex-col justify-between gap-7 border-t border-[#0b0613]/20 pt-6 md:mt-16 md:flex-row md:items-end">

//             <p className="max-w-md text-sm leading-relaxed text-[#0b0613]/65 md:text-base font-[NeueRegular]">
//               Everything under one roof, from the first logo sketch to the leads that follow.
//             </p>

//             {/* <p className="text-[10px] tracking-[0.2em] text-[#0b0613]/45">
//               BRAND · BUILD · GROW
//             </p> */}

//  <div 
//           ref={tabsRef}
//           className="sticky z-[100] mb-4 px-4 pt-4 md:px-10"
//           style={{ top: NAV_OFFSET }}
//         >
//           <div className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#0b0613]/10 bg-[#fffcf5]/90 p-1.5 shadow-sm backdrop-blur-md">
            
//             <button
//               onClick={() => handleTabClick("all")}
//               className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
//               style={{
//                 background: activeTab === "all" ? ORANGE : "transparent",
//                 color: activeTab === "all" ? CREAM : "rgba(11,6,19,0.6)",
//               }}
//             >
//               All
//             </button>

//             {PILLARS.map((pillar) => (
//               <button
//                 key={pillar.id}
//                 onClick={() => handleTabClick(pillar.id)}
//                 className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
//                 style={{
//                   background: activeTab === pillar.id ? getActiveTabColor() : "transparent",
//                   color: activeTab === pillar.id ? getActiveTabTextColor() : "rgba(11,6,19,0.6)",
//                 }}
//               >
//                 {pillar.title}
//               </button>
//             ))}

//           </div>
//         </div>

//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           STICKY TAB BAR & STICKY PILLAR CARDS
//       ================================================== */}

//       <div className="relative bg-[#fffcf5] pb-10">
        
//         {/* STICKY TAB BAR */}
//         {/* <div 
//           ref={tabsRef}
//           className="sticky z-[100] mb-4 px-4 pt-4 md:px-10"
//           style={{ top: NAV_OFFSET }}
//         >
//           <div className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#0b0613]/10 bg-[#fffcf5]/90 p-1.5 shadow-sm backdrop-blur-md">
            
//             <button
//               onClick={() => handleTabClick("all")}
//               className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
//               style={{
//                 background: activeTab === "all" ? ORANGE : "transparent",
//                 color: activeTab === "all" ? CREAM : "rgba(11,6,19,0.6)",
//               }}
//             >
//               All
//             </button>

//             {PILLARS.map((pillar) => (
//               <button
//                 key={pillar.id}
//                 onClick={() => handleTabClick(pillar.id)}
//                 className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
//                 style={{
//                   background: activeTab === pillar.id ? getActiveTabColor() : "transparent",
//                   color: activeTab === pillar.id ? getActiveTabTextColor() : "rgba(11,6,19,0.6)",
//                 }}
//               >
//                 {pillar.title}
//               </button>
//             ))}

//           </div>
//         </div> */}

//         {/* PILLAR CARDS */}
//         {PILLARS.map((pillar, index) => (
//           <PillarCard
//             key={pillar.id}
//             pillar={pillar}
//             index={index}
//             openMap={openMap}
//             setOpenMap={setOpenMap}
//             sectionRef={(el) => {
//               sectionRefs.current[pillar.id] = el;
//             }}
//           />
//         ))}

//       </div>

//       {/* ==================================================
//           HOW WE WORK
//       ================================================== */}

//       <section
//         ref={processRef}
//         className="relative bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32"
//       >
//         <div className="mx-auto max-w-9xl">

//           <Eyebrow>HOW WE WORK</Eyebrow>

//           <h2 className="mt-8 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//             Simple process.
//             <br />
//             <span className="block text-right">
//               No{" "}
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 surprises.
//               </span>
//             </span>
//           </h2>

//           {/* Timeline */}
//           <div className="relative mt-16 md:mt-24">

//             {/* Base line */}
//             <div className="absolute left-0 right-0 top-[6px] hidden h-[2px] bg-[#0b0613]/15 md:block" />

//             {/* Animated line */}
//             <div
//               ref={processProgressRef}
//               className="absolute left-0 right-0 top-[6px] hidden h-[2px] origin-left bg-[#ed710c] md:block"
//               style={{
//                 transform: "scaleX(0)",
//                 willChange: "transform",
//               }}
//             />

//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">

//               {PROCESS.map((step, index) => (
//                 <div key={step.no} className="relative">

//                   {/* Timeline dot */}
//                   <div className="mb-6 flex items-center gap-4 md:mb-9">
//                     <span className="relative z-10 h-3.5 w-3.5 rounded-full border-2 border-[#ed710c] bg-[#fffcf5]" />

//                     <span className="text-xs tracking-[0.2em] text-[#0b0613]/45 md:hidden">
//                       STEP {step.no}
//                     </span>
//                   </div>

//                   <span className="text-sm font-semibold text-[#ed710c]">
//                     {step.no}
//                   </span>

//                   <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight md:text-3xl font-[bolteSemiBold]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 max-w-[250px] text-sm leading-relaxed text-[#0b0613]/60 font-[NeueRegular]">
//                     {step.text}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           SELECTED WORK
//       ================================================== */}

//       <section
//         id="related-work"
//         className="bg-[#0b0613] px-6 py-20 text-white md:px-10 md:py-28"
//       >
//         <div className="mx-auto max-w-9xl">

//           {/* Heading */}
//           <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

//             <div>
//               <Eyebrow>SELECTED WORK</Eyebrow>

//               <h2 className="mt-7 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//                 Proof, not
//                 <br />
//                 <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                   promises.
//                 </span>
//               </h2>
//             </div>

//             <a
//               href="/work"
//               className="group inline-flex items-center gap-3 self-start border-b border-white/30 pb-2 text-xs tracking-[0.15em] transition hover:border-[#ed710c] hover:text-[#ed710c] md:self-end"
//             >
//               SEE ALL WORK
//               <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>

//           </div>

//           {/* Filters */}
//           <div className="mt-12 flex flex-wrap gap-2">

//             {[{ id: "all", title: "All" }, ...PILLARS].map((tab) => (
//               <button
//                 key={tab.id}
//                 type="button"
//                 onClick={() => setFilter(tab.id)}
//                 className="rounded-full border px-5 py-2 text-[10px] font-semibold uppercase tracking-wider transition duration-300"
//                 style={{
//                   borderColor:
//                     filter === tab.id
//                       ? ORANGE
//                       : "rgba(255,255,255,0.25)",
//                   background:
//                     filter === tab.id
//                       ? ORANGE
//                       : "transparent",
//                   color:
//                     filter === tab.id
//                       ? DARK
//                       : "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 {tab.title}
//               </button>
//             ))}

//           </div>

//           {/* Project grid */}
//           <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

//             {filteredProjects.map((project) => (
//               <article
//                 key={project.name}
//                 className="group"
//               >

//                 {/* Project image */}
//                 <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5">

//                   <img
//                     src={project.img}
//                     alt={project.name}
//                     draggable={false}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />

//                   <div
//                     className="project-grain pointer-events-none absolute inset-0"
//                     aria-hidden="true"
//                   />

//                   <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
//                     {project.service}
//                   </span>

//                 </div>

//                 {/* Project details */}
//                 <div className="mt-5 flex items-center justify-between">

//                   <div className="flex items-center gap-3">

//                     <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-[#ed710c]">
//                       {project.name.charAt(0)}
//                     </span>

//                     <div>
//                       <h3 className="text-base font-semibold tracking-tight md:text-lg">
//                         {project.name}
//                       </h3>

//                       <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
//                         {project.service}
//                       </p>
//                     </div>

//                   </div>

//                   <span className="text-lg text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ed710c]">
//                     ↗
//                   </span>

//                 </div>

//               </article>
//             ))}

//             {filteredProjects.length === 0 && (
//               <p className="text-sm text-white/50">
//                 New case studies for this pillar are coming soon.
//               </p>
//             )}

//           </div>
//         </div>
//       </section>

//       {/* ==================================================
//           FAQ
//       ================================================== */}

//       <section className="bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32">

//         <div className="mx-auto grid max-w-9xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">

//           {/* Sticky left */}
//           <div className="md:sticky md:top-28 md:self-start">

//             <Eyebrow>FAQ</Eyebrow>

//             <h2 className="mt-8 text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
//               Good
//               <br />
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 questions.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#0b0613]/55 font-[NeueRegular]">
//               A few things you might want to know before we get started.
//             </p>

//           </div>

//           {/* Right accordion */}
//           <div className="border-t border-[#0b0613]/20">

//             {FAQS.map((faq, index) => {
//               const isOpen = openFaq === index;

//               return (
//                 <div
//                   key={faq.q}
//                   className="border-b border-[#0b0613]/20"
//                 >

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenFaq(isOpen ? null : index)
//                     }
//                     aria-expanded={isOpen}
//                     className="group flex w-full items-center gap-5 py-6 text-left md:py-8"
//                   >

//                     <span className="text-xs text-[#ed710c]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span className="flex-1 text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#ed710c] md:text-xl font-[bolteSemiBold]">
//                       {faq.q}
//                     </span>

//                     <span
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0b0613]/20 text-xl transition-all duration-300"
//                       style={{
//                         transform: isOpen ? "rotate(45deg)" : "none",
//                         borderColor: isOpen ? ORANGE : undefined,
//                         color: isOpen ? ORANGE : DARK,
//                       }}
//                     >
//                       +
//                     </span>

//                   </button>

//                   <div
//                     className="grid transition-[grid-template-rows] duration-500 ease-out"
//                     style={{
//                       gridTemplateRows: isOpen ? "1fr" : "0fr",
//                     }}
//                   >

//                     <div className="overflow-hidden">
//                       <p className="max-w-xl pb-7 pl-8 text-sm leading-relaxed text-[#0b0613]/60 md:pl-10 md:text-base font-[NeueRegular]">
//                         {faq.a}
//                       </p>
//                     </div>

//                   </div>

//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </section>

//       {/* ==================================================
//           CLOSING CTA
//       ================================================== */}

//       <section
//         id="contact"
//         className="relative overflow-hidden bg-[#0b0613] px-6 py-24 text-white md:px-10 md:py-36"
//       >

//         <div className="relative z-10 mx-auto max-w-9xl">

//           <Eyebrow>LET'S TALK</Eyebrow>

//           {/* Headline */}
//           <h2 className="mt-10 text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem] font-[bolteSemiBold]">

//             <span className="block">
//               Have a project
//             </span>

//             <span className="mt-2 block text-right">
//               in mind?{" "}
//               <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
//                 Let's talk.
//               </span>
//             </span>

//           </h2>

//           {/* Bottom contact */}
//           <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:mt-24 md:flex-row md:items-end">

//             {/* Email copy */}
//             <div>

//               <p className="mb-4 text-[10px] tracking-[0.2em] text-white/40">
//                 HAVE SOMETHING IN MIND?
//               </p>

//               <button
//                 type="button"
//                 onClick={copyEmail}
//                 className="group flex items-center gap-3 text-base transition-colors hover:text-[#ed710c] md:text-xl"
//               >
//                 hello@weepek.com

//                 <span className="text-xs text-[#ed710c]">
//                   {copied ? "COPIED ✓" : "COPY ↗"}
//                 </span>
//               </button>

//             </div>

//             {/* CTA */}
//             <a
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-8 rounded-full bg-[#ed710c] px-8 py-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0b0613] transition-all duration-300 hover:scale-[1.03] hover:bg-[#fffcf5] md:px-10 md:py-6"
//             >
//               START A PROJECT

//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>

//           </div>

//         </div>

//         {/* Decorative background typography */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-12 left-0 select-none text-[22vw] font-black uppercase leading-none tracking-tighter text-white/[0.025] font-[bolteSemiBold]"
//         >
//           WEEPEK
//         </div>

//       </section>

//     </main>
//   );
// }




import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";
import { useContactModal } from "../Context/ContactModalContext";
/* ---------- image imports ---------- */
import web from "../assets/shinobi_mockup.png";
import web1 from "../assets/tada_mockup.png";
import Branding from "../assets/Branding_mockup.png";
import Branding1 from "../assets/Branding1_mockup.png";
import white3 from "../assets/lap2.jpg";

/* ---------- palette ---------- */
const ORANGE = "#ed710c";
const CREAM = "#fffcf5";
const WHITE = "#ffffff";
const DARK = "#1c0641";
const NAV_OFFSET = 72;
const CARD_OFFSET = 88;

/* ---------- content ---------- */

const PILLARS = [
  {
    id: "brand",
    no: "01",
    title: "Brand",
    text: "Identities and creatives people remember.",
    intro:
      "A brand is what people feel when they see you. We build identities that look sharp, stay consistent everywhere and are easy to grow with.",
    match: ["Brand", "Branding", "Design", "Video"],
    background: "#ed710c",
    foreground: WHITE,
    muted: "rgba(255, 255, 254, 0.72)",
    border: "rgba(255,252,245,0.25)",
    accent: DARK,
    services: [
      {
        id: "logo-identity",
        name: "Logo & Brand Identity",
        desc: "A complete visual identity: logo, colours, type and the rules that keep everything consistent.",
        includes: [
          "Logo suite (primary, secondary, icon)",
          "Colour palette and typography system",
          "Brand guidelines document",
          "Stationery and social media kit",
        ],
        time: "2 – 4 weeks",
        best: "New businesses and rebrands",
      },
      {
        id: "graphic-design",
        name: "Graphic Design & Creatives",
        desc: "Posts, ads, brochures, packaging and decks, designed to stop the scroll and match your brand.",
        includes: [
          "Social media creatives",
          "Ad banners and campaign visuals",
          "Brochures, menus and print collateral",
          "Pitch and presentation decks",
        ],
        time: "Ongoing or per project",
        best: "Brands that post and promote often",
      },
      {
        id: "video-motion",
        name: "Video Editing & Motion",
        desc: "Reels, promos and motion graphics that give your brand movement and personality.",
        includes: [
          "Reels and short-form edits",
          "Promo and product videos",
          "Logo animation and motion graphics",
          "Subtitles, colour grade and sound mix",
        ],
        time: "3 days – 2 weeks",
        best: "Social-first brands and launches",
      },
    ],
  },
  {
    id: "build",
    no: "02",
    title: "Build",
    text: "Websites, apps and systems that scale with you.",
    intro:
      "From a fast marketing site to a full product, we design and develop things that work on every screen and are easy to maintain.",
    match: ["Web", "Ecom", "App", "UIUX", "RPA"],
    background: "#0b0613",
    foreground: CREAM,
    muted: "rgba(255,252,245,0.65)",
    border: "rgba(255,252,245,0.17)",
    accent: ORANGE,
    services: [
      {
        id: "website",
        name: "Custom Website Development",
        desc: "Hand-built, responsive websites with smooth interactions, designed around your goals, not a template.",
        includes: [
          "UI/UX design in Figma",
          "React / modern front-end build",
          "CMS or e-commerce integration",
          "Performance, SEO-ready structure and hosting setup",
        ],
        time: "3 – 8 weeks",
        best: "Businesses, portfolios and online stores",
      },
      {
        id: "mobile-app",
        name: "Mobile App Development",
        desc: "Android and iOS apps with clean UI and reliable back-ends, from MVP to production.",
        includes: [
          "Product flow and app UI design",
          "Cross-platform app development",
          "API and admin panel",
          "Store publishing support",
        ],
        time: "6 – 12 weeks",
        best: "Startups and service businesses",
      },
      {
        id: "rpa",
        name: "Robotic Process Automation",
        desc: "Bots that take over repetitive tasks like data entry, reports and approvals so your team saves hours.",
        includes: [
          "Process audit and automation plan",
          "Bot development and testing",
          "Integration with your existing tools",
          "Monitoring and handover docs",
        ],
        time: "2 – 6 weeks",
        best: "Teams with repetitive manual work",
      },
    ],
  },
  {
    id: "grow",
    no: "03",
    title: "Grow",
    text: "Get found, get remembered, get leads.",
    intro:
      "Great work needs an audience. We help the right people find you, and turn that attention into enquiries.",
    match: ["SEO", "Marketing"],
    background: "#f8eee8",
    foreground: DARK,
    muted: "rgba(11,6,19,0.62)",
    border: "rgba(11,6,19,0.18)",
    accent: ORANGE,
    services: [
      {
        id: "seo",
        name: "SEO Optimization",
        desc: "Technical, on-page and content SEO that moves you up search results and keeps you there.",
        includes: [
          "Site audit and keyword research",
          "On-page and technical fixes",
          "Content and backlink strategy",
          "Monthly ranking and traffic reports",
        ],
        time: "3 months+ for results",
        best: "Sites that depend on search traffic",
      },
      {
        id: "marketing",
        name: "Digital Marketing",
        desc: "Social and paid campaigns built around your audience, with clear tracking from click to lead.",
        includes: [
          "Strategy and content calendar",
          "Meta and Google ad campaigns",
          "Landing pages and lead tracking",
          "Monthly performance reports",
        ],
        time: "Monthly retainer",
        best: "Brands ready to scale leads",
      },
    ],
  },
];

const PROJECTS = [
  { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
  { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
  { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
  { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
  { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
];

const PROCESS = [
  {
    no: "01",
    title: "Discover",
    text: "We learn your business, audience and goals before touching a pixel.",
  },
  {
    no: "02",
    title: "Design",
    text: "Concepts, moodboards and prototypes you can react to early.",
  },
  {
    no: "03",
    title: "Build",
    text: "Clean, tested development with weekly progress updates.",
  },
  {
    no: "04",
    title: "Launch",
    text: "Go live, track results and keep improving after day one.",
  },
];

const FAQS = [
  {
    q: "Can I pick services from different pillars?",
    a: "Yes. Most clients mix them, for example a new brand identity along with a website and SEO. We'll put together one plan and one timeline.",
  },
  {
    q: "How is pricing decided?",
    a: "Based on scope, not hourly guesses. Share your requirements and we'll send a clear quote with what's included.",
  },
  {
    q: "Do you work with existing brands and websites?",
    a: "Absolutely. We can refresh, extend or fix what you already have without starting from scratch.",
  },
  {
    q: "What do you need from me to start?",
    a: "A short brief, any existing brand assets and a point person for feedback. We'll guide you through the rest.",
  },
];

const totalServices = PILLARS.reduce(
  (n, p) => n + p.services.length,
  0
);

/* ---------- small components ---------- */

function Eyebrow({ children, color = ORANGE }) {
  return (
    <p
      className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] md:text-xs"
      style={{ color }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      {children}
    </p>
  );
}

/* ---------- service accordion ---------- */

function ServiceRow({ index, service, open, onToggle, theme }) {
  const isDark = theme.foreground === CREAM;
  const { openContact } = useContactModal();

  return (
    <div
      className="relative border-b"
      style={{ borderColor: theme.border }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-3 py-5 text-left md:gap-5 md:py-6"
      >
        <span
          className="w-8 shrink-0 text-sm font-semibold md:w-10 md:text-base"
          style={{ color: theme.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          className="flex-1 text-base font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl lg:text-2xl font-[bolteSemiBold]"
          style={{ color: theme.foreground }}
        >
          {service.name}
        </h3>

        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 md:h-10 md:w-10"
          style={{
            borderColor: open ? theme.accent : theme.border,
            color: theme.accent,
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="grid gap-7 pb-7 pl-11 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:pb-9 md:pl-14">
            <div>
              <p
                className="text-sm leading-relaxed md:text-base font-[NeueRegular]"
                style={{ color: theme.muted }}
              >
                {service.desc}
              </p>

              <ul className="mt-5 space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-xs leading-relaxed md:text-sm"
                    style={{ color: theme.foreground }}
                  >
                    <span style={{ color: theme.accent }}>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="space-y-5 border-l pl-5 md:pl-6"
              style={{ borderColor: theme.border }}
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.22em]"
                  style={{ color: theme.muted }}
                >
                  TIMELINE
                </p>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: theme.foreground }}
                >
                  {service.time}
                </p>
              </div>

              <div>
                <p
                  className="text-[10px] tracking-[0.22em]"
                  style={{ color: theme.muted }}
                >
                  BEST FOR
                </p>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: theme.foreground }}
                >
                  {service.best}
                </p>
              </div>

              <button
               onClick={openContact}
              type="button"
                // href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition duration-300 hover:scale-105"
                style={{
                  background: theme.accent,
                  color: isDark ? DARK : WHITE,
                }}
              >
                Start a project <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- pillar card ---------- */

function PillarCard({ pillar, index, openMap, setOpenMap, sectionRef }) {
  const theme = pillar;
  const isDark = theme.foreground === CREAM;

  return (
    <section
      ref={sectionRef}
      id={pillar.id}
      data-pillar={pillar.id}
      className="relative min-h-[110vh] px-4 pb-20 pt-5 md:px-10 md:pt-8"
      style={{ zIndex: index + 10 }}
    >
      <div
        className="relative mx-auto min-h-[620px] max-w-9xl rounded-[22px] px-6 py-9 shadow-2xl md:sticky md:top-[88px] md:min-h-[620px] md:rounded-[30px] md:px-12 md:py-12 lg:px-16 lg:py-14"
        style={{
          background: theme.background,
          color: theme.foreground,
        }}
      >
        {/* Top label */}
        <div
          className="flex items-center justify-between border-b pb-5"
          style={{ borderColor: theme.border }}
        >
          <Eyebrow color={theme.foreground}>
            PILLAR {pillar.no}
          </Eyebrow>

          <span
            className="text-[10px] tracking-[0.2em] md:text-xs"
            style={{ color: theme.muted }}
          >
            WEEPEK / SERVICES
          </span>
        </div>

        <div className="grid gap-10 pt-9 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-20 lg:pt-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <span
              className="text-5xl font-black leading-none md:text-7xl lg:text-8xl"
              style={{
                color: "transparent",
                WebkitTextStroke: `1px ${
                  isDark
                    ? "rgba(255,252,245,0.5)"
                    : "rgba(11,6,19,0.35)"
                }`,
              }}
            >
              {pillar.no}
            </span>

            <h2 className="mt-5 text-5xl font-semibold uppercase tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
              {pillar.title}
              <span style={{ color: theme.accent }}>.</span>
            </h2>

            <p
              className="mt-4 max-w-md text-lg leading-snug md:text-xl lg:text-2xl"
              style={{ color: theme.muted }}
            >
              {pillar.text}
            </p>

            <p
              className="mt-5 max-w-md text-sm leading-relaxed md:text-base font-[NeueRegular]"
              style={{ color: theme.muted }}
            >
              {pillar.intro}
            </p>

            <div className="mt-8 flex items-center gap-3 md:mt-auto md:pt-12">
              <span
                className="text-3xl font-bold md:text-4xl"
                style={{ color: theme.accent }}
              >
                {pillar.services.length.toString().padStart(2, "0")}
              </span>
              <span
                className="text-[10px] tracking-[0.25em]"
                style={{ color: theme.muted }}
              >
                SERVICES
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div
              className="mb-4 flex items-center justify-between border-b pb-4"
              style={{ borderColor: theme.border }}
            >
              <span
                className="text-[10px] tracking-[0.25em]"
                style={{ color: theme.muted }}
              >
                WHAT WE OFFER
              </span>

              <span
                className="text-[10px] tracking-[0.2em]"
                style={{ color: theme.muted }}
              >
                {pillar.no} / 03
              </span>
            </div>

            {pillar.services.map((service, i) => (
              <ServiceRow
                key={service.id}
                index={i}
                service={service}
                theme={theme}
                open={openMap[pillar.id] === service.id}
                onToggle={() =>
                  setOpenMap((current) => ({
                    ...current,
                    [pillar.id]:
                      current[pillar.id] === service.id
                        ? null
                        : service.id,
                  }))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- main page ---------- */

export default function Services() {
  const [params] = useSearchParams();
  const { openContact } = useContactModal();

  const pillarParam = params.get("pillar");

  const validParam = PILLARS.some(
    (p) => p.id === pillarParam
  )
    ? pillarParam
    : null;

  const [openMap, setOpenMap] = useState(() =>
    Object.fromEntries(
      PILLARS.map((p) => [p.id, p.services[0].id])
    )
  );

  const [openFaq, setOpenFaq] = useState(0);
  const [filter, setFilter] = useState(validParam || "all");
  const [copied, setCopied] = useState(false);

  // Sticky Tab Bar State
  const [activeTab, setActiveTab] = useState("all");

  const sectionRefs = useRef({});
  const processRef = useRef(null);
  const processProgressRef = useRef(null);
  const tabsRef = useRef(null);

  /* ---------- shared pillar scroll function ---------- */

  const scrollToPillar = (id) => {
    const element = sectionRefs.current[id];

    if (!element) return;

    /*
      Calculate the section's natural document position.
      Do not use the sticky card's current bounding position,
      because it may already be stuck at 88px.
    */

    const sectionRect = element.getBoundingClientRect();

    const sectionPaddingTop =
      parseFloat(window.getComputedStyle(element).paddingTop) || 0;

    const targetPosition =
      window.scrollY +
      sectionRect.top +
      sectionPaddingTop -
      CARD_OFFSET;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  /* ---------- URL pillar deep linking ---------- */

  useEffect(() => {
    if (!validParam) return;

    setFilter(validParam);

    const timer = window.setTimeout(() => {
      scrollToPillar(validParam);
    }, 200);

    return () => window.clearTimeout(timer);
  }, [validParam]);

  /* ---------- scroll spy for sticky tabs ---------- */

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        const tabs = tabsRef.current;

        if (!tabs) return;

        const tabsRect = tabs.getBoundingClientRect();

        /*
          Tabs are not sticky yet.
          Keep All active before reaching the sticky position.
        */

        if (tabsRect.top > NAV_OFFSET + 2) {
          setActiveTab((current) =>
            current === "all" ? current : "all"
          );
          return;
        }

        /*
          Tabs have passed their sticky container.
          Reset when they are no longer visible at the sticky position.
        */

        if (tabsRect.bottom <= NAV_OFFSET) {
          setActiveTab((current) =>
            current === "all" ? current : "all"
          );
          return;
        }

        const viewportMiddle = window.innerHeight * 0.5;

        let currentPillar = "all";

        for (const pillar of PILLARS) {
          const element = sectionRefs.current[pillar.id];

          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (
            rect.top <= viewportMiddle &&
            rect.bottom > viewportMiddle
          ) {
            currentPillar = pillar.id;
            break;
          }
        }

        setActiveTab((current) =>
          current === currentPillar ? current : currentPillar
        );
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  /* ---------- process scroll progress ---------- */

  useEffect(() => {
    const section = processRef.current;
    const progress = processProgressRef.current;

    if (!section || !progress) return;

    let rafId = null;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      const start = viewport * 0.75;
      const end = -rect.height * 0.3;

      const value = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      progress.style.transform = `scaleX(${value})`;
    };

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  /* ---------- project filtering ---------- */

  const filteredProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;

    const pillar = PILLARS.find(
      (p) => p.id === filter
    );

    if (!pillar) return PROJECTS;

    return PROJECTS.filter((project) =>
      pillar.match.some((key) =>
        project.service.includes(key)
      )
    );
  }, [filter]);

  /* ---------- copy email ---------- */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@weepek.com");
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  /* ---------- Tab Click Handler ---------- */

  const handleTabClick = (id) => {
    setActiveTab(id);

    if (id === "all") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    scrollToPillar(id);
  };

  /* ---------- active tab colors ---------- */

  const getActiveTabColor = () => {
    const activePillar = PILLARS.find(
      (p) => p.id === activeTab
    );

    return activePillar ? activePillar.background : ORANGE;
  };

  const getActiveTabTextColor = () => {
    const activePillar = PILLARS.find(
      (p) => p.id === activeTab
    );

    if (!activePillar) return CREAM;

    return activePillar.foreground;
  };

  return (
    <main className="w-full overflow-clip">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="relative bg-[#fffcf5] px-6 pb-20 text-[#0b0613] md:px-10 md:pb-28"
        style={{ paddingTop: NAV_OFFSET + 65 }}
      >
        <div className="mx-auto max-w-9xl">

          {/* Top information */}
          <div className="flex items-center justify-between border-b border-[#0b0613]/20 pb-5">
            <Eyebrow>OUR SERVICES</Eyebrow>

            <p className="text-[10px] tracking-[0.2em] md:text-xs  ">
              {totalServices} SERVICES
            </p>
          </div>

          {/* Editorial headline */}
          <div className="relative mt-12 md:mt-20">

            <h1 className="text-[clamp(3.2rem,9vw,9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em] font-[bolteSemiBold] text-black">

              <span className="block">
                Three pillars
              </span>

              <span className="mt-3 block text-right">
                {totalServices} ways to{" "}
                <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
                  build
                </span>
              </span>

              <span className="mt-3 block text-right text-[#2f0f5c]">
                your brand
              </span>

            </h1>
          </div>

          {/* Bottom description */}
          <div className="mt-12 flex flex-col justify-between gap-7 border-t border-[#0b0613]/20 pt-6 md:mt-16 md:flex-row md:items-end">

            <p className="max-w-md text-xl leading-relaxed text-[#0b0613]  md:text-2xl font-[NeueRegular]">
              Everything under one roof, from the first logo sketch to the leads that follow.
            </p>
             
             
          </div>

        </div>
      </section>

      {/* ==================================================
          STICKY TAB BAR & STICKY PILLAR CARDS
      ================================================== */}

      <div className="relative bg-[#fffcf5] pb-10">

        {/* STICKY TAB BAR */}

        <div
          ref={tabsRef}
          className="sticky z-[100] mb-4 px-4 pt-4 md:px-10"
          style={{ top: NAV_OFFSET }}
        >
          <div className="ml-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#0b0613]/10 bg-[#fffcf5]/90 p-1.5 shadow-sm backdrop-blur-md">

            <button
              type="button"
              onClick={() => handleTabClick("all")}
              className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
              style={{
                background:
                  activeTab === "all" ? ORANGE : "transparent",
                color:
                  activeTab === "all"
                    ? CREAM
                    : "rgba(11,6,19,0.6)",
              }}
            >
              All
            </button>

            {PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => handleTabClick(pillar.id)}
                className="whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 md:text-xs"
                style={{
                  background:
                    activeTab === pillar.id
                      ? getActiveTabColor()
                      : "transparent",
                  color:
                    activeTab === pillar.id
                      ? getActiveTabTextColor()
                      : "rgba(11,6,19,0.6)",
                }}
              >
                {pillar.title}
              </button>
            ))}

          </div>
        </div>

        {/* PILLAR CARDS */}

        {PILLARS.map((pillar, index) => (
          <PillarCard
            key={pillar.id}
            pillar={pillar}
            index={index}
            openMap={openMap}
            setOpenMap={setOpenMap}
            sectionRef={(el) => {
              sectionRefs.current[pillar.id] = el;
            }}
          />
        ))}

      </div>

      {/* ==================================================
          HOW WE WORK
      ================================================== */}

      <section
        ref={processRef}
        className="relative bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-9xl">

          <Eyebrow>HOW WE WORK</Eyebrow>

          <h2 className="mt-8 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
            Simple process.
            <br />
            <span className="block text-right">
              No{" "}
              <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
                surprises.
              </span>
            </span>
          </h2>

          {/* Timeline */}
          <div className="relative mt-16 md:mt-24">

            {/* Base line */}
            <div className="absolute left-0 right-0 top-[6px] hidden h-[2px] bg-[#0b0613]/15 md:block" />

            {/* Animated line */}
            <div
              ref={processProgressRef}
              className="absolute left-0 right-0 top-[6px] hidden h-[2px] origin-left bg-[#ed710c] md:block"
              style={{
                transform: "scaleX(0)",
                willChange: "transform",
              }}
            />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">

              {PROCESS.map((step) => (
                <div key={step.no} className="relative">

                  {/* Timeline dot */}
                  <div className="mb-6 flex items-center gap-4 md:mb-9">
                    <span className="relative z-10 h-3.5 w-3.5 rounded-full border-2 border-[#ed710c] bg-[#fffcf5]" />

                    <span className="text-xs tracking-[0.2em] text-[#0b0613]/45 md:hidden">
                      STEP {step.no}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-[#ed710c]">
                    {step.no}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight md:text-3xl font-[bolteSemiBold]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-sm leading-relaxed text-[#0b0613]/60 font-[NeueRegular]">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SELECTED WORK
      ================================================== */}

      <section
        id="related-work"
        className="bg-[#0b0613] px-6 py-20 text-white md:px-10 md:py-18"
      >
        <div className="mx-auto max-w-9xl">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              {/* <Eyebrow>SELECTED WORK</Eyebrow> */}

              <h2 className="mt-7 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
                Proof, not
                <br />
                <span className="font-[bolteItalic] font-normal italic text-[#ed710c] ">
                  promises
                </span>
              </h2>
            </div>

            <a
              href="/work"
              className="group inline-flex items-center gap-3 self-start border-b border-white/30 pb-2 text-xs tracking-[0.15em] transition hover:border-[#ed710c] hover:text-[#ed710c] md:self-end"
            >
              SEE ALL WORK
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

          </div>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap gap-2">

            {[{ id: "all", title: "All" }, ...PILLARS].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className="rounded-full border px-5 py-2 text-[10px] font-semibold uppercase tracking-wider transition duration-300"
                style={{
                  borderColor:
                    filter === tab.id
                      ? ORANGE
                      : "rgba(255,255,255,0.25)",
                  background:
                    filter === tab.id
                      ? ORANGE
                      : "transparent",
                  color:
                    filter === tab.id
                      ? DARK
                      : "rgba(255,255,255,0.7)",
                }}
              >
                {tab.title}
              </button>
            ))}

          </div>

          {/* Project grid */}
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project) => (
              <article
                key={project.name}
                className="group"
              >

                {/* Project image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5">

                  <img
                    src={project.img}
                    alt={project.name}
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div
                    className="project-grain pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />

                  <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {project.service}
                  </span>

                </div>

                {/* Project details */}
                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-[#ed710c]">
                      {project.name.charAt(0)}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold tracking-tight md:text-lg">
                        {project.name}
                      </h3>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
                        {project.service}
                      </p>
                    </div>

                  </div>

                  <span className="text-lg text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ed710c]">
                    ↗
                  </span>

                </div>

              </article>
            ))}

            {filteredProjects.length === 0 && (
              <p className="text-sm text-white/50">
                New case studies for this pillar are coming soon.
              </p>
            )}

          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ
      ================================================== */}

      <section className="bg-[#fffcf5] px-6 py-20 text-[#0b0613] md:px-10 md:py-32">

        <div className="mx-auto grid max-w-9xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">

          {/* Sticky left */}
          <div className="md:sticky md:top-28 md:self-start">

            <Eyebrow>FAQ</Eyebrow>

            <h2 className="mt-8 text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-[bolteSemiBold]">
              Good
              <br />
              <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
                questions
              </span>
            </h2>

            <p className="mt-6 max-w-xs text-xl leading-relaxed text-[#0b0613]/55 font-[NeueRegular]">
              A few things you might want to know before we get started.
            </p>

          </div>

          {/* Right accordion */}
          <div className="border-t border-[#0b0613]/20">

            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="border-b border-[#0b0613]/20"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 py-6 text-left md:py-8"
                  >

                    <span className="text-xs text-[#ed710c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base   tracking-relaxed transition-colors duration-300 group-hover:text-[#ed710c] md:text-xl font-[NeueRegular]">
                      {faq.q}
                    </span>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0b0613]/20 text-xl transition-all duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "none",
                        borderColor: isOpen ? ORANGE : undefined,
                        color: isOpen ? ORANGE : DARK,
                      }}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >

                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-7 pl-8 text-sm leading-relaxed text-[#0b0613]/60 md:pl-10 md:text-base font-[NeueRegular]">
                        {faq.a}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ==================================================
          CLOSING CTA
      ================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#0b0613] px-6 py-24 text-white md:px-10 md:py-36"
      >

        <div className="relative z-10 mx-auto max-w-9xl">

          <Eyebrow>LET'S TALK</Eyebrow>

          {/* Headline */}
          <h2 className="mt-10 text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem] font-[bolteSemiBold]">

            <span className="block">
              Have a project
            </span>

            <span className="mt-2 block text-right">
              in mind?{" "}
              <span className="font-[bolteItalic] font-normal italic text-[#ed710c]">
                Let's talk
              </span>
            </span>

          </h2>

          {/* Bottom contact */}
          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:mt-24 md:flex-row md:items-end">

            {/* Email copy */}
            <div>

              <p className="mb-4 text-[10px] tracking-[0.2em] text-white/40">
                HAVE SOMETHING IN MIND?
              </p>

              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center gap-3 text-base transition-colors hover:text-[#ed710c] md:text-xl"
              >
                hello@weepek.com

                <span className="text-xs text-[#ed710c]">
                  {copied ? "COPIED ✓" : "COPY ↗"}
                </span>
              </button>

            </div>

            {/* CTA */}
            <button
              // href="/contact"
               onClick={openContact}
              type="button"
              className="group inline-flex items-center justify-center gap-8 rounded-full bg-[#ed710c] px-8 py-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0b0613] transition-all duration-300 hover:scale-[1.03] hover:bg-[#fffcf5] md:px-10 md:py-6"
            >
              START A PROJECT

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </button>

          </div>

        </div>

        {/* Decorative background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 left-0 select-none text-[22vw] font-black uppercase leading-none tracking-tighter text-white/[0.025] font-[bolteSemiBold]"
        >
          WEEPEK
        </div>

      </section>

    </main>
  );
}
