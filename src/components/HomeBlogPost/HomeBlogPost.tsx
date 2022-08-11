import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Link } from 'gatsby';

import React, { useState, createRef } from 'react';
import Slider from 'react-slick';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as HomeBlogPostStyles from './HomeBlogPost.module.css';
import BlogImg from "../../images/HomeBlogs.png"
import HomeBlogTwo from "../../images/HomeBlog2.png"
import HomeBlog from "../../images/HomeBlog.png";

function HomeBlogPost() {
    const customeSlider = createRef() as any;

    const [sliderSettings, setSliderSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

            <div className={HomeBlogPostStyles.blog_post_parent}>
                <CustomHeadingOne text={'New Blog posts'} />
                <br />
                <br />
                <Row>
                    <Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2}>
                        <div className={HomeBlogPostStyles.blog_post_btn_parent}>
                            <button
                                onClick={() => gotoNext()}
                                className={HomeBlogPostStyles.blog_post_btn}
                            >
                                <RightOutlined />
                            </button>
                            <button
                                onClick={() => gotoPrev()}
                                className={HomeBlogPostStyles.blog_post_btn_next}
                            >
                                <LeftOutlined />
                            </button>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={22} xl={22} xxl={22}>
                        <Slider {...sliderSettings} ref={customeSlider}>
                            {/* new Blog */}
                            <Link to="https://blog.binarymarvels.com/how-do-google-ads-work/">
                                <a>
                                    <div>
                                        <img alt=""
                                            src={BlogImg}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlogs.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}> November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                                        <img alt=""
                                            src={HomeBlogTwo}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlog2.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                                        <img alt=""
                                            src={HomeBlog}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlog.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                                        <img alt=""
                                            src={BlogImg}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlogs.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                                        <img alt=""
                                            src={HomeBlog}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlog.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                                        <img alt=""
                                            src={HomeBlogTwo}
                                            className={HomeBlogPostStyles.blog_post_img}
                                        />
                                        {/* <div className={HomeBlogPostStyles.blog_post_img}>
                                            <Image src="/Assets/Images/HomeBlog2.png" layout='fill' />
                                        </div> */}
                                        <br />
                                        <p className={HomeBlogPostStyles.blog_post_date}>November 10, 2021</p>
                                        <br />
                                        <div className={HomeBlogPostStyles.texts}>
                                            <div className={HomeBlogPostStyles.heading_text}>
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
                </Row>
            </div>
        </>
    );
}

export default HomeBlogPost;
