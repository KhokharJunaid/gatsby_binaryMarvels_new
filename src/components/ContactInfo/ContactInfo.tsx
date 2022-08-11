import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import { motion, useAnimation } from 'framer-motion';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import HomeLetter from '../HomeLetter';
import * as ContactInfoStyles from './ContactInfo.module.css';

function ContactInfo() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            console.log('home opt work');
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
            <div className={ContactInfoStyles.contact_info_parent}>
                <CustomHeadingOne text={'Contact Information'} />
                <br />
                <br />
                <Row className={ContactInfoStyles.cotact_info_child}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={8} xxl={8}>
                        <div>
                            <iframe
                                loading="lazy"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Binary Marvels, Chakri Road, Afzal Electronics, Quaid-e-Azam Colony Quaid e Azam Colony, Rawalpindi&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                className={ContactInfoStyles.map}
                            ></iframe>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
                        <div className={ContactInfoStyles.capital_letter}>
                            <HomeLetter text={'P'} />
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                        <div className={ContactInfoStyles.cotact_rwp}>
                            <CustomHeadingOne text={'Pakistan'} />
                            <CustomHeadingThree text={'Rawalpindi'} />
                            <CustomParagraph
                                text={'Adress: Suit 8, Saqib Mall Chakri road Rawalpindi'}
                            />
                            <a href="mailto:info@binarymarvels.com">
                                <CustomParagraph text={'E-mail: info@binarymarvels.com'} />
                            </a>
                            <CustomParagraph text={'Tel: +92515126442'} />
                            <CustomParagraph text={'Working hour: Mon-Fri 09:00-05:00'} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}></Col>
                </Row>
                <div className={ContactInfoStyles.parent_text}>
                    <CustomHeadingOne text={'Join our team. A great place to work.'} />
                    <div className={ContactInfoStyles.contact_info_join}>
                        <CustomParagraph
                            text={
                                'You come to work in a focused, highly collaborative colleagues that you’d expect to find in an expanding, innovative and professional company.We are proud of what we achieve every day. We enjoy working in an informal organization, employing collaborative teamwork to achieve our goals in a cooperative way. The success of our business depends above all on the people who work here.'
                            }
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
export default ContactInfo;
