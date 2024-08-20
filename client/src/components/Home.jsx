import { useEffect, useRef } from 'react';
import Watch1 from '../assets/watch1.png';
import {  motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import {  HeroImgVariant } from '../Variants';

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: false,
        delay: 75,
      });

      typewriter
        .typeString('Dont miss the end..')
        .pauseFor(300)
        .deleteAll()
        .typeString('Get your hands on the best deals!')
        .pauseFor(300)
        .start();
    }
  }, []);

  
  return (
    <div className='w-full h-[100vh] flex items-center justify-center lg:flex-row flex-col bg-white'>
      <motion.div 
      variants={HeroImgVariant()}
      initial={"initial"}
      whileInView={"whileInView"}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      className="w-1/2 text-center">
        <h2 className="text-center text-2xl lg:text-8xl text-slate-800 font-mono font-bold">
          Weekend Sale <span className='text-2xl lg:text-6xl text-orange-800 z-10'>is Live now!</span>
        </h2>
        <div ref={typewriterRef} className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'>
        </div>
        <p className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'>
          
        </p>
      </motion.div>
      
      <motion.div
      variants={HeroImgVariant()}
        initial={"initial"}
        whileInView={"whileInView"}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div>
          <img src={Watch1} className="h-[60vh] rounded-lg" alt="Watch" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
