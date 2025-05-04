import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo2 from "../assets/pededigital-v1.1.png";
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
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="text-sm text-[#005b8d]  font-medium"
          >
            Tentang Kami
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.4)}
            className=" text-3xl md:text-4xl font-bold text-gray-900 flex justify-center items-center gap-2"
          >
            Apa itu
            <img src={logo2} alt="" className="h-10" />
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-base md:text-lg"
          >
            PEDEDIGITAL adalah komunitas kreator dan pegiat digital — dari
            content creator, digital marketer, hingga freelancer. Kami tumbuh
            bersama dan saling dukung dalam perjalanan digital.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
