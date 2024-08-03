import WomenImg from '../assets/woman-with-watch.jpg'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='bg-primary w-full h-[100vh] flex items-center justify-center lg:flex-row flex-col'>

      <div className="w-1/2 text-center">
          <h2 className="text-center text-2xl lg:text-4xl text-white font-mono font-bold">Weekend Sale
             <span className='text-2xl lg:text-4xl text-orange-800'> is Live now!</span></h2>

             <p className='text-xl lg:text-2xl my-4 font-semibold font-mono text-slate-800'>Grab some of our best products...</p>
      </div>
          
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className='w-1/2'>
        <div>
          
      <img src={WomenImg} className="w-1/2 h-[60vh] rounded-lg" alt="Woman with watch" />
      <div className="bg-slate-300 w-8 h-8 absolute bottom-[5%] rounded-lg z-10"></div>
        </div>
      </motion.div>
        
    </div>
  )
}

export default Home;