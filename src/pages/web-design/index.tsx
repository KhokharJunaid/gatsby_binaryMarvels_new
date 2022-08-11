import React, { useEffect, useState } from 'react';
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout/Layout';
import BlackSidebar from '../../components/BlackSidebar/BlackSidebar';
import WebDesignBanner from '../../components/WebDesignBanner/WebDesignBanner';
import WebQuestion from '../../components/WebQuestion/WebQuestion';
import DesignOrder from '../../components/WebOrder/WebOrder';
import WebdesignPics from '../../components/WebdesignPics/WebdesignPics';


function Designing() {
    const [scroll, setScroll] = useState<any>(false);
    //to show the sidebar
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 650;
            setScroll(scrollCheck);
        });
    }, []);

    useEffect(() => {
        console.log('scroll', scroll);
    }, [scroll]);

    return (
        <>
            <Layout>
                <div className="mainContainer">
                    <div className="childContainer">
                        <div id="navbar" style={{ position: 'sticky', top: 0, bottom: 0 }}>
                            {scroll && <BlackSidebar />}
                        </div>
                        <WebDesignBanner />
                        <div className="innerMainDiv">
                            <div id="question">
                                <WebQuestion />
                            </div>
                            <div id="Order">
                                <DesignOrder />
                            </div>
                            <div id="Designing">
                                <WebdesignPics />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Designing;

export const Head: HeadFC = () => <title>Designing-Binary Marvels | Software Company</title>