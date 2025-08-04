
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import './Feaatures.css';
import Aboutus from "../assets/contact.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="hero-section relative text-white py-32"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide"
        >
          Empowering Businesses with Cutting-Edge Digital Solutions
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-10 text-gray-200"
        >
          At Weepek, we transform ideas into dynamic, scalable experiences.
        </motion.p>
        <a href="/weepek/contact" aria-label="Contact Weepek">
          <button
            className="relative px-4 py-2 border border-purple-200 text-white rounded-full group overflow-hidden"
            aria-label="Get started with Weepek"
          >
            <span className="absolute inset-0 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
            <span className="absolute inset-0 flex items-center justify-center z-0">
              <span className="w-0 h-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-1000 ease-in-out"></span>
            </span>
            <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
            <span className="relative z-10">Get Started</span>
          </button>
        </a>
      </div>
    </motion.section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br "></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-start text-gray-200 mb-12"
        >
          Who We Are
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            className="text-gray-300 text-lg space-y-6"
          >
            <p>
              Since our founding in <strong className="text-purple-400">2023</strong>, <span className="font-bold text-purple-500">Weepek</span> has been dedicated to helping businesses of all sizes build a powerful digital presence.
            </p>
            <p>
              We specialize in innovative Web & Mobile App Development, UI/UX design, and scalable cloud solutions.
            </p>
            <p>
              Our journey includes partnerships with retail, automotive, lifestyle brands, and emerging startups.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <img 
              src={Aboutus} 
              alt="Weepek team working on digital solutions" 
              className="w-full max-w-[400px] md:max-w-[400px] rounded-lg shadow-2xl transition-all duration-500 hover:scale-105 mt-5 md:-mt-20"
              loading="lazy"
              width="400"
              height="300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function WhyChooseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const features = [
    { 
      icon: "🚀", 
      title: "Proven Experience", 
      desc: "Over 2+ years delivering successful digital transformation projects across multiple industries." 
    },
    { 
      icon: "🎨", 
      title: "Brand-Driven Approach", 
      desc: "Crafting cohesive digital experiences that build trust and customer loyalty for your brand." 
    },
    { 
      icon: "🌐", 
      title: "Collaborative & Transparent", 
      desc: "Agile processes and clear communication ensure seamless partnerships with our clients." 
    },
    { 
      icon: "⚙️", 
      title: "Scalable Solutions", 
      desc: "Future-proof digital products designed to evolve with your growing business needs." 
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-200 mb-12"
        >
          Why Choose Weepek?
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-gradient-to-br from-purple-700 to-blue-700 rounded-xl text-center text-white shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function MissionVisionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gradient-to-tl from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-300 mb-12"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">To empower businesses with cutting-edge technology and creative innovation, helping them thrive in the digital era through custom web and mobile solutions.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-gradient-to-tr from-purple-700 to-blue-700 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To be a globally recognized digital transformation partner, known for our technical excellence, creative solutions, and measurable client success.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TeamCultureSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gradient-to-bl from-black to-gray-900" 
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-200 mb-12"
        >
          Our Team Culture
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-400 text-center mb-8 max-w-4xl mx-auto"
        >
          At Weepek, our team of digital experts is driven by a passion for innovation, collaboration, and excellence. We foster a culture of creativity where every idea is valued, and continuous learning keeps us at the forefront of web and mobile technologies. Our core values include integrity, transparency, and a relentless commitment to delivering exceptional results that drive business growth for our clients.
        </motion.p>
      </div>
    </motion.section>
  );
}

function Features() {
  return (
    <>
      <Helmet>
        <title>Weepek - Digital Transformation & Web Development Services</title>
        <meta name="description" content="Weepek provides cutting-edge web development, mobile apps, and digital solutions to help businesses thrive online. Discover our services and company values." />
        <meta name="keywords" content="web development, mobile app development, digital transformation, UI/UX design, custom software, Weepek" />
        <meta property="og:title" content="Weepek - Digital Transformation Experts" />
        <meta property="og:description" content="Professional web and mobile development services to grow your business online with custom digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weepek.github.io/weepek/about" />
        <meta property="og:image" content="https://weepek.github.io/weepek/about-preview.jpg" />
        <link rel="canonical" href="https://weepek.github.io/weepek/about" />
      </Helmet>

      <div className="bg-gray-100 font-sans">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <MissionVisionSection />
        <TeamCultureSection />
      </div>
    </>
  );
}

export default Features;