import React, { useEffect } from 'react';
import * as GraphicPicturesStyles from './GraphicPictures.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import graphicfood from "../../images/graphicfood.png"
import graphicDelivery from "../../images/graphicDelivery.png"
import graphicTeam from "../../images/graphicTeam.png"
import graphicSale from "../../images/graphicSale.png"
import graphicWork from "../../images/graphicWork.png"

function GraphicPictures() {
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
                className={GraphicPicturesStyles.webdesignpics_parents}
                ref={ref}
                variants={ParentVariants}
                animate={controls}
                initial="hidden"
            >
                <div className={GraphicPicturesStyles.mainGallary}>
                    <div className={`${GraphicPicturesStyles.imageOne}`}>
                        <img alt=""
                            height="100%"
                            width="100%"
                            src={graphicfood}
                        />
                    </div>
                    <div className={`${GraphicPicturesStyles.imageTwo}`}>
                        <img alt=""
                            height="100%"
                            width="100%"
                            src={graphicDelivery}
                        />
                    </div>
                    <div className={`${GraphicPicturesStyles.imageThree} `}>
                        <img alt=""
                            height="100%"
                            width="100%"
                            src={graphicTeam}
                        />
                    </div>
                    <div className={`${GraphicPicturesStyles.imageFour} `}>
                        <img alt=""
                            height="100%"
                            width="100%"
                            src={graphicSale}
                        />
                    </div>
                    <div className={`${GraphicPicturesStyles.imageFive}`}>
                        <img alt=""
                            height="100%"
                            width="100%"
                            src={graphicWork}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
export default GraphicPictures;


