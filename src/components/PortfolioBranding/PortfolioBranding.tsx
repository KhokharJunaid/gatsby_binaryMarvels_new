import React from 'react';
import FiscalSolution from '../FiscalSolutionShared/FiscalSolutionShared';
import * as PortfolioBrandingStyles from './PortfolioBranding.module.css';
import BENIDICT_PORTFOLIO from "../../images/BENIDICT-PORTFOLIO.png"
import MEDSIT from "../../images/MEDSIT.png"
function PortfolioBranding() {
    return (
        <div className={PortfolioBrandingStyles.parents_foscal}>
            <div className={PortfolioBrandingStyles.parent}>
                <FiscalSolution
                    h1text="BENIDICT"
                    pText="IT services & Digital Marketing Services for booking appointments for a Hair Salon based in UK."
                    imgSrc={BENIDICT_PORTFOLIO}
                    circelimgSrc=""
                />
            </div>
            <div className={PortfolioBrandingStyles.fiscal_child}>
                <FiscalSolution
                    h1text="MEDS IT NEXUS"
                    pText="Designing and development of website for Medical Billing Company with full website SEO and all Digital Marketing Services."
                    imgSrc={MEDSIT}
                    circelimgSrc=""
                />
            </div>
        </div>
    );
}

export default PortfolioBranding;
