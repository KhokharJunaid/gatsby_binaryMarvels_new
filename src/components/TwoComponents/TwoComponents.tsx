import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as TwoComponentsStyles from './TwoComponents.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';

function TwoComponents({
    h1Text,
    h1Textt,
    pText,
    pTextt,
    list,
    imgSrc,
}: {
    h1Text: string;
    h1Textt: string;
    pText: string;
    pTextt: string;
    list?: string[];
    imgSrc: string;
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <motion.div
                className={TwoComponentsStyles.question_parent}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div
                    className={TwoComponentsStyles.question_parent_h1}
                    variants={TextVariants}
                >
                    <CustomHeadingOne text={`${h1Text} `} />
                </motion.div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <motion.div
                            className={TwoComponentsStyles.question_child}
                            variants={TextVariants}
                        >
                            <CustomParagraph text={`${pText}`} />
                            <br />
                            <CustomParagraph text={`${pTextt}`} />
                            <br />
                            {list && (
                                <ul className={TwoComponentsStyles.component_list}>
                                    {list.map((liData, key) => {
                                        return (
                                            <div key={key}>
                                                <motion.li variants={TextVariants}>
                                                    <CustomParagraph text={liData} />
                                                    <br />
                                                </motion.li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            )}
                        </motion.div>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                        <motion.div variants={ImageVariants}>
                            <img alt="" src={`${imgSrc}`} className={TwoComponentsStyles.home_img} />
                            {/* <div className={TwoComponentsStyles.home_img}>
                                <Image src={`${imgSrc}`} layout='fill' />
                            </div> */}
                        </motion.div>
                    </Col>
                </Row >
            </motion.div >
        </>
    );
}

export default TwoComponents;
