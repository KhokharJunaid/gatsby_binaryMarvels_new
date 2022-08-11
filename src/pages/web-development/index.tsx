import React, { useEffect, useState } from 'react';
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout/Layout';
import DevelopmentSidebar from '../../components/DevelopmentSidebar/DevelopmentSidebar';
import WebDevelomentBanner from '../../components/WebDevelopmentBanner/WebDevelopmentBanner';
import WebDevelpPic from '../../components/WebDevelpPic/WebDevelpPic';
import OutSource from '../../components/OutSource/OutSource';
import DevelopmentBtn from '../../components/DevelopmentBtn/DevelopmentBtn';

function DevelopmentWeb() {
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
                            {scroll && <DevelopmentSidebar />}
                        </div>
                        <WebDevelomentBanner />
                        <div className="innerMainDiv">
                            <div id="progect_management">
                                <WebDevelpPic />
                            </div>
                            <div id="perfect_product">
                                <OutSource />
                            </div>
                            <div id="order">
                                <DevelopmentBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default DevelopmentWeb;

export const Head: HeadFC = () => <title>Web Development-Binary Marvels | Software Company</title>