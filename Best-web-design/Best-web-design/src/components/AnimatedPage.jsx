import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: -50,
        scale: 0.95,
        rotateY: -10,
        filter: "blur(10px)"
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    },
    out: {
        opacity: 0,
        x: 50,
        scale: 0.95,
        rotateY: 10,
        filter: "blur(10px)",
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
            when: "afterChildren"
        }
    }
};

const contentVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
    out: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

function AnimatedPage({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="w-full"
        >
            <motion.div
                variants={contentVariants}
                className="w-full"
                initial="initial"
                animate="in"
                exit="out"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default AnimatedPage; 