import { useEffect, useRef } from 'react';
import Watch1 from '../assets/watch1.png';
import WomenWithWatch from '../assets/woman-with-watch.jpg';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import { HeroImgVariant } from '../Variants';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '../components/Button';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: false,
        delay: 75,
      });

      typewriter
        .typeString('Don\'t miss the end..')
        .pauseFor(300)
        .deleteAll()
        .typeString('Get your hands on the best deals!')
        .pauseFor(300)
        .start();
    }
  }, []);

  return (
    <div className='w-full h-screen p-10 flex items-center justify-center bg-white'>
      {/* Left Section: Text Content */}
      <div className='w-full lg:w-1/2 text-center flex flex-col items-center lg:items-start'>
        <motion.div 
          variants={HeroImgVariant()}
          initial="initial"
          whileInView="whileInView"
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="w-full"
        >
          <h2 className="text-4xl lg:text-8xl text-slate-800 font-mono font-bold">
            Weekend Sale <span className='text-2xl lg:text-6xl text-orange-800 z-10'>is Live now!</span>
          </h2>
          <div ref={typewriterRef} className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'></div>
        </motion.div>
        <div className='w-full flex justify-center lg:justify-start my-4 mx-4'>
          <Button label="Shop now" iconURL={KeyboardArrowRightIcon} />
        </div>
      </div>

      <motion.div
        variants={HeroImgVariant()}
        initial="initial"
        whileInView="whileInView"
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img src={Watch1} className="h-[60vh] rounded-lg" alt="Woman with Watch" />
      </motion.div>
    </div>
  );
};

export default Home;
