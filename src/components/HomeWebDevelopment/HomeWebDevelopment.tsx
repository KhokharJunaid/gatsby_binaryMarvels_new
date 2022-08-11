import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import HomeLetter from '../HomeLetter';
import * as HomeWebDevStyles from './HomeWebDevelopment.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
function HomeWebDevelopment() {
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
            <motion.div className={HomeWebDevStyles.home_web_development_parent}>
                <motion.div variants={HeadingVariants}>
                    <HomeLetter text={'D'} />
                </motion.div>
                <motion.div
                    className={HomeWebDevStyles.home_web_development_heading}
                    variants={TextVariants}
                >
                    <CustomHeadingOne text={'Web development'} />
                    <div className={HomeWebDevStyles.heading_text}>
                        <br />
                        <CustomHeadingTwo
                            text={
                                'When it comes to writing codes for a high end organization that gives results, we will write code with such perfection and dedication leaving no flaw whatsoever.'
                            }
                        />
                    </div>
                    <br />
                    <div className={HomeWebDevStyles.pera_text}>
                        <CustomParagraph
                            text={
                                'Web development is a job that if handed to the best programmers, it will lead to masterpiece of a website that’ll manifest sky rocketing results for a business. And the programmers at binary marvels are nothing less than the very best themselves.'
                            }
                        />
                        <br />
                        <CustomParagraph
                            text={
                                '‘Finesse’ will be the word; you’ll be looking for when the task that has been handed is done.'
                            }
                        />
                    </div>
                </motion.div>
            </motion.div>
            <br />
            <br />
            <motion.div
                className={HomeWebDevStyles.facilities}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <Row>
                    <Col xs={0} sm={0} md={9} lg={9} xl={9} xxl={9}></Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        xxl={5}
                        className={HomeWebDevStyles.table_setting_web_development}
                    >
                        <ul className={HomeWebDevStyles.facilities_child}>
                            <motion.li variants={TextVariants}>+ HTML</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ CSS3</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ BOOTSTRAPE4</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ JAVASCRIPT</motion.li>
                        </ul>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        xxl={5}
                        className={HomeWebDevStyles.table_setting_web_development}
                    >
                        <ul className={HomeWebDevStyles.facilities_child}>
                            <motion.li variants={TextVariants}>+ MONGO DB</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ EXPRESS JS</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ REACT JS</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ NODE JS</motion.li>
                            <br />
                        </ul>
                    </Col>

                    <Col
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={5}
                        xxl={5}
                        className={HomeWebDevStyles.table_setting_third_column}
                    >
                        <ul className={HomeWebDevStyles.facilities_child}>
                            <motion.li variants={TextVariants}>+ WORDPRESS</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ ONLINE SHOP</motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ WEB APPLICATION </motion.li>
                            <br />
                            <motion.li variants={TextVariants}>+ CUSTOM SOLUTIONS</motion.li>
                        </ul>
                    </Col>
                </Row>
            </motion.div>
        </motion.div>
    );
}

export default HomeWebDevelopment;
