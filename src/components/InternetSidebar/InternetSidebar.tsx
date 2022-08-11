import React, { useEffect } from 'react';
import * as InternetSidebarStyles from './InternetSidebar.module.css';
import Scrollspy from 'react-scrollspy';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';
import InstagramSvg from "../../images/InstagramSvg.svg";
import LinkINSVG from "../../images/LinkINSVG.svg";
import Facebook_Svg from "../../images/Facebook_Svg.svg";
import TwiterSvg from "../../images/TwiterSvg.svg";
import { useWindowSize } from '../../hooks/windowDimensions';
const parentVariants = {
    hidden: {
        x: '-40px',
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            duration: 1,
        },
    },
};
function InternetSidebar() {
    const { width } = useWindowSize();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        controls.start('visible');
    }, [controls, inView]);

    return (
        <div className="black_aside_bar_parent">
            <motion.div
                ref={ref}
                variants={parentVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <Scrollspy
                    items={['', 'marketing_service', 'seo', 'order', '']}
                    currentClassName="active"
                    style={width < 1346 ? { paddingLeft: "16px" } : { paddingLeft: "44px" }}
                >
                    <h1 className={InternetSidebarStyles.text_heading}>Web Desing</h1>
                    <li className={InternetSidebarStyles.sidebar_child}>
                        <a href="/digital-marketing#progect_management">
                            <h4 className={InternetSidebarStyles.sidebar_text}>Marketing Service</h4>
                        </a>
                    </li>

                    <li className={InternetSidebarStyles.sidebar_child}>
                        <a href="/digital-marketing#perfect_product">
                            <h4 className={InternetSidebarStyles.sidebar_text}>Seo Optimization</h4>
                        </a>
                    </li>

                    <li className={InternetSidebarStyles.sidebar_child}>
                        <a href="/digital-marketing#order">
                            <h4 className={InternetSidebarStyles.sidebar_text}>
                                Order Marketing <br />
                                Service
                            </h4>
                        </a>
                    </li>
                    <h1 className={InternetSidebarStyles.text_heading}>Share this page</h1>

                    <div className={InternetSidebarStyles.icons}>
                        <Link to="https://www.instagram.com/binarymarvels/">
                            <a>
                                <img alt=""
                                    src={InstagramSvg}
                                    className={InternetSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <Link to="https://www.linkedin.com/company/binarymarvels">
                            <a>
                                <img alt=""
                                    src={LinkINSVG}
                                    className={InternetSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <a href="https://www.facebook.com/binarymarvels/">
                            <img alt=""
                                src={Facebook_Svg}
                                className={InternetSidebarStyles.home_img}
                            />
                        </a>
                        <Link to="https://twitter.com/BinaryMarvels">
                            <a>
                                <img alt=""
                                    src={TwiterSvg}
                                    className={InternetSidebarStyles.home_img}
                                />
                            </a>
                        </Link>
                    </div>
                </Scrollspy>
            </motion.div>
        </div>
    );
}
export default InternetSidebar;
