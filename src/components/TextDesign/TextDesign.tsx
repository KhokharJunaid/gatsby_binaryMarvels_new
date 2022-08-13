import React, { useEffect } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as TextDesignStyles from './TextDesign.module.css';
import { useInView } from 'react-intersection-observer';

import { motion, useAnimation } from 'framer-motion';
import {
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
function TextDesign({
    h1Text,
    pText1,
    pText2,
    list,
}: {
    h1Text: string;
    pText1: string;
    pText2: string;
    list?: string[];
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            variants={ParentVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div className={TextDesignStyles.text_desing_perant} variants={TextVariants}>
                <CustomHeadingOne text={`${h1Text}`} />
                <CustomParagraph text={`${pText1}`} />
                <br />
                <CustomParagraph text={`${pText2}`} />

                {list && (
                    <motion.ul className={TextDesignStyles.component_list} variants={TextVariants}>
                        <CustomParagraph text={`${pText1}`} />
                        {list.map((liData, key) => {
                            return (
                                <div key={key}>
                                    <li>
                                        <CustomParagraph text={liData} />
                                    </li>
                                </div>
                            );
                        })}
                    </motion.ul>
                )
                }
            </motion.div >
        </motion.div >
    );
}
export default TextDesign;
