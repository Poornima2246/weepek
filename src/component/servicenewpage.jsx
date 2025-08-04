import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Helmet } from "react-helmet";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hide scrollbar globally
const hideScrollbar = `
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: hidden;
  }
`;

const cardData = [
  {
    img: "https://img.icons8.com/clouds/100/web.png",
    alt: "Website Development Icon",
    title: "Custom Website Development",
    desc: "Fast, secure, mobile-friendly websites tailored to your brand with modern web technologies.",
    color: "from-purple-500/20 to-purple-800/10",
    gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    textColor: "text-purple-300",
    borderColor: "border-purple-400/50",
    hoverColor: "hover:bg-purple-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/android.png",
    alt: "Mobile App Development Icon",
    title: "Mobile App Development",
    desc: "Feature-rich Android & iOS apps with smooth user experience and cutting-edge functionality.",
    color: "from-[#6190E8]/20 to-[#A7BFE8]/10",
    gradient: "bg-gradient-to-r from-[#6190E8] to-[#A7BFE8]",
    textColor: "text-[#8ab0ff]",
    borderColor: "border-[#6190E8]/50",
    hoverColor: "hover:bg-[#6190E8]/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/adobe-after-effects.png",
    alt: "Logo Design Icon",
    title: "Logo & Brand Identity Design",
    desc: "Unique logos and comprehensive brand identities ready for all platforms and media.",
    color: "from-[#090979]/20 to-[#00D4FF]/10",
    gradient: "bg-gradient-to-r from-[#090979] to-[#00D4FF]",
    textColor: "text-[#00D4FF]",
    borderColor: "border-[#00D4FF]/50",
    hoverColor: "hover:bg-[#00D4FF]/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/bullish.png",
    alt: "SEO Optimization Icon",
    title: "SEO Optimization Services",
    desc: "Improve Google ranking with complete SEO strategies and technical optimizations.",
    color: "from-[#097970]/20 to-[#00D4FF]/10",
    gradient: "bg-gradient-to-r from-[#097970] to-[#00D4FF]",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-400/50",
    hoverColor: "hover:bg-emerald-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/commercial.png",
    alt: "Digital Marketing Icon",
    title: "Digital Marketing Solutions",
    desc: "Drive growth with targeted ads, social media campaigns, and conversion optimization.",
    color: "from-[#20002c]/20 to-[#cbb4d4]/10",
    gradient: "bg-gradient-to-r from-[#20002c] to-[#cbb4d4]",
    textColor: "text-fuchsia-300",
    borderColor: "border-fuchsia-400/50",
    hoverColor: "hover:bg-fuchsia-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/robot.png",
    alt: "RPA Automation Icon",
    title: "Robotic Process Automation",
    desc: "Automate repetitive tasks using UiPath for improved speed and accuracy in operations.",
    color: "from-[#C33764]/20 to-[#1D2671]/10",
    gradient: "bg-gradient-to-r from-[#C33764] to-[#1D2671]",
    textColor: "text-indigo-300",
    borderColor: "border-indigo-400/50",
    hoverColor: "hover:bg-indigo-400/10"
  }
];

// 3D Floating Orb Component
const FloatingOrb = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.position.y +=
      Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
  });

  return (
    <Sphere ref={meshRef} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
};

// 3D Scene Background
const ThreeDScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <FloatingOrb position={[-3, 1, 0]} color="#8a2be2" />
      <FloatingOrb position={[3, -1, 0]} color="#1e90ff" />
      <FloatingOrb position={[0, 2, -5]} color="#ff6347" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

const VerticalHoverCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  useEffect(() => {
    // Apply scrollbar hiding style
    const style = document.createElement("style");
    style.innerHTML = hideScrollbar;
    document.head.appendChild(style);

    // Smooth scroll behavior
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
      return () => {
        document.documentElement.style.scrollBehavior = "auto";
      };
    };

    const cleanup = smoothScroll();

    // GSAP animations
    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => {
      cleanup();
      document.head.removeChild(style);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore our comprehensive digital services including custom website development, mobile apps, branding, SEO, and automation solutions tailored for your business growth."
        />
        <meta
          name="keywords"
          content="web development services, mobile app development, SEO optimization, digital marketing, RPA automation, branding services"
        />
        <meta
          property="og:title"
          content="Our Digital Services | Web Development & More"
        />
        <meta
          property="og:description"
          content="Discover our full range of digital services designed to transform your online presence and business operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/services-preview.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Helmet>

      <section
        ref={containerRef}
        className="relative overflow-hidden min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ willChange: "transform" }}
        aria-labelledby="services-heading"
      >
        {/* 3D Background Scene */}
        <div
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          <ThreeDScene />
        </div>

        {/* Floating particles */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`
              }}
              animate={{
                x: [0, `${Math.random() * 100 - 50}%`],
                y: [0, `${Math.random() * 100 - 50}%`],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Section content with parallax */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          style={{ y: y2 }}
        >
          {/* Title */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h4 className="text-sm md:text-base font-medium text-purple-400 mb-3">
              OUR EXPERTISE
            </motion.h4>

            {/* <motion.h2
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Digital Solutions
              </span>
            </motion.h2> */}
            <motion.h2
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Comprehensive{" "}
              <span className="inline-flex overflow-hidden">
                {"Digital Solutions".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                    animate={{
                      y: [0, -5, 0],
                      opacity: [1.5, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end digital experiences that drive growth,
              enhance engagement, and transform businesses across industries.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className={`card group relative h-full bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center backdrop-blur-sm`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 10,
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative z-10 w-full h-full flex flex-col items-center">
                  <motion.div
                    className={`w-20 h-20 rounded-xl ${card.gradient} p-3 mb-6 flex items-center justify-center shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    aria-hidden="true"
                  >
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </motion.div>

                  <h3 className={`text-2xl font-bold ${card.textColor} mb-4`}>
                    {card.title}
                  </h3>

                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default VerticalHoverCard;
