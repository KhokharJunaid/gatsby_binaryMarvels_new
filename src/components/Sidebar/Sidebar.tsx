import React, { useEffect } from 'react';
import * as SidebarStyles from './Sidebar.module.css';
import Scrollspy from 'react-scrollspy';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timeline } from 'antd';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
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
function Sidebar() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        controls.start('visible');
    }, [controls, inView]);

    return (
        <div className="aside_bar_parent">
            <motion.div
                className={SidebarStyles.sidebar_parent}
                ref={ref}
                variants={parentVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <Scrollspy
                    items={[
                        '',
                        'web_design',
                        'web_development',
                        'graphic_design',
                        'optimization',
                        'about_us',
                        '',
                    ]}
                    currentClassName="active"
                >
                    {/* <Timeline mode="left"> */}
                    <Timeline.Item
                        className={SidebarStyles.timeline_mid_1st}
                        color="#0f76de"
                        dot={
                            <DownCircleOutlined
                                style={{ fontSize: '16px', color: '#0f76de' }}
                            />
                        }
                    ></Timeline.Item>

                    <Timeline.Item className={SidebarStyles.timeline_mid} color="#0f76de">
                        <li className={SidebarStyles.sidebar_child}>
                            <a href="/#web_design">
                                <span className={SidebarStyles.sidebar_digit}>
                                    01
                                    <p className={SidebarStyles.sidebar_text}>
                                        Web <br />
                                        Design
                                    </p>
                                </span>
                            </a>
                        </li>
                    </Timeline.Item>

                    <Timeline.Item className={SidebarStyles.timeline_mid} color="#0f76de">
                        <li className={SidebarStyles.sidebar_child}>
                            <a href="/#web_development">
                                <span className={SidebarStyles.sidebar_digit}>
                                    02
                                    <p className={SidebarStyles.sidebar_text}>
                                        Web
                                        <br /> Development
                                    </p>
                                </span>
                            </a>
                        </li>
                    </Timeline.Item>
                    <Timeline.Item className={SidebarStyles.timeline_mid} color="#0f76de">
                        <li className={SidebarStyles.sidebar_child}>
                            <a href="/#graphic_design">
                                <span className={SidebarStyles.sidebar_digit}>
                                    03
                                    <p className={SidebarStyles.sidebar_text}>
                                        Graphic
                                        <br /> Design
                                    </p>
                                </span>
                            </a>
                        </li>
                    </Timeline.Item>
                    <Timeline.Item className={SidebarStyles.timeline_mid} color="#0f76de">
                        <li className={SidebarStyles.sidebar_child}>
                            <a href="/#optimization">
                                <span className={SidebarStyles.sidebar_digit}>
                                    04
                                    <p className={SidebarStyles.sidebar_text}>
                                        SEO <br />
                                        Optimization
                                    </p>
                                </span>
                            </a>
                        </li>
                    </Timeline.Item>
                    <Timeline.Item className={SidebarStyles.timeline_mid} color="#0f76de">
                        <li className={SidebarStyles.sidebar_child}>
                            <a href="/#about_us">
                                <span className={SidebarStyles.sidebar_digit}>
                                    o5
                                    <p className={SidebarStyles.sidebar_text}>
                                        About <br />
                                        Us
                                    </p>
                                </span>
                            </a>
                        </li>
                    </Timeline.Item>
                    <Timeline.Item
                        className={SidebarStyles.timeline_mid_1st}
                        color="#0f76de"
                        style={{ height: 0 }}
                        dot={
                            <UpCircleOutlined
                                style={{ fontSize: '16px', color: '#0f76de' }}
                            />
                        }
                    ></Timeline.Item>
                    {/* </Timeline> */}
                </Scrollspy>
            </motion.div>
        </div>
    );
}
export default Sidebar;
