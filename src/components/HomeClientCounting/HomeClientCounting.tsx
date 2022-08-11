import React, { useEffect } from 'react';
import * as HomeClientCountingStyles from './HomeClientCounting.module.css';
import { Col, Row } from 'antd';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import CustomHeadingFour from '../CustomHeadingFour/CustomHeadingFour';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    HeadingVariants,
    ParentVariants,
} from '../../services/animation.service';

function HomeClientCounting() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        controls.start('visible');
    }, [controls, inView]);

    return (
        <>
            <motion.div
                className={HomeClientCountingStyles.client_counting_parent}
                ref={ref}
                variants={ParentVariants}
                animate={controls}
                initial="hidden"
            >
                <Row>
                    <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                        <div>
                            <div className={HomeClientCountingStyles.counting_child_parent}>
                                <motion.h1
                                    className={HomeClientCountingStyles.client_count}
                                    variants={HeadingVariants}
                                >
                                    55
                                </motion.h1>

                                <CustomParagraph text={'CLIENTS'} />
                            </div>
                            <div className={HomeClientCountingStyles.counting_child_parent}>
                                <motion.h1
                                    className={HomeClientCountingStyles.client_count}
                                    variants={HeadingVariants}
                                >
                                    109
                                </motion.h1>

                                <CustomParagraph text={'PROJECTS'} />
                            </div>
                            <div className={HomeClientCountingStyles.counting_child_parent}>
                                <div>
                                    <motion.h1
                                        className={HomeClientCountingStyles.client_count}
                                        variants={HeadingVariants}
                                    >
                                        7
                                    </motion.h1>
                                </div>

                                <CustomParagraph text={'COUNTRIES'} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={18} md={18} lg={18} xl={18} xxl={18}>
                        <div className={HomeClientCountingStyles.main_text_client}>
                            <div>
                                <CustomParagraph
                                    text={
                                        'Binary Marvels Pvt Ltd. connected well with the client throughout the project. They delivered professional services that ended up with quality work. The vendor also had a smooth workflow that saved time for the client on a daily basis. '
                                    }
                                />
                                <CustomHeadingFour
                                    text={
                                        'Shahbaz Haider, Company Secretary, HT Supplies & Services '
                                    }
                                />
                            </div>
                            {/* 2nd */}
                            <br />
                            <div>
                                <CustomParagraph
                                    text={
                                        "Post engagement quickly boosted thanks to Binary Marvels Pvt Ltd.. The company was highly impressed with the vendor's offerings, both in digital marketing and web development. They also gained notable quality leads from their social media accounts, gaining sales on the daily."
                                    }
                                />
                                <CustomHeadingFour
                                    text={'Sakib Khan, Director, Online Quran Tutor  '}
                                />
                            </div>
                            {/* 3rd */}
                            <br />
                            <div>
                                <CustomParagraph
                                    text={
                                        "The client and external stakeholders are impressed with the team's quick and professional work. Since they've completed the MVP site, the client can now pitch and ask for financing from their investors. Binary Marvels Pvt Ltd.'s responsiveness and reliability are hallmarks of their work."
                                    }
                                />

                                <CustomHeadingFour text={'Ejiro Enaohwo, CEO, Toaste'} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
}

export default HomeClientCounting;
