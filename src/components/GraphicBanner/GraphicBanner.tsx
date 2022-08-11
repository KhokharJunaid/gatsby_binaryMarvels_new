import React, { useEffect } from 'react';
import BannerShared from '../Bannershared/Bannershared';
import *as GraphicBannerStyles from './GraphicBanner.module.css';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
    HeadingVariants,
    TextVariants,
} from '../../services/animation.service';
import graphic_main_image from "../../images/graphic_main_image.png"
function GraphicBanner() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <BannerShared
                h1Text="Graphic design "
                h2Text="Marketing is all about what you see and that is where the art of graphic designing highlights your products and services."
                imgSrc={graphic_main_image}
                capitalValue="G"
                button1="PORTFOLIO"
                button2="ORDER"
            />

            <motion.div
                className={GraphicBannerStyles.web_design_child}
                ref={ref}
                animate={controls}
                initial="hidden"
            >
                <motion.div variants={HeadingVariants}>
                    <CustomHeadingOne text={'Graphic design studio'} />
                </motion.div>

                <motion.div variants={TextVariants}>
                    <p className={GraphicBannerStyles.text}>
                        <span className={GraphicBannerStyles.counting}>1</span> A presence with a very
                        unique style is MUST for every Business.
                    </p>
                    <br />
                    <p className={GraphicBannerStyles.text}>
                        <span className={GraphicBannerStyles.counting}>2</span> If you want your business
                        to grow beyond your expectations, we know how to deliver it and turn
                        your visions into reality.
                    </p>
                    <br />
                    <p className={GraphicBannerStyles.text}>
                        <span className={GraphicBannerStyles.counting}>3</span> We offer personalized
                        creative approach to every client.
                    </p>

                    <br />
                    <CustomParagraph
                        text={
                            'Our team consists of professional graphic designers. We create eye catching designs which focuses entirely on the project through proper instructions.'
                        }
                    />
                </motion.div>
            </motion.div>
        </>
    );
}
export default GraphicBanner;
