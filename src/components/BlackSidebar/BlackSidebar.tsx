import React, { useEffect } from 'react';
import * as BlackSidebarStyles from './BlackSidebar.module.css';
import Scrollspy from 'react-scrollspy';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';
import InstagramSvg from "../../images/InstagramSvg.svg";
import LinkinSvg from "../../images/LinkINSVG.svg";
import FacebookSvg from "../../images/Facebook_Svg.svg";
import TwitterSvg from "../../images/TwiterSvg.svg";
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
function BlackSidebar() {
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
                    items={['', 'question', 'Order', 'Designing', '']}
                    currentClassName="active"
                    style={width < 1346 ? { paddingLeft: "10px" } : { paddingLeft: "44px" }}
                >
                    <h1 className={BlackSidebarStyles.text_heading}>Web Desing</h1>
                    <li className={BlackSidebarStyles.sidebar_child}>
                        <a href="/web-design#question">
                            <h4 className={BlackSidebarStyles.sidebar_text}>Why Binary Marvels</h4>
                        </a>
                    </li>

                    <li className={BlackSidebarStyles.sidebar_child}>
                        <a href="/web-design#Order">
                            <h4 className={BlackSidebarStyles.sidebar_text}>Order Website Design</h4>
                        </a>
                    </li>

                    <li className={BlackSidebarStyles.sidebar_child}>
                        <a href="/web-design#Designing">
                            <h4 className={BlackSidebarStyles.sidebar_text}>Graphic Design</h4>
                        </a>
                    </li>
                    <h1 className={BlackSidebarStyles.text_heading}>Share this page</h1>

                    <div className={BlackSidebarStyles.icons}>
                        <Link to="https://www.instagram.com/binarymarvels/">
                            <a>
                                <img alt=""
                                    src={InstagramSvg}
                                    className={BlackSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <Link to="https://www.linkedin.com/company/binarymarvels">
                            <a>
                                <img alt=""
                                    src={LinkinSvg}
                                    className={BlackSidebarStyles.home_img}
                                />
                            </a>
                        </Link>{' '}
                        <a href="https://www.facebook.com/binarymarvels/">
                            <img alt=""
                                src={FacebookSvg}
                                className={BlackSidebarStyles.home_img}
                            />
                        </a>
                        <Link to="https://twitter.com/BinaryMarvels">
                            <a>
                                <img alt=""
                                    src={TwitterSvg}
                                    className={BlackSidebarStyles.home_img}
                                />
                            </a>
                        </Link>
                    </div>
                </Scrollspy>
            </motion.div>
        </div>
    );
}
export default BlackSidebar;
