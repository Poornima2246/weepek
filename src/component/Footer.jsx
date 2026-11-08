 


// "use client";

// import React, { useEffect, useRef } from "react";
// import {
//   ArrowUpRight,
//   ArrowUp,
//   Mail,
//   MapPin,
//   Instagram,
//   Linkedin,
//   MessageCircle,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { useContactModal } from "../Context/ContactModalContext";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// /* ---------- content ----------    */
// const EYEBROW = "LET'S TALK";
// const PAGE_TAG = "CONTACT / 07";

// const HEADLINE = [
//   { text: "GOT A VISION?", orange: false },
//   { text: "LET'S MAKE IT", orange: false },
//   { text: "HAPPEN.", orange: true },
// ];

// const CTA = "START A PROJECT";
// const CTA_HREF = "#contact-form";

// const CTA_NOTE = "GOOD IDEAS START WITH A HELLO.";

// const BRAND_NAME = "WEEPEK®";
// const WORDMARK = "WEEPEK";

// const EMAIL = "hello@weepek.com";
// const EMAIL_HREF = "mailto:hello@weepek.com";

// const LOCATION = "Chennai, Tamil Nadu, India";

// const SOCIAL_LINKS = [
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/",
//     Icon: Instagram,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     Icon: Linkedin,
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/919876543210",
//     Icon: MessageCircle,
//   },
// ];

// const COPYRIGHT = "©Copyright2026-WEEPEK";
// const PRIVACY_HREF = "/privacy";
// const TERMS_HREF = "/terms";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";

// /* ---------- CTA glow (same string format so GSAP can tween it) ---------- */
// const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
// const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

// export default function FooterSection() {
//   const footerRef = useRef(null);
//   const wordmarkRef = useRef(null);
//   const btnRef = useRef(null);
//   const lightRef = useRef(null);
//   const lightXRef = useRef(null);
//   const lightYRef = useRef(null);
//   const glowRef = useRef(null);
//   const { openContact } = useContactModal();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   /* ==========================================
//       WORDMARK: pop-in + floating + bubble hover
//       CTA: light follow setup
//   ========================================== */
//   useGSAP(
//     () => {
//       const footer = footerRef.current;

//       /* --- CTA light follows the cursor (quickTo = cheap + smooth) --- */
//       gsap.set(lightRef.current, {
//         xPercent: -50,
//         yPercent: -50,
//         x: 0,
//         y: 0,
//         scale: 0.6,
//         opacity: 0,
//       });
//       lightXRef.current = gsap.quickTo(lightRef.current, "x", {
//         duration: 0.4,
//         ease: "power3.out",
//       });
//       lightYRef.current = gsap.quickTo(lightRef.current, "y", {
//         duration: 0.4,
//         ease: "power3.out",
//       });

//       /* --- Wordmark --- */
//       const mm = gsap.matchMedia();

//       // mm.add("(prefers-reduced-motion: no-preference)", () => {
//       //   const letters = gsap.utils.toArray(".wm-letter", footer);

//       //   // grow from the baseline so the jelly stretches upward
//       //   gsap.set(letters, { transformOrigin: "50% 100%" });

//       //   // Plays every time the wordmark scrolls into view and settles to normal.
//       //   // Scrolling back up resets it, so it plays again on the next entry.
//       //   gsap
//       //     .timeline({
//       //       scrollTrigger: {
//       //         trigger: wordmarkRef.current,
//       //         start: "top 90%",
//       //         toggleActions: "play none none reset",
//       //       },
//       //     })
//       //     .from(
//       //       letters,
//       //       { opacity: 0, duration: 0.3, ease: "power2.out", stagger: 0.06 },
//       //       0
//       //     )
//       //     .from(
//       //       letters,
//       //       {
//       //         yPercent: 110,
//       //         scaleY: 0.45,
//       //         scaleX: 1.15,
//       //         skewX: -10,
//       //         duration: 2,
//       //         ease: "elastic.out(1, 0.28)",
//       //         stagger: 0.06,
//       //       },
//       //       0
//       //     );
//       // });


//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//   const word = wordmarkRef.current; // the whole WEEPEK as one jelly

//   // stretch from the baseline
//   gsap.set(word, { transformOrigin: "50% 100%" });

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: word,
//         start: "top 90%",
//         toggleActions: "play none none reset", // replays on every entry
//       },
//     })
//     .from(word, { opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
//     // squashed, then stretches up and wobbles back to normal
//     .from(
//       word,
//       {
//         scaleY: 0.55,
//         duration: 1.8,
//         ease: "elastic.out(1, 0.25)",
//       },
//       0
//     )
//     // width jiggles the opposite way, which gives the jelly feel
//     .from(
//       word,
//       {
//         scaleX: 1.08,
//         skewX: -4,
//         duration: 1.8,
//         ease: "elastic.out(1, 0.2)",
//       },
//       0
//     );
// });
//       return () => mm.revert();
//     },
//     { scope: footerRef }
//   );

//   useEffect(() => {
//     return () => glowRef.current?.kill();
//   }, []);

//   /* ---------- LET'S TALK: light handlers ---------- */
//   const handleCtaEnter = (e) => {
//     const btn = btnRef.current;
//     const light = lightRef.current;
//     const rect = btn.getBoundingClientRect();
    

//     gsap.set(light, { x: e.clientX - rect.left, y: e.clientY - rect.top });
//     gsap.to(light, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.45,
//       ease: "power2.out",
//       overwrite: "auto",
//     });

//     // breathing glow around the button
//     glowRef.current?.kill();
//     glowRef.current = gsap.fromTo(
//       btn,
//       { boxShadow: GLOW_OFF },
//       {
//         boxShadow: GLOW_ON,
//         duration: 0.9,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       }
//     );
//   };

//   const handleCtaMove = (e) => {
//     const rect = btnRef.current.getBoundingClientRect();
//     lightXRef.current?.(e.clientX - rect.left);
//     lightYRef.current?.(e.clientY - rect.top);
//   };

//   const handleCtaLeave = () => {
//     gsap.to(lightRef.current, {
//       opacity: 0,
//       scale: 0.6,
//       duration: 0.5,
//       ease: "power2.out",
//       overwrite: "auto",
//     });

//     glowRef.current?.kill();
//     gsap.to(btnRef.current, {
//       boxShadow: GLOW_OFF,
//       duration: 0.5,
//       ease: "power2.out",
//       overwrite: "auto",
//     });
//   };

//   return (
//     <footer
//       ref={footerRef}
//       id="contact"
//       className="relative w-full overflow-hidden bg-[#0a0a0a] text-white"
//     >
//       <div className="mx-auto max-w-[1800px] px-6 sm:px-8 md:px-12 lg:px-16">

//         {/* DIVIDER */}
//         {/* <div className="h-px w-full bg-white/20" /> */}

//         {/* FOOTER INFORMATION */}
//         <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:py-16 lg:gap-16 lg:py-20">

//           {/* COLUMN 1: ANIMATED LET'S TALK CTA */}
//           <div className="flex flex-col items-start">

//             <p className="mb-5 font-[bolteSemiBold] text-[10px] tracking-[0.24em] text-white/40 md:text-xl">
//              GOOD IDEAS START <br/> WITH A HELLO
//             </p>

//             <button
//               ref={btnRef}
//               onClick={openContact}
//               type="button"
//               href={EMAIL_HREF}
//               onMouseEnter={handleCtaEnter}
//               onMouseMove={handleCtaMove}
//               onMouseLeave={handleCtaLeave}
//               className="group relative inline-flex items-center gap-8 overflow-hidden border border-white/25 px-6 py-5 font-[bolteSemiBold] text-xl tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 sm:px-7 md:text-2xl rounded-2xl"
//             >
//               {/* Animated orange background */}
//               <span
//                 aria-hidden="true"
//                 className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//               />

//               {/* Cursor-following light */}
//               <span
//                 ref={lightRef}
//                 aria-hidden="true"
//                 className="pointer-events-none absolute left-0 top-0 z-[1] h-[260px] w-[260px] rounded-full opacity-0"
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
//                   mixBlendMode: "screen",
//                 }}
//               />

//               {/* Button label */}
//               <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//                 LET'S TALK
//               </span>

//               {/* Animated arrow container */}
//               <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//                 <ArrowUpRight
//                   size={19}
//                   strokeWidth={1.5}
//                   className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
//                 />
//               </span>

//               {/* Moving bottom accent */}
//               <span
//                 aria-hidden="true"
//                 className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
//               />
//             </button>

//           </div>

//           {/* COLUMN 2: CONTACT + LOCATION — unchanged */}
//           <div>

//             <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
//               GET IN TOUCH
//             </h3>

//             {/* Email */}
//             <div>
//               <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
//                 EMAIL
//               </p>

//               <a
//                 href={EMAIL_HREF}
//                 className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm transition-colors duration-300 hover:text-orange-400 md:text-base"
//               >
//                 <Mail
//                   size={16}
//                   strokeWidth={1.4}
//                   className="shrink-0 text-white/40 transition-colors group-hover:text-orange-400"
//                 />

//                 <span>{EMAIL}</span>

//                 <ArrowUpRight
//                   size={14}
//                   className="shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>
//             </div>

//             {/* Location */}
//             <div className="mt-9">
//               <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
//                 LOCATION
//               </p>

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={16}
//                   strokeWidth={1.4}
//                   className="mt-1 shrink-0 text-white/40"
//                 />

//                 <p className="font-[NeueRegular] text-sm leading-[1.8] text-white/65 md:text-base">
//                   {LOCATION}
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* COLUMN 3: SOCIAL LINKS — unchanged */}
//           <div>

//             <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
//               FOLLOW OUR WORK
//             </h3>

//             <div className="flex flex-col items-start gap-5">

//               {SOCIAL_LINKS.map(({ label, href, Icon }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm text-white/65 transition-colors duration-300 hover:text-orange-400 md:text-base"
//                 >
//                   <Icon
//                     size={17}
//                     strokeWidth={1.4}
//                     className="shrink-0 text-white/40 transition-colors duration-300 group-hover:text-orange-400"
//                   />

//                   <span>{label}</span>

//                   <ArrowUpRight
//                     size={14}
//                     className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
//                   />
//                 </a>
//               ))}

//             </div>
//           </div>

//         </div>

//         {/* COPYRIGHT / LEGAL BAR */}
//         <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between md:py-8">

//           <p className="font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/40 md:text-xs">
//             {COPYRIGHT}
//           </p>

//           <button
//             type="button"
//             onClick={scrollToTop}
//             className="group inline-flex w-fit items-center gap-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/45 transition-colors duration-300 hover:text-orange-400 md:text-xs"
//           >
//             BACK TO TOP

//             <ArrowUp
//               size={15}
//               className="transition-transform duration-300 group-hover:-translate-y-1"
//             />
//           </button>

//         </div>

//       </div>

//       {/* GIANT SOLID ORANGE WORDMARK: bubble letters */}
//       <div
//         ref={wordmarkRef}
//         aria-hidden="true"
//         className="pointer-events-none relative mt-8 select-none overflow-x-clip"
//       >
//         <div
//           className="whitespace-nowrap text-center font-[bolteSemiBold] text-[27vw] leading-[0.72] tracking-[-0.045em]"
//           style={{
//             color: ORANGE,
//             transform: "translateY(7%)",
//           }}
//         >
//           {WORDMARK.split("").map((ch, i) => (
//             <span key={i} className="wm-letter inline-block">
//               {ch}
//             </span>
//           ))}
//           <span className="ml-[0.02em] inline-block align-top text-[0.15em] tracking-normal">
//             ®
//           </span>
//         </div>
//       </div>

//     </footer>
//   );
// }



// "use client";

// import React, { useEffect, useRef } from "react";
// import {
//   ArrowUpRight,
//   ArrowUp,
//   Mail,
//   MapPin,
//   Instagram,
//   Linkedin,
//   MessageCircle,
// } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { useContactModal } from "../Context/ContactModalContext";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// /* ---------- content ----------    */
// const EYEBROW = "LET'S TALK";
// const PAGE_TAG = "CONTACT / 07";

// const HEADLINE = [
//   { text: "GOT A VISION?", orange: false },
//   { text: "LET'S MAKE IT", orange: false },
//   { text: "HAPPEN.", orange: true },
// ];

// const CTA = "START A PROJECT";
// const CTA_HREF = "#contact-form";

// const CTA_NOTE = "GOOD IDEAS START WITH A HELLO.";

// const BRAND_NAME = "WEEPEK®";
// const WORDMARK = "WEEPEK";

// const EMAIL = "hello@weepek.com";
// const EMAIL_HREF = "mailto:hello@weepek.com";

// /* ---------- ADDRESS (edit these lines with your real studio address) ---------- */
// const ADDRESS_LINES = [
//   "Weepek Studio",
//   "No. 00, Your Street Name",
//   "Your Area, Chennai - 600 000",
//   "Tamil Nadu, India",
// ];

// // Opens Google Maps with the address above. Swap with your exact Google Maps
// // share link if you have one.
// const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//   ADDRESS_LINES.join(", ")
// )}`;

// const SOCIAL_LINKS = [
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/",
//     Icon: Instagram,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     Icon: Linkedin,
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/919876543210",
//     Icon: MessageCircle,
//   },
// ];

// const COPYRIGHT = "©Copyright2026-WEEPEK";
// const PRIVACY_HREF = "/privacy";
// const TERMS_HREF = "/terms";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";

// /* ---------- CTA glow (same string format so GSAP can tween it) ---------- */
// const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
// const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

// export default function FooterSection() {
//   const footerRef = useRef(null);
//   const wordmarkRef = useRef(null);
//   const btnRef = useRef(null);
//   const lightRef = useRef(null);
//   const lightXRef = useRef(null);
//   const lightYRef = useRef(null);
//   const glowRef = useRef(null);
//   const { openContact } = useContactModal();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   /* ==========================================
//       WORDMARK: pop-in + floating + bubble hover
//       CTA: light follow setup
//   ========================================== */
//   useGSAP(
//     () => {
//       const footer = footerRef.current;

//       /* --- CTA light follows the cursor (quickTo = cheap + smooth) --- */
//       gsap.set(lightRef.current, {
//         xPercent: -50,
//         yPercent: -50,
//         x: 0,
//         y: 0,
//         scale: 0.6,
//         opacity: 0,
//       });
//       lightXRef.current = gsap.quickTo(lightRef.current, "x", {
//         duration: 0.4,
//         ease: "power3.out",
//       });
//       lightYRef.current = gsap.quickTo(lightRef.current, "y", {
//         duration: 0.4,
//         ease: "power3.out",
//       });

//       /* --- Wordmark --- */
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         const word = wordmarkRef.current; // the whole WEEPEK as one jelly

//         // stretch from the baseline
//         gsap.set(word, { transformOrigin: "50% 100%" });

//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: word,
//               start: "top 90%",
//               toggleActions: "play none none reset", // replays on every entry
//             },
//           })
//           .from(word, { opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
//           // squashed, then stretches up and wobbles back to normal
//           .from(
//             word,
//             {
//               scaleY: 0.55,
//               duration: 1.8,
//               ease: "elastic.out(1, 0.25)",
//             },
//             0
//           )
//           // width jiggles the opposite way, which gives the jelly feel
//           .from(
//             word,
//             {
//               scaleX: 1.08,
//               skewX: -4,
//               duration: 1.8,
//               ease: "elastic.out(1, 0.2)",
//             },
//             0
//           );
//       });
//       return () => mm.revert();
//     },
//     { scope: footerRef }
//   );

//   useEffect(() => {
//     return () => glowRef.current?.kill();
//   }, []);

//   /* ---------- LET'S TALK: light handlers ---------- */
//   const handleCtaEnter = (e) => {
//     const btn = btnRef.current;
//     const light = lightRef.current;
//     const rect = btn.getBoundingClientRect();

//     gsap.set(light, { x: e.clientX - rect.left, y: e.clientY - rect.top });
//     gsap.to(light, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.45,
//       ease: "power2.out",
//       overwrite: "auto",
//     });

//     // breathing glow around the button
//     glowRef.current?.kill();
//     glowRef.current = gsap.fromTo(
//       btn,
//       { boxShadow: GLOW_OFF },
//       {
//         boxShadow: GLOW_ON,
//         duration: 0.9,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       }
//     );
//   };

//   const handleCtaMove = (e) => {
//     const rect = btnRef.current.getBoundingClientRect();
//     lightXRef.current?.(e.clientX - rect.left);
//     lightYRef.current?.(e.clientY - rect.top);
//   };

//   const handleCtaLeave = () => {
//     gsap.to(lightRef.current, {
//       opacity: 0,
//       scale: 0.6,
//       duration: 0.5,
//       ease: "power2.out",
//       overwrite: "auto",
//     });

//     glowRef.current?.kill();
//     gsap.to(btnRef.current, {
//       boxShadow: GLOW_OFF,
//       duration: 0.5,
//       ease: "power2.out",
//       overwrite: "auto",
//     });
//   };

//   return (
//     <footer
//       ref={footerRef}
//       id="contact"
//       className="relative w-full overflow-hidden bg-[#0a0a0a] text-white"
//     >
//       <div className="mx-auto max-w-[1800px] px-6 sm:px-8 md:px-12 lg:px-16">

//         {/* FOOTER INFORMATION */}
//         <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:py-16 lg:gap-16 lg:py-20">

//           {/* COLUMN 1: ANIMATED LET'S TALK CTA */}
//           <div className="flex flex-col items-start">

//             <p className="mb-5 font-[bolteSemiBold] text-[10px] tracking-[0.24em] text-white/40 md:text-xl">
//              GOOD IDEAS START <br/> WITH A HELLO
//             </p>

//             <button
//               ref={btnRef}
//               onClick={openContact}
//               type="button"
//               onMouseEnter={handleCtaEnter}
//               onMouseMove={handleCtaMove}
//               onMouseLeave={handleCtaLeave}
//               className="group relative inline-flex items-center gap-8 overflow-hidden border border-white/25 px-6 py-5 font-[bolteSemiBold] text-xl tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 sm:px-7 md:text-2xl rounded-2xl"
//             >
//               {/* Animated orange background */}
//               <span
//                 aria-hidden="true"
//                 className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//               />

//               {/* Cursor-following light */}
//               <span
//                 ref={lightRef}
//                 aria-hidden="true"
//                 className="pointer-events-none absolute left-0 top-0 z-[1] h-[260px] w-[260px] rounded-full opacity-0"
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
//                   mixBlendMode: "screen",
//                 }}
//               />

//               {/* Button label */}
//               <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
//                 LET'S TALK
//               </span>

//               {/* Animated arrow container */}
//               <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//                 <ArrowUpRight
//                   size={19}
//                   strokeWidth={1.5}
//                   className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
//                 />
//               </span>

//               {/* Moving bottom accent */}
//               <span
//                 aria-hidden="true"
//                 className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
//               />
//             </button>

//           </div>

//           {/* COLUMN 2: CONTACT + STUDIO ADDRESS */}
//           <div>

//             <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
//               GET IN TOUCH
//             </h3>

//             {/* Email */}
//             <div>
//               <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
//                 EMAIL
//               </p>

//               <a
//                 href={EMAIL_HREF}
//                 className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm transition-colors duration-300 hover:text-orange-400 md:text-base"
//               >
//                 <Mail
//                   size={16}
//                   strokeWidth={1.4}
//                   className="shrink-0 text-white/40 transition-colors group-hover:text-orange-400"
//                 />

//                 <span>{EMAIL}</span>

//                 <ArrowUpRight
//                   size={14}
//                   className="shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>
//             </div>

//             {/* Studio address */}
//             <div className="mt-9">
//               <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
//                 STUDIO ADDRESS
//               </p>

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={16}
//                   strokeWidth={1.4}
//                   className="mt-1 shrink-0 text-white/40"
//                 />

//                 <address className="font-[NeueRegular] text-sm not-italic leading-[1.8] text-white/65 md:text-base">
//                   {ADDRESS_LINES.map((line, i) => (
//                     <span
//                       key={line}
//                       className={`block ${i === 0 ? "text-white/90" : ""}`}
//                     >
//                       {line}
//                     </span>
//                   ))}

//                   <a
//                     href={MAP_HREF}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-orange-400 md:text-xs"
//                   >
//                     GET DIRECTIONS
//                     <ArrowUpRight
//                       size={13}
//                       className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                     />
//                   </a>
//                 </address>
//               </div>
//             </div>

//           </div>

//           {/* COLUMN 3: SOCIAL LINKS — unchanged */}
//           <div>

//             <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
//               FOLLOW OUR WORK
//             </h3>

//             <div className="flex flex-col items-start gap-5">

//               {SOCIAL_LINKS.map(({ label, href, Icon }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm text-white/65 transition-colors duration-300 hover:text-orange-400 md:text-base"
//                 >
//                   <Icon
//                     size={17}
//                     strokeWidth={1.4}
//                     className="shrink-0 text-white/40 transition-colors duration-300 group-hover:text-orange-400"
//                   />

//                   <span>{label}</span>

//                   <ArrowUpRight
//                     size={14}
//                     className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
//                   />
//                 </a>
//               ))}

//             </div>
//           </div>

//         </div>

//         {/* COPYRIGHT / LEGAL BAR */}
//         <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between md:py-8">

//           <p className="font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/40 md:text-xs">
//             {COPYRIGHT}
//           </p>

//           <button
//             type="button"
//             onClick={scrollToTop}
//             className="group inline-flex w-fit items-center gap-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/45 transition-colors duration-300 hover:text-orange-400 md:text-xs"
//           >
//             BACK TO TOP

//             <ArrowUp
//               size={15}
//               className="transition-transform duration-300 group-hover:-translate-y-1"
//             />
//           </button>

//         </div>

//       </div>

//       {/* GIANT SOLID ORANGE WORDMARK: bubble letters */}
//       <div
//         ref={wordmarkRef}
//         aria-hidden="true"
//         className="pointer-events-none relative mt-8 select-none overflow-x-clip"
//       >
//         <div
//           className="whitespace-nowrap text-center font-[bolteSemiBold] text-[27vw] leading-[0.72] tracking-[-0.045em]"
//           style={{
//             color: ORANGE,
//             transform: "translateY(7%)",
//           }}
//         >
//           {WORDMARK.split("").map((ch, i) => (
//             <span key={i} className="wm-letter inline-block">
//               {ch}
//             </span>
//           ))}
//           <span className="ml-[0.02em] inline-block align-top text-[0.15em] tracking-normal">
//             ®
//           </span>
//         </div>
//       </div>

//     </footer>
//   );
// }




"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useContactModal } from "../Context/ContactModalContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ---------- content ----------    */
const EYEBROW = "LET'S TALK";
const PAGE_TAG = "CONTACT / 07";

const HEADLINE = [
  { text: "GOT A VISION?", orange: false },
  { text: "LET'S MAKE IT", orange: false },
  { text: "HAPPEN.", orange: true },
];

const CTA = "START A PROJECT";
const CTA_HREF = "#contact-form";

const CTA_NOTE = "GOOD IDEAS START WITH A HELLO.";

const BRAND_NAME = "WEEPEK®";
const WORDMARK = "WEEPEK";

const EMAIL = "hello@weepek.com";
const EMAIL_HREF = "mailto:hello@weepek.com";

/* ---------- ADDRESS (edit these lines with your real studio address) ---------- */
const ADDRESS_LINES = [
  "Weepek Studio",
  "No. 4, Velmurgan nagar",
  "Morai, Avadi - 600 055",
  "Chennai, India",
];

// Opens Google Maps with the address above. Swap with your exact Google Maps
// share link if you have one.
const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_LINES.join(", ")
)}`;

/* ---------- GST (replace with your real GSTIN; Tamil Nadu codes start with 33) ---------- */
const GST_NO = "33FWGPP2559J1Z4";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    Icon: MessageCircle,
  },
];

const COPYRIGHT = "©Copyright2026-WEEPEK";
const PRIVACY_HREF = "/privacy";
const TERMS_HREF = "/terms";

/* ---------- palette ---------- */
const ORANGE = "#f97316";

/* ---------- CTA glow (same string format so GSAP can tween it) ---------- */
const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

export default function FooterSection() {
  const footerRef = useRef(null);
  const wordmarkRef = useRef(null);
  const btnRef = useRef(null);
  const lightRef = useRef(null);
  const lightXRef = useRef(null);
  const lightYRef = useRef(null);
  const glowRef = useRef(null);
  const { openContact } = useContactModal();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ==========================================
      WORDMARK: pop-in + floating + bubble hover
      CTA: light follow setup
  ========================================== */
  useGSAP(
    () => {
      const footer = footerRef.current;

      /* --- CTA light follows the cursor (quickTo = cheap + smooth) --- */
      gsap.set(lightRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 0.6,
        opacity: 0,
      });
      lightXRef.current = gsap.quickTo(lightRef.current, "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      lightYRef.current = gsap.quickTo(lightRef.current, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      /* --- Wordmark --- */
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const word = wordmarkRef.current; // the whole WEEPEK as one jelly

        // stretch from the baseline
        gsap.set(word, { transformOrigin: "50% 100%" });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: word,
              start: "top 90%",
              toggleActions: "play none none reset", // replays on every entry
            },
          })
          .from(word, { opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
          // squashed, then stretches up and wobbles back to normal
          .from(
            word,
            {
              scaleY: 0.55,
              duration: 1.8,
              ease: "elastic.out(1, 0.25)",
            },
            0
          )
          // width jiggles the opposite way, which gives the jelly feel
          .from(
            word,
            {
              scaleX: 1.08,
              skewX: -4,
              duration: 1.8,
              ease: "elastic.out(1, 0.2)",
            },
            0
          );
      });
      return () => mm.revert();
    },
    { scope: footerRef }
  );

  useEffect(() => {
    return () => glowRef.current?.kill();
  }, []);

  /* ---------- LET'S TALK: light handlers ---------- */
  const handleCtaEnter = (e) => {
    const btn = btnRef.current;
    const light = lightRef.current;
    const rect = btn.getBoundingClientRect();

    gsap.set(light, { x: e.clientX - rect.left, y: e.clientY - rect.top });
    gsap.to(light, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });

    // breathing glow around the button
    glowRef.current?.kill();
    glowRef.current = gsap.fromTo(
      btn,
      { boxShadow: GLOW_OFF },
      {
        boxShadow: GLOW_ON,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
  };

  const handleCtaMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    lightXRef.current?.(e.clientX - rect.left);
    lightYRef.current?.(e.clientY - rect.top);
  };

  const handleCtaLeave = () => {
    gsap.to(lightRef.current, {
      opacity: 0,
      scale: 0.6,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });

    glowRef.current?.kill();
    gsap.to(btnRef.current, {
      boxShadow: GLOW_OFF,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-8 md:px-12 lg:px-16">

        {/* FOOTER INFORMATION */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-10 md:py-16 lg:gap-16 lg:py-20">

          {/* COLUMN 1: ANIMATED LET'S TALK CTA */}
          <div className="flex flex-col items-start">

            <p className="mb-5 font-[bolteSemiBold] text-[10px] tracking-[0.24em] text-white/40 md:text-xl">
             GOOD IDEAS START <br/> WITH A HELLO
            </p>

            <button
              ref={btnRef}
              onClick={openContact}
              type="button"
              onMouseEnter={handleCtaEnter}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              className="group relative inline-flex items-center gap-8 overflow-hidden border border-white/25 px-6 py-5 font-[bolteSemiBold] text-xl tracking-[-0.035em] transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-orange-500 sm:px-7 md:text-2xl rounded-2xl"
            >
              {/* Animated orange background */}
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              {/* Cursor-following light */}
              <span
                ref={lightRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-[1] h-[260px] w-[260px] rounded-full opacity-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Button label */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                LET'S TALK
              </span>

              {/* Animated arrow container */}
              <span className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                />
              </span>

              {/* Moving bottom accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
              />
            </button>

          </div>

          {/* COLUMN 2: CONTACT + STUDIO ADDRESS */}
          <div>

            <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
              GET IN TOUCH
            </h3>

            {/* Email */}
            <div>
              <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
                EMAIL
              </p>

              <a
                href={EMAIL_HREF}
                className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm transition-colors duration-300 hover:text-orange-400 md:text-base"
              >
                <Mail
                  size={16}
                  strokeWidth={1.4}
                  className="shrink-0 text-white/40 transition-colors group-hover:text-orange-400"
                />

                <span>{EMAIL}</span>

                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Studio address */}
            <div className="mt-9">
              <p className="mb-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/35">
                STUDIO ADDRESS
              </p>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-white/40"
                />

                <address className="font-[NeueRegular] text-sm not-italic leading-[1.8] text-white/65 md:text-base">
                  {ADDRESS_LINES.map((line, i) => (
                    <span
                      key={line}
                      className={`block ${i === 0 ? "text-white/90" : ""}`}
                    >
                      {line}
                    </span>
                  ))}

                  <a
                    href={MAP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-orange-400 md:text-xs"
                  >
                    GET DIRECTIONS
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </address>
              </div>
            </div>

          </div>

          {/* COLUMN 3: SOCIAL LINKS — unchanged */}
          <div>

            <h3 className="mb-7 font-[NeueRegular] text-[10px] tracking-[0.24em] text-white/35 md:text-xs">
              FOLLOW OUR WORK
            </h3>

            <div className="flex flex-col items-start gap-5">

              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-[NeueRegular] text-sm text-white/65 transition-colors duration-300 hover:text-orange-400 md:text-base"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.4}
                    className="shrink-0 text-white/40 transition-colors duration-300 group-hover:text-orange-400"
                  />

                  <span>{label}</span>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
                  />
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* COPYRIGHT / LEGAL BAR */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between md:py-8">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/40 md:text-xs">
              {COPYRIGHT}
            </p>

            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />

            <p className="font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/40 md:text-xs">
              GSTIN: <span className="text-white/65">{GST_NO}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-3 font-[NeueRegular] text-[10px] tracking-[0.12em] text-white/45 transition-colors duration-300 hover:text-orange-400 md:text-xs"
          >
            BACK TO TOP

            <ArrowUp
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>

      {/* GIANT SOLID ORANGE WORDMARK: bubble letters */}
      <div
        ref={wordmarkRef}
        aria-hidden="true"
        className="pointer-events-none relative mt-8 select-none overflow-x-clip"
      >
        <div
          className="whitespace-nowrap text-center font-[bolteSemiBold] text-[25vw] leading-[0.72] tracking-[-0.045em]"
          style={{
            color: ORANGE,
            transform: "translateY(7%)",
          }}
        >
          {WORDMARK.split("").map((ch, i) => (
            <span key={i} className="wm-letter inline-block">
              {ch}
            </span>
          ))}
          <span className="ml-[0.02em] inline-block align-top text-[0.15em] tracking-normal">
            ®
          </span>
        </div>
      </div>

    </footer>
  );
}