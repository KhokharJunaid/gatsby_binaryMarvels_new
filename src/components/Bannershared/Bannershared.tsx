import { Button, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import HomeLatter from '../HomeLetter';
import * as BannerSharedStyles from './BannerShared.module.css';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
import CustomHeadingOneBanner from '../CustomHeadingOneBanner';
import { useWindowSize } from '../../hooks/windowDimensions';
import { Link } from 'gatsby';
function BannerShared({
    h1Text,
    h2Text,
    imgSrc,
    capitalValue,
    button1,
    button2,
}: {
    h1Text: string;
    h2Text: string;
    imgSrc: string;
    capitalValue: string;
    button1?: string;
    button2?: string;
}) {
    const { width } = useWindowSize();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            console.log('home opt work');
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <div className={`${BannerSharedStyles.main_parent_div_home_banner}`}>
                <motion.div
                    className={BannerSharedStyles.parent_home_page}
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
                            lg={14}
                            xl={14}
                            xxl={14}
                        >
                            <motion.div

                                variants={HeadingVariants}
                            >
                                <HomeLatter text={`${capitalValue}`} />
                            </motion.div>
                            <motion.div
                                className={BannerSharedStyles.home_text_web}
                                variants={TextVariants}
                            >
                                <CustomHeadingOneBanner text={`${h1Text}`} />
                                <CustomHeadingTwo text={`${h2Text}`} />
                            </motion.div>
                            <motion.div className={BannerSharedStyles.home_btns} variants={TextVariants}>
                                <Link to="/portfolio">
                                    <Button className={BannerSharedStyles.btn}>{button1}</Button>
                                </Link>
                                <Link to="/order">
                                    <a className={BannerSharedStyles.btn_link_order}>
                                        <Button className={BannerSharedStyles.btn}>{button2}</Button>
                                    </a>
                                </Link>
                            </motion.div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={10} xl={10} xxl={10}>
                            <motion.div variants={ImageVariants}>
                                {width > 1100 && <img alt="" src={imgSrc} className={BannerSharedStyles.home_img} />}

                                {/* {width > 1100 && <div className={BannerSharedStyles.home_img}>
                                    <Image src={imgSrc} layout='fill' />
                                </div>} */}
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </>
    );
}

export default BannerShared;
