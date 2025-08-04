 


import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Mail, Globe, Code, Smartphone, Brush } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const faqs = [
  {
    question: "What services does your company offer?",
    answer: "We provide web development, mobile app development, UI/UX design, and digital branding for startups and businesses.",
    icon: <Globe className="text-indigo-400" size={24} />
  },
  {
    question: "How much does a website or app cost?",
    answer: "Pricing depends on the features and complexity of the project. We offer custom quotes after understanding your needs.",
    icon: <HelpCircle className="text-indigo-400" size={24} />
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! We offer free bug support for 1–3 months post-launch and affordable maintenance plans afterward.",
    icon: <Mail className="text-indigo-400" size={24} />
  },
  {
    question: "What technologies do you use?",
    answer: "We use React, React Native, Node.js, Firebase, Flutter, and other modern tools based on project requirements.",
    icon: <Code className="text-indigo-400" size={24} />
  },
  {
    question: "Can we work together if I'm in a different country?",
    answer: "Absolutely! We work with clients worldwide and adjust to your preferred time zones and communication methods.",
    icon: <Globe className="text-indigo-400" size={24} />
  },
];

const FloatingIcons = () => {
  const icons = [
    { component: <Smartphone />, color: "#818cf8", size: 0.5 },
    { component: <Code />, color: "#a78bfa", size: 0.6 },
    { component: <Brush />, color: "#c4b5fd", size: 0.4 },
    { component: <Globe />, color: "#8b5cf6", size: 0.7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => {
        const left = `${Math.random() * 80 + 10}%`;
        const top = `${Math.random() * 80 + 10}%`;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute text-indigo-400 opacity-20"
            style={{
              left,
              top,
              fontSize: `${icon.size}rem`,
              rotate: rotation,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: rotation + 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            {icon.component}
          </motion.div>
        );
      })}
    </div>
  );
};

const FloatingSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial 
        color="#7c3aed" 
        emissive="#7c3aed"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.7}
      />
    </Sphere>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900  min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      <FloatingIcons />
      
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6 mt-30">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-lg shadow-lg transition-all hover:border-indigo-400/30 hover:shadow-indigo-500/20"
              whileHover={{ scale: 1.01 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${hoveredIndex === index ? 'bg-indigo-500/20' : 'bg-white/5'}`}>
                    {faq.icon}
                  </div>
                  <span className="text-white text-lg md:text-xl font-medium">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-indigo-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <hr className="border-t border-white/10 my-4" />
                    <p className="text-gray-300 text-base md:text-lg p-2 pl-14">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-16 text-center px-6 py-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-indigo-400/20 shadow-xl relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-indigo-500/20 blur-xl"></div>
          
          <p className="text-white text-xl md:text-2xl mb-6 font-medium">
            Still have questions?
          </p>
          <a
            href="/weepek/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            <Mail size={20} />
            Contact Us
          </a>
        </motion.div> */}
        
      </motion.div>
    </div>
  );
};

export default FAQSection;