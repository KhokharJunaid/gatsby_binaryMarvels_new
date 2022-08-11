import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import * as HeaderMainStyles from './HeaderMain.module.css';
import DropDown from '../DropDown/DropDown';
import HeaderHome from '../HeaderHome/HeaderHome';
import HeaderDevelopment from '../HeaderDevelopment/HeaderDevelopment';
import HeaderDesign from '../HeaderDesign/HeaderDesign';
import HeaderGraphic from '../HeaderGraphic/HeaderGraphic';
import HeaderMarket from '../HeaderMarket/HeaderMarket';
import HeaderContact from '../HeaderContact/HeaderContact';
import CallIcon from '../CallIcon/CallIcon';
import WebsitesLinks from '../WebsitesLinks/WebsitesLinks';
import { motion } from 'framer-motion';
import Logo from '../DropDown/logo/logo';
import topEmail from "../../../../images/topEmail.svg"
import topBlog from "../../../../images/topBlog.svg"

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const navBar: any = document.querySelector('.headerSettings');
    const position = window.pageYOffset;
    if (position > 0) {
      navBar?.removeAttribute('id');
    }
    if (position === 0) {
      navBar.style.backgroundColor = 'transparent';
      navBar.style.boxShadow = 'none';
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <motion.div
      className="mainContainer headerSettings"
      id="newSettings"
    // ref={ref}
    // variants={parentVariants}
    // initial="hidden"
    // animate={'visible' : 'hidden'}
    >
      <motion.div className="childContainer">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
            <div>
              <Logo />
            </div>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={14}
            xxl={14}
          >
            <div className={HeaderMainStyles.nav_headings}>
              <HeaderHome />
              <HeaderDesign />
              <HeaderDevelopment />
              <HeaderGraphic />
              <HeaderMarket />
              <HeaderContact />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <div className={HeaderMainStyles.icon_parent}>
              <CallIcon />
              <div className={HeaderMainStyles.icons_svg_child}>
                <a href="mailto:info@binarymarvels.com">
                  <img
                    alt=""
                    src={topEmail}
                    className={HeaderMainStyles.icons_email}
                  />
                </a>
              </div>
              <div className={HeaderMainStyles.icons_svg_child}>
                <a href="https://blog.binarymarvels.com/">
                  <img
                    alt=""
                    src={topBlog}
                    className={HeaderMainStyles.icons_blog}
                  />
                </a>
              </div>
              <WebsitesLinks />
            </div>
            <DropDown />
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
}
export default Header;

