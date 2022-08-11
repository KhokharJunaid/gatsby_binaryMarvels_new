import React, { useEffect, useState } from 'react';
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout/Layout';
import GraphicSidebar from '../../components/GraphicSidebar/GraphicSidebar';
import GraphicBanner from '../../components/GraphicBanner/GraphicBanner';
import GraphicDesignLetToRight from '../../components/GraphicDesignLetToRight/GraphicDesignLetToRight';
import GraphicOffers from '../../components/GraphicOffers/GraphicOffers';
import GraphicOrder from '../../components/GraphicOrder/GraphicOrder';
import GraphicPictures from '../../components/GraphicPictures/GraphicPictures';


function Graphics() {
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
                            {scroll && <GraphicSidebar />}
                        </div>
                        <GraphicBanner />
                        <div className="innerMainDiv">
                            <div id="working_time">
                                <GraphicDesignLetToRight />
                            </div>
                            <br />
                            <div id="graphic_service">
                                <GraphicOffers />
                            </div>

                            <div id="order">
                                <GraphicOrder />
                            </div>

                            <div id="">
                                <GraphicPictures />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Graphics;

export const Head: HeadFC = () => <title>Graphics-Binary Marvels | Software Company</title>