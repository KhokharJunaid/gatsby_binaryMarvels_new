import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
    ParentVariants,
    TextVariants,
} from '../../services/animation.service';
import BannerShared from '../Bannershared/Bannershared';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as InternetBannerStyles from './InternetBanner.module.css';
import Internet_markeeting_main_image from "../../images/Internet_markeeting_main_image.png";
function InternetBanner() {
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
            <div >
                <BannerShared
                    capitalValue="D"
                    h1Text="Digital Marketing"
                    h2Text="Find out the potential of Digital marketing, it's effectiveness and how you can take your business to the next level."
                    imgSrc={Internet_markeeting_main_image}
                    button1="PORTFOLIO"
                    button2="ORDER "
                />
            </div>
            <br />
            <br />
            <br />
            <br />
            <motion.div
                className={InternetBannerStyles.text_area}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div variants={TextVariants}>
                    <CustomHeadingOne
                        text={
                            'Our main priority is to build a strong relation with your business.'
                        }
                    />
                </motion.div>
                <motion.div className={InternetBannerStyles.paragraph} variants={TextVariants}>
                    <CustomParagraph
                        text={
                            'Digital Marketing uses customers online activity to connect them with a business by reaching them in a variety of places on the internet. It consists of several skills and techniques and directions with a goal to promote your business in the best possible way.  It requires complete market research to launch the Marketing. '
                        }
                    />
                    <br />
                    <CustomParagraph
                        text={
                            'Based on Market research we do our best way possible to create strategies to promote your business on the internet. You will get exeptional results with a complete report of achievements as well as statistical report of the exponential growth.'
                        }
                    />
                    <motion.ul className={InternetBannerStyles.list} variants={TextVariants}>
                        <li>
                            <CustomParagraph
                                text={'Increase Customer Loyalty with Frequent Communications '}
                            />
                        </li>

                        <li>
                            <CustomParagraph
                                text={'Engage the Customer at Every Buying Stage '}
                            />
                        </li>

                        <li>
                            <CustomParagraph text={'Gain Brand Credibility '} />
                        </li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
export default InternetBanner;
