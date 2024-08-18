import { useEffect, useRef } from 'react';
import Watch1 from '../assets/watch1.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import { FadeIn } from '../Variants';

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
      variants={FadeIn("right", 0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="w-1/2 text-center">
        <h2 className="text-center text-2xl lg:text-4xl text-slate-800 font-mono font-bold">
          Weekend Sale <span className='text-2xl lg:text-4xl text-orange-800'>is Live now!</span>
        </h2>
        <div ref={typewriterRef} className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'>
        </div>
        <p className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'>
          
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: null }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ 
          duration: 1, 
          ease: "easeInOut", 
        }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div>
          <img src={Watch1} className="h-[60vh] rounded-lg" alt="Watch" />
          <div className="bg-slate-300 w-8 h-8 absolute bottom-[5%] rounded-lg z-10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
