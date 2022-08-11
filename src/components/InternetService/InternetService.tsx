import React from 'react';
import internetServise from "../../images/internetServise.png"

import TwoComponents from '../TwoComponents/TwoComponents';
function InternetService() {
    const list = [
        '	High Quality Website with great functionality.',

        '  	A complete Marketing stratgy according to your business niche ',
    ];
    return (
        <>
            <TwoComponents
                h1Text=""
                h1Textt="Digital Marketing Services"
                pText="If want grow your business exceptionally good then you need to two thing;  "
                pTextt=" "
                imgSrc={internetServise}
                list={list}
            />
        </>
    );
}
export default InternetService;
