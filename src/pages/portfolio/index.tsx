import React from 'react';
import Layout from '../../components/Layout/Layout';

import type { HeadFC } from "gatsby"
import PortFolioBanner from '../../components/PortFolioBanner/PortFolioBanner';


function PortFolio() {
    return (
        <>
            <Layout>
                <div className="mainContainer">
                    <div className="childContainer">
                        <div>
                            <PortFolioBanner />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default PortFolio;
export const Head: HeadFC = () => <title>Portfolio-Binary Marvels | Software Company</title>

