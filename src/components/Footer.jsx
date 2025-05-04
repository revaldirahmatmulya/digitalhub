import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FaInstagram } from "react-icons/fa6";
import logo1 from "../assets/pededigital-icon1.png";
import logo2 from "../assets/pededigital-v1.1.png";
import logo3 from "../assets/pededigital-v2.1.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex justify-center items-center"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="w-full max-w-md text-center"
          >
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <img src={logo2} alt="" className="h-9" />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              Gabung komunitas kreator digital yang siap dukung kamu berkembang
              dan berkolaborasi!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.7)}
              className="flex justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/6288228301201"
                target="_blank"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600  hover:bg-[#40b0b4] hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/ekata.tech/"
                target="_blank"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#40b0b4] hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/ekata-tech/"
                target="_blank"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#40b0b4] hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn("right", 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} Ekata Technology. All
              rights reserved.
            </motion.p>
            <motion.p
              variants={fadeIn("left", 1.0)}
              className="text-gray-600 text-sm"
            >
              Created by PedeDigital
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
