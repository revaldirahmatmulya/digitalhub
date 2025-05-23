import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-12 h-12 md:h-8 md:w-8 text-indigo-600" />,
      title: "Sekali beli, akses selamanya.",
      description:
        "Nikmati produk PEDEDIGITAL seumur hidup tanpa biaya tambahan.",
      // link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-12 h-12 md:h-8 md:w-8 text-amber-400" />,
      title: "Gabung & berkembang bareng komunitas.",
      description: "Diskusi dan mentoring langsung dengan sesama member.",
      // link: "#learn-more",
    },
    {
      icon: <BiTime className="w-12 h-12 md:h-8 md:w-8 text-cyan-400" />,
      title: "Support kapan pun dibutuhkan.",
      description: "Tim kami siap bantu member tanpa batas waktu.",
      // link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-12 h-12 md:h-8 md:w-8 text-red-400" />,
      title: "Belajar bareng, sukses bareng.",
      description: "Dapat ilmu, relasi, dan dukungan di komunitas PEDEDIGITAL.",
      // link: "#learn-more",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Benefit yang bisa kamu dapatkan dari PEDEDIGITAL
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Dapatkan akses ke komunitas, materi belajar, dan peluang
          </motion.p>
          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005b8d] "></div>
              </div>
              <span className="text-gray-600">Digital Marketing</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005b8d] "></div>
              </div>
              <span className="text-gray-600">Content Creator</span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005b8d] "></div>
              </div>
              <span className="text-gray-600">Dropshipper</span>
            </motion.div>
          </motion.div>
          <a
            href="https://ekata.myr.id/membership/digitalhub"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-auto"
          >
            <motion.button
              variants={fadeIn("up", 0.9)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto mt-8  bg-[#005b8d] hover:bg-[#40b0b4] text-white px-8 py-3 cursor-pointer rounded-full  transition-colors"
            >
              Gabung Sekarang
            </motion.button>
          </a>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 shadow-xl md:shadow-none md:hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4 flex justify-center md:justify-start"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2 text-center md:text-left"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-600 mb-4 text-center md:text-left"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
