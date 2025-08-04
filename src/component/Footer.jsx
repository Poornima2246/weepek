import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";

function Footer() {
  const navigate = useNavigate();

  const socialIcons = [
    { Icon: FaFacebookF, color: "hover:text-blue-600", href: "#" },
    // { Icon: RiTwitterXFill, color: "hover:text-black", href: "#" },
    {
      Icon: FaInstagram,
      color: "hover:text-pink-500",
      href: "https://www.instagram.com/weepek_?igsh=MTU2MTJqcW1iY3N1"
    },
    {
      Icon: FaWhatsapp,
      color: "hover:text-green-600",
      href: "https://wa.me/7010039610"
    },
    // { Icon: FaLinkedin, color: "hover:text-blue-500", href: "#" }
  ];

  const footerLinks = [
    { title: "Home", path: "/weepek/" },
    { title: "About", path: "/weepek/About" },
    // { title: 'Services', path: '/weepek/services' },
    { title: "Contact", path: "/weepek/contact" }
    // { title: 'Privacy Policy', path: '/weepek/privacy' },
  ];

  return (
    <div className="bg-gray-900 text-white w-full">
      <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => navigate("/weepek/")}
            >
              <img src={logo} alt="Weepek logo" className="w-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                eepek
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-start">
              Innovating digital experiences for tomorrow's world.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, color, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${color} transition-colors duration-300`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
      <motion.div
  className="md:col-span-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <h3 className="text-lg font-semibold mb-6 text-white text-center ">
    Quick Links
  </h3>
  <ul className="space-y-3">
    {footerLinks.map((link, index) => (
      <motion.li 
        key={index} 
        className="flex justify-center  "
        whileHover={{ 
          x: 5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <a
          href={link.path}
          className="
            relative
            text-gray-300 
            hover:text-white 
            transition-all 
            duration-300 
            text-sm
            px-4
            py-2
            rounded-lg
            group
          "
        >
          <span className="relative z-10 flex items-center">
           
            {link.title}
          </span>
          {/* Animated background on hover */}
          {/* <span className="
            absolute 
            inset-0 
            bg-gradient-to-r 
            from-purple-500/10 
            to-blue-500/10 
            rounded-lg
            opacity-0 
            group-hover:opacity-100
            transition-opacity
            duration-300
          "></span> */}
          {/* Animated border effect */}
          <span className="
            absolute 
            bottom-0 
            left-1/4 
            w-1/2 
            h-0.5 
            bg-gradient-to-r 
            from-purple-400 
            to-blue-400
            transform 
            scale-x-0 
            group-hover:scale-x-100 
            transition-transform 
            duration-300 
            origin-left
          "></span>
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>

          {/* Contact Section */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center md:text-start text-white">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400 ">
              <div className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mr-2 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:weepek.pvt@gmail.com"
                  className="hover:text-purple-300 transition-colors"
                >
                  weepek.pvt@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+917010039610"
                  className="hover:text-blue-300 transition-colors"
                >
                  +91 7010039610
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Weepek Technologies. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="/weepek/terms"
              className="text-gray-500 hover:text-white text-sm"
            >
              Terms of Service
            </a>
            <a
              href="/weepek/privacy"
              className="text-gray-500 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
