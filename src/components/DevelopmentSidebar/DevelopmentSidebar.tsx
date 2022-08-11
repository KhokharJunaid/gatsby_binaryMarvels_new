import React, { useEffect, useState } from 'react';
import * as DevelopmentSidebarStyles from './DevelopmentSidebar.module.css';
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
function DevelopmentSidebar() {
    const { width } = useWindowSize()
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
                    items={['', 'progect_management', 'perfect_product', 'order', '']}
                    currentClassName="active"
                    style={width < 1346 ? { paddingLeft: "10px" } : { paddingLeft: "44px" }}
                >
                    <h1 className={DevelopmentSidebarStyles.text_heading}>Web Development</h1>
                    <li className={DevelopmentSidebarStyles.sidebar_child}>
                        <a href="/web-development#progect_management">
                            <h4 className={DevelopmentSidebarStyles.sidebar_text}>Project Management</h4>
                        </a>
                    </li>

                    <li className={DevelopmentSidebarStyles.sidebar_child}>
                        <a href="/web-development#perfect_product">
                            <h4 className={DevelopmentSidebarStyles.sidebar_text}>Perfect Product</h4>
                        </a>
                    </li>

                    <li className={DevelopmentSidebarStyles.sidebar_child}>
                        <a href="/web-development#order">
                            <h4 className={DevelopmentSidebarStyles.sidebar_text}>Order Web Project</h4>
                        </a>
                    </li>
                    <h1 className={DevelopmentSidebarStyles.text_heading}>Share this page</h1>

                    <div className={DevelopmentSidebarStyles.icons}>
                        <Link to="https://www.instagram.com/binarymarvels/">
                            <a>
                                <img alt=""
                                    src={InstagramSvg}
                                    className={DevelopmentSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <Link to="https://www.linkedin.com/company/binarymarvels">
                            <a>
                                <img alt=""
                                    src={LinkINSVG}
                                    className={DevelopmentSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <a href="https://www.facebook.com/binarymarvels/">
                            <img alt=""
                                src={Facebook_Svg}
                                className={DevelopmentSidebarStyles.home_img}
                            />
                        </a>
                        <Link to="https://twitter.com/BinaryMarvels">
                            <a>
                                <img alt=""
                                    src={TwiterSvg}
                                    className={DevelopmentSidebarStyles.home_img}
                                />
                            </a>
                        </Link>
                    </div>
                </Scrollspy>
            </motion.div>
        </div>
    );
}
export default DevelopmentSidebar;
