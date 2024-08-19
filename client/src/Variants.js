import { transform } from "framer-motion"

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

export const Bounce = (delay) =>{
    return {
        initial: {
            opacity: 0,
            scale: null,
            x: 40,
            y: 0,
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
                times: [0, 0.5, 0.5, 0.75, 1]
            }
        }
    }
}