"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 1,
    title: "Discover the Future",
    description:
      "Experience seamless storytelling with smooth scroll-driven animations. Each section reveals a new visual and narrative as you move through the page.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Immersive Design",
    description:
      "Left side stays locked while the right side scrolls. Perfect for product storytelling, case studies, or portfolio presentations.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smooth Transitions",
    description:
      "Powered by GSAP ScrollTrigger and Lenis for buttery smooth scrolling and precise control over when each image changes.",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Built for Impact",
    description:
      "This pattern works extremely well for landing pages, brand stories, and any content that benefits from sequential visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function ScrollStory() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // --- Lenis smooth scroll ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // --- GSAP ScrollTrigger setup ---
    const ctx = gsap.context(() => {
      // Pin the left media panel
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".media-panel",
        pinSpacing: false,
      });

      // Animate each text section + corresponding image
      textRefs.current.forEach((textEl, index) => {
        if (!textEl) return;

        // Image fade + scale transition
        gsap.fromTo(
          imageRefs.current[index],
          {
            opacity: 0,
            scale: 1.1,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textEl,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play reverse play reverse",
              // markers: true, // uncomment for debugging
            },
          }
        );

        // Text reveal animation
        gsap.fromTo(
          textEl.querySelector(".text-content"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textEl,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* ========== FULL SCREEN INTRO ========== */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Scroll to Explore
          </h1>
          <p className="max-w-xl text-lg text-white/80 md:text-xl">
            A smooth storytelling experience powered by GSAP + Lenis
          </p>
          <div className="mt-12 animate-bounce text-sm tracking-widest uppercase opacity-70">
            Scroll Down
          </div>
        </div>
      </section>

      {/* ========== MAIN STORY SECTION ========== */}
      <section ref={containerRef} className="relative">
        <div className="flex">
          {/* LEFT – Fixed / Pinned Media */}
          <div className="media-panel relative hidden w-1/2 lg:block">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="absolute inset-0 h-full w-full"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Scrolling Text */}
          <div className="w-full lg:w-1/2">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
                className="flex min-h-screen items-center px-8 py-24 lg:px-16"
              >
                <div className="text-content max-w-lg">
                  <span className="mb-4 block text-sm font-medium tracking-widest text-white/50">
                    0{index + 1}
                  </span>
                  <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-white/70">
                    {section.description}
                  </p>

                  {/* Mobile fallback image */}
                  <div className="mt-10 overflow-hidden rounded-2xl lg:hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== END SECTION ========== */}
      <section className="flex h-screen items-center justify-center bg-neutral-950">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">That's the concept</h2>
          <p className="text-white/60">
            Smooth, pinned left media + scrolling right text
          </p>
        </div>
      </section>
    </div>
  );
}