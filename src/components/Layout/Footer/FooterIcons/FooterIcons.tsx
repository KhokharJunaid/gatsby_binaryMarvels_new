
import { Link } from 'gatsby';
import React from 'react';
import * as FooterIconsStyles from './FooterIcons.module.css';
import InstagramSvg from "../../../../images/InstagramSvg.svg";
import LinkinSvg from "../../../../images/LinkINSVG.svg";
import FacebookSvg from "../../../../images/Facebook_Svg.svg";
import TwitterSvg from "../../../../images/TwiterSvg.svg";

function FooterIcons() {
  //getting current year

  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div >
        <div className={FooterIconsStyles.icons}>
          <Link to="https://www.instagram.com/binarymarvels/">
            <img alt=""
              src={InstagramSvg}
              className={FooterIconsStyles.home_img}
            />
            {/* <div className={FooterIconsStyles.home_img}>
              <Image layout='fill' src="/Assets/Images/InstagramSvg.svg" />
            </div> */}
          </Link>{' '}
          <Link to="https://www.linkedin.com/company/binarymarvels">

            <img alt=""
              src={LinkinSvg}
              className={FooterIconsStyles.home_img}
            />
            {/* <div className={FooterIconsStyles.home_img}>
              <Image layout='fill' src="/Assets/Images/LinkINSVG.svg" />
            </div> */}
          </Link>
          <Link to="https://www.facebook.com/binarymarvels/">
            <img alt=""
              src={FacebookSvg}
              className={FooterIconsStyles.home_img}
            />
            {/* <div className={FooterIconsStyles.home_img}>
              <Image layout='fill' src="/Assets/Images/Facebook_Svg.svg" />
            </div> */}
          </Link>

          <Link to="https://twitter.com/BinaryMarvels">

            <img alt=""
              src={TwitterSvg}
              className={FooterIconsStyles.home_img}
            />
            {/* <div className={FooterIconsStyles.home_img}>
              <Image layout='fill' src="/Assets/Images/TwiterSvg.svg" />
            </div> */}
          </Link>

        </div>
        <div className={FooterIconsStyles.text}>
          <p >
            All right reserved {year} Binary Marvels
          </p>
        </div>
      </div>
    </>
  );
}
export default FooterIcons;
