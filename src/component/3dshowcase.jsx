 

import { useEffect, useRef, useState } from "react";
import '../App.css';
/* ---------- image imports (replace with real project shots) ---------- */
import web from "../assets/shinobi_mockup.png";
import web1 from "../assets/tada_mockup.png";
import Branding from '../assets/Branding_mockup.png';
import Branding1 from '../assets/Branding1_mockup.png'
import white3 from "../assets/lap2.jpg";
import portrait4 from "../assets/lap3.jpg";
import north5 from "../assets/lap.jpg";
import maple6 from "../assets/lap1.jpg";


/* ---------- content (edit here) ---------- */
const HEADLINE = ["Built to be", "remembered."];
const SUBTEXT =
  "One of the best picks for your Digital Growth..";
const PRIMARY_CTA = "know More About us ";
const SECONDARY_CTA = "See the work";

// service tag on cards: Web | App | Brand | SEO | Marketing | Design | Video | RPA
const PROJECTS = [
  { name: "Sage", service: "Web & UIUX", year: "2026", img: web },
  { name: "Tadaa", service: "Ecom Website & UIUX", year: "2026", img: web1 },
  { name: "DessertDen", service: "Branding", year: "2025", img: Branding },
  { name: "Portrait Co.", service: "Web", year: "2024", img: Branding1 },
  { name: "North Avenue", service: "SEO", year: "2025", img: white3 },
  // { name: "Maple & Co.", service: "Brand", year: "2024", img: maple6 },
];

/* 8 services -> 3 pillars (tags = short labels shown in the compact rows) */
const PILLARS = [
 
  {
    id: "brand",
    no: "01",
    title: "Brand",
    text: "Identities and creatives people remember.",
    tags: ["Logo", "Design", "Motion"],
    services: [
      "Logo & Brand Identity",
      "Graphic Design & Creatives",
      "Video Editing & Motion",
    ],
  },
   {
    id: "build",
    no: "02",
    title: "Build",
    text: "Websites, apps and systems that scale with you.",
    tags: ["Websites", "Apps", "RPA"],
    services: [
      "Custom Website Development",
      "Mobile App Development",
      "Robotic Process Automation",
    ],
  },
  {
    id: "grow",
    no: "03",
    title: "Grow",
    text: "Get found, get remembered, get leads.",
    tags: ["SEO", "Digital Marketing"],
    services: ["SEO Optimization", "Digital Marketing"],
  },
];

const SERVICES_ROUTE = "/services"; // route of the full services page

/* ---------- palette (shader bg is dark purple) ---------- */
const ORANGE = "#f97316";
const PURPLE_SOFT = "#a78bfa";

/* ---------- tweak these ---------- */
const CARD_W = 330; // card width  og 230
const CARD_H = 450; // card height  og 300
const ARC_GAP = 1.25; // wheel radius multiplier
const ROW_GAP = 50; // px gap between cards in row mode
const COUNT = 10; // cards on the wheel
const PIVOT = 1.25; // wheel center (x viewport height). bigger = cards lower
const ACTIVE_SCALE = 0.15; // extra size of the centered card
/* --------------------------------- */

const STEP = 360 / COUNT;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function WeepekShowreel() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const cardRefs = useRef([]);
  const captionRef = useRef(null);

  const rotationRef = useRef(0);
  const velocityRef = useRef(0.04);
  const progressRef = useRef(0);
  const activeRef = useRef(0);
  const dragRef = useRef({ active: false, lastX: 0 });

  const [active, setActive] = useState(0);
  const [dimensions, setDimensions] = useState({
    radius: 380,
    w: CARD_W,
    h: CARD_H,
    pivot: PIVOT,
  });

  /* ---------- responsive sizing ---------- */
  useEffect(() => {
    const fit = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // scale cards: full size on desktop, shrink proportionally on tablet/mobile
      const scale = Math.min(1, Math.max(0.42, vw / 1200));
      const w = CARD_W * scale;
      const h = CARD_H * scale;

      // radius: on tablets, cap it so cards stay on screen
      const radius =
        Math.max(280, Math.min(vw * 0.55, vh * 0.55)) * ARC_GAP;

      // pivot: lower the wheel center on short screens so top card stays visible
      const pivot = vw < 768 ? 1.15 : vw < 1024 ? 1.2 : PIVOT;

      setDimensions({ radius, w, h, pivot });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  /* ---------- scroll progress ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (!section2Ref.current) return;
      const s2 = section2Ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.35;
      const raw = 1 - (s2.top - end) / (start - end);
      progressRef.current = clamp(raw, 0, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- animation loop ---------- */
  useEffect(() => {
    let raf;

    const tick = () => {
      const progress = progressRef.current;
      const { radius, w, h, pivot } = dimensions;
      // gap between cards in row mode shrinks proportionally to card size
      const spacing = w + (ROW_GAP * (w / CARD_W));

      // spin only in pure arc mode
      if (!dragRef.current.active && progress < 0.03) {
        rotationRef.current += velocityRef.current;
        velocityRef.current += (0.04 - velocityRef.current) * 0.04;
      } else {
        velocityRef.current *= 0.9;
      }

      const rotation = rotationRef.current;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      const pivotX = vw / 2;
      const pivotY = vh * pivot;

      // row sits at the top of section 2
      let rowCenterY = vh * 0.5;
      if (section2Ref.current) {
        const s2 = section2Ref.current.getBoundingClientRect();
        rowCenterY = s2.top + 70 + h / 2;
      }

      let bestIdx = 0;
      let bestDist = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const angleDeg = rotation + i * STEP;
        const angleRad = (angleDeg * Math.PI) / 180;

        const arcX = pivotX + Math.sin(angleRad) * radius;
        const arcY = pivotY - Math.cos(angleRad) * radius;

        const rowX = vw / 2 + (i - (COUNT - 1) / 2) * spacing;
        const rowY = rowCenterY;

        const norm = ((((angleDeg + 180) % 360) + 360) % 360) - 180;
        const dist = Math.abs(norm);

        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }

        // the card at the top center grows a little
        const focus = clamp(1 - dist / STEP, 0, 1);
        const scale = 1 + ACTIVE_SCALE * focus * (1 - progress);

        const x = lerp(arcX, rowX, progress);
        const y = lerp(arcY, rowY, progress);
        const rot = lerp(norm, 0, progress); // outward fan -> upright row

        card.style.position = "fixed";
        card.style.left = "0";
        card.style.top = "0";
        card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
        card.style.zIndex = progress > 0.4 ? 30 : 20 + Math.round(focus * 5);
      });

      // active project caption (fixed under the top-center card)
      if (captionRef.current) {
        const capY = Math.min(
          pivotY - radius + (h * (1 + ACTIVE_SCALE)) / 2 + 28,
          vh * 0.85
        );
        captionRef.current.style.transform = `translate(${vw / 2}px, ${capY}px) translate(-50%, 0)`;
        captionRef.current.style.opacity = String(clamp(1 - progress * 3, 0, 1));
      }

      if (progress < 0.5 && bestIdx !== activeRef.current) {
        activeRef.current = bestIdx;
        setActive(bestIdx);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dimensions]);

  /* ---------- pointer interaction ---------- */
  const onDown = (e) => {
    if (progressRef.current > 0.05) return;
    dragRef.current.active = true;
    dragRef.current.lastX = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onMove = (e) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;
    rotationRef.current += dx * 0.12;
    velocityRef.current = dx * 0.12;
  };

  const onUp = () => {
    dragRef.current.active = false;
  };

  const onWheel = (e) => {
    if (progressRef.current > 0.05) return;
    rotationRef.current += e.deltaY * 0.05;
    velocityRef.current = e.deltaY * 0.02;
  };

  const current = PROJECTS[active % PROJECTS.length];
  const serviceCount = PILLARS.reduce((n, p) => n + p.services.length, 0);

  return (
    <>
      {/* ========== SECTION 1 : HERO ========== */}
      <section
        ref={section1Ref}
        className="relative h-screen w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onWheel={onWheel}
      >
        {/* giant outlined wordmark (behind cards) */}
        <div
          className="pointer-events-none absolute top-[36%] left-1/2 md:top-[24%] -translate-x-1/2 whitespace-nowrap text-[22vw] leading-none tracking-[0.12em] font-[Gotuna]  "
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(245, 143, 60, 0.25)",
          }}
          aria-hidden
        >
          WEEPEK
        </div>

        {/* headline (left) + subtext (right) */}
        <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex flex-col justify-between gap-6 px-6 text-white md:top-28 md:flex-row md:items-start md:px-10">
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {HEADLINE[0]}
            <br />
            {HEADLINE[1]}
          </h1>
          <p className="max-w-[260px] text-sm leading-relaxed text-white/55 md:text-right font-[NeueRegular]">
            {SUBTEXT}
          </p>
        </div>

        {/* bottom row */}
        <div className="absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-5 font-[bolteSemiBold]">
             <span className="text-[10px] md:text-xs tracking-[0.25em] text-[#f97316]/50 ">
            To Know More About us 
          </span>
            {/* <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              {PRIMARY_CTA}
            </a> */}
            {/* <a
              href="#work"
              className="hidden text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline sm:inline"
            >
              {SECONDARY_CTA}
            </a> */}
          </div>
          <span className="text-[5px] md:text-xs tracking-[0.25em] text-white/50">
            SCROLL ↓
          </span>
        </div>
      </section>

      {/* ========== SECTION 2 : ROW + SERVICES (split layout) ========== */}
      <section id="work" ref={section2Ref} className="relative w-full">
        {/* space for the card row (card bottom sits at 70 + h) */}
        <div style={{ height: dimensions.h + 140 }} aria-hidden />

        <div className="mx-auto max-w-9xl px-6 pb-20 md:px-10">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-16">
            {/* LEFT : eyebrow + heading + CTA */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.3em]"
                  style={{ color: ORANGE }}
                >
                  OUR SERVICES
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-4xl lg:text-7xl">
                  Three pillars
                  <br />
                  One <span className= 'font-[bolteItalic] text-[#ed710c]'>studio</span>
                </h2>
              </div>

              <div className="flex flex-col items-start gap-3">
                <a
                  href={SERVICES_ROUTE}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                >
                  Show all services
                  <span
                    className="transition group-hover:translate-x-1"
                    style={{ color: ORANGE }}
                  >
                    →
                  </span>
                </a>
                <p className="text-[11px] tracking-[0.25em] text-white/40">
                  {serviceCount} SERVICES · {PILLARS.length} PILLARS
                </p>
              </div>
            </div>

            {/* RIGHT : 3 slim one-line rows */}
            <div className="border-t border-white/15">
              {PILLARS.map((p) => (
                <a
                  key={p.id}
                  href={`${SERVICES_ROUTE}?pillar=${p.id}`}
                  className="group relative flex items-center gap-4 border-b border-white/15 py-5 md:gap-8 md:py-6"
                >
                  {/* orange line that fills on hover */}
                  <span
                    className="pointer-events-none absolute -bottom-px left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: ORANGE }}
                  />

                  <span
                    className="w-10 text-xl font-black md:w-16 md:text-3xl"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: `1px ${PURPLE_SOFT}80`,
                    }}
                  >
                    {p.no}
                  </span>

                  <h3 className="w-24 text-2xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 md:w-32 md:text-3xl lg:w-40 lg:text-4xl font-[bolteSemiBold]">
                    {p.title}
                  </h3>

                  <p className="flex-1 text-xs leading-relaxed text-white/60 md:text-sm">
                    {p.tags.join("  ·  ")}
                  </p>

                  <span className="text-xl text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACTIVE PROJECT CAPTION ========== */}
      <div
        ref={captionRef}
        className="pointer-events-none fixed left-0 top-0 z-40 text-center text-white"
        style={{ willChange: "transform, opacity" }}
      >
        <p className="text-lg font-medium">{current.name}</p>
        <p className="mt-1 text-xs tracking-[0.2em] text-white/60">
          {current.service.toUpperCase()} · {current.year}
        </p>
      </div>

      {/* ========== SHARED CARD LAYER ========== */}
<div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
  {Array.from({ length: COUNT }).map((_, i) => {
    const p = PROJECTS[i % PROJECTS.length];

    return (
      <div
        key={i}
        ref={(el) => {
          cardRefs.current[i] = el;
        }}
        className="absolute overflow-hidden shadow-2xl shadow-black/40 will-change-transform"
        style={{
          width: dimensions.w,
          height: dimensions.h,
          isolation: "isolate",
        }}
      >
        {/* PROJECT IMAGE */}
        <img
          src={p.img}
          alt={p.name}
          className="h-full w-full object-cover"
          draggable={false}
        />

        {/* CINEMATIC FILM GRAIN */}
       <div
  className="project-grain absolute inset-0 z-10 pointer-events-none"
  aria-hidden="true"
/>

        {/* SERVICE TAG */}
        <span className="absolute bottom-3 left-3 z-20 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
          {p.service}
        </span>
      </div>
    );
  })}
</div>
    </>
  );
}