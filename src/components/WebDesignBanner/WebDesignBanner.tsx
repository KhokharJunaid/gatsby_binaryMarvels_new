import React, { useEffect } from 'react';
import BannerShared from '../Bannershared/Bannershared';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingTwo from '../CustomHeadingTwo/CustomHeadingTwo';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as WebDesignBannerStyles from './WebDesignBanner.module.css';
import { motion, useAnimation } from 'framer-motion';
import { ParentVariants } from '../../services/animation.service';
import { useInView } from 'react-intersection-observer';
import webdesign_main_image2 from "../../images/webdesign_main_image2.png"

function WebDesignBanner() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <div>
                <BannerShared
                    h1Text="Web design"
                    h2Text="Our work is simply the manifestation of hard work, well thought input and Excellency through commitment. "
                    imgSrc={webdesign_main_image2}
                    capitalValue="W"
                    button1="PORTFOLIO"
                    button2="ORDER"
                />
            </div>
            <motion.div
                className={WebDesignBannerStyles.web_design_child}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <CustomHeadingOne text={'Web design agency with a soul'} />
                <CustomHeadingTwo
                    text={
                        'As our name may suggest we are a marvel of an agency that will do you a marvel of a web design.'
                    }
                />
                <CustomParagraph
                    text={
                        'All our completions of web design in the past have left our clients fully satisfied and  made them contact us for more work. We have fully experienced web design geniuses who have worked on more than 2000 web design projects since the last 3 years.  '
                    }
                />
                <br />
                <CustomParagraph
                    text={
                        'Our approach to clients makes us know exactly what the client wants and it is then brought to such that your user will have a smooth experience with your products and services '
                    }
                />
                <CustomParagraph text={' '} />
            </motion.div>
        </>
    );
}
export default WebDesignBanner;
