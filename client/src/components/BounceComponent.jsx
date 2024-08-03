import { motion } from 'framer-motion';

const BounceComponent = () => {
  return (
    <motion.div className='text-center text-4xl font-mono'
      initial={{ opacity: 0, y: -20 }} // Initial state (hidden and slightly above)
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ type: 'spring', stiffness: 100, damping: 10 }} // Bounce effect
    >
      {/* Your component content */}
      Hello, World!
    </motion.div>
  );
};

export default BounceComponent;
