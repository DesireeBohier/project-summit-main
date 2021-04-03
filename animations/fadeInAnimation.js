import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FadeInAnimation = ({children}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ delay: 0.25, ease: [0.42, 0, 0.58, 1], duration: 0.4 }}
                variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
                }}
            >
                {children}
            </motion.div>
        </div>
    )
} 

export default FadeInAnimation;