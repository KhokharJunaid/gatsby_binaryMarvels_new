import React from 'react';
import * as CustomHeadingFourStyles from './CustomHeadingFour.module.css';
import { motion } from 'framer-motion';
import { TextVariants } from '../../services/animation.service';
function CustomHeadingFour({ text }: { text: string }) {
    return (
        <motion.h4 className={CustomHeadingFourStyles.headingFour} variants={TextVariants}>
            {text}
        </ motion.h4>
    );
}

export default CustomHeadingFour;
