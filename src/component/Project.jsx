// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ReactTyped } from "react-typed";
// import featureimg from "../assets/pro1.webp";
// import featureimg2 from "../assets/pro1.webp";
// import logodesign from "../assets/logodesign1.jpg";
// import logodesign2 from "../assets/logodesign2.jpg";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Landingpage2.css";

// gsap.registerPlugin(ScrollTrigger);

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05 }
//   }
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 200, damping: 15 }
//   }
// };

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const ProjectCard = ({ title, subtitle, image, url }) => (
//   <motion.a
//     href={url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="project-card-item relative flex items-center justify-between outline-2 outline-offset-2 outline-gray-400/20 backdrop-filter backdrop-blur-sm opacity-15 overflow-hidden rounded-3xl group cursor-pointer min-w-[250px] md:w-full min-h-[250px]"
//     aria-label={`View ${title} Project`}
//     variants={cardVariants}
//   >
//     <div className="project-title -translate-x-5 transition-all duration-400">
//       <h1 className="transform -rotate-90 text-xl md:text-3xl font-bold text-purple-400  opacity-50 whitespace-nowrap">
//         {title}
//       </h1>
//     </div>
//     <img
//       src={image}
//       alt={`${title} preview`}
//       className="project-image w-3/4 h-46 md:h-full -translate-x-10 md:-translate-x-1 justify-center transition-transform duration-750 group-hover:md:-translate-x-10 hover:-translate-x-16 rounded-2xl"
//       loading="lazy"
//       decoding="async"
//       onError={(e) => {
//         e.target.src = "/assets/fallback-project.webp";
//         e.target.onerror = null;
//       }}
//     />
//   </motion.a>
// );

// const Project = () => {
//   const sectionRef = useRef(null);
//   const heroProjectRef = useRef(null);
//   const workTitleRef = useRef(null);
//   const uiUxTitleRef = useRef(null);
//   const projectCardsRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.config({
//       autoSleep: 60,
//       force3D: false,
//       nullTargetWarn: false
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   useGSAP(() => {
//     const mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       // Smooth entrance animation for the entire Project section
//       gsap.fromTo(
//         sectionRef.current,
//         {
//           y: "100vh",
//           opacity: 0,
//           scale: 0.9,
//           borderRadius: "50px 50px 0 0"
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           borderRadius: "0px 0px 0 0",
//           duration: 1.8,
//           ease: "power3.inOut",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top bottom",
//             end: "top 20%",
//             scrub: 1.2,
//             anticipatePin: 1
//           }
//         }
//       );

//       // Work title animation with enhanced effects
//       // const workTitle = workTitleRef.current;
//       // if (workTitle) {
//       //   const chars = workTitle.textContent.split("");
//       //   workTitle.innerHTML = chars
//       //     .map(
//       //       (char) =>
//       //         `<span class="char" style="display: inline-block;">${
//       //           char === " " ? "&nbsp;" : char
//       //         }</span>`
//       //     )
//       //     .join("");

//       //   gsap.fromTo(
//       //     workTitle.querySelectorAll(".char"),
//       //     {
//       //       opacity: 0,
//       //       y: 100,
//       //       rotationX: -90,
//       //       transformOrigin: "50% 50% -50px",
//       //       scale: 0.5
//       //     },
//       //     {
//       //       opacity: 1,
//       //       y: 0,
//       //       rotationX: 0,
//       //       scale: 1,
//       //       duration: 1.2,
//       //       stagger: 0.08,
//       //       ease: "back.out(2)",
//       //       scrollTrigger: {
//       //         trigger: workTitle,
//       //         start: "top top",
//       //         end: "top 50%",
//       //         scrub: 1,
//       //         toggleActions: "play none none reverse"
//       //       }
//       //     }
//       //   );
//       // }

//       // Work title animation with enhanced effects
// const workTitle = workTitleRef.current;
// if (workTitle) {
//   const chars = workTitle.textContent.split('');
//   workTitle.innerHTML = chars.map(char =>
//     `<span class="char" style="display: inline-block; opacity: 1;">${char === ' ' ? '&nbsp;' : char}</span>`
//   ).join('');

//   gsap.fromTo(
//     workTitle.querySelectorAll('.char'),
//     {
//       opacity: 0,
//       y: 50,
//       rotationX: -45,
//       transformOrigin: "50% 50% -50px",
//       scale: 0.8
//     },
//     {
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       scale: 1,
//       duration: 1.5,
//       stagger: 0.05,
//       ease: "back.out(2)",
//       scrollTrigger: {
//         trigger: workTitle,
//         start: "10% top", // Changed to trigger earlier
//         end: "top 60%",
//         scrub: false, // Changed to snap animation
//         toggleActions: "play play none none", // Will play on enter and
//         markers: false // Set to true for debugging if needed
//       }
//     }
//   );
// }

//       // Hero project with enhanced morphing
//       const heroTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroProjectRef.current,
//           start: "top 90%",
//           end: "top 30%",
//           scrub: 1.5
//         }
//       });

//       heroTl
//         .fromTo(
//           heroProjectRef.current,
//           {
//             opacity: 0,
//             scale: 0.6,
//             rotationY: 25,
//             transformOrigin: "center center",
//             filter: "blur(20px)"
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             rotationY: 0,
//             filter: "blur(0px)",
//             duration: 2,
//             ease: "power3.out"
//           }
//         )
//         .fromTo(
//           heroProjectRef.current.querySelector("img"),
//           {
//             scale: 1.5,
//             filter: "blur(10px) brightness(0.5)"
//           },
//           {
//             scale: 1,
//             filter: "blur(0px) brightness(1)",
//             duration: 1.5,
//             ease: "power2.out"
//           },
//           "-=2.5"
//         );

//       // Enhanced UI/UX title with typewriter effect
//       const uiuxTitle = uiUxTitleRef.current;
//       if (uiuxTitle) {
//         gsap.fromTo(
//           uiuxTitle,
//           {
//             opacity: 0,
//             clipPath: "inset(0 100% 0 0)",
//             borderRight: "3px solid #b797f7"
//           },
//           {
//             opacity: 1,
//             clipPath: "inset(0 0% 0 0)",
//             duration: 2.5,
//             ease: "power2.inOut",
//             scrollTrigger: {
//               trigger: uiuxTitle,
//               start: "top 80%",
//               end: "top 50%",
//               scrub: 1
//             },
//             onComplete: () => {
//               gsap.to(uiuxTitle, {
//                 borderRight: "none",
//                 duration: 0.5
//               });
//             }
//           }
//         );
//       }

//       // Enhanced project cards animation
//       const cards =
//         projectCardsRef.current?.querySelectorAll(".project-card-item");
//       if (cards) {
//         gsap.fromTo(
//           cards,
//           {
//             opacity: 0,
//             rotationY: 90,
//             transformOrigin: "left center",
//             scale: 0.7,
//             z: -200
//           },
//           {
//             opacity: 1,
//             rotationY: 0,
//             scale: 1,
//             z: 0,
//             duration: 1.5,
//             stagger: 0.3,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: projectCardsRef.current,
//               start: "top 85%",
//               end: "top 40%",
//               scrub: 1,
//               toggleActions: "play none none reverse"
//             }
//           }
//         );

//         // Enhanced hover effects
//         cards.forEach((card) => {
//           const img = card.querySelector(".project-image");
//           const title = card.querySelector(".project-title");

//           card.addEventListener("mouseenter", () => {
//             gsap.to(img, {
//               scale: 1.15,
//               rotation: 3,
//               filter: "brightness(1) contrast(1.1)",
//               duration: 0.5,
//               ease: "power2.out"
//             });
//             gsap.to(title, {
//               x: 15,
//               opacity: 1,
//               scale: 1.05,
//               duration: 0.4,
//               ease: "power2.out"
//             });
//             gsap.to(card, {
//               boxShadow: "0 25px 50px rgba(183, 151, 247, 0.4)",
//               scale: 1,
//               duration: 0.4
//             });
//           });

//           card.addEventListener("mouseleave", () => {
//             gsap.to(img, {
//               scale: 1,
//               rotation: 0,
//               filter: "brightness(0.9) contrast(1)",
//               duration: 0.5,
//               ease: "power2.out"
//             });
//             gsap.to(title, {
//               x: 0,
//               opacity: 0.2,
//               scale: 1,
//               duration: 0.4,
//               ease: "power2.out"
//             });
//             gsap.to(card, {
//               boxShadow: "none",
//               scale: 1,
//               duration: 0.4
//             });
//           });
//         });

//         // Floating animation with varied patterns
//         cards.forEach((card, index) => {
//           gsap.to(card, {
//             y: -15 + index * 5,
//             rotation: index % 2 === 0 ? 1 : -1,
//             duration: 3 + index * 0.7,
//             repeat: -1,
//             yoyo: true,
//             ease: "power2.inOut",
//             delay: index * 0.5
//           });
//         });
//       }

//       // Dynamic background animation
//       gsap.to(sectionRef.current, {
//         backgroundPosition: "100% 0%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 2
//         }
//       });
//     });

//     // Simplified mobile animations
//     mm.add("(max-width: 767px)", () => {
//       gsap.fromTo(
//         sectionRef.current,
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 90%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       const cards =
//         projectCardsRef.current?.querySelectorAll(".project-card-item");
//       if (cards) {
//         gsap.fromTo(
//           cards,
//           { opacity: 0, y: 50, scale: 0.9 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 1,
//             stagger: 0.2,
//             scrollTrigger: {
//               trigger: projectCardsRef.current,
//               start: "top 85%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         );
//       }
//     });

//     return () => {
//       mm.revert();
//     };
//   }, []);

//   return (
//     <section
//       className="py-20 w-screen project z-20  relative overflow-hidden will-change-transform"
//       ref={sectionRef}

//       // style={{
//       //   background:
//       //     "linear-gradient(135deg, #000000 0%, #1a0033 30%, #330066 70%, #000000 100%)",
//       //   backgroundSize: "300% 300%",
//       //   minHeight: "200vh" // Extended height for smooth scrolling effect
//       // }}
//     >
//       {/* Enhanced animated background */}
//       <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-30  left-1 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl  "></div>
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

//       {/* Website Section */}
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.h2
//             ref={uiUxTitleRef}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text tracking-wide py-4 will-change-transform"
//             variants={fadeInVariants}
//             style={{
//               // Fallback styles in case animations don't work
//               opacity: 1,
//               transform: "none",
//               // Text shadow for better readability
//               textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//               // Larger letter spacing for impact
//               letterSpacing: "0.2em"
//             }}
//           >
//             Work
//           </motion.h2>
//           <motion.div
//             className="mt-4 ml-2.5 font-Nunito justify-center text-center flex text-white/20 text-lg"
//             variants={fadeInVariants}
//           >
//             <p>Responsive and modern website tailored to your brand</p>
//           </motion.div>
//         </motion.div>

//         {/* Hero project */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-10/12 justify-center items-center rounded-3xl gap-6 heroTl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.a
//             ref={heroProjectRef}
//             href="https://cakees-fooi.onrender.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hero-project relative block overflow-hidden group animated-border-btn will-change-transform"
//             variants={cardVariants}
//             aria-label="View Cake'es project"
//           >
//             <img
//               src={featureimg}
//               alt="Cake'es UI/UX and website project"
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform rounded-2xl"
//               loading="lazy"
//               decoding="async"
//               onError={(e) => {
//                 e.target.src = "/assets/fallback-project.webp";
//                 e.target.onerror = null;
//               }}
//             />
//             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//               <h3 className="text-white text-3xl font-Excon">Cake'es</h3>
//               <div className="text-2xl text-white font-Gambetta mt-2">
//                 UI/UX & Website
//               </div>
//             </div>
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* UI/UX & Design Section */}
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.h2
//             ref={uiUxTitleRef}
//             className="text-3xl tracking-[.20em] font-Clash text-center text-white/50 mt-10 overflow-hidden whitespace-nowrap will-change-transform"
//             variants={fadeInVariants}
//           >
//             UI/UX & Design
//           </motion.h2>
//         </motion.div>

//         <motion.div
//           ref={projectCardsRef}
//           className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-3xl gap-6 justify-center items-center project-card"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.9 }}
//         >
//           <ProjectCard
//             title="LOGO DESIGN"
//             subtitle="Web Development"
//             image={logodesign2}
//             url="https://example.com/another-project"
//           />
//           <ProjectCard
//             title="LOGO DESIGN"
//             subtitle="Web Development"
//             image={logodesign}
//             url="https://example.com/another-project"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default React.memo(Project);

import React, { useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import featureimg from "../assets/pro1.webp";
import featureimg2 from "../assets/pro1.webp";
import logodesign from "../assets/logodesign1.jpg";
import logodesign2 from "../assets/logodesign2.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Landingpage2.css";

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Memoize variants to prevent unnecessary recalculations
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

// Memoized ProjectCard component
const ProjectCard = React.memo(({ title, subtitle, image, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card-item relative flex items-center justify-between outline-2 outline-offset-2 outline-gray-400/20 backdrop-filter backdrop-blur-sm opacity-15 overflow-hidden rounded-3xl group cursor-pointer min-w-[250px] md:w-full min-h-[250px]"
    aria-label={`View ${title} Project`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="project-title -translate-x-5 transition-all duration-400">
      <h1 className="transform -rotate-90 text-xl md:text-3xl font-bold text-purple-400 opacity-50 whitespace-nowrap">
        {title}
      </h1>
    </div>
    <img
      src={image}
      alt={`${title} preview`}
      className="project-image w-3/4 h-46 md:h-full -translate-x-10 md:-translate-x-1 justify-center transition-transform duration-750 group-hover:md:-translate-x-10 hover:-translate-x-16 rounded-2xl"
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.target.src = "/assets/fallback-project.webp";
        e.target.onerror = null;
      }}
    />
  </motion.a>
));

const Project = () => {
  const sectionRef = useRef(null);
  const heroProjectRef = useRef(null);
  const workTitleRef = useRef(null);
  const uiUxTitleRef = useRef(null);
  const projectCardsRef = useRef(null);

  // Optimize GSAP config and cleanup
  useEffect(() => {
    gsap.config({
      autoSleep: 60,
      force3D: false, // Disable force3D for better performance
      nullTargetWarn: false
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Optimized animations with useGSAP
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Simplified entrance animation
      gsap.from(sectionRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top 80%",
          scrub: 1,
          markers: false
        }
      });

      // Optimized work title animation
      const workTitle = workTitleRef.current;
      if (workTitle) {
        gsap.from(workTitle, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "back.out",
          scrollTrigger: {
            trigger: workTitle,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            markers: false
          }
        });
      }

      // Simplified hero project animation
      gsap.from(heroProjectRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroProjectRef.current,
          start: " top top ",
          end: "top 50%",
          scrub: 1,
          markers: false
        }
      });

      // Optimized project cards animation
      const cards =
        projectCardsRef.current?.querySelectorAll(".project-card-item");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectCardsRef.current,
            start: "top  top ",
            end: "top 50%",
            scrub: 1,
            markers: false
          }
        });

        // Simplified hover effects
        cards.forEach((card) => {
          const img = card.querySelector(".project-image");
          const title = card.querySelector(".project-title");

          card.addEventListener("mouseenter", () => {
            gsap.to(img, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(title, {
              x: 10,
              opacity: 0.8,
              duration: 0.3
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(img, {
              scale: 1,
              duration: 0.3
            });
            gsap.to(title, {
              x: 0,
              opacity: 0.5,
              duration: 0.3
            });
          });
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

      const cards =
        projectCardsRef.current?.querySelectorAll(".project-card-item");
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

  // Memoize project data to prevent unnecessary re-renders
  const projects = useMemo(
    () => [
      {
        title: "LOGO DESIGN",
        subtitle: "Web Development",
        image: logodesign2
        // url: "https://example.com/another-project"
      },
      {
        title: "LOGO DESIGN",
        subtitle: "Web Development",
        image: logodesign
        // url: "https://example.com/another-project"
      }
    ],
    []
  );

  return (
    <section
      className="py-20 w-screen project z-20 relative overflow-hidden will-change-transform"
      ref={sectionRef}
    >
      {/* Simplified background animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-30 left-1 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Website Section */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            ref={workTitleRef}
            className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text tracking-wide py-4"
            variants={fadeInVariants}
          >
            Work
          </motion.h2>
          <motion.div
            className="mt-4 ml-2.5 font-Nunito justify-center text-center flex text-white/50 text-lg"
            variants={fadeInVariants}
          >
            <p>Responsive and modern website tailored to your brand</p>
          </motion.div>
        </motion.div>

        {/* Hero project */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-10/12 justify-center items-center rounded-3xl gap-6 heroTl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            ref={heroProjectRef}
            href="https://cakees-4g9z.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-project relative block overflow-hidden group"
            variants={cardVariants}
            aria-label="View Cake'es project"
          >
            <img
              src={featureimg}
              alt="Cake'es UI/UX and website project"
              className="w-full h-full object-cover transition-transform duration-300   rounded-2xl"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/fallback-project.webp";
                e.target.onerror = null;
              }}
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-3xl font-Excon">Cake'es</h3>
              <div className="text-2xl text-white font-Gambetta mt-2">
                UI/UX & Website
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* UI/UX & Design Section */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          
            <motion.h2
              ref={uiUxTitleRef}
              className="text-3xl tracking-[.20em] font-Clash text-center text-white/50 overflow-hidden whitespace-nowrap"
              variants={fadeInVariants}
            >
              UI/UX & Design
            </motion.h2>
              <div className="flex justify-center my-4">
              <div className="divider-line w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            ref={projectCardsRef}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-3xl gap-6 justify-center items-center project-card"
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
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Project);
