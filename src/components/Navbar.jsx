import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo1 from "../assets/pededigital-icon1.png";
import logo2 from "../assets/pededigital-v1.1.png";
import logo3 from "../assets/pededigital-v2.1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#services", label: "Benefit" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <motion.img src={logo2} className="h-8"></motion.img>
        </motion.div>
        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#005b8d] after:transition-all
                ${
                  activeLink === link.href
                    ? "text-[#005b8d] after:w-full  "
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#005b8d] hover:bg-[#40b0b4] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          <a href="https://ekata.myr.id/portal" target="_blank">
            Masuk
          </a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-[#005b8d]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#005b8d] hover:bg-[#40b0b4] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              <a href="https://ekata.myr.id/portal" target="_blank">
                Masuk
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
