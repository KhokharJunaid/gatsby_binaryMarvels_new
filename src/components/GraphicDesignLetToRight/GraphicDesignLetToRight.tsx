import React from 'react';
import TwoComponents from '../TwoComponents/TwoComponents';
import graphicGlobal from "../../images/graphicGlobal.png"
function GraphicDesignLetToRight() {
    return (
        <>
            <div>
                <TwoComponents
                    h1Text="Working Since 2017"
                    h1Textt=""
                    pText="We are working on Graphic Designing projects since 2017. We have done enormous projects over the past several years and it will be our privilege to be on board with you."
                    pTextt=" Let us be proud of the solutions that we come up with for you."
                    imgSrc={graphicGlobal}
                />
            </div>
        </>
    );
}
export default GraphicDesignLetToRight;
