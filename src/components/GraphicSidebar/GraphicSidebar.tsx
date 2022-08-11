import React, { useEffect } from 'react';
import * as GraphicSidebarStyles from './GraphicSidebar.module.css';
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
function GraphicSidebar() {
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
                    items={['', 'working_time', 'graphic_service', 'order', '']}
                    currentClassName="active"
                    style={width < 1346 ? { paddingLeft: "10px" } : { paddingLeft: "44px" }}
                >
                    <h1 className={GraphicSidebarStyles.text_heading}>Web Desing</h1>
                    <li className={GraphicSidebarStyles.sidebar_child}>
                        <a href={`/graphic-design#working_time`}>
                            <h4 className={GraphicSidebarStyles.sidebar_text}>Working Time</h4>
                        </a>
                    </li>

                    <li className={GraphicSidebarStyles.sidebar_child}>
                        <a href="/graphic-design#graphic_service">
                            <h4 className={GraphicSidebarStyles.sidebar_text}>
                                {' '}
                                Graphic Design <br />
                                Offer
                            </h4>
                        </a>
                    </li>

                    <li className={GraphicSidebarStyles.sidebar_child}>
                        <a href="/graphic-design#order">
                            <h4 className={GraphicSidebarStyles.sidebar_text}>
                                Order Graphic <br />
                                Service
                            </h4>
                        </a>
                    </li>
                    <h1 className={GraphicSidebarStyles.text_heading}>Share this page</h1>

                    <div className={GraphicSidebarStyles.icons}>
                        <Link to="https://www.instagram.com/binarymarvels/">
                            <a>
                                <img alt=""
                                    src={InstagramSvg}
                                    className={GraphicSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <Link to="https://www.linkedin.com/company/binarymarvels">
                            <a>
                                <img alt=""
                                    src={LinkINSVG}
                                    className={GraphicSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <a href="https://www.facebook.com/binarymarvels/">
                            <img alt=""
                                src={Facebook_Svg}
                                className={GraphicSidebarStyles.home_img}
                            />
                        </a>
                        <Link to="https://twitter.com/BinaryMarvels">
                            <a>
                                <img alt=""
                                    src={TwiterSvg}
                                    className={GraphicSidebarStyles.home_img}
                                />
                            </a>
                        </Link>
                    </div>
                </Scrollspy>
            </motion.div>
        </div>
    );
}
export default GraphicSidebar;
