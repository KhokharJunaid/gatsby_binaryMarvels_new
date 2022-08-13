import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import * as PortFolioBannerStyles from './PortFolioBanner.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import HomeLetter from '../HomeLetter';
import PortofolioDown from '../PortofolioFiscal/PortofolioFiscal';
import PortfolioWebApp from '../PortfolioWebApp/PortfolioWebApp';
import PortfolioBranding from '../PortfolioBranding/PortfolioBranding';
import PortfolioAllTabs from '../PortfolioAllTabs/PortfolioAllTabs';
import { useWindowSize } from '../../hooks/windowDimensions';
import Banner from "../../images/Banner.png"
function PortFolioBanner() {
    const [selectedPost, setSelectedPost] = useState(1);
    const { width } = useWindowSize();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <div className={PortFolioBannerStyles.main_parent_div_home_banner}>
            <motion.div
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <Row>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                        <div >
                            <motion.div
                                className={PortFolioBannerStyles.home_letter}
                                variants={HeadingVariants}
                            >
                                <HomeLetter text={'P'} />
                            </motion.div>
                            <div className={PortFolioBannerStyles.home_text_web}>
                                <CustomHeadingOne text={'Portfolio'} />
                                <CustomHeadingTwo
                                    text={
                                        'We worked passionately to impress our potential clients by paying attention to every little detail.'
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                        {/* {width > 1100 && <img alt=""
                            src={Banner}
                            className={PortFolioBannerStyles.home_img}
                        />} */}

                        {/* {width > 1100 && <div className={PortFolioBannerStyles.home_img}>
                            <Image layout='fill' src={'/Assets/Images/Banner.png'} />
                        </div>} */}
                    </Col>
                </Row>
                <br />
                <br />

                <motion.div
                    className={PortFolioBannerStyles.port_folio_links}
                    ref={ref}
                    variants={ParentVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2
                        onClick={() => {
                            {
                                setSelectedPost(1);
                            }
                        }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        ALL
                    </motion.h2>
                    <motion.h2
                        onClick={() => {
                            {
                                setSelectedPost(2);
                            }
                        }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        WEB PRESENTATION
                    </motion.h2>
                    <motion.h2
                        // onClick={() => {
                        //   {
                        //     setSelectedPost(3);
                        //   }
                        // }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        E-COMRACE
                    </motion.h2>
                    <motion.h2
                        onClick={() => {
                            {
                                setSelectedPost(4);
                            }
                        }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        WEB APP
                    </motion.h2>

                    <motion.h2
                        onClick={() => {
                            {
                                setSelectedPost(5);
                            }
                        }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        DIGITAL MARKETING
                    </motion.h2>
                    <motion.h2
                        // onClick={() => {
                        //   {
                        //     setSelectedPost(6);
                        //   }
                        // }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        PRINT DESIGN
                    </motion.h2>
                    <motion.h2
                        // onClick={() => {
                        //   {
                        //     setSelectedPost(7);
                        //   }
                        // }}
                        className={PortFolioBannerStyles.heading}
                        variants={TextVariants}
                    >
                        LABELS
                    </motion.h2>
                </motion.div>
                <div style={{ padding: '0 26px' }}>
                    {selectedPost === 1 && <PortfolioAllTabs />}
                    {selectedPost === 2 && <PortofolioDown />}
                    {/* {selectedPost === 3 && <PortfolioComress />} */}
                    {selectedPost === 4 && <PortfolioWebApp />}
                    {selectedPost === 5 && <PortfolioBranding />}
                    {/* {selectedPost === 6 && <PortfolioPrint />} */}
                    {/* {selectedPost === 7 && <PortfolioLabal />} */}
                </div>
            </motion.div>
        </div>
    );
}
export default PortFolioBanner;
