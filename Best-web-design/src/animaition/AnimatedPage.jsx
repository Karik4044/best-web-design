import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        y: 30,
        clipPath: "inset(100% 50% 0% 50%)", // co lại theo chiều dọc + ẩn hai bên
        filter: "blur(8px)"
    },
    in: {
        opacity: 1,
        scale: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)", // bung full
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // ease-out expo
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    },
    out: {
        opacity: 0,
        scale: 0.95,
        y: -30,
        clipPath: "inset(100% 50% 0% 50%)",
        filter: "blur(6px)",
        transition: {
            duration: 0.5,
            ease: [0.55, 0.085, 0.68, 0.53], // ease-in
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
            duration: 0.4,
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
            className="w-full relative"
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
