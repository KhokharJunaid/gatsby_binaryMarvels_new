import React, { useEffect } from 'react';
import * as WebdesignPicStyles from './WebdesignPics.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import WebdesignOne from "../../images/WebdesignOne.png"
import WebdesignTwo from "../../images/WebdesignTwo.png"
import WebdesignThree from "../../images/WebdesignThree.png"
import WebdeignFour from "../../images/WebdeignFour.png"
import webdesignFive from "../../images/webdesignFive.png"

function WebdesignPics() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <>
      <motion.div
        className={WebdesignPicStyles.webdesignpics_parents}
        ref={ref}
        variants={ParentVariants}
        initial="hidden"
        animate={controls}
      >
        <div className={WebdesignPicStyles.mainGallary}>
          <div className={`${WebdesignPicStyles.imageOne}`}>
            <img
              alt=""
              height="100%"
              width="100%"
              src={WebdesignOne}
            />
          </div>
          <div className={`${WebdesignPicStyles.imageTwo}`}>
            <img
              alt=""
              height="100%"
              width="100%"
              src={WebdesignTwo}
            />
          </div>
          <div className={`${WebdesignPicStyles.imageThree}`}>
            <img
              alt=""
              height="100%"
              width="100%"
              src={WebdesignThree}
            />
          </div>
          <div className={`${WebdesignPicStyles.imageFour}`}>
            <img
              alt=""
              height="100%"
              width="100%"
              src={WebdeignFour}
            />
          </div>
          <div className={`${WebdesignPicStyles.imageFive}`}>
            <img
              alt=""
              height="100%"
              width="100%"
              src={webdesignFive}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default WebdesignPics;

{
  /* <Row>
          <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
            <div className={WebdesignPicStyles.home_1st_img}>
              <img alt=""  width="100%" src={'/Assets/Images/WebdesignOne.png'} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={19} xl={19} xxl={19}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
                <div className={WebdesignPicStyles.home_imgTwo}>
                  <img alt=""  width="100%" src={'/Assets/Images/WebdesignTwo.png'} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
                <div className={WebdesignPicStyles.home_img}>
                  <img alt=""  width="100%" src={'/Assets/Images/WebdeignFour.png'} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2}></Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
                <div className={WebdesignPicStyles.home_img_four}>
                  <img alt=""  width="100%" src={'/Assets/Images/WebdesignThree.png'} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <div className={WebdesignPicStyles.home_img_five}>
                  <img alt=""  width="100%" src={'/Assets/Images/WebdesignFive.png'} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}></Col>
            </Row>
          </Col>
        </Row> */
}
