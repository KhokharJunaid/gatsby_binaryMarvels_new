import React from 'react';
import PortfolioBranding from '../PortfolioBranding/PortfolioBranding';
import PortfolioWebApp from '../PortfolioWebApp/PortfolioWebApp';
import PortofolioDown from '../PortofolioFiscal/PortofolioFiscal';

function PortfolioAllTabs() {
    return (
        <div>
            {/* <CustomHeadingTwo text={'WEB APP'} /> */}
            <PortfolioWebApp />
            {/* <CustomHeadingTwo text={'E-COMRACE'} /> */}

            {/* <PortfolioComress /> */}

            {/* <CustomHeadingTwo text={'LOAD AND BARANDING'} /> */}
            <PortfolioBranding />

            {/* <h1 className={styles.text_heading}>web presentation</h1> */}
            <PortofolioDown />

            <br />
            <br />

            {/* <CustomHeadingTwo text={'PRINT DESIGN'} /> */}
            <br />
            <br />
            {/* <PortfolioPrint /> */}

            {/* <CustomHeadingTwo text={'LABELS'} /> */}
            <br />
            <br />

            {/* <PortfolioLabal /> */}
        </div>
    );
}

export default PortfolioAllTabs;
