 
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const SmoothScrollLayout = ({ children }) => {
//   const smoothRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       console.log("SmoothScrollLayout initialized");
//       const scroller = smoothRef.current;
//       const content = contentRef.current;

//       // Set body height
//       document.body.style.height = `${content.scrollHeight}px`;

//       // ScrollTrigger proxy
//       ScrollTrigger.scrollerProxy(scroller, {
//         scrollTop(value) {
//           return arguments.length ? (scroller.scrollTop = value) : scroller.scrollTop;
//         },
//         getBoundingClientRect() {
//           return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: content.style.transform ? "transform" : "fixed",
//       });

//       // Smooth scrolling animation
//       gsap.to(content, {
//         y: () => -(content.scrollHeight - window.innerHeight),
//         ease: "none",
//         scrollTrigger: {
//           trigger: scroller,
//           scroller: scroller,
//           start: "top top",
//           end: () => `+=${content.scrollHeight - window.innerHeight}`,
//           scrub: 0.5,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Parallax effect
//       gsap.utils.toArray(".parallax").forEach((element) => {
//         gsap.to(element, {
//           y: () => element.dataset.parallaxY || 100,
//           ease: "none",
//           scrollTrigger: {
//             trigger: element,
//             scroller: scroller,
//             scrub: true,
//             start: "top bottom",
//             end: "bottom top",
//           },
//         });
//       });

//       // Section animations
//       gsap.utils.toArray("section").forEach((section) => {
//         gsap.from(section.querySelectorAll(".animate-on-scroll"), {
//           opacity: 0,
//           y: 50,
//           scale: 0.95,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: section,
//             scroller: scroller,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         });
//       });

//       // Gradient animation
//       gsap.utils.toArray("section.bg-black").forEach((section) => {
//         gsap.to(section, {
//           background: "linear-gradient(180deg, #000000, #1a1a40)",
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             scroller: scroller,
//             scrub: true,
//             start: "top 80%",
//             end: "bottom top",
//           },
//         });
//       });

//       // Navbar effect
//       gsap.to("nav", {
//         scale: 0.95,
//         opacity: 0.9,
//         boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//         scrollTrigger: {
//           trigger: scroller,
//           scroller: scroller,
//           start: "top top",
//           end: "+=200",
//           scrub: true,
//         },
//       });

//       // Wheel and touch handling
//       const handleWheel = (e) => {
//         e.preventDefault();
//         const delta = e.deltaY;
//         gsap.to(scroller, {
//           scrollTop: `+=${delta}`,
//           duration: 0.3,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//       };

//       let touchStartY = 0;
//       const handleTouchStart = (e) => {
//         touchStartY = e.touches[0].clientY;
//       };

//       const handleTouchMove = (e) => {
//         const touchY = e.touches[0].clientY;
//         const delta = touchStartY - touchY;
//         gsap.to(scroller, {
//           scrollTop: `+=${delta}`,
//           duration: 0.3,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//         touchStartY = touchY;
//       };

//       scroller.addEventListener("wheel", handleWheel, { passive: false });
//       scroller.addEventListener("touchstart", handleTouchStart, { passive: true });
//       scroller.addEventListener("touchmove", handleTouchMove, { passive: false });

//       // Debounced resize handler
//       const handleResize = debounce(() => {
//         document.body.style.height = `${content.scrollHeight}px`;
//         ScrollTrigger.refresh();
//       }, 100);

//       window.addEventListener("resize", handleResize);
//       setTimeout(() => ScrollTrigger.refresh(), 100);

//       // Cleanup
//       return () => {
//         scroller.removeEventListener("wheel", handleWheel);
//         scroller.removeEventListener("touchstart", handleTouchStart);
//         scroller.removeEventListener("touchmove", handleTouchMove);
//         window.removeEventListener("resize", handleResize);
//         document.body.style.height = "auto";
//         ScrollTrigger.getAll().forEach((t) => t.kill());
//       };
//     }, smoothRef);

//     return () => ctx.revert();
//   }, []);

//   // Debounce utility
//   const debounce = (func, wait) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func.apply(null, args), wait);
//     };
//   };

//   return (
//     <div
//       ref={smoothRef}
//       className="relative w-full h-screen overflow-y-auto"
//       style={{ position: "fixed", top: 0, left: 0, overscrollBehavior: "none" }}
//     >
//       <div ref={contentRef} className="relative w-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SmoothScrollLayout;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Set body height to enable scrolling
    gsap.set(scrollContainer, {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    // Calculate total scrollable height
    const getScrollHeight = () => {
      return scrollContainer.scrollHeight - window.innerHeight;
    };

    // Smooth scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top top',
        end: () => `+=${getScrollHeight()}`,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(scrollContainer, {
      y: () => -getScrollHeight(),
      ease: 'none'
    });

    // Section detection for nav highlights
    const sections = gsap.utils.toArray('section');
    
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => {
          if (self.isActive) {
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
            });
            const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (correspondingLink) {
              correspondingLink.classList.add('active');
            }
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.set(scrollContainer, { clearProps: 'all' });
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="will-change-transform">
      {children}
    </div>
  );
};

export default SmoothScroll;