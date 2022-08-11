import { Dropdown } from 'antd';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import * as LogoStyles from './logo.module.css';
import { Link } from 'gatsby';
import binarymarvelsLogo from "../../../../../images/binarymarvels-logo-svg.svg";
import logoPng from "../../../../../images/logo.png";
const parentVariants = {
  hidden: {
    x: '4vw',
  },
  visible: {
    x: '6vw',
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

function Logo() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    controls.start('visible');
  }, [controls, inView]);
  const menu = (
    <motion.div

      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div >
        <img
          alt=""
          src={binarymarvelsLogo}
          className={LogoStyles.home_img_logo}
        />
      </div>
    </motion.div>
  );
  return (
    <>
      <Link to="/home">
        <Dropdown overlay={menu}>
          <a>
            <img
              alt=""
              src={logoPng}
              className={LogoStyles.home_img}
            />
          </a>
        </Dropdown>
      </Link>
    </>
  );
}
export default Logo;
