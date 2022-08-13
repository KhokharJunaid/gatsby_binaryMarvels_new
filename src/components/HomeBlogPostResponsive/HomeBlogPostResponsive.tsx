import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Link } from 'gatsby';

import React, { useState, createRef } from 'react';
import Slider from 'react-slick';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as HomeBlogPostRespStyles from './HomeBlogPostResponsive.module.css';
// import BlogImg from "../../images/HomeBlogs.png"
// import HomeBlogTwo from "../../images/HomeBlog2.png"
// import HomeBlog from "../../images/HomeBlog.png";
import { StaticImage } from 'gatsby-plugin-image';


function HomeBelogPostResponsive() {
    const customeSlider = createRef() as any;

    const [sliderSettings, setSliderSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    const gotoNext = () => {
        customeSlider.current.slickNext();
    };

    const gotoPrev = () => {
        customeSlider.current.slickPrev();
    };

    return (
        <>
            {/* <Secroller /> */}
            <div className={HomeBlogPostRespStyles.blog_post_parent}>
                <CustomHeadingOne text={'New Blog posts'} />
                <br />
                <br />
                <Row>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        xxl={22}
                        className={HomeBlogPostRespStyles.col_one}
                    >
                        <Slider
                            {...sliderSettings}
                            ref={customeSlider}
                            className={HomeBlogPostRespStyles.home_img_slider}
                        >
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/how-do-google-ads-work/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={BlogImg}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>
                                            <StaticImage src="../../images/HomeBlogs.png" alt="" />
                                        </div>
                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}> November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree text={'How Do Google Ads Work?'} />
                                            </div>

                                            <CustomParagraph
                                                text={
                                                    'You’re a new Advertiser with Google Ads (formerly Google Adwords). Excitedly... '
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            {/* new Blog */}

                            <Link to="https://blog.binarymarvels.com/how-to-run-an-effective-digital-marketing-campaign/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={HomeBlogTwo}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>

                                            <StaticImage src="../../images/HomeBlog2.png" alt="" />
                                        </div>

                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree
                                                    text={
                                                        'How to run an effective digital marketing campaign'
                                                    }
                                                />
                                            </div>
                                            <CustomParagraph
                                                text={
                                                    'Planning to run your company an effective digital marketing campaign? Instead.. '
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/am-i-too-late-for-learning-python/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={HomeBlog}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>
                                            <StaticImage src="../../images/HomeBlog.png" alt="" />
                                        </div>

                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree
                                                    text={'Am I too late for learning Python?'}
                                                />
                                            </div>

                                            <CustomParagraph
                                                text={
                                                    'When I was first introduced to Python, I knew something extraordinary was there. It was some..'
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/how-do-google-ads-work/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={BlogImg}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>

                                            <StaticImage src="../../images/HomeBlogs.png" alt="" />
                                        </div>

                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree text={'How Do Google Ads Work?'} />
                                            </div>
                                            <CustomParagraph
                                                text={
                                                    'You’re a new Advertiser with Google Ads (formerly Google Adwords). Excitedly..'
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/am-i-too-late-for-learning-python/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={HomeBlog}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>

                                            <StaticImage src="../../images/HomeBlogs.png" alt="" />
                                        </div>

                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree
                                                    text={'Am I too late for learning Python?'}
                                                />
                                            </div>
                                            <CustomParagraph
                                                text={
                                                    'When I was first introduced to Python, I knew something extraordinary was there. It was some...'
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/how-to-run-an-effective-digital-marketing-campaign/">
                                <a>
                                    <div>
                                        {/* <img alt=""
                                            src={HomeBlogTwo}
                                            className={HomeBlogPostRespStyles.blog_post_img}
                                        /> */}
                                        <div className={HomeBlogPostRespStyles.blog_post_img}>

                                            <StaticImage src="../../images/HomeBlog2.png" alt="" />
                                        </div>

                                        <br />
                                        <p className={HomeBlogPostRespStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostRespStyles.texts}>
                                            <div className={HomeBlogPostRespStyles.heading_text}>
                                                <CustomHeadingThree
                                                    text={
                                                        'How to run an effective digital marketing campaign'
                                                    }
                                                />
                                            </div>

                                            <CustomParagraph
                                                text={
                                                    'Planning to run your company an effective digital marketing campaign? Instead..'
                                                }
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Slider>
                    </Col>
                    {/* buttons */}
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={2}>
                        <div className={HomeBlogPostRespStyles.blog_post_btn_parent}>
                            <button
                                onClick={() => gotoNext()}
                                className={HomeBlogPostRespStyles.blog_post_btn}
                            >
                                <LeftOutlined />
                            </button>
                            <button
                                onClick={() => gotoPrev()}
                                className={HomeBlogPostRespStyles.blog_post_btn_next}
                            >
                                <RightOutlined />
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default HomeBelogPostResponsive;
