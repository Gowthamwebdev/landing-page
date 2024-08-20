import { useEffect, useRef } from 'react';
import Watch1 from '../assets/watch1.png';
import handShake from '../assets/handshake.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import { HeroImgVariant, infiniteBounce } from '../Variants';
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
    <div className='w-full h-[90vh] p-10 flex items-center justify-center bg-white'>
      {/* Left Section: Text Content */}
      <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center'>
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
            Weekend Sale <span className='text-2xl lg:text-6xl  z-10'>is Live now!</span>
          </h2>
          <div ref={typewriterRef} className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'></div>
        </motion.div>
        <div className='w-full flex justify-center lg:justify-start my-4'>
          <Button label="Shop now" iconURL={KeyboardArrowRightIcon} />
        </div>
        <div className=' bg-purple-100 shadow- rounded-lg font-serif p-5 flex flex-row max-w-sm'>
          <img src={handShake} alt="" className='w-1/6 h-1/3' />
          <div>
          <p>1000+ Collection</p><br />
          <p>Check our versatile collection of watches for men, women and children</p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 flex justify-center">
        <motion.div
          variants={HeroImgVariant()}
          initial="initial"
          whileInView="whileInView"
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <img src={Watch1} className="h-[60vh] rounded-lg" alt="Woman with Watch" />
        </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              y: 0,
            }}
            animate={{
              y: -50,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 3,
            }}
            viewport={{ once: false, amount: 0.8 }}
            className="absolute top-3/4 left-[-120px] transform -translate-y-1/2 z-20 w-16 h-16 bg-orange-500 rounded-full"
          >
            <img src={Watch1} alt="" className='w-full h-full bg-cover rounded-full' />
          </motion.div>

          <motion.div 
            variants={infiniteBounce()}
            animate="animate"
            initial={{
              opacity: 0,
            }}
            viewport={{ once: false, amount: 0.8 }}
          className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-20 w-16 h-16 bg-orange-500 rounded-full">
          <img src={Watch1} alt="" className='w-full h-full bg-cover rounded-full' />
          </motion.div>
      </div>
      </div>
  );
};

export default Home;
