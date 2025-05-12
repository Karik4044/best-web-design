import React from 'react';
import { motion } from 'framer-motion';

const scrollVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        x: -80,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

function ScrollAnimation({ children, className = "", delay = 0, stagger = 0 }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.1 }}
            variants={scrollVariants}
            className={`scroll-animation ${className}`}
            transition={{
                staggerChildren: stagger,
                delayChildren: delay
            }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollAnimation; 