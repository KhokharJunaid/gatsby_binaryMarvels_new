import { Dropdown } from 'antd';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as WebsitesLinksStyles from './WebsitesLinks.module.css';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InstagramSvg from "../../../../images/InstagramSvg.svg";
import LinkinSvg from "../../../../images/LinkINSVG.svg";
import FacebookSvg from "../../../../images/Facebook_Svg.svg";
import TwitterSvg from "../../../../images/TwiterSvg.svg";
import TopILinkSvg from "../../../../images/topILink.svg";
const parentVariants = {
  hidden: {
    x: '5vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};
const headingVariants = {
  hidden: {
    opacity: 0,
    y: '-50vw',
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    pathLength: 1,
    transition: { duration: 2 },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: '20vw',
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    pathLength: 1,
    transition: { duration: 1 },
  },
};

function WebsitesLinks() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      console.log('home opt work');
      controls.start('visible');
    }
  }, [controls, inView]);
  const menu = (
    <motion.div
      className={WebsitesLinksStyles.Parent_drop}
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.span className={WebsitesLinksStyles.follow_us} variants={headingVariants}>
        Follow Us :
      </motion.span>
      <motion.div className={WebsitesLinksStyles.contact_child} variants={textVariants}>
        <div className={WebsitesLinksStyles.social_media_icons_parents}>
          <a href="https://www.instagram.com/binarymarvels/">
            <img alt=""
              src={InstagramSvg}
              className={WebsitesLinksStyles.social_media_icons}
            />
          </a>
          <a href="https://www.linkedin.com/company/binarymarvels">
            <img alt=""
              src={LinkinSvg}
              className={WebsitesLinksStyles.social_media_icons}
            />
          </a>
          <a href="https://www.facebook.com/binarymarvels/">
            <img alt=""
              src={FacebookSvg}
              className={WebsitesLinksStyles.social_media_icons}
            />
          </a>
          <a href="https://twitter.com/BinaryMarvels">
            <img alt=""
              src={TwitterSvg}
              className={WebsitesLinksStyles.social_media_icons}
            />
          </a>
        </div>
      </motion.div >
    </motion.div >
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className={WebsitesLinksStyles.icons_parent}>
          <img alt="" src={TopILinkSvg} className={WebsitesLinksStyles.icons} />
        </div>
      </Dropdown>
    </>
  );
}
export default WebsitesLinks;
