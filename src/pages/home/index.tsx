import React, { useEffect, useState } from 'react'
import type { HeadFC } from "gatsby"
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomeBanner from '../../components/HomeBanner'
import HomeWebDesign from '../../components/HomeWebDesign/HomeWebDesign'
import HomeWebDevelopment from '../../components/HomeWebDevelopment/HomeWebDevelopment'
import HomeWebBrand from '../../components/HomeWebBrand/HomeWebBrand'
import HomeOptimization from '../../components/HomeOptimization/HomeOptimization'
import HomePlains from '../../components/HomePlains/HomePlains'
import HomeClient from '../../components/HomeClient/HomeClient'
import HomeClientCounting from '../../components/HomeClientCounting/HomeClientCounting'
import { useWindowSize } from '../../hooks/windowDimensions'
import HomeBlogPost from '../../components/HomeBlogPost/HomeBlogPost'
import HomeBelogPostResponsive from '../../components/HomeBlogPostResponsive/HomeBlogPostResponsive'
import HomeSubcriber from '../../components/HomeSubcriber/HomeSubcriber'

function Home() {
    const { width } = useWindowSize();
    const [scroll, setScroll] = useState<any>(false);
    //to show the sidebar
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 620;
            setScroll(scrollCheck);
        });
    }, []);

    useEffect(() => {
        console.log('scroll', scroll);
    }, [scroll]);
    return (
        <>
            <Layout >
                <div className="mainContainer">
                    <div className="childContainer">
                        <motion.div
                            id="navbar"
                            style={{ position: 'sticky', top: '120px', zIndex: 1000 }}
                        >
                            {scroll && <Sidebar />}
                        </motion.div>
                        <HomeBanner />
                        <div id="web_design">
                            <HomeWebDesign />
                        </div>
                        <br />
                        <br />
                        <div id="web_development">
                            <HomeWebDevelopment />
                        </div>
                        <div className="graphic_design" id="graphic_design">
                            <HomeWebBrand />
                        </div>
                        <br />
                        <br />
                        <div id="optimization">
                            <HomeOptimization />
                        </div>
                        <div className="about_us" id="about_us">
                            <HomePlains />
                        </div>
                        <HomeClient />
                        <HomeClientCounting />
                        {width > 996 && <HomeBlogPost />}
                        {width <= 996 && <HomeBelogPostResponsive />}

                    </div>
                </div>
                <HomeSubcriber />

            </Layout>
        </>
    )
}

export default Home
export const Head: HeadFC = () => <title>Web Designing - Binary Marvels | Software Company</title>

