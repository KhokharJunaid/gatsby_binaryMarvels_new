import React from 'react';
import FiscalSolution from '../FiscalSolutionShared/FiscalSolutionShared';
import * as PortofolioFiscalStyles from './PortofolioFiscal.module.css';
import MEDSIT from "../../images/MEDSIT.png"
import OQT from "../../images/OQT.png"
import SCANTIST_PORTFOLIO from "../../images/SCANTIST-PORTFOLIO.png"
import genoxymed from "../../images/genoxymed.png"

function PortofolioDown() {
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
        <div className={PortofolioFiscalStyles.parents_foscal}>
            <div className={PortofolioFiscalStyles.fiscal_child}>
                <FiscalSolution
                    circelimgSrc=""
                    h1text="MEDS IT NEXUS"
                    pText="Designing and development of website for Medical Billing Company with full website SEO and all Digital Marketing Services."
                    imgSrc={MEDSIT}
                />
            </div>
            <div className={PortofolioFiscalStyles.fiscal_child_last}>
                <FiscalSolution
                    h1text="OQT"
                    pText="Beautiful Website Design, Development & Social Media Marketing for an online educational institute based in UK and USA."
                    imgSrc={OQT}
                    circelimgSrc=""
                />
            </div>
            <div className={PortofolioFiscalStyles.fiscal_child_last}>
                <FiscalSolution
                    h1text="SCANTIST"
                    pText="Presentational website created on React for a security research company from Singapore."
                    imgSrc={SCANTIST_PORTFOLIO}
                    circelimgSrc=""
                />
            </div>
            <div className={PortofolioFiscalStyles.fiscal_child_last}>
                <FiscalSolution
                    h1text="GENOXYMED"
                    pText="User-friendly website design & development for a Biomed company based in central Israel. "
                    imgSrc={genoxymed}
                    circelimgSrc=""
                />
            </div>
        </div>
    );
}

export default PortofolioDown;
