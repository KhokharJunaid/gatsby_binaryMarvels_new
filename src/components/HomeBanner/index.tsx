import { Button, Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import * as HomeBannerStyles from "./HomeBanner.module.css"
import CustomHeadingOneBanner from '../CustomHeadingOneBanner';
import HomeLetter from '../HomeLetter';
import { Link } from 'gatsby';
import { HeadingVariants, ImageVariants, ParentVariants, TextVariants } from '../../services/animation.service';
import BannerImg from "../../images/Banner.png";
import { useInView } from 'react-intersection-observer';

import { useWindowSize } from "../../hooks/windowDimensions";


function HomeBanner() {
    const { width } = useWindowSize();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <div className={HomeBannerStyles.main_parent_div_home_banner}>
                <motion.div
                    className={HomeBannerStyles.parent_home_page}
                    ref={ref}
                    variants={ParentVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <Row>
                        <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={12}
                            xl={12}
                            xxl={12}
                        >
                            <motion.div
                                variants={HeadingVariants}
                            >
                                <HomeLetter text={'W'} />
                            </motion.div>
                            <motion.div
                                className={HomeBannerStyles.home_text_web}
                                variants={TextVariants}
                            >
                                <CustomHeadingOneBanner text={' Web design and'} />
                                <CustomHeadingOneBanner text={' development'} />
                                <CustomHeadingOneBanner text={'full-service agency'} />
                            </motion.div>
                            <motion.div className={HomeBannerStyles.home_btns} variants={TextVariants}>
                                <Link to="/portfolio">
                                    <Button className={HomeBannerStyles.btn}> PORTFOLIO</Button>
                                </Link>
                                <Link to="/order">
                                    <a className={HomeBannerStyles.btn_link_order}>
                                        <Button className={HomeBannerStyles.btn}>ORDER</Button>
                                    </a>
                                </Link>
                            </motion.div>
                        </Col>
                        <Col

                            xs={0}
                            sm={0}
                            md={0}
                            lg={12}
                            xl={12}
                            xxl={12}
                        >
                            <motion.div variants={ImageVariants}>
                                {width > 1100 && <div className={HomeBannerStyles.image}>
                                    <img src={BannerImg} alt="Banner" />
                                </div>}

                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </>
    )
}

export default HomeBanner
