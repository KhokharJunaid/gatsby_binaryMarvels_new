import { Dropdown } from 'antd';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import * as PhoneIconStyles from './phoneIcon.module.css';
import TopIcon3 from "../../../../../images/topicon3.svg"
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
    y: '-10vw',
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
function PhoneIcon() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    controls.start('visible');
  }, [controls, inView]);
  const menu = (
    <motion.div
      className={PhoneIconStyles.Parent_drop}
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.span className={PhoneIconStyles.call_us} variants={headingVariants}>
        Call Us :
      </motion.span>
      <motion.div className={PhoneIconStyles.contact_child} variants={textVariants}>
        <div className={PhoneIconStyles.contact}>
          <span className={PhoneIconStyles.tele_phone}>Telephone:</span>
          <span className={PhoneIconStyles.numbers}>+9251 5126442</span>
        </div>
        <div className={PhoneIconStyles.contact}>
          <span className={PhoneIconStyles.cell_phone}>Cellphone:</span>
          <span className={PhoneIconStyles.numbers}>+92305 5609555</span>
        </div>
      </motion.div >
    </motion.div >
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <div className={PhoneIconStyles.icons}>
          {/* <div className={PhoneIconStyles.icons_blog}> */}
          {/* <div className={PhoneIconStyles.social_media_icons}>
            <Image layout='fill' src="/Assets/Images/topicon3.svg" />
          </div> */}
          <img alt=""
            src={TopIcon3}
            className={PhoneIconStyles.social_media_icons}
          />
        </div>
      </Dropdown>
    </>
  );
}
export default PhoneIcon;
