
import React, { useRef, useCallback, memo, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
import "./LandingPage2.css";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useCalendly = () => {
  const scriptLoaded = useRef(false);

  const loadCalendly = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (scriptLoaded.current) return resolve();
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  const openCalendlyPopup = useCallback(async () => {
    try {
      await loadCalendly();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } catch {
      window.open(CALENDLY_URL, "_blank");
    }
  }, [loadCalendly]);

  return { openCalendlyPopup };
};

const CreativeButton = memo(() => {
  const { openCalendlyPopup } = useCalendly();

  return (
    <motion.button
      onClick={openCalendlyPopup}
      aria-label="Book a meeting with Weepek web development team"
      className="relative inline-flex items-center gap-2 px-3 md:px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <CalendarDays className="w-3 h-3 md:w-5 md:h-5" />
        Book a Meeting
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
      </span>
      <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
    </motion.button>
  );
});

const Particle = memo(({ type, count }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `${type}-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
      animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 2}s`
    }));
  }, [type, count]);

  return particles.map(
    ({ id, left, top, animationDelay, animationDuration }) => (
      <div
        key={id}
        className={type}
        style={{
          left,
          top,
          animationDelay,
          animationDuration,
          position: "absolute"
        }}
        aria-hidden="true"
      />
    )
  );
});

const LandingPage = () => {
  const containerRef = useRef(null);
  const titleCharsRef = useRef([]);

  const setupHoverAnimations = useCallback(() => {
    titleCharsRef.current.forEach((char) => {
      const chars = char.querySelectorAll(".char");

      chars.forEach((c) => {
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
          .to(c, {
            y: -15,
            scale: 1.2,
            color: "#a5c4f0",
            duration: 0.2,
            ease: "power2.out"
          })
          .to(c, {
            y: 0,
            scale: 1,
            color: "#5813f3",
            duration: 0.3,
            ease: "bounce.out"
          })
          .to(
            c,
            {
              color: "transparent",
              backgroundImage:
                "linear-gradient(305deg, #a5c4f0, #f1eff7, #8958f7)",
              backgroundClip: "text",
              duration: 0.4
            },
            ">"
          )
          .to(
            c,
            {
              color: "transparent",
              backgroundImage: "none",
              duration: 0.3
            },
            "0.2"
          );

        c.addEventListener("mouseenter", () => hoverTl.restart());
        c.addEventListener("mouseleave", () => {
          gsap.to(c, {
            y: 0,
            scale: 1,
            color: "transparent",
            backgroundImage: "linear-gradient(45deg,#f1eff7, #f1eff7, #8958f7)",
            backgroundClip: "text",
            duration: 0.3
          });
        });
      });
    });
  }, []);

  useGSAP(
    () => {
      // Title animation setup
      const titleSplit = new SplitText(".landing-hero-title", {
        type: "chars,words",
        charsClass: "char",
        wordsClass: "word"
      });

      // Store references to the word elements
      titleCharsRef.current = gsap.utils.toArray(".word");

      // Set initial state for each character
      gsap.set(".char", {
        opacity: 0,
        y: 40,
        rotationX: 90,
        transformOrigin: "50% 50% -50",
        display: "inline-block"
      });

      // Title animation timeline - faster animation
      const titleTl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Faster character animation with reduced duration and stagger
      titleTl.to(".char", {
        duration: 0.5,  
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: {
          each: 0.02,  
          from: "left"
        }
      });

      // Faster gradient transition
      titleTl.to(
        ".char",
        {
          duration: 0.3,  
          color: "transparent",
          backgroundImage: "linear-gradient(45deg,#f1eff7, #f1eff7, #8958f7)",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          stagger: {
            each: 0.05,  
            from: "center"
          }
        },
        ">0.1"
      ); // Reduced delay from >0.2

      // Final state
      titleTl.to(
        ".char",
        {
          duration: 0.2,  
          color: "transparent",
          backgroundImage: "linear-gradient(45deg, #f1eff7, #f1eff7, #8958f7)",
          backgroundClip: "text",
          "-webkit-background-clip": "text"
        },
        ">0.2"
      ); // Reduced delay from >0.3

      // Set up hover animations sooner
      titleTl.call(setupHoverAnimations, [], "+=0.3"); 

      // Paragraph animation setup
      const paragraphSplit = new SplitText(".landing-sub-title", {
        type: "words",
        wordsClass: "p-word"
      });

      gsap.set(paragraphSplit.words, {
        opacity: 0,
        y: 20
      });

      // Paragraph animation starts sooner
      titleTl.to(
        paragraphSplit.words,
        {
          duration: 0.7,  
          opacity: 1,
          y: 0,
          stagger: 0.05,  
          ease: "sine.out"
        },
        "<0.1"
      ); // Adjusted timing

      // Divider line animation
      titleTl.from(
        ".divider-line",
        {
          scaleX: 0,
          duration: 0.2, 
          ease: "power2.out"
        },
        "<0.05"
      ); // Adjusted timing

      // Button animation
      titleTl.from(
        ".creative-button",
        {
          y: 20,
          opacity: 0,
          duration: 0.4,  
          ease: "back.out(1.7)"
        },
        "<0.1"
      ); // Adjusted timing

      // Scroll animations (unchanged)
      gsap.to(".background-image", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top"
        }
      });

      // Continuous floating animation for particles (unchanged)
      gsap.to(".particle", {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        opacity: 0.8,
        ease: "sine.inOut"
      });
    },
    { scope: containerRef, dependencies: [setupHoverAnimations] }
  );

  const handleImageError = useCallback((e) => {
    e.target.style.backgroundImage = `url(${FALLBACK_IMAGE})`;
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Weepek - Your Web Development Partner | Custom Websites & Apps
        </title>
        <meta
          name="description"
          content="Weepek is a creative digital studio crafting websites, apps, and branding with purpose. Partner with us for custom web development solutions."
        />
        <meta
          name="keywords"
          content="web development, custom websites, app development, digital studio, branding, Weepek"
        />
        <meta
          property="og:title"
          content="Weepek - Your Web Development Partner"
        />
        <meta
          property="og:description"
          content="Creative digital studio crafting websites, apps, and branding with purpose. Built for businesses of every scale."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weepek.github.io/weepek/" />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://weepek.github.io/weepek/" />
        <meta name="theme-color" content="#5813f3" />
      </Helmet>

      <main
        ref={containerRef}
        className="relative h-[790px] md:min-h-screen w-full z-0 overflow-hidden flex items-center justify-center animated-gradient  hero-container"
        role="main"
      >
        <div
          className="background-image absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          onError={handleImageError}
          aria-hidden="true"
        />

        <div className="particles">
          <Particle type="particle" count={12} />
          <Particle type="star" count={20} />
        </div>

        <section className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl hero-content">
          <h1
            style={{ fontFamily: "LEMONMILK" }}
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-transparent drop-shadow-md landing-hero-title cursor-default"
          >
            <span className="word">Weepek </span>
            <span className="word">Your Web </span>
            <span className="word block">Development Partner</span>
          </h1>

          <div className="flex justify-center my-4">
            <div className="divider-line w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
          </div>

          <p className="  text-sm lg:text-lg font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1 landing-sub-title max-w-[61ch] md:max-w-[55ch] lg:max-w-[62ch] mx-auto leading-tight">
            A creative digital studio crafting websites, apps, and branding with
            purpose.{" "} Built for businesses of every scale, powered by research,
            and driven by design excellence.
          </p>
{/*           
          <p className="bg-yellow-900 text-xs lg:text-lg font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1 landing-sub-title max-w-[65ch]   lg:max-w-[62ch] mx-auto leading-tight">
            <span className="block  ">
              A creative digital studio crafting websites, apps, and branding
              with purpose.
            </span>{"  "}
            <span className="block ">
              Built for businesses of every scale, powered by research, and
              driven by design excellence.
            </span>
          </p> */}

          <div className="mt-6 sm:mt-8 creative-button">
            <CreativeButton />
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;



