
export const FadeIn = (direction, delay) =>{
    return {
        hidden: {
            y : direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x : direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        }, 
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

export const HeroImgVariant = () =>{
        return {
            initial: {
                opacity: 0,
                scale: null,
            },
            whileInView: {
                opacity: 1,
                scale: [1, 1.1, 1],
                duration: 300
            }
        }
}

export const Bounce = (delay = 0) => {
    return {
        initial: {
            opacity: 0,
            scale: 0.8,  
            x: 0,       
            y: 40,      
        },
        whileInView: {
            opacity: 1,
            scale: [0.8, 1.1, 1], 
            x: 0,
            y: 0,
            transition: {
                type: 'spring',    
                duration: 0.8,      
                delay: delay,       
                ease: [0.25, 0.25, 0.25, 0.75],
                times: [0, 0.5, 0.75, 1] 
            }
        }
    }
}

export const infiniteBounce = () => {
    return {
      hidden: {
        y: 0,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        }
      },
      animate: {    
        y: [0, -50, 0], 
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity, 
          repeatType: "loop",
          delay: 3,
        }
      }
    }
  }
  