import React from 'react';
import { motion } from 'framer-motion';

const scrollVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

function ScrollAnimation({ children, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px", amount: 0.1 }}
            variants={scrollVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default ScrollAnimation; 