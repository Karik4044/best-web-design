import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
        }
}
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
        }
    }
};


export const BadgeIcons = {
    // Day achievements
    '7days': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z" clipRule="evenodd"></path>
        </motion.svg>
    ),
    '14days': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </motion.svg>
    ),
    '30days': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ rotate: 0 }}
            animate={{ 
                y: [-5, 5, -5], 
                x: [3, -3, 3],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.5))", "drop-shadow(0 0 8px rgba(255,255,255,0.8))", "drop-shadow(0 0 3px rgba(255,255,255,0.5))"]
            }}
            transition={{ 
                y: { duration: 2, ease: "easeInOut", repeat: Infinity },
                x: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
                filter: { duration: 2.5, ease: "easeInOut", repeat: Infinity }
            }}
        >
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
        </motion.svg>
    ),
    // Challenge achievements
    'first-challenge': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </motion.svg>
    ),
    'superstar': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </motion.svg>
    ),
    'master': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ 
                scale: 1,
                filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.7))", "drop-shadow(0 0 8px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.7))"]
            }}
            transition={{ 
                scale: { duration: 0.5, delay: 1 },
                filter: { duration: 2, repeat: Infinity }
            }}
        >
            <path d="M2 5a1 1 0 011.707-.707l2.586 2.586L10 3l3.707 3.879 2.586-2.586A1 1 0 0118 5v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 2.414V15h12V7.414l-2.293 2.293a1 1 0 01-1.414 0L10 6.414l-2.293 3.293a1 1 0 01-1.414 0L4 7.414z" />
        </motion.svg>
    ),
    // Additional achievements
    'inspirer': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </motion.svg>
    ),
    'connector': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
        >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </motion.svg>
    ),
    'speedster': (props) => (
        <motion.svg 
            className={props.className} 
            fill="currentColor" 
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
                filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.7))", "drop-shadow(0 0 10px rgba(255,255,255,0.9))", "drop-shadow(0 0 3px rgba(255,255,255,0.7))"]
            }}
            transition={{ 
                scale: { duration: 1.5, repeat: Infinity },
                rotate: { duration: 2, repeat: Infinity },
                filter: { duration: 1.5, repeat: Infinity }
            }}
        >
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </motion.svg>
    )
}; 