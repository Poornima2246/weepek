// import { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight, Check, Copy, X } from "lucide-react";

// gsap.registerPlugin(useGSAP);

// /* =====================================================
//    EDIT HERE (all placeholders → replace with real data)
// ===================================================== */
// const CONTACT = {
//   brand: "WEEPEK",
//   closeFallback: "/",

//   // Title: line 1, then line 2 split into plain + accent word
//   title: { line1: "YOUR IDEA.", line2: "OUR", accent: "DETAILS." },
//   sub: "Drop us a message, we'll take it from there.",

//   email: "hello@weepek.com",

//   // wa.me needs digits only: country code + number, no "+" or spaces
//   whatsapp: "91XXXXXXXXXX",
//   whatsappDisplay: "+91 XXXXX XXXXX",
//   whatsappMessage: "Hi Weepek, I'd like to talk about a project.",

//   socials: [
//     { label: "Instagram", href: "https://instagram.com/" },
//     { label: "LinkedIn", href: "https://linkedin.com/" },
//     { label: "Behance", href: "https://behance.net/" },
//   ],

//   location: "Chennai, India",
//   hours: "Mon–Sat, 10:00 – 19:00", // set to "" to hide
// };

// const BG = "#ed710c";
// const CREAM = "#f8eee8";
// const DARK = "#0b0613";
// const SOFT = "#ffc9a3"; // lighter orange for the small line

// // delay so the content waits for the page-transition wave to finish (tune with your App.jsx timing)
// const ENTER_DELAY = 0.35;

// /* ---------- copy chip ---------- */
// function CopyChip({ value, label = "COPY" }) {
//   const [done, setDone] = useState(false);
//   const timer = useRef(null);

//   useEffect(() => () => clearTimeout(timer.current), []);

//   const copy = async (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     try {
//       await navigator.clipboard.writeText(value);
//     } catch {
//       const ta = document.createElement("textarea");
//       ta.value = value;
//       ta.style.position = "fixed";
//       ta.style.opacity = "0";
//       document.body.appendChild(ta);
//       ta.select();
//       try {
//         document.execCommand("copy");
//       } catch {
//         /* ignore */
//       }
//       document.body.removeChild(ta);
//     }
//     setDone(true);
//     clearTimeout(timer.current);
//     timer.current = setTimeout(() => setDone(false), 2000);
//   };

//   return (
//     <button
//       type="button"
//       onClick={copy}
//       aria-live="polite"
//       className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 hover:bg-[#f8eee8] hover:text-[#ed710c]"
//       style={{ borderColor: `${CREAM}99`, color: CREAM }}
//     >
//       {done ? <Check size={12} strokeWidth={2.2} /> : <Copy size={12} strokeWidth={2} />}
//       {done ? "COPIED" : label}
//     </button>
//   );
// }

// /* =====================================================
//    PAGE
// ===================================================== */
// export default function ContactPage() {
//   const root = useRef(null);
//   const navigate = useNavigate();

//   const close = () => {
//     if (window.history.length > 1) navigate(-1);
//     else navigate(CONTACT.closeFallback);
//   };

//   // Esc closes
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && close();
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
//     CONTACT.whatsappMessage
//   )}`;

//   /* ---------- animations ---------- */
//   useGSAP(
//     () => {
//       const mm = gsap.matchMedia();

//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         const tl = gsap.timeline({ delay: ENTER_DELAY });

//         tl.from(".ct-top", {
//           y: -16,
//           opacity: 0,
//           duration: 0.6,
//           ease: "power2.out",
//           stagger: 0.08,
//         })
//           .from(
//             ".ct-line-inner",
//             {
//               yPercent: 115,
//               duration: 1,
//               ease: "power4.out",
//               stagger: 0.12,
//             },
//             0.05
//           )
//           .from(
//             ".ct-sub",
//             { y: 18, opacity: 0, duration: 0.7, ease: "power2.out" },
//             0.55
//           )
//           .from(
//             ".ct-email",
//             { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" },
//             0.5
//           )
//           .from(
//             ".ct-sticker",
//             {
//               scale: 0,
//               rotate: -28,
//               opacity: 0,
//               duration: 0.9,
//               ease: "back.out(1.8)",
//             },
//             0.7
//           )
//           .from(
//             ".ct-bottom > *",
//             {
//               y: 20,
//               opacity: 0,
//               duration: 0.6,
//               ease: "power2.out",
//               stagger: 0.08,
//             },
//             0.9
//           );

//         // idle float on the sticker (starts after the intro)
//         gsap.to(".ct-float", {
//           y: -7,
//           duration: 1.8,
//           ease: "sine.inOut",
//           yoyo: true,
//           repeat: -1,
//           delay: ENTER_DELAY + 1.6,
//         });
//       });

//       return () => mm.revert();
//     },
//     { scope: root }
//   );

//   return (
//     <main
//       ref={root}
//       className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-5 pb-6 pt-5 md:px-10 md:pb-8 md:pt-7"
//       style={{ background: BG, color: CREAM }}
//     >
//       {/* ================= TOP BAR ================= */}
//       <header className="flex items-center justify-between">
//         <Link
//           to="/"
//           className="ct-top font-[bolteSemiBold] text-2xl tracking-tight md:text-3xl"
//           style={{ color: CREAM }}
//           aria-label={`${CONTACT.brand} home`}
//         >
//           {CONTACT.brand}
//         </Link>

//         <button
//           type="button"
//           onClick={close}
//           className="ct-top group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:scale-105"
//           style={{ background: CREAM, color: "#0a0a0a" }}
//         >
//           <X
//             size={16}
//             strokeWidth={2}
//             className="transition-transform duration-300 group-hover:rotate-90"
//           />
//           Close
//         </button>
//       </header>

//       {/* ================= MAIN ================= */}
//       <section className="grid flex-1 grid-cols-1 items-center gap-14 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-8">
//         {/* Title */}
//         <div>
//           <h1
//             className="font-[bolteSemiBold] uppercase leading-[0.88] tracking-tight"
//             style={{ fontSize: "clamp(3rem, 8.6vw, 9.5rem)", color: CREAM }}
//           >
//             <span className="block overflow-hidden pb-[0.06em]">
//               <span className="ct-line-inner block">{CONTACT.title.line1}</span>
//             </span>
//             <span className="block overflow-hidden pb-[0.06em] md:ml-[12%]">
//               <span className="ct-line-inner block">
//                 {CONTACT.title.line2}{" "}
//                 <span className="font-[bolte] italic" style={{ color: DARK }}>
//                   {CONTACT.title.accent}
//                 </span>
//               </span>
//             </span>
//           </h1>

//           <p
//             className="ct-sub mt-8 max-w-sm font-[NeueRegular] text-lg leading-snug md:ml-[12%] md:mt-10 md:text-2xl"
//             style={{ color: SOFT }}
//           >
//             {CONTACT.sub}
//           </p>
//         </div>

//         {/* Email + WhatsApp sticker */}
//         <div className="flex flex-col gap-12 md:gap-14">
//           {/* Email */}
//           <div className="ct-email">
//             <p className="text-[11px] font-semibold tracking-[0.25em] opacity-80">
//               EMAIL
//             </p>

//             <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-dashed pb-5"
//               style={{ borderColor: `${CREAM}66` }}
//             >
//               <a
//                 href={`mailto:${CONTACT.email}`}
//                 className="group inline-flex items-center gap-2 font-[NeueRegular] text-2xl underline-offset-[6px] transition hover:underline md:text-4xl"
//               >
//                 {CONTACT.email}
//                 <ArrowUpRight
//                   size={26}
//                   strokeWidth={1.6}
//                   className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>
//               <CopyChip value={CONTACT.email} />
//             </div>
//           </div>

//           {/* WhatsApp sticker (white, tilted) = button */}
//           <div className="flex flex-col items-start gap-4 md:items-center">
//             <div className="ct-sticker">
//               <div className="ct-float">
//                 <a
//                   href={waHref}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Chat with us on WhatsApp"
//                   className="group relative block w-[16.5rem] -rotate-6 rounded-md bg-white p-5 pb-4 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-rotate-1 hover:scale-105 md:w-[19rem] md:p-6"
//                 >
//                   <p
//                     className="font-[bolteSemiBold] text-[2rem] uppercase leading-[0.9] tracking-tight md:text-5xl"
//                     style={{ color: BG }}
//                   >
//                     LET'S TALK <span className="text-[0.7em]">✦</span>
//                   </p>

//                   <div className="mt-4 flex items-end justify-between">
//                     <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] md:text-base">
//                       WhatsApp us
//                       <ArrowUpRight
//                         size={18}
//                         strokeWidth={2}
//                         className="transition-transform duration-500 group-hover:rotate-45"
//                       />
//                     </span>

//                     {/* smiley */}
//                     <svg
//                       viewBox="0 0 64 64"
//                       className="h-12 w-12 text-[#0a0a0a] transition-transform duration-500 group-hover:rotate-12 md:h-14 md:w-14"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="3.4"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       aria-hidden
//                     >
//                       <ellipse cx="32" cy="32" rx="26" ry="24" />
//                       <path d="M22 24 v5" />
//                       <path d="M42 24 v5" />
//                       <path d="M20 38 q12 12 24 0" />
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* number + copy */}
//             <div className="flex flex-wrap items-center gap-3 md:justify-center">
//               <span className="font-[NeueRegular] text-base tracking-wide md:text-lg">
//                 {CONTACT.whatsappDisplay}
//               </span>
//               <CopyChip value={CONTACT.whatsappDisplay} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= BOTTOM ================= */}
//       <footer className="ct-bottom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//         <ul className="flex flex-wrap gap-2.5 md:gap-3">
//           {CONTACT.socials.map((s) => (
//             <li key={s.label}>
//               <a
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-[#f8eee8] hover:text-[#ed710c] md:px-6 md:py-3 md:text-base"
//                 style={{ borderColor: `${CREAM}b3`, color: CREAM }}
//               >
//                 {s.label}
//                 <ArrowUpRight
//                   size={15}
//                   strokeWidth={2}
//                   className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>
//             </li>
//           ))}
//         </ul>

//         <p className="text-xs font-medium tracking-[0.2em] md:text-right">
//           {CONTACT.location.toUpperCase()}
//           {CONTACT.hours && (
//             <>
//               <span className="mx-2 opacity-60">·</span>
//               {CONTACT.hours.toUpperCase()}
//             </>
//           )}
//         </p>
//       </footer>
//     </main>
//   );
// }

 

 
// import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
// import gsap from "gsap";
// import { X, ArrowUpRight } from "lucide-react";
// import { useContactModal } from "../Context/ContactModalContext";

// export default function ContactPopup() {
//   const { isContactOpen, closeContact } = useContactModal();
//   const overlayRef = useRef(null);
//   const panelRef = useRef(null);
//   const tlRef = useRef(null);

//   useEffect(() => {
//     if (!overlayRef.current || !panelRef.current) return;
//     tlRef.current?.kill();

//     if (isContactOpen) {
//       document.body.style.overflow = "hidden";
//       const tl = gsap.timeline();
//       tl.set(overlayRef.current, { display: "flex", pointerEvents: "auto" })
//         .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35 })
//         .fromTo(
//           panelRef.current,
//           { y: 60, opacity: 0, scale: 0.97 },
//           { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
//           "-=0.15"
//         );
//       tlRef.current = tl;
//     } else {
//       const tl = gsap.timeline({
//         onComplete: () => {
//           gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" });
//           document.body.style.overflow = "";
//         },
//       });
//       tl.to(panelRef.current, { y: 40, opacity: 0, duration: 0.35, ease: "power2.in" })
//         .to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.1");
//       tlRef.current = tl;
//     }
//     return () => tlRef.current?.kill();
//   }, [isContactOpen]);

//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && closeContact();
//     if (isContactOpen) window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isContactOpen, closeContact]);

//   if (typeof document === "undefined") return null;

//   return createPortal(
//     <div
//       ref={overlayRef}
//       onClick={closeContact}
//       style={{ display: "none" }}
//       className="fixed inset-0 z-[9999] items-center justify-center bg-black/70 px-4 backdrop-blur-md"
//     >
//       <div
//         ref={panelRef}
//         onClick={(e) => e.stopPropagation()}
//         className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0613] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:p-12"
//       >
//         <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
//         <button
//           onClick={closeContact}
//           aria-label="Close"
//           className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-orange-500 hover:text-orange-500"
//         >
//           <X size={18} />
//         </button>

//         <p className="mb-3 text-[10px] tracking-[0.28em] text-orange-500 sm:text-xs">
//           GET IN TOUCH
//         </p>
//         <h2 className="mb-6 font-[bolteSemiBold] text-3xl sm:text-4xl">
//           Let's build something <span className="text-orange-500">bold</span>.
//         </h2>
//         <p className="text-sm text-white/50">
//           Form goes here — or just say hi at hello@weepek.com
//         </p>
//       </div>
//     </div>,
//     document.body
//   );
// }

 
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import { useContactModal } from "../Context/ContactModalContext";

gsap.registerPlugin(useGSAP);

const CONTACT = {
  brand: "WEEPEK",
  title: { line1: "YOUR IDEA.", line2: "OUR", accent: "DETAILS" },
  sub: "Drop us a message, we'll take it from there.",
  email: "	weepek.pvt@gmail.com",
  whatsapp: "918122997612",
  whatsappDisplay: "+91 8122997612",
  whatsappMessage: "Hi Weepek, I'd like to talk about a project.",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/weepekdigital?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    // { label: "Behance", href: "https://behance.net/" },
  ],
  location: "Chennai, India",
  hours: "Mon–Sat, 10:00 – 19:00",
};

const BG = "#ed710c";
const CREAM = "#f8eee8";
const DARK = "#0b0613";
const SOFT = "#ffc9a3";
const ENTER_DELAY = 0.15;

function CopyChip({ value, label = "COPY" }) {
  const [done, setDone] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try { await navigator.clipboard.writeText(value); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setDone(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 hover:bg-[#f8eee8] hover:text-[#ed710c]"
      style={{ borderColor: `${CREAM}99`  }}
    >
      {done ? <Check size={12} strokeWidth={2.2} /> : <Copy size={12} strokeWidth={2} />}
      {done ? "COPIED" : label}
    </button>
  );
}

export default function ContactPopup() {
  const { isContactOpen, closeContact } = useContactModal();

  const overlayRef = useRef(null);
  const rootRef = useRef(null);
  const tlRef = useRef(null);

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  /* ---------- ENTER ---------- */
  useEffect(() => {
    if (!isContactOpen) return;
    const overlay = overlayRef.current;
    const root = rootRef.current;
    if (!overlay || !root) return;

    document.body.style.overflow = "hidden";
    window.__lenis?.stop?.();

    const tl = gsap.timeline({ delay: ENTER_DELAY });
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .from(".ct-top", { y: -16, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.2")
      .from(".ct-line-inner", { yPercent: 115, duration: 0.9, ease: "power4.out", stagger: 0.12 }, "-=0.3")
      .from(".ct-sub", { y: 18, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".ct-email", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.45")
      .from(".ct-sticker", { scale: 0, rotate: -28, opacity: 0, duration: 0.8, ease: "back.out(1.8)" }, "-=0.4")
      .from(".ct-bottom > *", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.4");

    tlRef.current = tl;

    gsap.to(".ct-float", { y: -7, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1 });

    return () => tlRef.current?.kill();
  }, [isContactOpen]);

  /* ---------- EXIT ---------- */
  useEffect(() => {
    if (isContactOpen) return;
    const overlay = overlayRef.current;
    const root = rootRef.current;
    if (!overlay || !root) return;

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        window.__lenis?.start?.();
      },
    });
    tl.to(root, { opacity: 0, y: 30, duration: 0.35, ease: "power2.in" })
      .to(overlay, { opacity: 0, duration: 0.25 }, "-=0.1");
    tlRef.current = tl;
    return () => tlRef.current?.kill();
  }, [isContactOpen]);

  /* ---------- ESC ---------- */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && isContactOpen && closeContact();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isContactOpen, closeContact]);

  if (typeof document === "undefined" || !isContactOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] overflow-y-auto"
      style={{ background: BG, color: CREAM }}
    >
      <main
        ref={rootRef}
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-5 pb-6 pt-5 md:px-10 md:pb-8 md:pt-7"
      >
        {/* TOP BAR */}
        <header className="flex items-center justify-between">
          <span
            className="ct-top font-[bolteSemiBold] text-2xl tracking-tight md:text-3xl"
            style={{ color: CREAM }}
          >
            {CONTACT.brand}
          </span>

          <button
            type="button"
            onClick={closeContact}
            className="ct-top group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:scale-105"
            style={{ background: CREAM, color: "#0a0a0a" }}
          >
            <X size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-90" />
            Close
          </button>
        </header>

        {/* MAIN */}
        <section className="grid flex-1 grid-cols-1 items-center gap-14 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-8">
          <div>
            <h1
              className="font-[bolteSemiBold] uppercase leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem, 8.6vw, 9.5rem)", color: CREAM }}
            >
              <span className="block overflow-hidden pb-[0.02em]">
                <span className="ct-line-inner block">{CONTACT.title.line1}</span>
              </span>
              <span className="block overflow-hidden pb-[0.06em] md:ml-[9%]">
                <span className="ct-line-inner block">
                  {CONTACT.title.line2} 
                  <span className="font-[bolteSemiBold] italic text-[#2b0861]" >
                    {CONTACT.title.accent}
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="ct-sub mt-8 max-w-sm font-[NeueRegular] text-lg leading-snug md:ml-[12%] md:mt-10 md:text-2xl"
              style={{ color: SOFT }}
            >
              {CONTACT.sub}
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-14">
            <div className="ct-email">
              <p className="text-[11px] font-semibold tracking-[0.25em] opacity-80">EMAIL</p>
              <div
                className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-dashed pb-5"
                style={{ borderColor: `${CREAM}66` }}
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 font-[NeueRegular] text-2xl underline-offset-[6px] transition hover:underline md:text-4xl"
                >
                  {CONTACT.email}
                  <ArrowUpRight size={26} strokeWidth={1.6} className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <CopyChip value={CONTACT.email} />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-center">
              <div className="ct-sticker">
                <div className="ct-float">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-[16.5rem] -rotate-6 rounded-md bg-white p-5 pb-4 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-rotate-1 hover:scale-105 md:w-[19rem] md:p-6"
                  >
                    <p
                      className="font-[bolteSemiBold] text-[2rem] uppercase leading-[0.9] tracking-tight md:text-5xl"
                      style={{ color: BG }}
                    >
                      LET'S TALK <span className="text-[0.7em]">✦</span>
                    </p>

                    <div className="mt-4 flex items-end justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] md:text-base">
                        WhatsApp us
                        <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-500 group-hover:rotate-45" />
                      </span>

                      <svg
                        viewBox="0 0 64 64"
                        className="h-12 w-12 text-[#0a0a0a] transition-transform duration-500 group-hover:rotate-12 md:h-14 md:w-14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <ellipse cx="32" cy="32" rx="26" ry="24" />
                        <path d="M22 24 v5" />
                        <path d="M42 24 v5" />
                        <path d="M20 38 q12 12 24 0" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* <div className="flex flex-wrap items-center gap-3 md:justify-center">
                <span className="font-[NeueRegular] text-base tracking-wide md:text-lg">
                  {CONTACT.whatsappDisplay}
                </span>
                <CopyChip value={CONTACT.whatsappDisplay} />
              </div> */}
            </div>
          </div>
        </section>

        {/* BOTTOM */}
        <footer className="ct-bottom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-2.5 md:gap-3" >
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-[#f8eee8] hover:text-black/80 md:px-6 md:py-3 md:text-base"
                  style={{ borderColor: `${CREAM}b3` }}
                >
                  {s.label}
                  <ArrowUpRight size={15} strokeWidth={2} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs font-medium tracking-[0.2em] md:text-right">
            {CONTACT.location.toUpperCase()}
            {CONTACT.hours && (
              <>
                <span className="mx-2 opacity-60">·</span>
                {CONTACT.hours.toUpperCase()}
              </>
            )}
          </p>
        </footer>
      </main>
    </div>,
    document.body
  );
}