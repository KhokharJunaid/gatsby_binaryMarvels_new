import React from 'react';
import DropDownItems from '../../../DropDownItems/DropDownItems';
import BlueImg from "../../../../images/blueImg.jpg"

function HeaderMarket() {
  return (
    <>
      <DropDownItems
        h1Text="Markeeting"
        p1Text="What Can we do for you"
        img1Src={BlueImg}
        h2Text="Markeet"
        p2Text="Lorem ipsum dolor sit "
        img2Src={BlueImg}
        h3Text="outPost"
        p3Text="how can we help you"
        img3Src={BlueImg}
        h4Text="In post"
        p4Text="We are doing for you"
      />
    </>
  );
}
export default HeaderMarket;
