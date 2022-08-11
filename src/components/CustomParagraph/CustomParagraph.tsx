import React from 'react';
import * as CustomParagraphStyles from './CustomParagraph.module.css';
import { motion } from 'framer-motion';
import { TextVariants } from '../../services/animation.service';

function CustomParagraph({ text }: { text: string }) {
    return (
        <motion.p className={CustomParagraphStyles.paragraph} variants={TextVariants}>
            {text}
        </motion.p>
    );
}

export default CustomParagraph;
