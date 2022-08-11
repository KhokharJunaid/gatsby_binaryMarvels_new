import { ArrowUpOutlined } from '@ant-design/icons';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as FooterContactStyles from './FooterContact.module.css';
function FooterContact() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <div className={FooterContactStyles.main_footer}>
        <div className={FooterContactStyles.parent_btn}>
          <div className={FooterContactStyles.button} onClick={scrollTop}>
            <ArrowUpOutlined className={FooterContactStyles.icon} />
          </div>
        </div>
        <h3 className={FooterContactStyles.text}>Do you have an idea ?</h3>
        <h1 className={FooterContactStyles.text}>Contact Us</h1>
        <a href="mailto:info@binarymarvels.com">
          <p className={FooterContactStyles.text}>E-mail: info@binarymarvels.com</p>
        </a>
      </div>
    </>
  );
}

export default FooterContact;
