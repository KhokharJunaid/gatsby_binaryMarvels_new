import React from 'react';
import * as HomeBannerStyles from "./CustomHeadingOneBanner.module.css"

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
function CustomHeadingOneBanner({ text }: { text: string }) {
    return (
        <motion.h1 className={HomeBannerStyles.headingOne} variants={textVariants}>
            {text}
        </motion.h1>
    );
}

export default CustomHeadingOneBanner;
