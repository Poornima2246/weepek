 
 
// import { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight, Check, Copy, X } from "lucide-react";
// import { useContactModal } from "../Context/ContactModalContext";

// gsap.registerPlugin(useGSAP);

// const CONTACT = {
//   brand: "WEEPEK",
//   title: { line1: "YOUR IDEA.", line2: "OUR", accent: "DETAILS" },
//   sub: "Drop us a message, we'll take it from there.",
//   email: "	weepek.pvt@gmail.com",
//   whatsapp: "918122997612",
//   whatsappDisplay: "+91 8122997612",
//   whatsappMessage: "Hi Weepek, I'd like to talk about a project.",
//   socials: [
//     { label: "Instagram", href: "https://www.instagram.com/weepekdigital?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==" },
//     { label: "LinkedIn", href: "https://linkedin.com/" },
//     // { label: "Behance", href: "https://behance.net/" },
//   ],
//   location: "Chennai, India",
//   hours: "Mon–Sat, 10:00 – 19:00",
// };

// const BG = "#ed710c";
// const CREAM = "#f8eee8";
// const DARK = "#0b0613";
// const SOFT = "#ffc9a3";
// const ENTER_DELAY = 0.15;

// function CopyChip({ value, label = "COPY" }) {
//   const [done, setDone] = useState(false);
//   const timer = useRef(null);
//   useEffect(() => () => clearTimeout(timer.current), []);

//   const copy = async (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     try { await navigator.clipboard.writeText(value); }
//     catch {
//       const ta = document.createElement("textarea");
//       ta.value = value;
//       ta.style.position = "fixed";
//       ta.style.opacity = "0";
//       document.body.appendChild(ta);
//       ta.select();
//       try { document.execCommand("copy"); } catch {}
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
//       style={{ borderColor: `${CREAM}99`  }}
//     >
//       {done ? <Check size={12} strokeWidth={2.2} /> : <Copy size={12} strokeWidth={2} />}
//       {done ? "COPIED" : label}
//     </button>
//   );
// }

// export default function ContactPopup() {
//   const { isContactOpen, closeContact } = useContactModal();

//   const overlayRef = useRef(null);
//   const rootRef = useRef(null);
//   const tlRef = useRef(null);

//   const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

//   /* ---------- ENTER ---------- */
//   useEffect(() => {
//     if (!isContactOpen) return;
//     const overlay = overlayRef.current;
//     const root = rootRef.current;
//     if (!overlay || !root) return;

//     document.body.style.overflow = "hidden";
//     window.__lenis?.stop?.();

//     const tl = gsap.timeline({ delay: ENTER_DELAY });
//     tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
//       .from(".ct-top", { y: -16, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.2")
//       .from(".ct-line-inner", { yPercent: 115, duration: 0.9, ease: "power4.out", stagger: 0.12 }, "-=0.3")
//       .from(".ct-sub", { y: 18, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
//       .from(".ct-email", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.45")
//       .from(".ct-sticker", { scale: 0, rotate: -28, opacity: 0, duration: 0.8, ease: "back.out(1.8)" }, "-=0.4")
//       .from(".ct-bottom > *", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.4");

//     tlRef.current = tl;

//     gsap.to(".ct-float", { y: -7, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1 });

//     return () => tlRef.current?.kill();
//   }, [isContactOpen]);

//   /* ---------- EXIT ---------- */
//   useEffect(() => {
//     if (isContactOpen) return;
//     const overlay = overlayRef.current;
//     const root = rootRef.current;
//     if (!overlay || !root) return;

//     const tl = gsap.timeline({
//       onComplete: () => {
//         document.body.style.overflow = "";
//         window.__lenis?.start?.();
//       },
//     });
//     tl.to(root, { opacity: 0, y: 30, duration: 0.35, ease: "power2.in" })
//       .to(overlay, { opacity: 0, duration: 0.25 }, "-=0.1");
//     tlRef.current = tl;
//     return () => tlRef.current?.kill();
//   }, [isContactOpen]);

//   /* ---------- ESC ---------- */
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && isContactOpen && closeContact();
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isContactOpen, closeContact]);

//   if (typeof document === "undefined" || !isContactOpen) return null;

//   return createPortal(
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-[9999] overflow-y-auto"
//       style={{ background: BG, color: CREAM }}
//     >
//       <main
//         ref={rootRef}
//         className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-5 pb-6 pt-5 md:px-10 md:pb-8 md:pt-7"
//       >
//         {/* TOP BAR */}
//         <header className="flex items-center justify-between">
//           <span
//             className="ct-top font-[bolteSemiBold] text-2xl tracking-tight md:text-3xl"
//             style={{ color: CREAM }}
//           >
//             {CONTACT.brand}
//           </span>

//           <button
//             type="button"
//             onClick={closeContact}
//             className="ct-top group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:scale-105"
//             style={{ background: CREAM, color: "#0a0a0a" }}
//           >
//             <X size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-90" />
//             Close
//           </button>
//         </header>

//         {/* MAIN */}
//         <section className="grid flex-1 grid-cols-1 items-center gap-14 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-8">
//           <div>
//             <h1
//               className="font-[bolteSemiBold] uppercase leading-[0.88] tracking-tight"
//               style={{ fontSize: "clamp(3rem, 8.6vw, 9.5rem)", color: CREAM }}
//             >
//               <span className="block overflow-hidden pb-[0.02em]">
//                 <span className="ct-line-inner block">{CONTACT.title.line1}</span>
//               </span>
//               <span className="block overflow-hidden pb-[0.06em] md:ml-[9%]">
//                 <span className="ct-line-inner block">
//                   {CONTACT.title.line2} 
//                   <span className="font-[bolteSemiBold] italic text-[#2b0861]" >
//                     {CONTACT.title.accent}
//                   </span>
//                 </span>
//               </span>
//             </h1>

//             <p
//               className="ct-sub mt-8 max-w-sm font-[NeueRegular] text-lg leading-snug md:ml-[12%] md:mt-10 md:text-2xl"
//               style={{ color: SOFT }}
//             >
//               {CONTACT.sub}
//             </p>
//           </div>

//           <div className="flex flex-col gap-12 md:gap-14">
//             <div className="ct-email">
//               <p className="text-[11px] font-semibold tracking-[0.25em] opacity-80">EMAIL</p>
//               <div
//                 className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-dashed pb-5"
//                 style={{ borderColor: `${CREAM}66` }}
//               >
//                 <a
//                   href={`mailto:${CONTACT.email}`}
//                   className="group inline-flex items-center gap-2 font-[NeueRegular] text-2xl underline-offset-[6px] transition hover:underline md:text-4xl"
//                 >
//                   {CONTACT.email}
//                   <ArrowUpRight size={26} strokeWidth={1.6} className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//                 </a>
//                 <CopyChip value={CONTACT.email} />
//               </div>
//             </div>

//             <div className="flex flex-col items-start gap-4 md:items-center">
//               <div className="ct-sticker">
//                 <div className="ct-float">
//                   <a
//                     href={waHref}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group relative block w-[16.5rem] -rotate-6 rounded-md bg-white p-5 pb-4 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-rotate-1 hover:scale-105 md:w-[19rem] md:p-6"
//                   >
//                     <p
//                       className="font-[bolteSemiBold] text-[2rem] uppercase leading-[0.9] tracking-tight md:text-5xl"
//                       style={{ color: BG }}
//                     >
//                       LET'S TALK <span className="text-[0.7em]">✦</span>
//                     </p>

//                     <div className="mt-4 flex items-end justify-between">
//                       <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] md:text-base">
//                         WhatsApp us
//                         <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-500 group-hover:rotate-45" />
//                       </span>

//                       <svg
//                         viewBox="0 0 64 64"
//                         className="h-12 w-12 text-[#0a0a0a] transition-transform duration-500 group-hover:rotate-12 md:h-14 md:w-14"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="3.4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         aria-hidden
//                       >
//                         <ellipse cx="32" cy="32" rx="26" ry="24" />
//                         <path d="M22 24 v5" />
//                         <path d="M42 24 v5" />
//                         <path d="M20 38 q12 12 24 0" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>

//               {/* <div className="flex flex-wrap items-center gap-3 md:justify-center">
//                 <span className="font-[NeueRegular] text-base tracking-wide md:text-lg">
//                   {CONTACT.whatsappDisplay}
//                 </span>
//                 <CopyChip value={CONTACT.whatsappDisplay} />
//               </div> */}
//             </div>
//           </div>
//         </section>

//         {/* BOTTOM */}
//         <footer className="ct-bottom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//           <ul className="flex flex-wrap gap-2.5 md:gap-3" >
//             {CONTACT.socials.map((s) => (
//               <li key={s.label}>
//                 <a
//                   href={s.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-[#f8eee8] hover:text-black/80 md:px-6 md:py-3 md:text-base"
//                   style={{ borderColor: `${CREAM}b3` }}
//                 >
//                   {s.label}
//                   <ArrowUpRight size={15} strokeWidth={2} className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <p className="text-xs font-medium tracking-[0.2em] md:text-right">
//             {CONTACT.location.toUpperCase()}
//             {CONTACT.hours && (
//               <>
//                 <span className="mx-2 opacity-60">·</span>
//                 {CONTACT.hours.toUpperCase()}
//               </>
//             )}
//           </p>
//         </footer>
//       </main>
//     </div>,
//     document.body
//   );
// }



import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import { useContactModal } from "../Context/ContactModalContext";

const CONTACT = {
  brand: "WEEPEK",
  title: {
    line1: "YOUR IDEA.",
    line2: "OUR",
    accent: "DETAILS",
  },
  sub: "Drop us a message, we'll take it from there.",
  email: "weepek.pvt@gmail.com",
  whatsapp: "918122997612",
  whatsappDisplay: "+91 8122997612",
  whatsappMessage: "Hi Weepek, I'd like to talk about a project.",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/weepekdigital?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
    },
  ],
  location: "Chennai, India",
  hours: "Mon–Sat, 10:00 – 19:00",
};

const BG = "#ed710c";
const CREAM = "#f8eee8";
const SOFT = "#ffc9a3";
const ENTER_DELAY = 0.15;

function CopyChip({ value, label = "COPY" }) {
  const [done, setDone] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";

      document.body.appendChild(ta);
      ta.select();

      try {
        document.execCommand("copy");
      } catch {}

      document.body.removeChild(ta);
    }

    setDone(true);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDone(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 hover:bg-[#f8eee8] hover:text-[#ed710c]"
      style={{ borderColor: `${CREAM}99` }}
    >
      {done ? (
        <Check size={12} strokeWidth={2.2} />
      ) : (
        <Copy size={12} strokeWidth={2} />
      )}

      {done ? "COPIED" : label}
    </button>
  );
}

export default function ContactPopup() {
  const { isContactOpen, closeContact } = useContactModal();

  const [isRendered, setIsRendered] = useState(false);

  const overlayRef = useRef(null);
  const rootRef = useRef(null);

  const timelineRef = useRef(null);
  const floatTweenRef = useRef(null);

  const originalOverflowRef = useRef("");
  const wasLockedRef = useRef(false);

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  // Keep popup mounted until exit animation finishes.
  useEffect(() => {
    if (isContactOpen) {
      setIsRendered(true);
    }
  }, [isContactOpen]);

  // Lock scrolling while popup is active.
  useEffect(() => {
    if (!isContactOpen) return;

    originalOverflowRef.current = document.body.style.overflow;
    wasLockedRef.current = true;

    document.body.style.overflow = "hidden";

    window.__lenis?.stop?.();

  }, [isContactOpen]);

  // Entrance animation.
  useEffect(() => {
    if (!isContactOpen || !isRendered) return;

    const overlay = overlayRef.current;
    const root = rootRef.current;

    if (!overlay || !root) return;

    // Kill any previous animations.
    timelineRef.current?.kill();
    floatTweenRef.current?.kill();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: ENTER_DELAY,
      });

      tl.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      )
        .from(
          ".ct-top",
          {
            y: -16,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(
          ".ct-line-inner",
          {
            yPercent: 115,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".ct-sub",
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".ct-email",
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".ct-sticker",
          {
            scale: 0,
            rotate: -28,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.8)",
          },
          "-=0.4"
        )
        .from(
          ".ct-bottom > *",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.4"
        );

      timelineRef.current = tl;

      // Keep floating animation lightweight on mobile.
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      floatTweenRef.current = gsap.to(".ct-float", {
        y: isMobile ? -4 : -7,
        duration: isMobile ? 2.4 : 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, root);

    return () => {
      timelineRef.current?.kill();
      floatTweenRef.current?.kill();

      timelineRef.current = null;
      floatTweenRef.current = null;

      ctx.revert();
    };
  }, [isContactOpen, isRendered]);

  // Exit animation.
  useEffect(() => {
    if (isContactOpen || !isRendered) return;

    const overlay = overlayRef.current;
    const root = rootRef.current;

    if (!overlay || !root) {
      setIsRendered(false);
      return;
    }

    // Kill entrance and floating animations before exit.
    timelineRef.current?.kill();
    floatTweenRef.current?.kill();

    const exitTimeline = gsap.timeline({
      onComplete: () => {
        timelineRef.current = null;

        setIsRendered(false);

        if (wasLockedRef.current) {
          document.body.style.overflow =
            originalOverflowRef.current;

          wasLockedRef.current = false;
        }

        window.__lenis?.start?.();
      },
    });

    exitTimeline
      .to(root, {
        opacity: 0,
        y: 30,
        duration: 0.35,
        ease: "power2.in",
      })
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.25,
        },
        "-=0.1"
      );

    timelineRef.current = exitTimeline;

    return () => {
      exitTimeline.kill();
    };
  }, [isContactOpen, isRendered]);

  // Keyboard close.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isContactOpen) {
        closeContact();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [isContactOpen, closeContact]);

  // Restore everything if component unmounts.
  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
      floatTweenRef.current?.kill();

      if (wasLockedRef.current) {
        document.body.style.overflow =
          originalOverflowRef.current;

        window.__lenis?.start?.();
      }
    };
  }, []);

  if (typeof document === "undefined" || !isRendered) {
    return null;
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] overflow-y-auto"
      style={{
        background: BG,
        color: CREAM,
        opacity: isContactOpen ? undefined : 1,
      }}
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
            style={{
              background: CREAM,
              color: "#0a0a0a",
            }}
          >
            <X
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
            Close
          </button>
        </header>

        {/* MAIN */}
        <section className="grid flex-1 grid-cols-1 items-center gap-14 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-8">
          <div>
            <h1
              className="font-[bolteSemiBold] uppercase leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 8.6vw, 9.5rem)",
                color: CREAM,
              }}
            >
              <span className="block overflow-hidden pb-[0.02em]">
                <span className="ct-line-inner block">
                  {CONTACT.title.line1}
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.06em] md:ml-[9%]">
                <span className="ct-line-inner block">
                  {CONTACT.title.line2}{" "}
                  <span className="font-[bolteSemiBold] italic text-[#2b0861]">
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
              <p className="text-[11px] font-semibold tracking-[0.25em] opacity-80">
                EMAIL
              </p>

              <div
                className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-dashed pb-5"
                style={{ borderColor: `${CREAM}66` }}
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 font-[NeueRegular] text-2xl underline-offset-[6px] transition hover:underline md:text-4xl"
                >
                  {CONTACT.email}

                  <ArrowUpRight
                    size={26}
                    strokeWidth={1.6}
                    className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
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

                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="transition-transform duration-500 group-hover:rotate-45"
                        />
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
            </div>
          </div>
        </section>

        {/* BOTTOM */}
        <footer className="ct-bottom flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-2.5 md:gap-3">
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

                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
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
