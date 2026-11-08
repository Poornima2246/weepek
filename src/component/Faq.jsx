// "use client";

// import React, { useRef, useState } from "react";
// import { ArrowUpRight, Plus, Minus } from "lucide-react";

// /* ---------- content ---------- */
// const PAGE_TAG = "WEEPEK / 06";
// const EYEBROW = "QUESTIONS";
// const HEADLINE = ["THE THINGS", "YOU WANT", "TO KNOW"];

// const FAQS = [
//   {
//     question: "How long does it take?",
//     answer:
//       "Every project is different. We define the scope, milestones, and timeline together before work begins, so you know exactly what to expect.",
//   },
//   {
//     question: "How does pricing work?",
//     answer:
//       "Pricing depends on the project scope, complexity, and deliverables. Once we understand your goals, we share a clear proposal with transparent pricing.",
//   },
//   {
//     question: "How many revisions?",
//     answer:
//       "We define the scope, deliverables, and revision rounds before work begins. Our goal is to get the details right through thoughtful collaboration and clear feedback.",
//   },
//   {
//     question: "Do you work with startups?",
//     answer:
//       "Absolutely. We work with startups, growing businesses, and established brands to build digital experiences that support their next stage of growth.",
//   },
//   {
//     question: "What happens after launch?",
//     answer:
//       "Our work doesn't have to end at launch. We can help with ongoing improvements, maintenance, performance optimisation, and future development.",
//   },
//   {
//     question: "Can you redesign my site?",
//     answer:
//       "Yes. We can rethink your existing website's design, user experience, performance, and structure while keeping your business goals at the centre.",
//   },
// ];

// const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number
// const WHATSAPP_MESSAGE =
//   "Hi WEEPEK! I have a few questions about working together.";

// const FOOT_LINE = "SMALL STUDIO, BIG DETAILS.";
// const FOOT_TAG = "FAQ / 06";

// /* ---------- palette ---------- */
// const ORANGE = "#f97316";

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(2);
//   const answerRefs = useRef([]);

//   const toggleFAQ = (index) => {
//     setOpenIndex((current) => (current === index ? null : index));
//   };

//   const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <section
//       id="faq"
//       className="relative w-full overflow-hidden px-5 py-20 text-white sm:px-8 md:px-10 md:py-18 lg:px-16"
//     >
//       <div className="mx-auto max-w-[1600px]">

//         {/* ==========================================
//             TOP META
//         ========================================== */}
//         <div className="mb-12 flex items-center justify-between md:mb-16">
//           <p
//             className="font-[NeueRegular] text-[10px] tracking-[0.3em] md:text-xs"
//             style={{ color: ORANGE }}
//           >
//             {EYEBROW}
//           </p>

//           {/* <span className="font-[NeueRegular] text-[10px] tracking-[0.2em] text-white/40 md:text-xs">
//             {PAGE_TAG}
//           </span> */}
//         </div>

//         {/* ==========================================
//             MAIN LAYOUT
//         ========================================== */}
//         <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">

//           {/* ==========================================
//               LEFT: STICKY CONTENT
//           ========================================== */}
//           <div className="relative lg:col-span-5">
//             <div className="lg:sticky lg:top-24">

//               {/* Headline */}
//               <div className="flex flex-col items-start">
//                 <h2 className="font-[bolteSemiBold] text-[clamp(2.8rem,6.3vw,6.5rem)] leading-[0.91] tracking-[-0.055em]">
//                   {HEADLINE[0]}
//                 </h2>

//                 <h2 className="mt-2 font-[bolteSemiBold] text-[clamp(2.8rem,6.3vw,6.5rem)] leading-[0.91] tracking-[-0.055em]">
//                   {HEADLINE[1]}
//                 </h2>

//                 <h2
//                   className="mt-2 font-[bolteSemiBold] italic text-[clamp(2.8rem,6.3vw,6.5rem)]   leading-[0.91] tracking-[-0.055em]"
//                   style={{ color: ORANGE }}
//                 >
//                   {HEADLINE[2]}
//                 </h2>
//               </div>

//               {/* Contact card */}
//               <div className="mt-14 max-w-[380px] border border-white/15 p-6 sm:p-8 md:mt-20">

//                 {/* Card index */}
//                 <div className="flex items-center justify-between">
//                   <span
//                     className="font-[NeueRegular] text-xs tracking-[0.2em]"
//                     style={{ color: ORANGE }}
//                   >
//                     QUESTIONS 
//                   </span>

//                   {/* <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.4}
//                     className="text-white/40"
//                   /> */}
//                 </div>

//                 {/* Card copy */}
//                 <div className="mt-12">
//                   <p className="font-[bolteSemiBold] text-2xl tracking-[-0.03em] sm:text-3xl">
//                     Still curious?
//                   </p>

//                   <p className="mt-1 font-[NeueRegular] text-base text-white/50 sm:text-lg">
//                     Let&apos;s talk.
//                   </p>
//                 </div>

//                 {/* WhatsApp CTA */}
//                 <a
//                   href={whatsappHref}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group mt-8 inline-flex w-full items-center justify-between border border-white/20 px-5 py-4 font-[NeueRegular] text-xs tracking-[0.15em] transition-colors duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:text-sm"
//                 >
//                   <span>WHATSAPP</span>

//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={1.5}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </a>
//               </div>

//               {/* Sticky label */}
//               {/* <p className="mt-6 hidden font-[NeueRegular] text-[10px] tracking-[0.25em] text-white/25 lg:block">
//                 HERE WHEN YOU NEED US.
//               </p> */}
//             </div>
//           </div>

//           {/* ==========================================
//               RIGHT: FAQ ACCORDION
//           ========================================== */}
//           <div className="lg:col-span-7">

//             <div className="border-t border-white/20">
//               {FAQS.map((faq, index) => {
//                 const isOpen = openIndex === index;

//                 return (
//                   <div
//                     key={faq.question}
//                     className="border-b border-white/20"
//                   >
//                     {/* Question */}
//                     <button
//                       type="button"
//                       onClick={() => toggleFAQ(index)}
//                       aria-expanded={isOpen}
//                       aria-controls={`faq-answer-${index}`}
//                       className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
//                     >
//                       {/* Number */}
//                       <span
//                         className="shrink-0 font-[NeueRegular] text-xs tracking-[0.1em] transition-colors duration-300 sm:text-sm"
//                         style={{
//                           color: isOpen ? ORANGE : "rgba(255,255,255,0.35)",
//                         }}
//                       >
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       {/* Question text */}
//                       <span
//                         className={`flex-1 font-[bolteSemiBold] text-base tracking-[-0.02em] transition-colors duration-300 sm:text-lg md:text-xl lg:text-[22px] ${
//                           isOpen
//                             ? "text-white"
//                             : "text-white/65 group-hover:text-white"
//                         }`}
//                       >
//                         {faq.question}
//                       </span>

//                       {/* Plus / Minus */}
//                       <span
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9"
//                         style={{
//                           borderColor: isOpen
//                             ? ORANGE
//                             : "rgba(255,255,255,0.2)",
//                           color: isOpen ? ORANGE : "rgba(255,255,255,0.65)",
//                         }}
//                       >
//                         {isOpen ? (
//                           <Minus size={16} strokeWidth={1.5} />
//                         ) : (
//                           <Plus size={16} strokeWidth={1.5} />
//                         )}
//                       </span>
//                     </button>

//                     {/* Answer */}
//                     <div
//                       id={`faq-answer-${index}`}
//                       role="region"
//                       aria-label={faq.question}
//                       aria-hidden={!isOpen}
//                       inert={!isOpen}
//                       className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
//                       style={{
//                         gridTemplateRows: isOpen ? "1fr" : "0fr",
//                         opacity: isOpen ? 1 : 0,
//                       }}
//                     >
//                       <div className="overflow-hidden">
//                         <div className="pb-7 pl-10 pr-2 sm:pb-8 sm:pl-14 sm:pr-10">
//                           <p className="max-w-[460px] font-[NeueRegular] text-sm leading-[1.9] text-white/45 sm:text-base">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Bottom note */}
//             {/* <div className="mt-8 flex items-center justify-between gap-4">
//               <span className="font-[NeueRegular] text-[10px] tracking-[0.18em] text-white/30 sm:text-xs">
//                 MORE QUESTIONS?
//               </span>

//               <a
//                 href={whatsappHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-2 font-[NeueRegular] text-xs tracking-[0.1em] transition-colors hover:text-orange-400 sm:text-sm"
//               >
//                 GET IN TOUCH

//                 <ArrowUpRight
//                   size={15}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>
//             </div> */}


//           </div>
//         </div>

//         {/* ==========================================
//             FOOTER
//         ========================================== */}
//         {/* <div className="mt-20 border-t border-white/20 pt-6 md:mt-28 md:pt-8">
//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

//             <p className="font-[bolteSemiBold] text-xs tracking-[0.16em] text-white/55 sm:text-sm">
//               {FOOT_LINE}
//             </p>

//             <span className="font-[NeueRegular] text-[10px] tracking-[0.2em] text-white/30 sm:text-xs">
//               {FOOT_TAG}
//             </span>

//           </div>
//         </div> */}

//       </div>
//     </section>
//   );
// }


   



"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/* ---------- content ---------- */
const PAGE_TAG = "WEEPEK / 06";
const EYEBROW = "QUESTIONS";
const HEADLINE = ["THE THINGS", "YOU WANT", "TO KNOW"];

const FAQS = [
  {
    question: "How long does it take?",
    answer:
      "Every project is different. We define the scope, milestones, and timeline together before work begins, so you know exactly what to expect.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the project scope, complexity, and deliverables. Once we understand your goals, we share a clear proposal with transparent pricing.",
  },
  {
    question: "How many revisions?",
    answer:
      "We define the scope, deliverables, and revision rounds before work begins. Our goal is to get the details right through thoughtful collaboration and clear feedback.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We work with startups, growing businesses, and established brands to build digital experiences that support their next stage of growth.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Our work doesn't have to end at launch. We can help with ongoing improvements, maintenance, performance optimisation, and future development.",
  },
  {
    question: "Can you redesign my site?",
    answer:
      "Yes. We can rethink your existing website's design, user experience, performance, and structure while keeping your business goals at the centre.",
  },
];

const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number
const WHATSAPP_MESSAGE =
  "Hi WEEPEK! I have a few questions about working together.";

const FOOT_LINE = "SMALL STUDIO, BIG DETAILS.";
const FOOT_TAG = "FAQ / 06";

/* ---------- palette ---------- */
const ORANGE = "#f97316";

/* ---------- accordion config ---------- */
const INITIAL_OPEN = 2; // which item is open on first load
const OPEN_PILL_WIDTH = "80%"; // question pill shrinks to this when open

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(INITIAL_OPEN);
  const rootRef = useRef(null);
  const prevOpenRef = useRef(INITIAL_OPEN);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  /* ==========================================
      ENTRANCE ANIMATIONS (scroll triggered)
  ========================================== */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const splits = [];

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = rootRef.current;

        /* Headline chars */
        const headings = Array.from(root.querySelectorAll(".faq-h"));
        const split = new SplitText(headings, { type: "chars" });
        splits.push(split);

        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.025,
          scrollTrigger: {
            trigger: root.querySelector(".faq-head"),
            start: "top 80%",
            once: true,
          },
        });

        /* Contact card */
        gsap.from(root.querySelector(".faq-card"), {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector(".faq-card"),
            start: "top 90%",
            once: true,
          },
        });

        /* Question pills stagger in as they enter the viewport */
        const items = gsap.utils.toArray(root.querySelectorAll(".faq-item"));
        gsap.set(items, { opacity: 0, y: 30 });

        ScrollTrigger.batch(items, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: "auto",
            }),
        });
      });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => {
        splits.forEach((s) => s.revert());
        mm.revert();
      };
    },
    { scope: rootRef }
  );

  /* ==========================================
      OPEN / CLOSE ANIMATIONS (on click)
  ========================================== */
  useGSAP(
    () => {
      const prev = prevOpenRef.current;
      if (prev === openIndex) return; // first render: already in initial state

      const root = rootRef.current;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const k = reduce ? 0.01 : 1; // time multiplier

      const parts = (i) => {
        const item = root.querySelector(`[data-faq="${i}"]`);
        return {
          pill: item.querySelector(".faq-pill"),
          icon: item.querySelector(".faq-icon"),
          panel: item.querySelector(".faq-panel"),
          bubble: item.querySelector(".faq-bubble"),
          badge: item.querySelector(".faq-badge"),
          words: item.querySelectorAll(".ans-word"),
        };
      };

      const closeItem = (i) => {
        const { pill, icon, panel, bubble, badge } = parts(i);
        gsap
          .timeline({ defaults: { overwrite: "auto" } })
          .to(pill, { width: "100%", duration: 0.5 * k, ease: "power3.inOut" }, 0)
          .to(icon, { rotate: 0, duration: 0.4 * k, ease: "power3.out" }, 0)
          .to(
            bubble,
            { opacity: 0, y: -8, duration: 0.25 * k, ease: "power2.in" },
            0
          )
          .to(badge, { scale: 0, duration: 0.25 * k, ease: "power2.in" }, 0)
          .to(
            panel,
            { height: 0, duration: 0.45 * k, ease: "power3.inOut" },
            0.1 * k
          );
      };

      const openItem = (i) => {
        const { pill, icon, panel, bubble, badge, words } = parts(i);
        gsap
          .timeline({
            defaults: { overwrite: "auto" },
            // heights changed, so re-measure triggers further down the page
            onComplete: () => ScrollTrigger.refresh(),
          })
          .to(
            pill,
            { width: OPEN_PILL_WIDTH, x: 0, duration: 0.6 * k, ease: "power3.out" },
            0
          )
          .to(icon, { rotate: 45, duration: 0.4 * k, ease: "power3.out" }, 0)
          .to(
            panel,
            { height: "auto", duration: 0.6 * k, ease: "power3.out" },
            0
          )
          .fromTo(
            bubble,
            { opacity: 0, y: -14, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55 * k, ease: "power3.out" },
            0.05 * k
          )
          .fromTo(
            badge,
            { scale: 0, rotate: -120 },
            { scale: 1, rotate: 0, duration: 0.6 * k, ease: "back.out(2.2)" },
            0.2 * k
          )
          .fromTo(
            words,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4 * k,
              ease: "power2.out",
              stagger: 0.02 * k,
            },
            0.2 * k
          );
      };

      if (prev !== null) closeItem(prev);
      if (openIndex !== null) openItem(openIndex);

      prevOpenRef.current = openIndex;
    },
    { scope: rootRef, dependencies: [openIndex] }
  );

  /* ---------- pill hover (gsap) ---------- */
  const handlePillEnter = (index, e) => {
    if (openIndex === index) return;
    gsap.to(e.currentTarget, {
      x: 8,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handlePillLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={rootRef}
      id="faq"
      className="relative w-full overflow-hidden px-5 py-20 text-white sm:px-8 md:px-10 md:py-18 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* ==========================================
            TOP META
        ========================================== */}
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <p
            className="font-[NeueRegular] text-[10px] tracking-[0.3em] md:text-xs"
            style={{ color: ORANGE }}
          >
            {EYEBROW}
          </p>

          {/* <span className="font-[NeueRegular] text-[10px] tracking-[0.2em] text-white/40 md:text-xs">
            {PAGE_TAG}
          </span> */}
        </div>

        {/* ==========================================
            MAIN LAYOUT
        ========================================== */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">

          {/* ==========================================
              LEFT: STICKY CONTENT
          ========================================== */}
          <div className="relative lg:col-span-5">
            <div className="lg:sticky lg:top-24">

              {/* Headline */}
              <div className="faq-head flex flex-col items-start">
                <h2 className="faq-h font-[bolteSemiBold] text-[clamp(2.8rem,6.3vw,6.5rem)] leading-[0.91] tracking-[-0.055em]">
                  {HEADLINE[0]}
                </h2>

                <h2 className="faq-h mt-2 font-[bolteSemiBold] text-[clamp(2.8rem,6.3vw,6.5rem)] leading-[0.91] tracking-[-0.055em]">
                  {HEADLINE[1]}
                </h2>

                <h2
                  className="faq-h mt-2 font-[bolteSemiBold] italic text-[clamp(2.8rem,6.3vw,6.5rem)]   leading-[0.91] tracking-[-0.055em]"
                  style={{ color: ORANGE }}
                >
                  {HEADLINE[2]}
                </h2>
              </div>

              {/* Contact card */}
              <div className="faq-card mt-14 max-w-[380px] border border-white/15 p-6 sm:p-8 md:mt-20">

                {/* Card index */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-[NeueRegular] text-xs tracking-[0.2em]"
                    style={{ color: ORANGE }}
                  >
                    QUESTIONS 
                  </span>
                </div>

                {/* Card copy */}
                <div className="mt-12">
                  <p className="font-[bolteSemiBold] text-2xl tracking-[-0.03em] sm:text-3xl">
                    Still curious?
                  </p>

                  <p className="mt-1 font-[NeueRegular] text-base text-white/50 sm:text-lg">
                    Let&apos;s talk.
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-full items-center justify-between border border-white/20 px-5 py-4 font-[NeueRegular] text-xs tracking-[0.15em] transition-colors duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:text-sm"
                >
                  <span>WHATSAPP</span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ==========================================
              RIGHT: CHAT STYLE Q&A
          ========================================== */}
          <div className="lg:col-span-7">

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                const isInitial = index === INITIAL_OPEN;

                return (
                  <div
                    key={faq.question}
                    data-faq={index}
                    className="faq-item"
                  >
                    {/* ---------- QUESTION PILL ---------- */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      onMouseEnter={(e) => handlePillEnter(index, e)}
                      onMouseLeave={handlePillLeave}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="faq-pill group flex items-center justify-between gap-4 rounded-bl-none rounded-br-[1.75rem] rounded-tl-[1.75rem] rounded-tr-[1.75rem] border px-6 py-4 text-left transition-colors duration-300 sm:gap-6 sm:px-8 sm:py-5"
                      style={{
                        width: isInitial ? OPEN_PILL_WIDTH : "100%",
                        borderColor: isOpen ? ORANGE : "rgba(255,255,255,0.06)",
                        backgroundColor: isOpen
                          ? "rgba(249,115,22,0.06)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className={`flex-1 font-[bolteSemiBold] text-base tracking-[-0.02em] transition-colors duration-300 sm:text-lg md:text-xl ${
                          isOpen
                            ? "text-white"
                            : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Plus rotates into a cross when open */}
                      <span
                        className="faq-icon flex shrink-0 items-center justify-center"
                        style={{
                          transform: isInitial ? "rotate(45deg)" : "none",
                          color: isOpen ? ORANGE : "rgba(255,255,255,0.55)",
                        }}
                      >
                        <Plus size={18} strokeWidth={1.5} />
                      </span>
                    </button>

                    {/* ---------- ANSWER BUBBLE ---------- */}
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-label={faq.question}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className="faq-panel overflow-hidden"
                      style={{ height: isInitial ? "auto" : 0 }}
                    >
                      <div className="pt-3">
                        <div className="ml-auto flex w-full items-end gap-3 sm:w-[94%] lg:w-[90%]">

                          <div
                            className="faq-bubble flex-1 rounded-bl-[1.75rem] rounded-br-none rounded-tl-[1.75rem] rounded-tr-[1.75rem] border border-white/20 bg-white/[0.03] px-6 py-6 sm:px-9 sm:py-8"
                            style={{ transformOrigin: "top right" }}
                          >
                            <p className="max-w-[460px] font-[NeueRegular] text-sm leading-[1.8] text-white/60 sm:text-base">
                              {faq.answer.split(" ").map((word, wi, arr) => (
                                <React.Fragment key={wi}>
                                  <span className="ans-word inline-block">
                                    {word}
                                  </span>
                                  {wi < arr.length - 1 ? " " : null}
                                </React.Fragment>
                              ))}
                            </p>
                          </div>

                          {/* Number badge */}
                          <span
                            className="faq-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-[NeueRegular] text-sm text-white sm:h-14 sm:w-14 sm:text-lg"
                            style={{ backgroundColor: ORANGE }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}