import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  // const features = [
  //   {
  //     icon: "🟣", // Replace with your actual icon component or image
  //     title: "Built for impact",
  //     description:
  //       "PEDEDIGITAL adalah komunitas kreator dan pegiat digital — dari content creator, digital marketer, hingga freelancer. Kami tumbuh bersama dan saling dukung dalam perjalanan digital.",
  //   },
  //   {
  //     icon: "🔴", // Replace with your actual icon component or image
  //     title: "In sync with you",
  //     description:
  //       "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
  //   },
  // ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              Tentang kami
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Apa itu PEDEDIGITAL?
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-gray-600 text-base md:text-lg text-justify"
            >
              PEDEDIGITAL adalah komunitas kreator dan pegiat digital — dari
              content creator, digital marketer, hingga freelancer. Kami tumbuh
              bersama dan saling dukung dalam perjalanan digital.
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="text-gray-600 text-base md:text-lg text-justify"
            >
              Bergabunglah dengan kami untuk mendapatkan akses ke berbagai
              sumber daya, pelatihan, dan peluang kolaborasi yang akan membantu
              Anda mencapai tujuan digital Anda.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
