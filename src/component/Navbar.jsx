 


// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(useGSAP);

// /* ---------- content (edit here) ---------- */
// const LINKS = [
//   { label: "WORK", href: "#work" },
//   { label: "ABOUT", href: "#about" },
// ];
// const CTA = "LET'S TALK";
// const CTA_HREF = "#contact";

// /* ---------- palette (same as showreel) ---------- */
// const ORANGE = "#f97316";

// /* ---------- CTA glow (same string format so GSAP can tween it) ---------- */
// const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
// const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

// /* ==========================================
//     LET'S TALK button (same as footer CTA)
//     cursor light + orange fill + breathing glow
// ========================================== */
// function TalkButton() {
//   const btnRef = useRef(null);
//   const lightRef = useRef(null);
//   const lightXRef = useRef(null);
//   const lightYRef = useRef(null);
//   const glowRef = useRef(null);

//   useGSAP(
//     () => {
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
//       return () => glowRef.current?.kill();
//     },
//     { scope: btnRef }
//   );

//   const handleEnter = (e) => {
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

//   const handleMove = (e) => {
//     const rect = btnRef.current.getBoundingClientRect();
//     lightXRef.current?.(e.clientX - rect.left);
//     lightYRef.current?.(e.clientY - rect.top);
//   };

//   const handleLeave = () => {
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
//     <a
//       ref={btnRef}
//       href={CTA_HREF}
//       onMouseEnter={handleEnter}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className="group relative inline-flex items-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/25 px-4 py-2 font-[bolteSemiBold] text-sm tracking-[-0.035em] text-white transition-[transform,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-orange-500"
//     >
//       {/* Animated orange background */}
//       <span
//         aria-hidden="true"
//         className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//       />

//       {/* Cursor-following light */}
//       <span
//         ref={lightRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-[1] h-[150px] w-[150px] rounded-full opacity-0"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* Label */}
//       <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//         {CTA}
//       </span>

//       {/* Animated arrow container */}
//       <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//         <ArrowUpRight
//           size={14}
//           strokeWidth={1.5}
//           className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
//         />
//       </span>

//       {/* Moving bottom accent */}
//       {/* <span
//         aria-hidden="true"
//         className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100"
//       /> */}
//     </a>
//   );
// }

// /* ==========================================
//     NAVBAR
// ========================================== */
// export default function WeepekNavbar() {
//   const navRef = useRef(null);
//   const [pill, setPill] = useState(null); // { left, width } of hovered link

//   /* cursor-following glow across the whole pill */
//   const onMove = (e) => {
//     const el = navRef.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.setProperty("--mx", `${e.clientX - r.left}px`);
//     el.style.setProperty("--my", `${e.clientY - r.top}px`);
//   };

//   /* sliding highlight behind the hovered link */
//   const onEnter = (e) => {
//     const a = e.currentTarget;
//     setPill({ left: a.offsetLeft, width: a.offsetWidth });
//   };

//   return (
//     <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4 md:top-6">
//       <nav
//         ref={navRef}
//         onMouseMove={onMove}
//         onMouseLeave={() => setPill(null)}
//         aria-label="Primary"
//         className="pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-full border border-white/15 bg-black/30 p-1.5 backdrop-blur-md sm:gap-2 md:p-2"
//       >
//         {/* cursor-following orange glow inside the pill */}
//         <span
//           className="pointer-events-none absolute inset-0 transition-opacity duration-300"
//           style={{
//             background:
//               "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(249,115,22,0.22), transparent 70%)",
//             opacity: pill ? 1 : 0,
//           }}
//           aria-hidden
//         />

//         {/* links + sliding highlight */}
//         <ul className="relative flex items-center">
//           {/* <span
//             className="pointer-events-none absolute top-0 h-full rounded-full bg-white/10 transition-all duration-300 ease-out"
//             style={{
//               left: pill ? pill.left : 0,
//               width: pill ? pill.width : 0,
//               opacity: pill ? 1 : 0,
//             }}
//             aria-hidden
//           /> */}

//           {LINKS.map((l) => (
//             <li key={l.label} className="relative">
//               <a
//                 href={l.href}
//                 onMouseEnter={onEnter}
//                 onFocus={onEnter}
//                 className="group relative block px-4 py-2 text-[10px] font-medium tracking-[0.25em] text-white transition-colors hover:text-[#a78bfa] sm:px-5 sm:text-xs font-[bolteSemiBold]"
//               >
//                 {l.label}
//                 {/* small orange dot under the hovered link */}
//                 <span
//                   className="pointer-events-none absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"
//                   style={{ background: ORANGE }}
//                   aria-hidden
//                 />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* divider */}
//         {/* <span className="mx-1 h-5 w-px bg-white/15" aria-hidden /> */}

//         <TalkButton />
//       </nav>
//     </header>
//   );
// }


// import { useRef, useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";
// import w from '../assets/weepek_white.png';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// /* ==========================================
//    CONFIG
// ========================================== */

// const LINKS = [
//   { label: "WORK", href: "/work", sectionId: "#work" },
//   { label: "ABOUT", href: "/about", sectionId: "#about" },
// ];

// const CTA = "LET'S TALK";
// const CTA_HREF = "#contact";

// const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
// const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

// /* ==========================================
//    MAGNETIC NAV LINK
// ========================================== */

// function MagneticLink({ label, href, active, onActivate }) {
//   const linkRef = useRef(null);
//   const textRef = useRef(null);

//   const xTo = useRef(null);
//   const yTo = useRef(null);

//   useGSAP(
//     () => {
//       xTo.current = gsap.quickTo(textRef.current, "x", {
//         duration: 0.45,
//         ease: "power3.out",
//       });

//       yTo.current = gsap.quickTo(textRef.current, "y", {
//         duration: 0.45,
//         ease: "power3.out",
//       });
//     },
//     { scope: linkRef }
//   );

//   const handleMove = (e) => {
//     if (!linkRef.current) return;

//     const rect = linkRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     xTo.current?.(x * 0.18);
//     yTo.current?.(y * 0.22);
//   };

//   const handleLeave = () => {
//     xTo.current?.(0);
//     yTo.current?.(0);
//   };

//   return (
//     <Link
//       ref={linkRef}
//       to={href}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       onClick={() => onActivate(href)}
//       aria-current={active ? "page" : undefined}
//       className="group relative flex h-full items-center justify-center px-4 py-3 sm:px-5"
//     >
//       <span
//         ref={textRef}
//         className={`relative z-10 block font-[bolteSemiBold] text-[10px] tracking-[0.22em] transition-colors duration-300 sm:text-xs ${
//           active ? "text-white" : "text-white/75 group-hover:text-[#a78bfa]"
//         }`}
//       >
//         {label}
//       </span>

//       <span
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-1 rounded-full bg-white/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//       />
//     </Link>
//   );
// }

// /* ==========================================
//    LET'S TALK BUTTON (unchanged)
// ========================================== */

// function TalkButton() {
//   const btnRef = useRef(null);
//   const lightRef = useRef(null);
//   const lightXRef = useRef(null);
//   const lightYRef = useRef(null);
//   const glowRef = useRef(null);

//   useGSAP(
//     () => {
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

//       return () => glowRef.current?.kill();
//     },
//     { scope: btnRef }
//   );

//   const handleEnter = (e) => {
//     const btn = btnRef.current;
//     const light = lightRef.current;
//     if (!btn || !light) return;

//     const rect = btn.getBoundingClientRect();
//     gsap.set(light, { x: e.clientX - rect.left, y: e.clientY - rect.top });
//     gsap.to(light, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.45,
//       ease: "power2.out",
//       overwrite: "auto",
//     });

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

//   const handleMove = (e) => {
//     if (!btnRef.current) return;
//     const rect = btnRef.current.getBoundingClientRect();
//     lightXRef.current?.(e.clientX - rect.left);
//     lightYRef.current?.(e.clientY - rect.top);
//   };

//   const handleLeave = () => {
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
//     <Link
//       ref={btnRef}
//       to={CTA_HREF}
//       onMouseEnter={handleEnter}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className="group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/25 px-4 py-2 font-[bolteSemiBold] text-xs tracking-[-0.035em] text-white transition-[transform,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-orange-500 sm:px-5 sm:text-sm"
//     >
//       <span
//         aria-hidden="true"
//         className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
//       />
//       <span
//         ref={lightRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-[1] h-[150px] w-[150px] rounded-full opacity-0"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
//           mixBlendMode: "screen",
//         }}
//       />
//       <span className="relative z-10">{CTA}</span>
//       <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
//         <ArrowUpRight
//           size={14}
//           strokeWidth={1.5}
//           className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
//         />
//       </span>
//     </Link>
//   );
// }

// /* ==========================================
//    NAVBAR
// ========================================== */

// export default function WeepekNavbar() {
//   const headerRef = useRef(null);
//   const navRef = useRef(null);
//   const indicatorRef = useRef(null);
//   const linkRefs = useRef({});

//   const { pathname } = useLocation();

//   const [activeSection, setActiveSection] = useState(null);
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   /* ==========================================
//      ACTIVE INDICATOR
//   ========================================== */

//   const moveIndicator = (href, immediate = false) => {
//     const target = linkRefs.current[href];
//     const indicator = indicatorRef.current;
//     const nav = navRef.current;

//     if (!target || !indicator || !nav) return;

//     const navRect = nav.getBoundingClientRect();
//     const targetRect = target.getBoundingClientRect();

//     const left =
//       targetRect.left - navRect.left + targetRect.width / 2 - 10;

//     gsap.to(indicator, {
//       x: left,
//       width: 20,
//       opacity: 1,
//       duration: immediate ? 0 : 0.45,
//       ease: "power3.out",
//       overwrite: "auto",
//     });
//   };

//   /* ==========================================
//      NAVBAR ENTRANCE + SCROLL MORPH
//   ========================================== */

//   useGSAP(
//     () => {
//       const nav = navRef.current;

//       gsap.fromTo(
//         nav,
//         { y: -45, opacity: 0, scale: 0.94 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1.1,
//           ease: "power3.out",
//           delay: 0.15,
//         }
//       );

//       const scrollTrigger = ScrollTrigger.create({
//         start: 80,
//         end: "max",
//         onUpdate: (self) => {
//           setIsScrolled(self.scroll() > 80);
//         },
//       });

//       // ✅ Only track in-page sections on the homepage
//       const sectionTriggers = [];

//       if (pathname === "/") {
//         LINKS.forEach((link) => {
//           // use the CSS selector (#work / #about), NOT the route path
//           const section = document.querySelector(link.sectionId);
//           if (!section) return;

//           const t = ScrollTrigger.create({
//             trigger: section,
//             start: "top 45%",
//             end: "bottom 45%",
//             onEnter: () => setActiveSection(link.href),
//             onEnterBack: () => setActiveSection(link.href),
//             onLeave: () =>
//               setActiveSection((c) => (c === link.href ? null : c)),
//             onLeaveBack: () =>
//               setActiveSection((c) => (c === link.href ? null : c)),
//           });

//           sectionTriggers.push(t);
//         });
//       }

//       return () => {
//         scrollTrigger.kill();
//         sectionTriggers.forEach((t) => t.kill());
//       };
//     },
//     { scope: headerRef, dependencies: [pathname] }
//   );

//   /* ==========================================
//      SYNC ACTIVE FROM ROUTE (on /work, /about)
//   ========================================== */

//   useEffect(() => {
//     if (pathname === "/work" || pathname === "/about") {
//       setActiveSection(pathname);
//     } else if (pathname === "/") {
//       // reset; ScrollTrigger will set it based on scroll
//       setActiveSection(null);
//     }
//   }, [pathname]);

//   /* ==========================================
//      MOVE INDICATOR ON ACTIVE / HOVER
//   ========================================== */

//   useEffect(() => {
//     const target = hoveredSection || activeSection;

//     if (target) {
//       moveIndicator(target);
//     } else {
//       gsap.to(indicatorRef.current, {
//         opacity: 0,
//         duration: 0.25,
//         overwrite: "auto",
//       });
//     }
//   }, [hoveredSection, activeSection, pathname]);

//   /* ==========================================
//      CURSOR GLOW
//   ========================================== */

//   const handleNavMove = (e) => {
//     const nav = navRef.current;
//     if (!nav) return;
//     const rect = nav.getBoundingClientRect();
//     nav.style.setProperty("--mx", `${e.clientX - rect.left}px`);
//     nav.style.setProperty("--my", `${e.clientY - rect.top}px`);
//   };

//   /* ==========================================
//      RENDER
//   ========================================== */

//   return (
//     <header
//       ref={headerRef}
//       className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-3 md:top-6"
//     >
//       <nav
//         ref={navRef}
//         aria-label="Primary navigation"
//         onMouseMove={handleNavMove}
//         onMouseLeave={() => setHoveredSection(null)}
//         className="pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-full border border-white/[0.12] backdrop-blur-[24px] transition-[padding,background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-2"
//         style={{
//           padding: isScrolled ? "5px" : "8px",
//           backgroundColor: isScrolled
//             ? "rgba(11,6,19,0.85)"
//             : "rgba(11,6,19,0.65)",
//           borderColor: isScrolled
//             ? "rgba(255,255,255,0.18)"
//             : "rgba(255,255,255,0.12)",
//           boxShadow: isScrolled
//             ? "0 12px 45px rgba(0,0,0,0.4), 0 0 35px rgba(167,139,250,0.08)"
//             : "0 8px 30px rgba(0,0,0,0.2)",
//           scale: isScrolled ? 0.96 : 1,
//         }}
//       >
//         <span
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
//         />

//         <span
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(249,115,22,0.16), transparent 70%)",
//           }}
//         />

//         <div className="relative flex items-center">
//           {LINKS.map((link) => (
//             <div
//               key={link.href}
//               ref={(el) => {
//                 linkRefs.current[link.href] = el;
//               }}
//               onMouseEnter={() => setHoveredSection(link.href)}
//               onFocus={() => setHoveredSection(link.href)}
//               onBlur={() => setHoveredSection(null)}
//               className="relative"
//             >
//               <MagneticLink
//                 label={link.label}
//                 href={link.href}
//                 active={activeSection === link.href}
//                 onActivate={setActiveSection}
//               />
//             </div>
//           ))}
//         </div>

//         <span
//           ref={indicatorRef}
//           aria-hidden="true"
//           className="pointer-events-none absolute bottom-[7px] left-0 h-[2px] w-5 rounded-full bg-[#f97316] opacity-0"
//           style={{ boxShadow: "0 0 10px rgba(249,115,22,0.65)" }}
//         />

//         <div className="relative z-10">
//           <TalkButton />
//         </div>
//       </nav>
//     </header>
//   );
// }




import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import w from '../assets/weepek_white.png';
import { useContactModal } from "../Context/ContactModalContext";


gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ==========================================
   CONFIG
========================================== */

const LINKS = [
  { label: "WORK", href: "/work", sectionId: "#work" },
  { label: "ABOUT", href: "/about", sectionId: "#about" },
];

const CTA = "LET'S TALK";
const CTA_HREF = "/contact";

const GLOW_OFF = "0 0 0px 0px rgba(249,115,22,0)";
const GLOW_ON = "0 0 60px 6px rgba(249,115,22,0.5)";

/* ==========================================
   MAGNETIC NAV LINK
========================================== */

function MagneticLink({ label, href, active, onActivate }) {
  const linkRef = useRef(null);
  const textRef = useRef(null);

  const xTo = useRef(null);
  const yTo = useRef(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(textRef.current, "x", {
        duration: 0.45,
        ease: "power3.out",
      });

      yTo.current = gsap.quickTo(textRef.current, "y", {
        duration: 0.45,
        ease: "power3.out",
      });
    },
    { scope: linkRef }
  );

  const handleMove = (e) => {
    if (!linkRef.current) return;

    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    xTo.current?.(x * 0.18);
    yTo.current?.(y * 0.22);
  };

  const handleLeave = () => {
    xTo.current?.(0);
    yTo.current?.(0);
  };

  return (
    <Link
      ref={linkRef}
      to={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onActivate(href)}
      aria-current={active ? "page" : undefined}
      className="group relative flex h-full items-center justify-center px-4 py-3 sm:px-5"
    >
      <span
        ref={textRef}
        className={`relative z-10 block font-[bolteSemiBold] text-[10px] tracking-[0.22em] transition-colors duration-300 sm:text-xs ${
          active ? "text-white" : "text-white/75 group-hover:text-[#a78bfa]"
        }`}
      >
        {label}
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-full bg-white/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </Link>
  );
}

/* ==========================================
   LET'S TALK BUTTON (unchanged)
========================================== */

function TalkButton() {
  const btnRef = useRef(null);
  const lightRef = useRef(null);
  const lightXRef = useRef(null);
  const lightYRef = useRef(null);
  const glowRef = useRef(null);
   const { openContact } = useContactModal();

  useGSAP(
    () => {
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

      return () => glowRef.current?.kill();
    },
    { scope: btnRef }
  );

  const handleEnter = (e) => {
    const btn = btnRef.current;
    const light = lightRef.current;
    if (!btn || !light) return;

    const rect = btn.getBoundingClientRect();
    gsap.set(light, { x: e.clientX - rect.left, y: e.clientY - rect.top });
    gsap.to(light, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });

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

  const handleMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    lightXRef.current?.(e.clientX - rect.left);
    lightYRef.current?.(e.clientY - rect.top);
  };

  const handleLeave = () => {
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
    // <Link
    //   ref={btnRef}
    //   to={CTA_HREF}
    //   onMouseEnter={handleEnter}
    //   onMouseMove={handleMove}
    //   onMouseLeave={handleLeave}
    //   className="group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/25 px-4 py-2 font-[bolteSemiBold] text-xs tracking-[-0.035em] text-white transition-[transform,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-orange-500 sm:px-5 sm:text-sm"
    // >
    //   <span
    //     aria-hidden="true"
    //     className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
    //   />
    //   <span
    //     ref={lightRef}
    //     aria-hidden="true"
    //     className="pointer-events-none absolute left-0 top-0 z-[1] h-[150px] w-[150px] rounded-full opacity-0"
    //     style={{
    //       background:
    //         "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
    //       mixBlendMode: "screen",
    //     }}
    //   />
    //   <span className="relative z-10">{CTA}</span>
    //   <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
    //     <ArrowUpRight
    //       size={14}
    //       strokeWidth={1.5}
    //       className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
    //     />
    //   </span>
    // </Link>

     <button
      ref={btnRef}
      type="button"
       onClick={openContact}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border border-white/25 px-4 py-2 font-[bolteSemiBold] text-xs tracking-[-0.035em] text-white transition-[transform,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-orange-500 sm:px-5 sm:text-sm"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
      <span
        ref={lightRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[1] h-[150px] w-[150px] rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,230,180,0.95) 0%, rgba(255,160,60,0.55) 35%, rgba(249,115,22,0) 70%)",
          mixBlendMode: "screen",
        }}
      />
      <span className="relative z-10">{CTA}</span>
      <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-white/25 transition-all duration-500 group-hover:rotate-45 group-hover:border-black/30 group-hover:bg-black/10">
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
        />
      </span>
    </button>
  );
}

/* ==========================================
   NAVBAR
========================================== */

export default function WeepekNavbar() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  const { pathname } = useLocation();

  const [activeSection, setActiveSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ==========================================
     ACTIVE INDICATOR
  ========================================== */

  const moveIndicator = (href, immediate = false) => {
    const target = linkRefs.current[href];
    const indicator = indicatorRef.current;
    const nav = navRef.current;

    if (!target || !indicator || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const left =
      targetRect.left - navRect.left + targetRect.width / 2 - 10;

    gsap.to(indicator, {
      x: left,
      width: 20,
      opacity: 1,
      duration: immediate ? 0 : 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  /* ==========================================
     NAVBAR ENTRANCE + SCROLL MORPH
  ========================================== */

  useGSAP(
    () => {
      const nav = navRef.current;

      gsap.fromTo(
        nav,
        { y: -45, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      const scrollTrigger = ScrollTrigger.create({
        start: 80,
        end: "max",
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 80);
        },
      });

      // ✅ Only track in-page sections on the homepage
      const sectionTriggers = [];

      if (pathname === "/") {
        LINKS.forEach((link) => {
          // use the CSS selector (#work / #about), NOT the route path
          const section = document.querySelector(link.sectionId);
          if (!section) return;

          const t = ScrollTrigger.create({
            trigger: section,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => setActiveSection(link.href),
            onEnterBack: () => setActiveSection(link.href),
            onLeave: () =>
              setActiveSection((c) => (c === link.href ? null : c)),
            onLeaveBack: () =>
              setActiveSection((c) => (c === link.href ? null : c)),
          });

          sectionTriggers.push(t);
        });
      }

      return () => {
        scrollTrigger.kill();
        sectionTriggers.forEach((t) => t.kill());
      };
    },
    { scope: headerRef, dependencies: [pathname] }
  );

  /* ==========================================
     SYNC ACTIVE FROM ROUTE (on /work, /about)
  ========================================== */

  useEffect(() => {
    if (pathname === "/work" || pathname === "/about") {
      setActiveSection(pathname);
    } else if (pathname === "/") {
      // reset; ScrollTrigger will set it based on scroll
      setActiveSection(null);
    }
  }, [pathname]);

  /* ==========================================
     MOVE INDICATOR ON ACTIVE / HOVER
  ========================================== */

  useEffect(() => {
    const target = hoveredSection || activeSection;

    if (target) {
      moveIndicator(target);
    } else {
      gsap.to(indicatorRef.current, {
        opacity: 0,
        duration: 0.25,
        overwrite: "auto",
      });
    }
  }, [hoveredSection, activeSection, pathname]);

  /* ==========================================
     CURSOR GLOW
  ========================================== */

  const handleNavMove = (e) => {
    const nav = navRef.current;
    if (!nav) return;
    const rect = nav.getBoundingClientRect();
    nav.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    nav.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  /* ==========================================
     RENDER
  ========================================== */

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-3 md:top-6"
    >
      <nav
        ref={navRef}
        aria-label="Primary navigation"
        onMouseMove={handleNavMove}
        onMouseLeave={() => setHoveredSection(null)}
        className="pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-full border border-white/[0.12] backdrop-blur-[24px] transition-[padding,background-color,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-2"
        style={{
          padding: isScrolled ? "5px" : "8px",
          backgroundColor: isScrolled
            ? "rgba(11,6,19,0.85)"
            : "rgba(11,6,19,0.65)",
          borderColor: isScrolled
            ? "rgba(255,255,255,0.18)"
            : "rgba(255,255,255,0.12)",
          boxShadow: isScrolled
            ? "0 12px 45px rgba(0,0,0,0.4), 0 0 35px rgba(167,139,250,0.08)"
            : "0 8px 30px rgba(0,0,0,0.2)",
          scale: isScrolled ? 0.96 : 1,
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(249,115,22,0.16), transparent 70%)",
          }}
        />

        {/* Home logo — place your logo image at public/logo.png */}
        <Link
          to="/"
          aria-label="WEEPEK home"
          title="Back to home"
          className="group relative z-10 mr-2 flex   h-10 w-10 shrink-0 items-center justify-center rounded-full  transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] sm:mr-3    bg-[#2f0f5c]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[#f97316]/15 opacity-0  transition-opacity duration-300 group-hover:opacity-100"
          />
          <img
            src={w}
            alt="WEEPEK"
            className="relative z-10 h-[60px] w-[80px]  transition-transform duration-300 group-hover:scale-110  "
          />
        </Link>

        <div className="relative flex items-center">
          {LINKS.map((link) => (
            <div
              key={link.href}
              ref={(el) => {
                linkRefs.current[link.href] = el;
              }}
              onMouseEnter={() => setHoveredSection(link.href)}
              onFocus={() => setHoveredSection(link.href)}
              onBlur={() => setHoveredSection(null)}
              className="relative"
            >
              <MagneticLink
                label={link.label}
                href={link.href}
                active={activeSection === link.href}
                onActivate={setActiveSection}
              />
            </div>
          ))}
        </div>

        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[7px] left-0 h-[2px] w-5 rounded-full bg-[#f97316] opacity-0"
          style={{ boxShadow: "0 0 10px rgba(249,115,22,0.65)" }}
        />

        <div className="relative z-10">
          <TalkButton />
        </div>
      </nav>
    </header>
  );
}