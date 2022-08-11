import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as GraphicOffersStyles from './GraphicOffers.module.css';
import { motion, useAnimation } from 'framer-motion';
import {
    ImageVariants,
    ParentVariants,
} from '../../services/animation.service';
import graphicService from "../../images/graphicService.png"

function GraphicOffers() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    const list = [
        {
            listName: 'Logo design',
        },
        {
            listName:
                'Corporate identity, business cards, letterheads, envelopes design',
        },
        {
            listName: 'Design of catalogs, brochures, flyers, posters',
        },
        {
            listName: 'Illustration design',
        },
    ];
    return (
        <>
            <motion.div
                className={GraphicOffersStyles.Graphic_ofr_parent}
                ref={ref}
                variants={ParentVariants}
                animate={controls}
                initial="hidden"
            >
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <motion.div variants={ImageVariants}>
                            <img alt=""
                                src={graphicService}
                                className={GraphicOffersStyles.home_img}
                            />
                            {/* <div className={GraphicOffersStyles.home_img}>
                                <Image layout='fill' src={'/Assets/Images/graphicService.png '} />
                            </div> */}
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className={GraphicOffersStyles.Graphic_ofr_child}>
                            <CustomHeadingOne text="Graphic design services we offer:" />
                            <ul className={GraphicOffersStyles.list}>
                                {list.map((liData, key) => {
                                    return (
                                        <div key={key}>
                                            <li>
                                                <CustomParagraph text={`${liData.listName}`} />
                                            </li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
}

export default GraphicOffers;
