import { motion } from "framer-motion"
import { Bounce, infiniteBounce } from "../Variants";

const Varieties = () => {
  const bounceDelay = 0.5;

  return (
    <div className="h-full w-screen bg-primary">
      <h1>Varieties</h1>
      
      <motion.div
        variants={Bounce(bounceDelay)}
        initial={"initial"}
        whileInView={"whileInView"}
        viewport={{ once: false, amount: 0.8 }}
      >
        unisex Watches
      </motion.div>

      <motion.div
        variants={Bounce(bounceDelay + 0.2)} 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.8 }}
      >
        Stylished look
      </motion.div>

      <motion.div
        variants={Bounce(bounceDelay + 0.4)} 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.8 }}
      >
        Enhanced comfortness
      </motion.div>

      <motion.div 
  variants={infiniteBounce}
  animate={"animate"}
  transition={"transition"}
>
 lime
</motion.div>

    </div>
  );
};

export default Varieties;
