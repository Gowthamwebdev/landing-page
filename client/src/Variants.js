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

export const typeWriter = () =>{
    
}