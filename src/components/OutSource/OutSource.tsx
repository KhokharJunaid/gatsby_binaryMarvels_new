import React, { useEffect } from 'react';
import { ImageVariants } from '../../services/animation.service';
import TextDesign from '../TextDesign/TextDesign';
import * as OutSourceStyles from './OutSource.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import developmentProducts from "../../images/developmentProducts.png"
function OutSource() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    const list = [
        '	Flawless code',

        '  	HTML5, CSS3, jQuery, Ajax, PHP, MySQL ',

        '	Responsive design ',

        '	Retina-ready websites ',
    ];
    return (
        <>
            <TextDesign
                h1Text="Web development service to outsource? You need an extra hand?"
                pText1="Stationed In Pakistan, a renowned web developing company that ensures on time deliveries. Our company Binary marvels has worked for well-known brands and if you too want up-to date works that flourish well and are delivered on time than you have come to the right place."
                pText2=""
            />
            <TextDesign
                h1Text="You want a perfect product? "
                pText1=""
                pText2=""
                list={list}
            />
            <motion.div
                className={OutSourceStyles.picture}
                ref={ref}
                variants={ImageVariants}
                initial="hidden"
                animate={controls}
            >
                <img alt=""
                    src={developmentProducts}
                    className={OutSourceStyles.home_2nd_img}
                />
                {/* <div className={OutSourceStyles.home_2nd_img}>
                    <Image layout='fill' src={'/Assets/Images/developmentProducts.png'} />
                </div> */}
            </motion.div>
        </>
    );
}
export default OutSource;
