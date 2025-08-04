 


import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import weepekcard from "../assets/weepekcard.png";
import { motion } from "framer-motion";

// Social Media Data
const socialMediaLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/weepek_?igsh=MTU2MTJqcW1iY3N1",
    icon: <FaInstagram />,
    color: "text-pink-400 hover:text-pink-500",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/7010039610",
    icon: <FaWhatsapp />,
    color: "text-green-400 hover:text-green-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/yourprofile", 
    icon: <FaFacebook />,
    color: "text-blue-500 hover:text-blue-600",
  },
  {
    name: "Twitter/X",
    url: "https://x.com/yourprofile", 
    icon: <RiTwitterXFill />,
    color: "text-blue-400 hover:text-blue-500",
  },
];

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "9418dc6a-6fa2-4fd2-b812-99070a75a8bb");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Form submission failed:", {
          message: data.message,
          code: data.code,
          details: data.errors || "No additional details provided",
        });
        setResult(`Error: ${data.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      console.error("Network or unexpected error during form submission:", {
        error: error.message,
        stack: error.stack,
      });
      setResult("Network error: Unable to submit the form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col pt-12 md:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto animate-fadeIn">
        <h1 className="text-4xl mt-10 font-bold text-center text-purple-400 mb-8">Get In Touch</h1>
        <p className={`text-center mb-6 text-lg ${result.includes("Error") ? "text-red-400" : "text-green-400"}`}>{result}</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image Block */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative rounded-2xl overflow-hidden w-full transition-transform duration-300 hover:scale-105">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={weepekcard}
                alt="Weepek Blog"
              />
              <a
                href="https://www.instagram.com/weepek_/?igsh=MTU2MTJqcW1iY3N1#"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Visit our blog on Instagram"
              >
                Go to Blog
              </a>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="md:mt-20 bg-black/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 text-white text-center border border-white border-opacity-20 transition-all duration-300 hover:shadow-xl h-96 sm:mb-5">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="mb-4 p-15 border-b border-white border-opacity-20">
                <h4 className="text-lg font-light mb-1">Founder</h4>
                <p className="text-lg font-semibold text-purple-400 mb-2">Poornima</p>
                <p className="text-sm mb-1 break-all">
                  ✉{" "}
                  <a
                    href="mailto:poornima220500@gmail.com"
                    className="hover:text-purple-300 transition font-mono text-sm"
                    aria-label="Email Poornima"
                  >
                    poornima.weepek@gmail.com
                  </a>
                </p>
              </div>

              {/* Dynamic Social Icons */}
              <motion.div className="flex justify-center gap-6 mt-4">
                {socialMediaLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-2xl transition`}
                    aria-label={`Visit our ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
