import React from 'react';
import FiscalSolution from '../FiscalSolutionShared/FiscalSolutionShared';
import * as PortfolioWebAppStyles from './PortfolioWebApp.module.css';
import TOASTE_PORTFOLIO from "../../images/TOASTE PORTFOLIO.png"
import REVYOU from "../../images/REVYOU.png"
function PortfolioWebApp() {
    //   {
    //   title,
    //   titleTwo,
    //   titleThree,
    // }: {
    //   title: any;
    //   titleTwo: any;
    //   titleThree: any;
    // }
    return (
        <div className={PortfolioWebAppStyles.parents_foscal}>
            <div className={PortfolioWebAppStyles.parent}>
                {/* {title} */}
                <FiscalSolution
                    h1text="TOASTE"
                    pText="A MERN Stack development with an eye-catching design for a skincare review product analyst company."
                    imgSrc={TOASTE_PORTFOLIO}
                    circelimgSrc=""
                />
            </div>
            <div className={PortfolioWebAppStyles.fiscal_child}>
                <FiscalSolution
                    h1text="REVYOU"
                    pText="Mobile app and Full stack development services for a beauty commerce company based in Pakistan."
                    imgSrc={REVYOU}
                    circelimgSrc=""
                />
            </div>
        </div>
    );
}

export default PortfolioWebApp;
