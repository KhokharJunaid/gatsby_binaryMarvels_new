import { Button } from 'antd';
import { useAnimation, motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FormContext } from '../../context/FormContext';
import { useWindowSize } from '../../hooks/windowDimensions';
import {
    HeadingVariants,
    ImageVariants,
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import HomeLetter from '../HomeLetter';
import * as OrderBannerStyles from './OrderBanner.module.css';
import Order_main_banner from "../../images/Order_main_banner.png"
function OrderBanner() {

    const scrollToForm = () => {
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    };
    const [formData, setFormData] = useContext(FormContext);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const { width } = useWindowSize();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className={OrderBannerStyles.main_parent_div_home_banner}>
            <motion.div
                className={OrderBannerStyles.parent_home_page}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div variants={ImageVariants}>
                    {width > 1100 && <img alt=""
                        src={Order_main_banner}
                        className={OrderBannerStyles.home_img}
                    />}

                    {/* {width > 1100 && (
                        <div className={OrderBannerStyles.home_img}>
                            <Image
                                layout="fill"
                                src={'/Assets/Images/Order_main_banner.png'}
                            />
                        </div>
                    )} */}
                </motion.div>
                <div >
                    <motion.div variants={HeadingVariants}>
                        <HomeLetter text={'O'} />
                    </motion.div>
                    <motion.div className={OrderBannerStyles.home_text_web} variants={TextVariants}>
                        <CustomHeadingOne text={'  Order  '} />
                        <CustomHeadingTwo
                            text={
                                'It will be our pleasure to commit to a long-term cooperation and partnership.'
                            }
                        />
                    </motion.div>
                    <motion.div className={OrderBannerStyles.home_btns} variants={TextVariants}>
                        <a>
                            <Button
                                id="website"
                                onClick={() => {
                                    setFormData(1);
                                    scrollToForm();
                                }}
                                className={OrderBannerStyles.btn}
                            >
                                WEBSITE
                            </Button>
                        </a>
                        <a>
                            <Button
                                onClick={() => {
                                    setFormData(2);
                                    scrollToForm();
                                }}
                                className={OrderBannerStyles.btn}
                            >
                                GRAPHIC DESINING
                            </Button>
                        </a>
                        <a>
                            <Button
                                onClick={() => {
                                    setFormData(3);
                                    scrollToForm();
                                }}
                                className={OrderBannerStyles.btn}
                            >
                                E-MARKETING
                            </Button>
                        </a>
                    </motion.div >
                </div >
            </motion.div >
        </div >
    );
}

export default OrderBanner;
