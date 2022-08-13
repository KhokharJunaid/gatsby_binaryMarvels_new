import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import HomeOptimizationImg from "../../images/HomeSEO.png"
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import HomeLetter from '../HomeLetter';
import * as HomeOptimizationStyles from './HomeOptimization.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
function HomeOptimization() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            console.log('home opt work');
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
            <Row className={HomeOptimizationStyles.home_optimization_parent}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <motion.div
                        className={HomeOptimizationStyles.home_optimization_text_parent}
                        variants={HeadingVariants}
                    >
                        <div className={HomeOptimizationStyles.capital_word}>
                            <HomeLetter text={'S'} />
                        </div>

                        <motion.div
                            className={HomeOptimizationStyles.home_optimization_text}
                            variants={TextVariants}
                        >
                            <CustomHeadingOne text={'SEO optimization'} />

                            <br />

                            <motion.div
                                variants={TextVariants}
                            >
                                <div className={HomeOptimizationStyles.heading_text}>
                                    <CustomHeadingTwo
                                        text={
                                            'In the electronic era, when there’s a need for making everything easy and simple, we can help you to excellence by getting your websites SEO optimized and pave your way to excellence.'
                                        }
                                    />
                                </div>

                                <br />

                                <div className={HomeOptimizationStyles.pera_text}>
                                    <CustomParagraph
                                        text={
                                            'Search engine optimization (SEO) is a one way ticket to making your websites reach increase by introducing clever tactics and strategies.'
                                        }
                                    />
                                </div>
                                <br />

                                <CustomParagraph
                                    text={
                                        'Binary marvels digital marketing team will turn the dial to eleven for increasing the reach to websites of our clients by introducing expert level strategies making the brand flourish and gain traffic to the website. More traffic is what you need, to get your page fully SEO optimized and featured on the search engines first page making your website a first and always click.'
                                    }
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <motion.div variants={ImageVariants}>
                        <img alt=""
                            src={HomeOptimizationImg}
                            className={HomeOptimizationStyles.home_img}
                        />
                        {/* <div className={HomeOptimizationStyles.home_img}>
                            <Image layout='fill' src={'/Assets/Images/HomeSEO.png'} />
                        </div> */}
                    </motion.div>
                </Col>
            </Row>
        </motion.div >
    );
}

export default HomeOptimization;
