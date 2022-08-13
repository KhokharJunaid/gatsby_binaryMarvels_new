import { Col, Row } from 'antd';
import React, { createRef, useState } from 'react';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import * as HomeClientStyles from './HomeClient.module.css';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import {
    ImageVariants,
    ParentVariants,
} from '../../services/animation.service';
import MedsiImg from "../../images/medsi.png";
import MedicalImg from "../../images/Medical.png";
import ScantistImg from "../../images/scantist.png";
import YanaImg from "../../images/yana.png";
import FlightImg from "../../images/flight.png";
import ToasteImg from "../../images/toaste.png";
import NasirImg from "../../images/nasir.png";
import BenedictImg from "../../images/BENEDICT_LOGO.png";
import PclImg from "../../images/Pcl.png";


function HomeClient() {
    const customeSlider = createRef() as any;

    const [sliderSettings, setSliderSettings] = useState({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        vertical: true,
    });
    const customeSliderDown = createRef() as any;

    const [sliderDownSettings, setsliderDownSettings] = useState({
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
    });

    return (
        <>
            <motion.div
                className={HomeClientStyles.clients_parent}
                variants={ParentVariants}
                initial="hidden"
                animate="visible"
            >
                <CustomHeadingOne
                    text={'Some of the incredible clients to whom we gave our best'}
                />
                <br />

                <Row className={HomeClientStyles.home_client_main_row}>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderDownSettings}
                            ref={customeSliderDown}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "33px", width: "175px" }} className={HomeClientStyles.medsi_img}>
                                    <Image layout='fill' src={'/Assets/Images/medsi.png'} />
                                </div> */}
                                <img width="175px" height="33px" src={MedsiImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "36px", width: "170px" }} className={HomeClientStyles.medsi_img}>
                                    <Image layout='fill' src={'/Assets/Images/Medical.png'} />
                                </div> */}
                                <img width="170px" height="36px" src={MedicalImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderSettings}
                            ref={customeSlider}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "31px", width: "169px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/Medical.png'} />
                                </div> */}
                                <img width="169px" height="31px" src={MedicalImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "31px", width: "169px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/Medical.png'} />
                                </div> */}
                                <img width="169px" height="31px" src={MedicalImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderSettings}
                            ref={customeSlider}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "40px", width: "175px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/scantist.png'} />
                                </div> */}
                                <img width="175px" height="40px" src={ScantistImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "40px", width: "175px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/scantist.png'} />
                                </div> */}
                                <img width="175px" height="40px" src={ScantistImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderSettings}
                            ref={customeSlider}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "42px", width: "111px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/yana.png'} />
                                </div> */}
                                <img width="111px" height="42px" src={YanaImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "40px", width: "126px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/flight.png'} />
                                </div> */}
                                <img width="126px" height="40px" src={FlightImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                </Row>

                <br />
                <Row className={HomeClientStyles.home_client_main_row}>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>

                        <Slider
                            {...sliderDownSettings}
                            ref={customeSliderDown}
                        >
                            {' '}
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "58px", width: "186px" }} className={HomeClientStyles.quran_img}>
                                    <Image layout='fill' src={'/Assets/Images/toaste.png'} />
                                </div> */}
                                <img width="186px" height="58px" src={ToasteImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "50px", width: "107px" }} className={HomeClientStyles.quran_img}>
                                    <Image layout='fill' src={'/Assets/Images/nasir.png'} />
                                </div> */}
                                <img width="107px" height="50px" src={NasirImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderDownSettings}
                            ref={customeSliderDown}
                        >
                            {' '}
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "40px", width: "192px" }} className={HomeClientStyles.quran_img}>
                                    <Image layout='fill' src={'/Assets/Images/BENEDICT_LOGO.png'} />
                                </div> */}
                                <img width="192px" height="40px" src={BenedictImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >
                                {' '}

                                {/* <div style={{ height: "40px", width: "192px" }} className={HomeClientStyles.quran_img}>
                                    <Image layout='fill' src={'/Assets/Images/BENEDICT_LOGO.png'} />
                                </div> */}
                                <img width="192px" height="40px" src={BenedictImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderSettings}
                            ref={customeSlider}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "67px", width: "173px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/Pcl.png'} />
                                </div> */}
                                <img width="173px" height="67px" src={PclImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "67px", width: "173px" }} className={HomeClientStyles.home_img}>
                                    <Image layout='fill' src={'/Assets/Images/Pcl.png'} />
                                </div> */}
                                <img width="173px" height="67px" src={PclImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <Slider
                            {...sliderDownSettings}
                            ref={customeSliderDown}
                        >
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "40px", width: "126px" }} className={HomeClientStyles.flight_img}>
                                    <Image layout='fill' src={'/Assets/Images/flight.png'} />
                                </div> */}
                                <img width="126px" height="40px" src={FlightImg} />
                            </motion.div>
                            <motion.div
                                className={HomeClientStyles.client_child}
                                variants={ImageVariants}
                            >

                                {/* <div style={{ height: "40px", width: "126px" }} className={HomeClientStyles.flight_img}>
                                    <Image layout='fill' src={'/Assets/Images/flight.png'} />
                                </div> */}
                                <img width="126px" height="40px" src={FlightImg} />
                            </motion.div>
                        </Slider>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
}

export default HomeClient;
