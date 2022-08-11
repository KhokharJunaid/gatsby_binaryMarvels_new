import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import {
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import WebSiteBtn from '../WebSiteBtn/WebSiteBtn';
import * as InternetButtonStyles from './InternetButton.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function InternetButton() {
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
            <Row>
                <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}></Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <div >
                        <motion.div
                            className={InternetButtonStyles.internet_para}
                            variants={TextVariants}
                        >
                            <CustomParagraph
                                text={
                                    "If you don't know the benefits of Digital Marketing then you might be practically sending your potential customers to someone else in your niche"
                                }
                            />
                            <CustomParagraph text={'The stats are the following:'} />
                            <br />

                            <motion.ul
                                className={InternetButtonStyles.list}
                                ref={ref}
                                variants={ParentVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                <li>
                                    <CustomParagraph
                                        text={
                                            '89% of internet users search for a product online before shopping.'
                                        }
                                    ></CustomParagraph>
                                </li>
                                <br />
                                <li>
                                    <CustomParagraph
                                        text={'46% of all searches are products and services.'}
                                    ></CustomParagraph>
                                </li>
                                <br />
                                <li>
                                    <CustomParagraph
                                        text={
                                            '60% of searchers visit only the first three results in the SERP (Search Engine Results Page).'
                                        }
                                    ></CustomParagraph>
                                </li>
                                <br />
                                <li>
                                    <CustomParagraph
                                        text={
                                            '9 out of 10 mobile searchers make an interaction, whereas 50% shop.'
                                        }
                                    ></CustomParagraph>
                                </li>
                                <br />
                                <li>
                                    <CustomParagraph
                                        text={'9 out of 10 organizations do content marketing.'}
                                    ></CustomParagraph>
                                </li>
                                <br />
                                <li>
                                    <CustomParagraph
                                        text={
                                            "88% of B2C companies which maintain a blog generate more sales than those which don't, companies which run a blog have 55% more visitors."
                                        }
                                    ></CustomParagraph>
                                </li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}></Col>
            </Row>
            <WebSiteBtn
                h1Text="Order Digital Marketing Services"
                pText=" Binary Marvels offers a range of marketing services that can help you reach your business goals. Bringing together a team of experts, we consistently deliver results for our clients which amplify demand and make assigned marketing budgets work harder."
                p1Text="Taking the same methodical and analytical approach to all our services helps deliver successful campaign outcomes, and in combination with our best-in-class creative and technical delivery, Binary Marvels continues to meet and surpass our clients’ expectations. "
                button="Order"
            />
        </motion.div>
    );
}
export default InternetButton;
