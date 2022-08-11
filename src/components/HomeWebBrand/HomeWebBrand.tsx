import React, { useEffect } from 'react';
import LeftToRight from '../LeftToRight/LeftToRight';
import { motion, useAnimation } from 'framer-motion';
import * as HomeWebBrandStyles from './HomeWebBrand.module.css';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import HomeWebBrandImg from "../../images/HomeGraphic.png"
function HomeWebBrand() {
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
            className={HomeWebBrandStyles.main}
        >
            <LeftToRight
                h1Text="Graphic design "
                h2Text="Weren’t for brilliant color and exotic shapes nature would be just so boring. That is what we will bring to your imagination an explosion of color and an eye catching design."
                imgSrc={HomeWebBrandImg}
                capitalValue="G"
                pText="Our graphic designers here at binary marvels are artists that have a mesmerizing creative power that will bring your imagination and thought on paper and make you such vibrantly exclusive designs that’ll fit your app, website, poster, and logos. The designing done for you will attract all audiences and make your websites and apps a must click and your posters and logos a must read."
            />
            <br />
        </motion.div>
    );
}

export default HomeWebBrand;
