 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import featureimg from "../assets/pro1.png"; // Ensure this matches the image in the preview

function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(15);
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const itemContainerRef = useRef(null);

  const projects = [
    {
      id: "cakees",
      title: "Cake'es",
      subtitle: "UI/UX & Website",
      description: "A beautiful bakery website with modern UI/UX design",
      image: featureimg,
      link: "https://cakees-fooi.onrender.com/"
    },
    {
      id: "techvenchure",
      title: "Techvenchure",
      subtitle: "Corporate Website",
      description: "Professional website for a tech consulting company",
      image: featureimg,
      link: "#"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (galleryRef.current) {
        const scrollbarWidth = galleryRef.current.offsetWidth - galleryRef.current.clientWidth;
        setScrollbarWidth(scrollbarWidth || 15);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSlide = (index) => {
    if (containerRef.current && itemContainerRef.current) {
      const itemWidth = itemContainerRef.current.children[0]?.offsetWidth || 0;
      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index); // Update the current slide index
    }
  };

  const handleScroll = () => {
    if (containerRef.current && itemContainerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const itemWidth = itemContainerRef.current.children[0]?.offsetWidth || 1;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentSlide(newIndex);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 70 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { type: "spring", stiffness: 300, damping: 50 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section className="py-20 bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex justify-center items-center">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 absolute top-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* <motion.span
            className="text-white uppercase tracking-wider"
            variants={fadeInVariants}
          >
            Excellence Project
          </motion.span> */}
          {/* <motion.h2
            className="text-xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4"
            variants={fadeInVariants}
          >
            <ReactTyped
              strings={["Your Partner in Quality", "Web Development"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h2> */}
        </motion.div>

        {/* Apple-style Gallery */}
        <div 
          id="scroll-gallery-switch-cards" 
          ref={galleryRef}
          className="relative w-full max-w-5xl overflow-hidden"
        >
          <div 
            className="scroll-container w-full h-full overflow-x-hidden overflow-y-hidden snap-x snap-mandatory" 
            ref={containerRef} 
            onScroll={handleScroll}
          >
            <div className="item-container w-max flex justify-center">
              <ul className="card-set flex list-none p-0 m-0" role="list" ref={itemContainerRef}>
                {projects.map((project, index) => (
                  <li 
                    key={project.id}
                    role="listitem" 
                    className={`gallery-item flex-none w-full max-w-5xl snap-center ${index === currentSlide ? 'block' : 'hidden'}`}
                    data-analytics-gallery-item-id={project.id}
                  >
                    <motion.div 
                      className="card-container relative rounded-2xl w-full max-w-5xl overflow-hidden h-[600px] lg:h-[600px] bg-[#f8f1f1] flex justify-center items-center shadow-lg cursor-pointer mx-auto"
                      tabIndex="-1"
                      variants={cardVariants}
                      initial="hidden"
                      animate={index === currentSlide ? "visible" : "exit"}
                      exit="exit"
                    >
                      <div className="card-modifier p-0">
                        <div className="card-viewport-content h-full flex flex-col">
                          <div className="essential-card-content relative h-full flex flex-col lg:flex-row items-center justify-center p-6 lg:p-8">
                            <a 
                              className="essential-card-block-link absolute inset-0 z-10" 
                              href={project.link} 
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex="-1" 
                              aria-hidden="true"
                            ></a>
                            <figure className="essential-card-image relative w-full lg:w-5/5 h-2/3 lg:h-full mb-4 lg:mb-0 lg:mr-6 rounded-2xl">
                              <picture className="w-full h-full">
                                <img 
                                  src={project.image} 
                                  alt={project.title}
                                  className="w-full h-full object-contain object-center"
                                />
                              </picture>
                            </figure>
                            <div className="essential-card-text-container relative z-20 text-black flex flex-col justify-center w-full lg:w-2/5">
                              <h3 className="essential-card-header text-3xl lg:text-4xl font-semibold mb-2 leading-tight">
                                {project.title}
                              </h3>
                              <p className="essential-card-copy text-lg mb-4 max-w-md">
                                {project.description}
                              </p>
                              <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-wrapper essential-card-link text-blue-400 font-medium flex items-center hover:underline"
                              >
                                <span className="icon-copy">View Project</span>
                                <span className="icon icon-after more ml-2 w-3 h-3 bg-current" style={{ mask: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath fill-rule='evenodd' d='M6.97 1.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H1.5a.75.75 0 0 1 0-1.5h7.94L6.97 3.03a.75.75 0 0 1 0-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat center` }}></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Navigation Arrows - Moved Inside Card */}
                      <div className="absolute bottom-4 right-4 z-20">
                        <ul className="flex gap-4 list-none">
                          <li className="left-item">
                            <button 
                              aria-label="Previous" 
                              className={`pointer-events-auto bg-black/50 border-none rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-white transition-all duration-900 hover:bg-black ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                              disabled={currentSlide === 0}
                              onClick={() => scrollToSlide(currentSlide - 1)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-4 h-4 fill-current">
                                <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
                              </svg>
                            </button>
                          </li>
                          <li className="right-item">
                            <button 
                              aria-label="Next" 
                              className={`pointer-events-auto bg-black/50 border-none rounded-full w-11 h-11 flex items-center justify-center cursor-pointer text-white transition-all duration-300 hover:bg-black/80 ${currentSlide === projects.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                              disabled={currentSlide === projects.length - 1}
                              onClick={() => scrollToSlide(currentSlide + 1)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-4 h-4 fill-current">
                                <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;