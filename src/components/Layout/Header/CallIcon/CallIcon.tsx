import { Dropdown } from 'antd';
import React, { useEffect } from 'react';
import * as CallIconsStyles from './CallIcon.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TopIcon3 from "../../../../images/topicon3.svg"
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
function CallIcon() {
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
      className={CallIconsStyles.Parent_drop}
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.span className={CallIconsStyles.call_us} variants={headingVariants}>
        Call Us :
      </motion.span>
      <motion.div className={CallIconsStyles.contact_child} variants={textVariants}>
        <div className={CallIconsStyles.contact}>
          <span className={CallIconsStyles.tele_phone}>Telephone:</span>
          <span className={CallIconsStyles.numbers}>+9251 5126442</span>
        </div>
        <div className={CallIconsStyles.contact}>
          <span className={CallIconsStyles.cell_phone}>Cellphone:</span>
          <span className={CallIconsStyles.numbers}>+92305 5609555</span>
        </div>
      </motion.div>
    </motion.div>
  );
  return (
    <>
      <Dropdown overlay={menu}>
        {/* <PhoneOutlined className={CallIconsStyles.icons} /> */}
        <div className={CallIconsStyles.icons_parent}>
          <img alt=""
            src={TopIcon3}
            className={CallIconsStyles.phone_svg}
          />
        </div>
      </Dropdown>
    </>
  );
}
export default CallIcon;
