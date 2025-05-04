import scheduleImage from "../assets/stats.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div variants={fadeIn("right", 0.3)} className="w-full md:w-1/2">
          <motion.img
            variants={fadeIn("up", 0.4)}
            src={scheduleImage}
            alt="Statistics dashboard"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div variants={fadeIn("left", 0.3)} className="w-full md:w-1/2">
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="text-orange-500 font-semibold"
          >
            Akses Seumur Hidup
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            Dapatkan akses penuh seumur hidup dengan sekali bayar.
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.6)} className="text-gray-600 mb-8">
            Di PEDEDIGITAL, kamu cukup beli sekali untuk menikmati akses seumur
            hidup tanpa biaya tambahan. Mudah, hemat, dan bebas ribet.
          </motion.p>
          {/* <motion.a
            variants={fadeIn("up", 0.7)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
            <motion.svg
              variants={fadeIn("left", 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
