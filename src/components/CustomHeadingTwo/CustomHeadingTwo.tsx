import React from 'react';
import * as CustomHeadingTwoStyles from './CustomHeadingTwo.module.css';
import { motion } from 'framer-motion';
function CustomHeadingTwo({ text }: { text: string }) {
    return <motion.h2 className={CustomHeadingTwoStyles.headingTwo}>{text}</motion.h2>;
}

export default CustomHeadingTwo;
