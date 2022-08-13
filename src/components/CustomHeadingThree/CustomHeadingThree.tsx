import React from 'react';
import * as CustomHeadingThreeStyles from './CustomHeadingThree.module.css';
import { motion } from 'framer-motion';
import { TextVariants } from '../../services/animation.service';
function CustomHeadingThree({ text }: { text: string }) {
    return (
        <motion.h3 className={CustomHeadingThreeStyles.headingThree} variants={TextVariants}>
            {text}
        </ motion.h3>
    );
}

export default CustomHeadingThree;
