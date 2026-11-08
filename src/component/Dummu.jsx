 

 "use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   CONFIGURATION (matches the hero / work palette)
============================================================ */

const COLORS = {
  orange: "#f97316",
  accent: "#ed710c",
  purpleSoft: "#a78bfa",
  white: "#ffffff",
};

/* ============================================================
   CMS READY CONTENT
============================================================ */

const EYEBROW = "HOW WE WORK";
const HEADING = ["No chaos", "Just craft"];
const FOOTER_LEFT = "CRAFTED WITH PIXEL PERFECTION";
const CTA_LINE = "Ready to start step one?";
const CTA_TEXT = "Start a project";
const CTA_LINK = "#contact";

// const STEPS = [
//   {
//     id: "01",
//     word: "Discover",
//     tags: "Goals · Audience · Research",
//     description:
//       "We start by listening. Your goals, your audience, your competitors. No templates, no assumptions.",
//     time: "Week 1",
//   },
//   {
//     id: "02",
//     word: "Design",
//     tags: "Concepts · Layout · Identity",
//     description:
//       "Concepts, layouts and brand direction you can actually react to. We refine until it feels right.",
//     time: "Week 1-2",
//   },
//   {
//     id: "03",
//     word: "Build",
//     tags: "Code · Motion · Testing",
//     description:
//       "Clean code, smooth motion, real content. You get a live preview link, so you see progress as it happens.",
//     time: "Week 2-4",
//   },
//   {
//     id: "04",
//     word: "Launch",
//     eyebrowExtra: "& Grow",
//     tags: "Go live · Track · Support",
//     description:
//       "We test everything, go live, and stay around. Tracking, tweaks and support after launch.",
//     time: "Ongoing",
//   },
// ];


const STEPS = [
  {
    id: "01",
    word: "Discover",
    tags: "Goals · Research · Strategy",
    description:
      "We take the time to understand your business, your vision, and your goals. Every great partnership begins with understanding what matters most to you.",
    time: "The Beginning",
  },
  {
    id: "02",
    word: "Design",
    tags: "Ideas · Creativity · Direction",
    description:
      "We turn ideas into meaningful experiences through thoughtful design, creative thinking, and strategic direction that connects with your audience.",
    time: "The Vision",
  },
  {
    id: "03",
    word: "Develop",
    tags: "Technology · Innovation · Execution",
    description:
      "We bring ideas to life by combining creativity, technology, and strategy to build digital solutions that help businesses move forward.",
    time: "The Execution",
  },
  {
    id: "04",
    word: "Grow",
     
    tags: "Support · Improvement · Growth",
    description:
      "We believe great work goes beyond delivery. We stay committed to supporting our clients, improving their digital presence, and growing together.",
    time: "The Journey",
  },
];
/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const baseRef = useRef(null);
  const dotRef = useRef(null);
  const barRef = useRef(null);
  const stepRefs = useRef([]);
  const markerRefs = useRef([]);

  const progressRef = useRef(0);
  const lengthRef = useRef(0);
  const distRef = useRef(0);
  const markerXRef = useRef([]);

  const [active, setActive] = useState(-1);
  const [hovered, setHovered] = useState(-1);

  /* ----------------------------------------------------------
     Line + dot follow the horizontal scroll
  ---------------------------------------------------------- */

  const applyProgress = () => {
    const path = pathRef.current;
    const dot = dotRef.current;
    const len = lengthRef.current;
    if (!path || !dot || !len) return;

    const p = progressRef.current;
    const vw = window.innerWidth;

    const targetX = p * distRef.current + vw * 0.55;

    let lo = 0;
    let hi = len;
    for (let k = 0; k < 18; k++) {
      const mid = (lo + hi) / 2;
      if (path.getPointAtLength(mid).x < targetX) lo = mid;
      else hi = mid;
    }
    const drawn = p >= 0.999 ? len : lo;

    path.style.strokeDashoffset = String(len - drawn);

    const pt = path.getPointAtLength(drawn);
    dot.setAttribute("cx", String(pt.x));
    dot.setAttribute("cy", String(pt.y));
    dot.style.opacity = "1";

    if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;

    let idx = -1;
    markerXRef.current.forEach((x, i) => {
      if (targetX >= x - vw * 0.15) idx = i;
    });
    setActive(idx);
  };

  /* ----------------------------------------------------------
     buildPath — idempotent (guarded) so it doesn't re-fire
     the ResizeObserver loop
  ---------------------------------------------------------- */

  const buildPath = () => {
    const track = trackRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const base = baseRef.current;
    if (!track || !svg || !path) return;
    if (window.innerWidth < 768) return;

    const vw = window.innerWidth;
    const box = track.getBoundingClientRect();

    // Skip if element isn't laid out yet
    if (box.width === 0 || box.height === 0) return;

    const pts = markerRefs.current.filter(Boolean).map((m) => {
      const r = m.getBoundingClientRect();
      return {
        x: r.left - box.left + r.width / 2,
        y: r.top - box.top + r.height / 2,
      };
    });
    if (pts.length < 2) return;

    const viewBox = `0 0 ${box.width} ${box.height}`;
    if (svg.getAttribute("viewBox") !== viewBox) {
      svg.setAttribute("viewBox", viewBox);
    }

    const start = { x: vw * 0.06, y: box.height / 2 };
    const end = { x: box.width - vw * 0.45, y: box.height / 2 };
    const all = [start, ...pts, end];

    let d = `M ${all[0].x} ${all[0].y}`;
    for (let i = 1; i < all.length; i++) {
      const a = all[i - 1];
      const b = all[i];
      const midX = (a.x + b.x) / 2;
      d += ` C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
    }

    // Only write if changed → prevents layout thrash / observer loop
    if (path.getAttribute("d") !== d) {
      path.setAttribute("d", d);
      if (base) base.setAttribute("d", d);
    }

    const len = path.getTotalLength();
    if (Math.abs(len - lengthRef.current) > 1) {
      lengthRef.current = len;
      path.style.strokeDasharray = String(len);
    }

    distRef.current = Math.max(0, track.scrollWidth - vw);
    markerXRef.current = pts.map((p) => p.x);

    applyProgress();
  };

  /* ----------------------------------------------------------
     Animations
  ---------------------------------------------------------- */

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mm = gsap.matchMedia();

    /* ---------- DESKTOP: pinned horizontal scroll ---------- */
    mm.add("(min-width: 768px)", () => {
      buildPath();

      if (reduce) {
        section.style.overflowX = "auto";
        progressRef.current = 1;
        applyProgress();
        setActive(STEPS.length - 1);
        return;
      }

      gsap.fromTo(
        "[data-head]",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(track, {
        x: () => -distRef.current,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,       // ← explicit
          pinReparent: false,     // ← explicit: keeps pin-spacer in place
          scrub: 0.6,
          start: "top top",
          end: () => "+=" + distRef.current,
          invalidateOnRefresh: true,
        },
        onUpdate: function () {
          progressRef.current = this.progress();
          applyProgress();
        },
      });

      // Only refreshInit — removed the "refresh" listener that caused the loop
      ScrollTrigger.addEventListener("refreshInit", buildPath);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", buildPath);
      };
    });

    /* ---------- MOBILE: normal vertical flow ---------- */
    mm.add("(max-width: 767px)", () => {
      if (reduce) {
        setActive(STEPS.length - 1);
        return;
      }

      gsap.fromTo(
        "[data-head]",
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    });

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ----------------------------------------------------------
     Rebuild path on real width changes only.
     NO ScrollTrigger.refresh() inside — that caused the loop.
  ---------------------------------------------------------- */

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = null;
    let lastW = 0;

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const w = Math.round(entry.contentRect.width);

      // Skip if width unchanged (pin-spacer insertion only changes height)
      if (w === lastW) return;
      lastW = w;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        buildPath();
        // DO NOT call ScrollTrigger.refresh() here
      });
    });

    ro.observe(track);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => buildPath());
      });
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ----------------------------------------------------------
     Render
  ---------------------------------------------------------- */

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-label="Our process"
      className="pstep-section relative w-full overflow-hidden text-white md:h-screen"
    >
      {/* TOP BAR */}
      <div className="pstep-topbar relative z-20 flex items-start justify-between px-6 pt-24 md:absolute md:inset-x-0 md:top-0 md:px-10 md:pt-10">
        <div className="pstep-topbar-eyebrow-wrap overflow-hidden">
          <p
            data-head
            className="pstep-topbar-eyebrow text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: COLORS.orange }}
          >
            {EYEBROW}
          </p>
        </div>
        {/* <div className="pstep-topbar-counter-wrap overflow-hidden">
          <p
            data-head
            className="pstep-topbar-counter text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-xs"
          >
            PROCESS / {String(STEPS.length).padStart(2, "0")}
          </p>
        </div> */}
      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="pstep-track relative flex flex-col px-6 will-change-transform md:h-full md:w-max md:flex-row md:px-0"
      >
        {/* SVG wavy line */}
        <svg
          ref={svgRef}
          aria-hidden
          className="pstep-svg pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block"
          preserveAspectRatio="none"
        >
          <path
            ref={baseRef}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <path
            ref={pathRef}
            fill="none"
            stroke={COLORS.orange}
            strokeWidth="2"
            strokeLinecap="round"
            style={{ strokeDashoffset: 0 }}
          />
          <circle
            ref={dotRef}
            r="7"
            fill={COLORS.orange}
            style={{
              opacity: 0,
              filter: `drop-shadow(0 0 10px ${COLORS.orange}) drop-shadow(0 0 22px ${COLORS.orange})`,
            }}
          />
        </svg>

        {/* INTRO PANEL */}
        <div className="pstep-intro relative z-10 mt-10 mb-6 md:mb-0 md:mt-0 md:h-full md:w-[70vw] md:shrink-0  ">
          {/* <div className="pstep-intro-heading-wrap md:absolute md:bottom-1/2 md:left-[5vw] md:mb-10">
            <h2 className="pstep-intro-heading text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              <span className="pstep-intro-heading-line block overflow-hidden">
                <span data-head className="pstep-intro-heading-line-1 block font-[bolteSemiBold]">
                  {HEADING[0]}
                </span>
              </span>
              <span className="pstep-intro-heading-line block overflow-hidden">
                <span
                  data-head
                  className="pstep-intro-heading-line-2 block font-[bolteItalic] italic text-[#ed710c]"
                >
                  {HEADING[1]}
                </span>
              </span>
            </h2>
          </div> */}


          <div className="pstep-intro-heading-wrap md:absolute md:bottom-1/2 md:left-[10vw] md:mb-10">
  <h2 className="pstep-intro-heading text-5xl font-semibold leading-[1.15] tracking-tight md:text-7xl lg:text-9xl">
    <span className="pstep-intro-heading-line block overflow-hidden">
      <span
        data-head
        className="pstep-intro-heading-line-1 block font-[bolteSemiBold]"
      >
        {HEADING[0]}
      </span>
    </span>

    <span className="pstep-intro-heading-line block overflow-hidden pb-[0.15em] pr-[0.12em]">
      <span
        data-head
        className="pstep-intro-heading-line-2 block font-[bolteItalic]   text-[#ed710c] md:text-7xl lg:text-9xl" 
      >
        {HEADING[1]}
      </span>
    </span>
  </h2>
</div>

          <p className="pstep-intro-hint hidden text-[10px] uppercase tracking-[0.3em] text-white/40 md:absolute md:left-[8vw] md:top-1/2 md:mt-8 md:block">
            Scroll to explore →
          </p>
        </div>

        {/* STEPS */}
        <ol className="pstep-steps relative z-10 flex flex-col md:h-full md:flex-row">
          {STEPS.map((step, i) => {
            const isActive = active === i;
            const show = isActive || hovered === i;
            const isLast = i === STEPS.length - 1;
            const above = i % 2 === 0;

            return (
              <li
                key={step.id}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
                className="pstep-step relative border-l border-white/10 py-12 pl-8 md:h-full md:w-[65vw] md:shrink-0 md:border-0 md:p-0"
              >
                <div
                  className="pstep-step-line-anchor md:absolute md:left-10 md:right-0 md:h-0"
                  style={{ top: `${above ? 56 : 44}%` }}
                >
                  <span
                    ref={(el) => {
                      markerRefs.current[i] = el;
                    }}
                    aria-hidden
                    className="pstep-step-marker absolute left-0 top-0 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-500 md:block"
                    style={{
                      borderColor:
                        i <= active ? COLORS.orange : "rgba(255,255,255,0.35)",
                      backgroundColor: i <= active ? COLORS.orange : "#0a0a0a",
                    }}
                  />

                  <div
                    className={`pstep-step-content relative md:absolute md:left-0 md:w-[min(52vw,720px)] ${
                      above
                        ? "md:bottom-full md:mb-10"
                        : "md:top-full md:mt-10"
                    }`}
                  >
                    <div className="pstep-step-number-row flex items-center gap-4">
                      <span
                        className="pstep-step-number text-2xl font-black leading-none md:text-4xl"
                        style={{
                          color: isActive ? COLORS.orange : "transparent",
                          WebkitTextStroke: `1px ${
                            isActive ? COLORS.orange : COLORS.purpleSoft + "80"
                          }`,
                          transition:
                            "color .5s, -webkit-text-stroke-color .5s",
                        }}
                      >
                        {step.id}
                      </span>

                      {step.eyebrowExtra && (
                        <span
                          className="pstep-step-eyebrow-extra text-[10px] font-semibold uppercase tracking-[0.3em]"
                          style={{ color: COLORS.orange }}
                        >
                          {step.eyebrowExtra}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`pstep-step-word mt-3 uppercase leading-[0.95] tracking-tight ${
                        isLast
                          ? "font-[bolteItalic]  "
                          : "font-[bolteSemiBold] font-semibold"
                      }`}
                      style={{
                        fontSize: "clamp(3.5rem, 10vw, 9rem)",
                        color: isActive
                          ? isLast
                            ? COLORS.accent
                            : COLORS.white
                          : "transparent",
                        WebkitTextStroke: `1px ${
                          isActive
                            ? isLast
                              ? COLORS.accent
                              : COLORS.white
                            : COLORS.purpleSoft + "80"
                        }`,
                        transform: show
                          ? "translateX(10px)"
                          : "translateX(0)",
                        transition:
                          "color .5s, -webkit-text-stroke-color .5s, transform .5s",
                      }}
                    >
                      {step.word}
                    </h3>

                    <p className="pstep-step-tags mt-4 text-[11px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
                      {step.tags}
                    </p>

                    <div
                      className={`pstep-step-details grid transition-all duration-500 ease-out md:grid-rows-[1fr] ${
                        show
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="pstep-step-details-inner overflow-hidden">
                        <div className="pstep-step-details-row mt-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
                          <p className="pstep-step-description max-w-md text-sm leading-relaxed text-white/60 md:text-base font-[NeueRegular]">
                            {step.description}
                          </p>
                          <span className="pstep-step-time w-fit shrink-0 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA PANEL */}
        {/* <div className="pstep-cta relative z-10 mt-8 flex items-center md:mt-0 md:h-full md:w-[60vw] md:shrink-0 md:pl-[20vw]">
          <div className="pstep-cta-inner flex flex-col items-start gap-6">
            <p className="pstep-cta-line text-sm text-white/60 font-[NeueRegular] md:text-lg">
              {CTA_LINE}
            </p>
            <a
              href={CTA_LINK}
              className="pstep-cta-button group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              {CTA_TEXT}
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="pstep-cta-button-icon transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: COLORS.orange }}
              />
            </a>
          </div>
        </div> */}
      </div>

      {/* BOTTOM BAR */}
      <div className="pstep-bottombar relative z-20 mt-16 px-6 pb-24 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:px-10 md:pb-8">
        <div className="pstep-bottombar-indicators mb-4 hidden items-center gap-4 md:flex">
          {STEPS.map((s, i) => (
            <span
              key={s.id}
              className="pstep-bottombar-indicator text-[10px] uppercase tracking-[0.3em] transition-colors duration-500"
              style={{
                color: i === active ? COLORS.orange : "rgba(255,255,255,0.3)",
              }}
            >
              {s.id}
            </span>
          ))}
        </div>

        <div className="pstep-bottombar-progress-track mb-4 h-px w-full bg-white/15">
          <div
            ref={barRef}
            className="pstep-bottombar-progress-bar h-px w-full origin-left"
            style={{ backgroundColor: COLORS.orange, transform: "scaleX(0)" }}
          />
        </div>

        <div className="pstep-bottombar-meta flex items-center justify-between">
          <span className="pstep-bottombar-meta-left text-[10px] uppercase tracking-[0.3em] text-white/50">
            {FOOTER_LEFT}
          </span>
          <span className="pstep-bottombar-meta-right text-[10px] uppercase tracking-[0.3em] text-white/50">
            PROCESS / {String(STEPS.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}





// "use client";

// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// /* ============================================================
//    CONFIGURATION (matches the hero / work palette)
// ============================================================ */

// const COLORS = {
//   orange: "#f97316",
//   accent: "#ed710c",
//   purpleSoft: "#a78bfa",
//   white: "#ffffff",
// };

// /* ============================================================
//    CMS READY CONTENT
// ============================================================ */

// const EYEBROW = "HOW WE WORK";
// const HEADING = ["No chaos.", "Just craft."];
// const FOOTER_LEFT = "SMALL STUDIO, BIG DETAILS";
// const CTA_LINE = "Ready to start step one?";
// const CTA_TEXT = "Start a project";
// const CTA_LINK = "#contact";

// const STEPS = [
//   {
//     id: "01",
//     word: "Discover",
//     tags: "Goals · Audience · Research",
//     description:
//       "We start by listening. Your goals, your audience, your competitors. No templates, no assumptions.",
//     time: "Week 1",
//   },
//   {
//     id: "02",
//     word: "Design",
//     tags: "Concepts · Layout · Identity",
//     description:
//       "Concepts, layouts and brand direction you can actually react to. We refine until it feels right.",
//     time: "Week 1-2",
//   },
//   {
//     id: "03",
//     word: "Build",
//     tags: "Code · Motion · Testing",
//     description:
//       "Clean code, smooth motion, real content. You get a live preview link, so you see progress as it happens.",
//     time: "Week 2-4",
//   },
//   {
//     id: "04",
//     word: "Launch",
//     eyebrowExtra: "& Grow",
//     tags: "Go live · Track · Support",
//     description:
//       "We test everything, go live, and stay around. Tracking, tweaks and support after launch.",
//     time: "Ongoing",
//   },
// ];

// /* zig-zag alignment on desktop: left -> center -> right -> left */
// const ALIGN = [
//   "md:self-start",
//   "md:self-center",
//   "md:self-end",
//   "md:self-start",
// ];

// /* ============================================================
//    MAIN COMPONENT
// ============================================================ */

// export default function ProcessSection() {
//   const sectionRef = useRef(null);
//   const listRef = useRef(null);
//   const svgRef = useRef(null);
//   const pathRef = useRef(null);
//   const trackRef = useRef(null);
//   const dotRef = useRef(null);
//   const stepRefs = useRef([]);
//   const markerRefs = useRef([]);

//   const progressRef = useRef(0);
//   const lengthRef = useRef(0);

//   const [active, setActive] = useState(0);
//   const [hovered, setHovered] = useState(-1);

//   /* ----------------------------------------------------------
//      Build the curved path through the step markers
//   ---------------------------------------------------------- */

//   const applyProgress = () => {
//     const path = pathRef.current;
//     const dot = dotRef.current;
//     const len = lengthRef.current;
//     if (!path || !dot || !len) return;

//     const p = progressRef.current;
//     path.style.strokeDashoffset = String(len * (1 - p));

//     const pt = path.getPointAtLength(len * p);
//     dot.setAttribute("cx", String(pt.x));
//     dot.setAttribute("cy", String(pt.y));
//     dot.style.opacity = p > 0.003 ? "1" : "0";
//   };

//   const buildPath = () => {
//     const list = listRef.current;
//     const svg = svgRef.current;
//     const path = pathRef.current;
//     const track = trackRef.current;
//     if (!list || !svg || !path) return;

//     const box = list.getBoundingClientRect();
//     const pts = markerRefs.current
//       .filter(Boolean)
//       .map((m) => {
//         const r = m.getBoundingClientRect();
//         return { x: r.left - box.left, y: r.top - box.top };
//       });

//     if (pts.length < 2) return;

//     svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);

//     // start a little above the first marker
//     const start = { x: pts[0].x, y: Math.max(0, pts[0].y - 60) };
//     const all = [start, ...pts];

//     let d = `M ${all[0].x} ${all[0].y}`;
//     for (let i = 1; i < all.length; i++) {
//       const a = all[i - 1];
//       const b = all[i];
//       const midY = (a.y + b.y) / 2;
//       d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
//     }

//     path.setAttribute("d", d);
//     if (track) track.setAttribute("d", d);

//     const len = path.getTotalLength();
//     lengthRef.current = len;
//     path.style.strokeDasharray = String(len);
//     applyProgress();
//   };

//   /* ----------------------------------------------------------
//      Animations
//   ---------------------------------------------------------- */

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const list = listRef.current;
//     if (!section || !list) return;

//     const reduce = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const ctx = gsap.context(() => {
//       buildPath();

//       if (reduce) {
//         progressRef.current = 1;
//         applyProgress();
//         return;
//       }

//       /* heading reveal */
//       gsap.fromTo(
//         "[data-head]",
//         { yPercent: 100, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
//         {
//           yPercent: 0,
//           opacity: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 0.9,
//           ease: "power3.out",
//           stagger: 0.08,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 75%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );

//       /* line draws with scroll */
//       ScrollTrigger.create({
//         trigger: list,
//         start: "top 60%",
//         end: "bottom 60%",
//         onUpdate: (self) => {
//           progressRef.current = self.progress;
//           applyProgress();
//         },
//       });

//       /* active step detection */
//       stepRefs.current.forEach((el, i) => {
//         if (!el) return;
//         ScrollTrigger.create({
//           trigger: el,
//           start: "top 55%",
//           end: "bottom 55%",
//           onToggle: (self) => {
//             if (self.isActive) setActive(i);
//           },
//         });
//       });

//       ScrollTrigger.addEventListener("refreshInit", buildPath);
//       ScrollTrigger.addEventListener("refresh", buildPath);
//     }, section);

//     return () => {
//       ScrollTrigger.removeEventListener("refreshInit", buildPath);
//       ScrollTrigger.removeEventListener("refresh", buildPath);
//       ctx.revert();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /* rebuild path when layout changes (resize, fonts, images) */
//   useEffect(() => {
//     const list = listRef.current;
//     if (!list) return;

//     const ro = new ResizeObserver(() => {
//       buildPath();
//       ScrollTrigger.refresh();
//     });
//     ro.observe(list);

//     if (document.fonts && document.fonts.ready) {
//       document.fonts.ready.then(() => {
//         buildPath();
//         ScrollTrigger.refresh();
//       });
//     }

//     return () => ro.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /* ----------------------------------------------------------
//      Render
//   ---------------------------------------------------------- */

//   return (
//     <section
//       id="process"
//       ref={sectionRef}
//       aria-label="Our process"
//       className="relative w-full overflow-hidden py-24 text-white md:py-36"
//     >
//       <div className="mx-auto max-w-9xl px-6 md:px-10">
//         {/* ====================================================
//             HEADER
//         ==================================================== */}

//         <div className="flex items-start justify-between gap-6">
//           <div>
//             <div className="overflow-hidden">
//               <p
//                 data-head
//                 className="text-xs font-semibold uppercase tracking-[0.3em]"
//                 style={{ color: COLORS.orange }}
//               >
//                 {EYEBROW}
//               </p>
//             </div>

//             <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
//               <span className="block overflow-hidden">
//                 <span data-head className="block font-[bolteSemiBold]">
//                   {HEADING[0]}
//                 </span>
//               </span>
//               <span className="block overflow-hidden">
//                 <span
//                   data-head
//                   className="block font-[bolte] italic text-[#ed710c]"
//                 >
//                   {HEADING[1]}
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="overflow-hidden">
//             <p
//               data-head
//               className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-xs"
//             >
//               PROCESS / {String(STEPS.length).padStart(2, "0")}
//             </p>
//           </div>
//         </div>

//         {/* ====================================================
//             STEP LIST + DRAWING LINE
//         ==================================================== */}

//         <div ref={listRef} className="relative mt-16 md:mt-24">
//           {/* SVG line (behind text) */}
//           <svg
//             ref={svgRef}
//             aria-hidden
//             className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
//             preserveAspectRatio="none"
//           >
//             <path
//               ref={trackRef}
//               fill="none"
//               stroke="rgba(255,255,255,0.08)"
//               strokeWidth="1"
//             />
//             <path
//               ref={pathRef}
//               fill="none"
//               stroke={COLORS.orange}
//               strokeWidth="2"
//               strokeLinecap="round"
//               style={{ strokeDashoffset: 0 }}
//             />
//             <circle
//               ref={dotRef}
//               r="7"
//               fill={COLORS.orange}
//               style={{
//                 opacity: 0,
//                 filter: `drop-shadow(0 0 10px ${COLORS.orange}) drop-shadow(0 0 22px ${COLORS.orange})`,
//               }}
//             />
//           </svg>

//           <ol className="relative z-10 flex flex-col">
//             {STEPS.map((step, i) => {
//               const isActive = active === i;
//               const show = isActive || hovered === i;
//               const isLast = i === STEPS.length - 1;

//               return (
//                 <li
//                   key={step.id}
//                   ref={(el) => {
//                     stepRefs.current[i] = el;
//                   }}
//                   onMouseEnter={() => setHovered(i)}
//                   onMouseLeave={() => setHovered(-1)}
//                   className={`relative flex min-h-[52vh] w-full flex-col justify-center py-10 pl-10 md:min-h-[60vh] md:w-[62%] md:pl-12 ${ALIGN[i]}`}
//                 >
//                   {/* number + eyebrow (line anchors here) */}
//                   <div className="relative flex items-center gap-4">
//                     <span
//                       ref={(el) => {
//                         markerRefs.current[i] = el;
//                       }}
//                       aria-hidden
//                       className="absolute -left-10 top-1/2 h-0 w-0 md:-left-12"
//                     />
//                     <span
//                       className="text-2xl font-black leading-none md:text-4xl"
//                       style={{
//                         color: isActive ? COLORS.orange : "transparent",
//                         WebkitTextStroke: `1px ${
//                           isActive ? COLORS.orange : COLORS.purpleSoft + "80"
//                         }`,
//                         transition: "color .5s, -webkit-text-stroke-color .5s",
//                       }}
//                     >
//                       {step.id}
//                     </span>

//                     {step.eyebrowExtra && (
//                       <span
//                         className="text-[10px] font-semibold uppercase tracking-[0.3em]"
//                         style={{ color: COLORS.orange }}
//                       >
//                         {step.eyebrowExtra}
//                       </span>
//                     )}
//                   </div>

//                   {/* GIANT WORD */}
//                   <h3
//                     className={`mt-3 uppercase leading-[0.95] tracking-tight ${
//                       isLast
//                         ? "font-[bolte] italic"
//                         : "font-[bolteSemiBold] font-semibold"
//                     }`}
//                     style={{
//                       fontSize: "clamp(3.5rem, 12vw, 10rem)",
//                       color: isActive
//                         ? isLast
//                           ? COLORS.accent
//                           : COLORS.white
//                         : "transparent",
//                       WebkitTextStroke: `1px ${
//                         isActive
//                           ? isLast
//                             ? COLORS.accent
//                             : COLORS.white
//                           : COLORS.purpleSoft + "80"
//                       }`,
//                       transform: show ? "translateX(10px)" : "translateX(0)",
//                       transition:
//                         "color .5s, -webkit-text-stroke-color .5s, transform .5s",
//                     }}
//                   >
//                     {step.word}
//                   </h3>

//                   {/* tags (always visible, dim) */}
//                   <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
//                     {step.tags}
//                   </p>

//                   {/* description + time (reveals when active / hovered) */}
//                   <div
//                     className="grid transition-all duration-500 ease-out"
//                     style={{
//                       gridTemplateRows: show ? "1fr" : "0fr",
//                       opacity: show ? 1 : 0,
//                     }}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
//                         <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base font-[NeueRegular]">
//                           {step.description}
//                         </p>
//                         <span className="w-fit shrink-0 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">
//                           {step.time}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ol>
//         </div>

//         {/* ====================================================
//             CTA + FOOTER LINE
//         ==================================================== */}

//         <div className="mt-8 flex flex-col items-start gap-6 md:mt-16 md:flex-row md:items-center md:gap-8">
//           <a
//             href={CTA_LINK}
//             className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
//           >
//             {CTA_TEXT}
//             <ArrowUpRight
//               size={17}
//               strokeWidth={1.8}
//               className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               style={{ color: COLORS.orange }}
//             />
//           </a>
//           <p className="text-sm text-white/60 font-[NeueRegular]">{CTA_LINE}</p>
//         </div>

//         <div className="mt-16 md:mt-20">
//           <div className="mb-4 h-px w-full bg-white/15">
//             <div
//               className="h-px w-2/5"
//               style={{ backgroundColor: COLORS.orange }}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
//               {FOOTER_LEFT}
//             </span>
//             <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
//               PROCESS / {String(STEPS.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }