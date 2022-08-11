import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as FiscalSolutionSharedStyles from './FiscalSolutionShared.module.css';
import { motion, useAnimation } from 'framer-motion';
function FiscalSolution({
    h1text,
    pText,
    circelimgSrc,
    imgSrc,
}: {
    h1text?: string;
    pText?: string;
    circelimgSrc?: string;
    p1Text?: string;
    imgSrc?: string;
}) {
    const parentVariants = {
        hidden: {
            x: '-120px',
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                duration: 7,
            },
        },
    };

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
            className={FiscalSolutionSharedStyles.main_foscial_cards}
        >
            <Row className={FiscalSolutionSharedStyles.portfolio_row}>
                <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                    <div className={FiscalSolutionSharedStyles.foscial_cards_parent}>
                        <div className={FiscalSolutionSharedStyles.foscial_cards_text_parent}>
                            <svg height="250" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect className={FiscalSolutionSharedStyles.shape} height="250" width="100%" />
                            </svg>
                            <div className={FiscalSolutionSharedStyles.circleimages}>

                                <svg height="100" width="150">
                                    <circle cx="52" cy="50" r="48" stroke="#0f76de" stroke-width="3" fill="#0f76de" />
                                </svg>
                            </div>
                        </div>
                        <div className={FiscalSolutionSharedStyles.foscial_cards_text_child}>
                            {/* <CustomHeadingOne text={`${h1text}`} /> */}
                            <h1 className={FiscalSolutionSharedStyles.text_heading}>{`${h1text}`}</h1>
                        </div>
                        <div className={FiscalSolutionSharedStyles.foscial_cards_text_pera}>
                            <CustomParagraph text={`${pText}`} />
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                    <motion.div
                        className={FiscalSolutionSharedStyles.foscial_cards_parent_image}
                        variants={parentVariants}
                    // animate={animation}
                    >
                        <img alt="" src={`${imgSrc}`} className={FiscalSolutionSharedStyles.portfolio_img} />
                        {/* <div className={FiscalSolutionSharedStyles.portfolio_img}>
                            <Image layout='fill' src={`${imgSrc}`} />
                        </div> */}
                    </motion.div>
                </Col>
            </Row>
        </motion.div>
    );
}
export default FiscalSolution;
