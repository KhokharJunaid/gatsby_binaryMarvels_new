import React, { useEffect, useState } from 'react';
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout/Layout';
import InternetSidebar from '../../components/InternetSidebar/InternetSidebar';
import InternetBanner from '../../components/InternetBanner/InternetBanner';
import InternetService from '../../components/InternetService/InternetService';
import InternetButton from '../../components/InternetButton/InternetButton';


function internetMarkeet() {
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
                            {scroll && <InternetSidebar />}
                        </div>
                        <InternetBanner />
                        <div className="innerMainDiv">
                            <div id="marketing_service">
                                <InternetService />
                            </div>

                            <div id="order">
                                <InternetButton />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default internetMarkeet;
export const Head: HeadFC = () => <title>Digital Marketing-Binary Marvels | Software Company</title>

