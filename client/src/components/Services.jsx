
import { motion } from "framer-motion";
import { FadeIn } from "../Variants";
import { ServiceCard } from "../utils/Data";


const Services = () => {
  return (
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col justify-center items-center duration-200">
        <div className="container pb-8 sm:pb-0 flex flex-col absolute gap-4">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={FadeIn("right", 0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={FadeIn("right", 0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Bring your dream home to life with one-on-one design help & hand
            picked products
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
              variants={FadeIn("right", card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block border-b border-black"
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;