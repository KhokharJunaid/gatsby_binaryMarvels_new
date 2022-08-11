import React from 'react';
import * as CustomHeadingOneStyles from './CustomHeadingOne.module.css';
import { motion } from 'framer-motion';
const textVariants = {
    hidden: {
        opacity: 0,
        originY: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        pathLength: 1,
        transition: { delay: 1, duration: 1.5 },
    },
};
function CustomHeadingOne({ text }: { text: string }) {
    return (
        <motion.h1 className={CustomHeadingOneStyles.headingOne} variants={textVariants}>
            {text}
        </motion.h1>
    );
}

export default CustomHeadingOne;
