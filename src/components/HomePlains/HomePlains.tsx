import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as HomePlainsStyle from './HomePlains.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
import HomePlainsImg from "../../images/HomeMeet.png";
function HomePlains() {
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
            animate={controls}
            initial="hidden"
        >
            <Row className={HomePlainsStyle.plains_parent}>
                <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <div>
                        <motion.div
                            className={HomePlainsStyle.plains_parent_text}
                            variants={TextVariants}
                        >
                            <CustomHeadingOne
                                text={
                                    'Meet the people who admire pixels, flawless code and vast plains.'
                                }
                            />

                            <br />
                            <br />
                            <div>
                                <div className={HomePlainsStyle.headind_text}>
                                    <CustomHeadingTwo
                                        text={
                                            'We would rather be thought of as a boutique of digital art than a factory which exceeds its capacity.'
                                        }
                                    />
                                </div>
                                <br />
                                <div className={HomePlainsStyle.pera_text}>
                                    <CustomParagraph
                                        text={
                                            'Binary Marvels is a creative digital agency which focuses on design, development, and digital marketing, thus helping our clients to improve their business.'
                                        }
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <motion.div variants={ImageVariants}>
                        <img alt=""
                            src={HomePlainsImg}
                            className={HomePlainsStyle.plains_img}
                        />
                        {/* <div className={HomePlainsStyle.plains_img}>
                            <Image layout='fill' src={'/Assets/Images/HomeMeet.png'} />
                        </div> */}
                    </motion.div>
                </Col>
            </Row>
        </motion.div>
    );
}

export default HomePlains;
