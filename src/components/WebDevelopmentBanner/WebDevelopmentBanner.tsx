import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import BannerShared from '../Bannershared/Bannershared';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import { motion, useAnimation } from 'framer-motion';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as WebDevelopmentBannerStyles from './WebDevelopmentBanner.module.css';
import webDevelopment_main_image from "../../images/webDevelopment_main_image.png"
function WebDevelomentBanner() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <motion.div

                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <BannerShared
                    h1Text="Web development"
                    h2Text="With our brilliance and your partnership we can do wonders."
                    imgSrc={webDevelopment_main_image}
                    capitalValue="W"
                    button1="PORTFOLIO"
                    button2="ORDER"
                />
            </motion.div>
            <motion.div
                className={WebDevelopmentBannerStyles.web_design_child}
                ref={ref}
                variants={TextVariants}
                initial="hidden"
                animate={controls}
            >
                <CustomHeadingOne text={'Clean coading principels '} />
                <CustomParagraph
                    text={
                        'Masters of web development under one ceiling, with their heads put together to manifest your ideas into reality and get you the results that exceed your expectations. '
                    }
                />

                <motion.ul
                    className={WebDevelopmentBannerStyles.list}
                    ref={ref}
                    variants={TextVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <li>
                        <CustomParagraph text={'Valid code'} />{' '}
                    </li>
                    <li>
                        <CustomParagraph text={'Fast loading Time'} />
                    </li>
                    <li>
                        <CustomParagraph text={'Bug-free'} />
                    </li>
                    <li>
                        <CustomParagraph text={'User Friendly'} />
                    </li>
                    <li>
                        <CustomParagraph text={'SEO friendly'} />
                    </li>
                </motion.ul>
                <CustomParagraph
                    text={
                        'In a professional environment we have people who are up-to date with the latest technologies and have awareness of bestselling strategies that will give results for your websites.'
                    }
                />
            </motion.div>
        </>
    );
}

export default WebDevelomentBanner;
