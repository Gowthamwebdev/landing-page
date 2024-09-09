import { motion } from "framer-motion";
import { FadeIn } from "../Variants";
import { varieties } from "../utils/Data";

const Varieties = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex flex-col justify-center items-center duration-200">
      <div className="container pb-8 sm:pb-0 flex flex-col gap-8">

        {/* Heading and Subheading aligned to left */}
        <div className="space-y-2 text-left mb-8">
          <motion.h1
            variants={FadeIn("right", 0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-mono bg-gradient-to-t from-slate-600 to-slate-900 text-transparent bg-clip-text"
          >
            Curated Styles for Every Taste
          </motion.h1>
          <motion.p
            variants={FadeIn("right", 0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Timeless pieces that blend style and functionality effortlessly.
          </motion.p>
        </div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {varieties.map((item, index) => (
            <motion.div
              variants={FadeIn("right", index * 0.2 + 0.5)}
              initial="initial"
              whileInView="animate"
              key={item.label}
              className="space-y-4 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-[282px] h-[282px] object-cover mx-auto"
              />
              <p className="text-2xl font-bold font-serif">{item.label}</p>
              <p className="text-gray-400 text-xs">
                Timeless elegance with {item.label}. Explore now.
              </p>
              <a
                href="#"
                className="inline-block border-b border-black"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Varieties;
