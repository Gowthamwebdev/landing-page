import Watch1 from "../assets/watch1.png";
import announcement from "../assets/announcement.png";
import { motion } from 'framer-motion';
import { FadeIn } from "../Variants"; // Assuming FadeIn is defined in ../Variants

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200">
      
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Text Section */}
          <div className="flex flex-col justify-center text-center sm:text-left relative z-10 gap-4">
            <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full mx-auto sm:mx-0">
              <img src={announcement} alt="Announcement" />
            </div>
            <motion.h2
              variants={FadeIn("left", 0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-slate-700 to-slate-950 text-transparent bg-clip-text"
            >
              Up to 50% off* with exciting prices
            </motion.h2>
            <motion.p
              variants={FadeIn("right", 0.5)}
              initial="initial"
              animate="animate"
              className="text-[0.8rem] sm:text-sm lg:text-lg sm:max-w-lg font-mono text-slate-600"
            >
              Embrace timeless elegance this summer with our exquisite analog watches.
            </motion.p>
            <div className="flex justify-center sm:justify-start py-4">
              <motion.a
                href="#order-now"
                variants={FadeIn("left", 0.2)}
                initial="initial"
                animate="animate"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-md"
              >
                Order now
              </motion.a>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div 
            // className="relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[100px] before:h-[100px] before:bg-gradient-to-br from-slate-700 to-slate-950 before:rounded-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[100px] after:h-[100px] after:bg-gradient-to-bl from-slate-700 to-slate-950 after:rounded-full"
            >
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={Watch1}
                alt="Watch"
                className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain mx-auto sm:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
