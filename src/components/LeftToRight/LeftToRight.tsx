import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as LeftToRightStyles from './LeftToRight.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';

function LeftToRight({
    h1Text,
    h2Text,
    pText,
    imgSrc,
    capitalValue,
}: {
    h1Text: string;
    h2Text: string;
    pText: string;
    imgSrc: string;
    capitalValue: string;
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
            <Row className={LeftToRightStyles.left_to_right}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <motion.div variants={ImageVariants}>
                        <img alt="" src={imgSrc} className={LeftToRightStyles.left_to_right_img} />
                        {/* <div style={{ maxWidth: "700px" }} className={LeftToRightStyles.left_to_right_img}>
                            <Image src={imgSrc} layout='fill' />
                        </div> */}
                    </motion.div>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    xxl={8}
                    className={LeftToRightStyles.webdesign_padding}
                >
                    <motion.div
                        className={LeftToRightStyles.left_to_right_text_parent}
                        variants={TextVariants}
                    >
                        <CustomHeadingOne text={`${h1Text}`} />
                        <br />
                        <div className={LeftToRightStyles.left_to_right_text}>
                            <CustomHeadingTwo text={`${h2Text}`} />
                        </div>
                        <br />
                        <motion.div
                            className={LeftToRightStyles.left_to_right_text_pera}
                            variants={TextVariants}
                        >
                            <CustomParagraph text={`${pText}`} />
                        </motion.div>
                    </motion.div>
                </Col>

                <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={8}>
                    <motion.h1
                        className={LeftToRightStyles.left_to_right_word}
                        variants={HeadingVariants}
                    >
                        {capitalValue}
                    </motion.h1>
                </Col>
            </Row>
        </motion.div>
    );
}

export default LeftToRight;
