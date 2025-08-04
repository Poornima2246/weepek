

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {

//   const headingRef = useRef(null);
//   const paraRef = useRef(null);

//   useEffect(() => {
//     const splitHeading = new SplitType(headingRef.current, { types: 'chars' });
//     const splitParagraph = new SplitType(paraRef.current, { types: 'lines' });

//     gsap.from(splitHeading.chars, {
//       y: 80,
//       opacity: 0,
//       stagger: 0.05,
//       ease: "power4.out",
//       duration: 1,
//     });

//     gsap.from(splitParagraph.lines, {
//       y: 50,
//       opacity: 0,
//       stagger: 0.1,
//       ease: "power2.out",
//       duration: 1,
//       delay: 0.5,
//     });

//     return () => {
//       splitHeading.revert();
//       splitParagraph.revert();
//     };
//   }, []);

//   return (
//     <>
//     <section className=" ">
//       <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center animated-gradient">

//           <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl  ">
//           <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-6">
//         Weepek — Your Web, Development Partner
//       </h1>
//       <p ref={paraRef} className="text-lg md:text-xl max-w-3xl leading-relaxed">
//         A creative digital studio crafting websites, apps, and branding with purpose.
//         Built for businesses of every scale, powered by research, and driven by design excellence.
//       </p>
//       </div>
//       </div>
//     </section>

//    <section className="">
//      <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center animated-gradient">

//       {/* text content */}
//         <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl  ">
//      <h1 ref={headingRef} className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-300 drop-shadow-md transition-all duration-300">  Weepek Your Web Development Partner</h1>
//      </div>
//      </div>
//      </section>

//     </>
//   );
// };

// export default Home;

// import React, { useEffect, useRef, useCallback, memo, useMemo } from "react";
// import { gsap } from "gsap";
// import SplitType from "split-type";
// import { CalendarDays } from "lucide-react";
// import "./LandingPage2.css";
// import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";

// gsap.registerPlugin(ScrollTrigger);

// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration }) => (
//       <div
//         key={id}
//         className={type}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           position: "absolute"
//         }}
//       />
//     )
//   );
// });

// const CreativeButton = memo(() => {
//   const { openCalendlyPopup } = useCalendly();
//   return (
//     <motion.button
//       onClick={openCalendlyPopup}
//       aria-label="Book a meeting"
//       className="relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <span className="relative z-10 flex items-center gap-2">
//         <CalendarDays className="w-5 h-5" />
//         Book a Meeting
//       </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
//      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
//      <span className="absolute inset-0 flex items-center justify-center z-0">
//         <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//       </span>
//      <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//     </motion.button>
//   );
// });

// const HeroSection = () => {
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const splitHeading = new SplitType(headingRef.current, { types: "chars" });
//     const splitParagraph = new SplitType(paraRef.current, { types: "lines" });

//     gsap.from(splitHeading.chars, {
//       y: 80,
//       opacity: 0,
//       stagger: 0.06,
//       duration: 1,
//       ease: 'expo.in'
//     });

//     gsap.from(splitParagraph.lines, {
//       y: 50,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 1,
//       delay: 1
//     });

//     return () => {
//       splitHeading.revert();
//       splitParagraph.revert();
//     };
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".particle", {
//         y: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });

//       gsap.to(".background-image", {
//         y: 80,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });

//       gsap.to(".animated-gradient", {
//         backgroundPosition: "200% 200%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="animated-gradient text-white">
//       <div
//         ref={containerRef}
//         className="min-h-screen flex items-center justify-center"
//       >
//         <Particle type="particle" count={12} />
//         <Particle type="star" count={20} />
//         <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl ">
//           <h1
//             ref={headingRef}
//             className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl  font-bold mb-6 "
//           >
//             Weepek Your Web
//             <span className="block"> Development Partner</span>
//           </h1>
//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl mb-4"></div>

//           <p
//             ref={paraRef}
//             className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//           >
//             A creative digital studio crafting websites, apps, and branding with
//             purpose. Built for businesses of every scale, powered by research,
//             and driven by design excellence.
//           </p>
//            <div className="bg-purple-500 mt-10 rounded-4xl">
//             <button className="p-4">Book A Meeting</button>
//            </div>
//               {/* <div >
//                 <CreativeButton/>
//               </div> */}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React, { useEffect, useRef, useMemo, memo, useCallback } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import SplitType from "split-type";
// import { CalendarDays, Target } from "lucide-react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./LandingPage2.css";

// import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const useCalendly = () => {
//   const scriptLoaded = useRef(false);

//   const loadCalendly = useCallback(() => {
//     return new Promise((resolve, reject) => {
//       if (scriptLoaded.current) return resolve();
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         resolve();
//       };
//       script.onerror = reject;
//       document.body.appendChild(script);

//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     });
//   }, []);

//   const openCalendlyPopup = useCallback(async () => {
//     try {
//       await loadCalendly();
//       window.Calendly.initPopupWidget({ url: CALENDLY_URL });
//     } catch {
//       window.open(CALENDLY_URL, "_blank");
//     }
//   }, [loadCalendly]);

//   return { openCalendlyPopup };
// };

// // Particle component
// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration }) => (
//       <div
//         key={id}
//         className={`particle ${type}`}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           position: "absolute",
//           zIndex: 0,
//           pointerEvents: "none"
//         }}
//       />
//     )
//   );
// });

// // Main hero section
// const Service = () => {
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const containerRef = useRef(null);
//   const { openCalendlyPopup } = useCalendly();

//   useEffect(() => {
//   const headingSplit = new SplitType(headingRef.current, {
//     types: "words, chars",
//   });

//   const paraSplit = new SplitType(paraRef.current, {
//     types: "lines, words",
//     lineClass: "line",
//     wordClass: "word",
//     charClass: "char",
//     autoSplit: true,
//   });

//   headingSplit.chars.forEach((char) => {
//     char.classList.add("gradient-text");

//     const handleEnter = () => {
//       gsap.to(char, {
//         y: -15,
//         scale: 1.2,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(char, {
//         y: 0,
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     char.addEventListener("mouseenter", handleEnter);
//     char.addEventListener("mouseleave", handleLeave);

//     // Store handlers for removal
//     char._gsapHandlers = { handleEnter, handleLeave };
//   });

//   // Initial animation
//   gsap.from(headingSplit.chars, {
//     y: 80,
//     opacity: 0,
//     stagger: 0.03,
//     duration: 1,
//     ease: "circ.inOut",
//   });

//   gsap.from(paraSplit.lines, {
//     y: 50,
//     opacity: 0,
//     stagger: 0.1,
//     duration: 1,
//     delay: 1.5,
//     ease: "power2.out",
//   });

//   return () => {
//     headingSplit.chars.forEach((char) => {
//       if (char._gsapHandlers) {
//         char.removeEventListener("mouseenter", char._gsapHandlers.handleEnter);
//         char.removeEventListener("mouseleave", char._gsapHandlers.handleLeave);
//         delete char._gsapHandlers;
//       }
//     });

//     headingSplit.revert();
//     paraSplit.revert();
//   };
// }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".particle", {
//         y: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });

//       gsap.to(".background-image", {
//         y: 80,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });

//       gsap.to(".animated-gradient", {
//         backgroundPosition: "200% 200%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="animated-gradient text-white relative overflow-hidden home">
//       <div
//         ref={containerRef}
//         className="min-h-screen flex items-center justify-center relative"
//       >
//         <Particle type="particle" count={12} />
//         <Particle type="star" count={20} />

//         <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md   md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl">
//           <h1
//             ref={headingRef}
//             className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 "
//           >
//             Weepek Your Web
//             <span className="block"> Development Partner</span>
//           </h1>

//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-4xl mb-4"></div>

//           <p
//             ref={paraRef}
//             className="text-sm sm:text-base md:text-normal lg:text-normal xl:text-2xl 2xl:text-xl font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1"
//           >
//             A creative digital studio crafting websites, apps, and branding with
//             purpose. Built for businesses of every scale, powered by research,
//             and driven by design excellence.
//           </p>

//           <div className="mt-10 relative z-10">
//             <button
//               onClick={openCalendlyPopup}
//               className="relative overflow-hidden group px-8 py-4 rounded-full text-white font-medium text-lg"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 Book A Meeting
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full z-0 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 rounded-full z-0 group-hover:opacity-30 transition-opacity duration-300"></span>
//               <span className="absolute inset-0 flex items-center justify-center z-0">
//                 <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//               </span>
//               <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

// import React, { useEffect, useRef, useMemo, memo, useCallback } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import SplitType from "split-type";
// import { CalendarDays } from "lucide-react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./LandingPage2.css";

// import { CALENDLY_URL } from "./constants";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const useCalendly = () => {
//   const scriptLoaded = useRef(false);

//   const loadCalendly = useCallback(() => {
//     return new Promise((resolve, reject) => {
//       if (scriptLoaded.current) return resolve();
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         resolve();
//       };
//       script.onerror = reject;
//       document.body.appendChild(script);

//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     });
//   }, []);

//   const openCalendlyPopup = useCallback(async () => {
//     try {
//       await loadCalendly();
//       window.Calendly.initPopupWidget({ url: CALENDLY_URL });
//     } catch {
//       window.open(CALENDLY_URL, "_blank");
//     }
//   }, [loadCalendly]);

//   return { openCalendlyPopup };
// };

// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration }) => (
//       <div
//         key={id}
//         className={`particle ${type}`}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           position: "absolute",
//           zIndex: 0,
//           pointerEvents: "none"
//         }}
//       />
//     )
//   );
// });

// const Service = () => {
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const { openCalendlyPopup } = useCalendly();
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const headingSplit = new SplitType(headingRef.current, {
//       types: "words, chars"
//     });

//     const paraSplit = new SplitType(paraRef.current, {
//       types: "lines, words",
//       lineClass: "line",
//       wordClass: "word",
//       charClass: "char",
//       autoSplit: true
//     });

//     headingSplit.chars.forEach((char) => {
//       char.classList.add("gradient-text");

//       const handleEnter = () => {
//         gsap.to(char, {
//           y: -15,
//           scale: 1.2,
//           duration: 0.3,
//           ease: "power2.out"
//         });
//       };

//       const handleLeave = () => {
//         gsap.to(char, {
//           y: 0,
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out"
//         });
//       };

//       char.addEventListener("mouseenter", handleEnter);
//       char.addEventListener("mouseleave", handleLeave);

//       char._gsapHandlers = { handleEnter, handleLeave };
//     });

//     gsap.from(headingSplit.chars, {
//       y: 80,
//       opacity: 0,
//       stagger: 0.03,
//       duration: 1,
//       ease: "circ.inOut"
//     });

//     gsap.from(paraSplit.lines, {
//       y: 50,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 1,
//       delay: 1.5,
//       ease: "power2.out"
//     });

//     return () => {
//       headingSplit.chars.forEach((char) => {
//         if (char._gsapHandlers) {
//           char.removeEventListener(
//             "mouseenter",
//             char._gsapHandlers.handleEnter
//           );
//           char.removeEventListener(
//             "mouseleave",
//             char._gsapHandlers.handleLeave
//           );
//           delete char._gsapHandlers;
//         }
//       });

//       headingSplit.revert();
//       paraSplit.revert();
//     };
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Existing scroll animations
//       gsap.to(".particle", {
//         y: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });

//       gsap.to(".animated-gradient", {
//         backgroundPosition: "200% 200%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top"
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);


//   useGSAP(() => {
//     // Pin the Ninja section
//     ScrollTrigger.create({
//       trigger: "#Ninja",
//       start: "10% 0%",
//       end: "+=100%",
//       pin: true,
//       scrub: true
//     });

//     // Optional animation when Cooper comes in
//     gsap.from("#Cooper", {
//       y: -100,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: "#Cooper",
//         start: " center bottom",
//         end: "top 60%",
//         scrub: true,
//         markers: true
//       }
//     });
//   }, []);

//   return (
//     <section className="animated-gradient text-white relative overflow-hidden">
//       <div
//         ref={sectionRef}
//         className=" z-0 min-h-screen flex items-center justify-center relative"
//         id="Ninja"
//       >
//         <Particle type="particle" count={12} />
//         <Particle type="star" count={20} />

//         <div
//           ref={contentRef}
//           className="clip-reveal content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl"
//         >
//           <h1
//             ref={headingRef}
//             className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6"
//           >
//             Weepek Your Web
//             <span className="block">Development Partner</span>
//           </h1>

//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-4xl mb-4"></div>

//           <p
//             ref={paraRef}
//             className="text-sm sm:text-base md:text-normal lg:text-normal xl:text-xl   font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1"
//           >
//             A creative digital studio crafting websites, apps, and branding with
//             purpose. Built for businesses of every scale, powered by research,
//             and driven by design excellence.
//           </p>

//           <div className="mt-10 relative z-10">
//             <button
//               onClick={openCalendlyPopup}
//               className="relative overflow-hidden group px-8 py-4 rounded-full text-white font-medium text-lg"
//               id="Home-end"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <CalendarDays size={20} />
//                 Book A Meeting
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full z-0 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 rounded-full z-0 group-hover:opacity-30 transition-opacity duration-300"></span>
//               <span className="absolute inset-0 flex items-center justify-center z-0">
//                 <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//               </span>
//               <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* <div
//         className="w-full h-screen bg-white justify-center items-center"
//         id="Cooper"
//       >
//         <h1 className="text-black">this is cooper</h1>
//       </div> */}
//     </section>
//   );
// };

// export default Service;



// import React, { useEffect, useRef, useMemo, memo, useCallback } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import { CalendarDays } from "lucide-react";
// import { useGSAP } from "@gsap/react";
// import { CALENDLY_URL } from "./constants";
// import "./LandingPage2.css";

// gsap.registerPlugin(ScrollTrigger);

// // Custom Hook to load Calendly script and open the popup
// const useCalendly = () => {
//   const scriptLoaded = useRef(false);

//   const loadCalendly = useCallback(() => {
//     return new Promise((resolve, reject) => {
//       if (scriptLoaded.current) return resolve();
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         resolve();
//       };
//       script.onerror = reject;
//       document.body.appendChild(script);

//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     });
//   }, []);

//   const openCalendlyPopup = useCallback(async () => {
//     try {
//       await loadCalendly();
//       window.Calendly.initPopupWidget({ url: CALENDLY_URL });
//     } catch {
//       window.open(CALENDLY_URL, "_blank");
//     }
//   }, [loadCalendly]);

//   return { openCalendlyPopup };
// };

// // Particle Component
// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`,
//       size: `${(type === "star" ? 0.5 : 1) + Math.random() * 2}px`,
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration, size }) => (
//       <div
//         key={id}
//         className={`particle ${type}`}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           width: size,
//           height: size,
//           position: "absolute",
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       />
//     )
//   );
// });

// const Service = () => {
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const sectionRef = useRef(null);
//   const { openCalendlyPopup } = useCalendly();

//   // SplitText + GSAP Animation
//   useEffect(() => {
//     const headingSplit = new SplitType(headingRef.current, {
//       types: "words, chars",
//     });

//     const paraSplit = new SplitType(paraRef.current, {
//       types: "lines, words",
//       lineClass: "line",
//       wordClass: "word",
//       charClass: "char",
//     });

//     headingSplit.chars.forEach((char) => {
//       char.classList.add("gradient-text");

//       const handleEnter = () =>
//         gsap.to(char, { y: -15, scale: 1.2, duration: 0.3, ease: "sine.inOut" , rotation: 6 ,  });

//       const handleLeave = () =>
//         gsap.to(char, { y: 0, scale: 1, duration: 0.3, ease: "power2.out",rotation: 0 ,  });

//       char.addEventListener("mouseenter", handleEnter);
//       char.addEventListener("mouseleave", handleLeave);

//       char._gsapHandlers = { handleEnter, handleLeave };
//     });

//     gsap.from(headingSplit.chars, {
//       y: 80,
//       opacity: 0,
//       stagger: 0.03,
//       duration: 1,
//       ease: "circ.inOut",
//     });

//     gsap.from(paraSplit.lines, {
//       y: 50,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 1,
//       delay: 1.5,
//       ease: "power2.out",
//     });

//     return () => {
//       headingSplit.chars.forEach((char) => {
//         const handlers = char._gsapHandlers;
//         if (handlers) {
//           char.removeEventListener("mouseenter", handlers.handleEnter);
//           char.removeEventListener("mouseleave", handlers.handleLeave);
//         }
//       });
//       headingSplit.revert();
//       paraSplit.revert();
//     };
//   }, []);

//   // Particle + Background Animation on scroll
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".particle", {
//         y: -100,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top",
//         },
//       });

//       gsap.to(".animated-gradient", {
//         backgroundPosition: "200% 200%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           scrub: true,
//           start: "top bottom",
//           end: "bottom top",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Main Scroll-trigger animation with media queries
//   useGSAP(() => {
//     const mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       ScrollTrigger.create({
//         trigger: "#Ninja",
//         start: "10% top",
//         end: "+=500vh",
//         markers: true,
//         pin: true,
//         pinSpacing: false,
//         onUpdate: (self) => {
//           const progress = self.progress;

//           gsap.to(contentRef.current, {
//             opacity: Math.max(0.3, 1 - progress * 1.2),
//             scale: Math.max(0.8, 1 - progress * 0.3),
//             y: -progress * 50,
//             filter: `blur(${progress * 50}px)`,
//             duration: 0.8,
//             ease: "power2.out",
//             stagger:0.06,
//           }
//         , "=+10");

//           gsap.to(sectionRef.current, {
//             filter: `brightness(${Math.max(0.5, 1 - progress * 0.5)})`,
//             duration: 0.1,
//             ease: "none",
//           });
//         },
//       });

//       gsap.to(".particle", {
//         y: -200,
//         rotation: 360,
//         opacity: 0.5,
//         ease: "none",
//         scrollTrigger: {
//           trigger: "#Ninja",
//           start: "top top",
//           end: "+=200vh",
//           scrub: 1,
//         },
//       });

//       gsap.to(".star", {
//         y: -150,
//         x: 50,
//         rotation: 180,
//         scale: 0.8,
//         opacity: 0.6,
//         ease: "none",
//         scrollTrigger: {
//           trigger: "#Ninja",
//           start: "top top",
//           end: "+=200vh",
//           scrub: 2,
//         },
//       });
//     });

//     mm.add("(max-width: 767px)", () => {
//       gsap.from(contentRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: "power2.out",
//       });

//       gsap.to(contentRef.current, {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: "#Ninja",
//           start: "top 80%",
//           end: "top 20%",
//           scrub: true,
//         },
//       });
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <section className="animated-gradient text-white relative overflow-hidden">
//       <div
//         ref={sectionRef}
//         className="z-0 min-h-screen flex items-center justify-center relative"
//         id="Ninja"
//       >
//         <Particle type="particle" count={50} />
//         <Particle type="star" count={40} />

//         <div
//           ref={contentRef}
//           className="clip-reveal content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl"
//           style={{
//             padding: "2rem 1rem",
//             margin: "0 auto",
//           }}
//         >
//           <h1
//             ref={headingRef}
//             className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6"
//             style={{
//               lineHeight: "1.2",
//               textShadow: "0 2px 4px rgba(0,0,0,0.3)",
//             }}
//           >
//             Weepek Your Web
//             <span className="block">Development Partner</span>
//           </h1>

//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-4xl mb-4"></div>

//           <p
//             ref={paraRef}
//             className="text-base text-gray-100 mt-6 md:mt-8 px-3 md:px-1"
//             style={{
//               lineHeight: "1.6",
//               fontSize: "clamp(1rem, 3vw, 1.25rem)",
//               textShadow: "0 1px 2px rgba(0,0,0,0.3)",
//             }}
//           >
//             A creative digital studio crafting websites, apps, and branding with
//             purpose. Built for businesses of every scale, powered by research,
//             and driven by design excellence.
//           </p>

//           <div className="mt-10 relative z-10">
//             <button
//               onClick={openCalendlyPopup}
//               className="relative overflow-hidden group px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-medium text-base sm:text-lg"
//               style={{ minWidth: "200px" }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <CalendarDays size={18} />
//                 Book A Meeting
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full z-0 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 rounded-full z-0 group-hover:opacity-30 transition-opacity duration-300"></span>
//               <span className="absolute inset-0 flex items-center justify-center z-0">
//                 <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//               </span>
//               <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Landingpage2.css";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Project Card Component
const ProjectCard = React.memo(({ title, subtitle, image, url, isFeatured = false }) => (
  <motion.div
    className={`relative group ${isFeatured ? 'col-span-1 md:col-span-2' : ''}`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label={`View ${title} Project`}
    >
      <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = "/assets/fallback-project.webp";
            e.target.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>
            <p className="text-gray-300 mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
));

const Project = () => {
  const sectionRef = useRef(null);
  const heroProjectRef = useRef(null);
  const workTitleRef = useRef(null);
  const uiUxTitleRef = useRef(null);
  const projectCardsRef = useRef(null);

  // GSAP configuration
  useEffect(() => {
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animations
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Section entrance
      gsap.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 80%",
          scrub: 1
        }
      });

      // Title animation
      gsap.from(workTitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: workTitleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });

      // Project cards animation
      const cards = projectCardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectCardsRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1
          }
        });
      }
    });

    // Mobile animations
    mm.add("(max-width: 767px)", () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      const cards = projectCardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: projectCardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    return () => mm.revert();
  }, []);

  // Project data
  const projects = useMemo(() => [
    {
      title: "Cake'es",
      subtitle: "UI/UX & Website",
      image: featureimg,
      url: "https://cakees-fooi.onrender.com/",
      isFeatured: true
    },
    {
      title: "Logo Design",
      subtitle: "Brand Identity",
      image: logodesign2,
      url: "#"
    },
    {
      title: "Logo Design",
      subtitle: "Brand Identity",
      image: logodesign,
      url: "#"
    }
  ], []);

  return (
    <section
      className="py-16 md:py-24 lg:py-32 w-full project relative overflow-hidden"
      ref={sectionRef}
      id="work"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            ref={workTitleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text tracking-tight mb-4"
            variants={fadeInVariants}
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            Explore our collection of carefully crafted projects that showcase our design and development expertise.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={projectCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              url={project.url}
              isFeatured={project.isFeatured}
            />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Want to see more of our work?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Project);