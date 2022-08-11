import { Dropdown } from 'antd';
import React, { useEffect } from 'react';
import * as DropLinkStyles from './dropLink.module.css';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';
import InstagramSvg from "../../../../../images/InstagramSvg.svg";
import LinkinSvg from "../../../../../images/LinkINSVG.svg";
import FacebookSvg from "../../../../../images/Facebook_Svg.svg";
import TwitterSvg from "../../../../../images/TwiterSvg.svg";
import TopILinkSvg from "../../../../../images/topILink.svg";


const parentVariants = {
  hidden: {
    x: '2.5vw',
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
    y: '0vw',
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
    x: '5vw',
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    pathLength: 1,
    transition: { duration: 1 },
  },
};
function DropLink() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    controls.start('visible');
  }, [controls, inView]);
  const menu = (
    <motion.div
      className={DropLinkStyles.Parent_drop}
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.span className={DropLinkStyles.follow_us} variants={headingVariants}>
        Follow Us :
      </motion.span>
      <div className={DropLinkStyles.contact_child}>
        <motion.div
          className={DropLinkStyles.social_media_icons_parents}
          variants={textVariants}
        >
          <Link to="https://www.instagram.com/binarymarvels/">
            <div className={DropLinkStyles.social_media_icons}>
              {/* <Image layout='fill' src="/Assets/Images/InstagramSvg.svg" /> */}
              <img alt=""
                src={InstagramSvg}
                className={DropLinkStyles.social_media_icons}
              />
            </div>
          </Link>

          {/* <a to="https://www.linkedin.com/company/binarymarvels">
            <img alt=""
              src="/Assets/Images/LinkINSVG.svg"
              className={DropLinkStyles.social_media_icons}
            />
          </a> */}
          <Link to="https://www.linkedin.com/company/binarymarvels">
            <div className={DropLinkStyles.social_media_icons}>
              {/* <Image layout='fill' src="/Assets/Images/LinkINSVG.svg" /> */}
              <img alt=""
                src={LinkinSvg}
                className={DropLinkStyles.social_media_icons}
              />
            </div>
          </Link>
          {/* <a to="https://www.facebook.com/binarymarvels/">
            <img alt=""
              src="/Assets/Images/Facebook_Svg.svg"
              className={DropLinkStyles.social_media_icons}
            />
          </a> */}
          <Link to="https://www.facebook.com/binarymarvels/">
            <div className={DropLinkStyles.social_media_icons}>
              {/* <Image layout='fill' src="/Assets/Images/Facebook_Svg.svg" /> */}
              <img alt=""
                src={FacebookSvg}
                className={DropLinkStyles.social_media_icons}
              />
            </div>
          </Link>

          <Link to="https://twitter.com/BinaryMarvels">
            <div className={DropLinkStyles.social_media_icons}>
              {/* <Image layout='fill' src="/Assets/Images/TwiterSvg.svg" /> */}
              <img alt=""
                src={TwitterSvg}
                className={DropLinkStyles.social_media_icons}
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className={DropLinkStyles.icons}>
          <div className={DropLinkStyles.social_media_icons}>
            {/* <Image layout='fill' src="/Assets/Images/topILink.svg" /> */}
            <img alt=""
              src={TopILinkSvg}
              className={DropLinkStyles.social_media_icons}
            />
          </div>
          {/* <LinkOutlined className={DropLinkStyles.icons} /> */}
          {/* <img alt=""
              src="/Assets/Images/topILink.svg"
              className={DropLinkStyles.social_media_icons}
            /> */}
        </div>
      </Dropdown>
    </>
  );
}
export default DropLink;
