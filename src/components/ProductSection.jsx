import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ProductSection = () => {
  const url =
    "https://api.mayar.id/hl/v1/product/type/course?page=1&pageSize=100";

  const token = import.meta.env.VITE_MAYAR_TOKEN;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Add Bearer token here
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  console.log(token);

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Kelas Unggulan Kami
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          Beberapa kelas pilihan kita yang bisa membuat kamu makin Pede !
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data &&
          data.data.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col "
              >
                <img
                  className="w-full h-60 object-cover rounded-lg mb-4"
                  src={item.multipleImage[0].url}
                  alt="Sunset in the mountains"
                />
                <h3 className="text-xl text-start font-bold mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Rp{item.amount.toLocaleString("id-ID")}
                </p>

                {/* <div
                  className={`w-full overflow-hidden transition-all duration-300 min-h-[120px] ${
                    isExpanded ? "max-h-[1000px]" : "max-h-[120px]"
                  }`}
                >
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div> */}

                {/* <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-blue-500 mt-2 hover:underline text-sm"
                >
                  {isExpanded ? "Sembunyikan" : "Baca selengkapnya"}
                </button> */}

                <a
                  href={`https://ekata.myr.id/course/${item.link}`}
                  target="_blank"
                  className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mt-4"
                >
                  Learn More
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSection;
