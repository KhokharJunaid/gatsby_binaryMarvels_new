import React, { useState, useEffect } from 'react';
import MainFooter from './Footer/MainFooter/MainFooter';
import Header from './Header/HeaderMain/HeaderMain';
import { motion } from 'framer-motion';
import BackgroundLinesImg from "../../../src/images/BackgroundLines.svg";
// : { children: any }
function Layout({ children }: any) {
  const [headerFlag, setHeaderFlag] = useState<boolean>(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setHeaderFlag(false);
      } else {
        setHeaderFlag(true);
      }
    });
  }, []);

  let lastScrollTop = 0;
  useEffect(() => {
    document.addEventListener(
      'scroll',
      () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setHeaderFlag(false);
        } else {
          setHeaderFlag(true);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false,
    );
  }, [lastScrollTop]);

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundLinesImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div>
        {headerFlag && <Header />}
        {children}
        <MainFooter />
      </div>
    </div>
  );
}

export default Layout;
