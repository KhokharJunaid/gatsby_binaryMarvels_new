import React from 'react';
import * as DropDownItemsStyles from './DropDownItems.module.css';
import { Row, Col, Dropdown, Divider } from 'antd';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import NavHeadings from '../NavHeadings/NavHeadings';
import { Link } from 'gatsby';
function DropDownItems({
    h1Text,
    p1Text,
    img1Src,
    h2Text,
    p2Text,
    img2Src,
    h3Text,
    p3Text,
    img3Src,
    h4Text,
    p4Text,
}: {
    h1Text: string;
    p1Text: string;
    img1Src: string;
    h2Text: string;
    p2Text: string;

    img2Src: string;
    h3Text: string;
    p3Text: string;
    img3Src: string;
    h4Text: string;
    p4Text: string;
}) {
    const menu = (
        <div className={DropDownItemsStyles.Parent}>
            <div className={DropDownItemsStyles.child}>
                <div className={DropDownItemsStyles.main_Heading}>
                    <CustomHeadingOne text={h1Text} />
                    <CustomParagraph text={p1Text} />
                </div>
                <Divider className={DropDownItemsStyles.divider} />
                <div className={DropDownItemsStyles.cards_parent}>
                    <Row gutter={[2, 2]}>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img alt="" src={img1Src} className={DropDownItemsStyles.home_img} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <div className={DropDownItemsStyles.text_parent}>
                                        <h2>{h2Text}</h2>
                                        <CustomParagraph text={p2Text} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img alt="" src={img2Src} className={DropDownItemsStyles.home_img} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <div className={DropDownItemsStyles.text_parent}>
                                        <h2 >{h3Text}</h2>
                                        <CustomParagraph text={p3Text} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <img alt="" src={img3Src} className={DropDownItemsStyles.home_img} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <div className={DropDownItemsStyles.text_parent}>
                                        <h2 >{h4Text}</h2>
                                        <CustomParagraph text={p4Text} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
    // const customDesign = <div>custom design</div>;
    return (
        <>
            <div>
                <Dropdown overlay={menu}>
                    <div className="ant-dropdown-link">
                        <Link to="/digital-marketing">
                            <a>
                                <NavHeadings text={'MARKETING'} />
                            </a>
                        </Link>
                    </div>
                </Dropdown>
            </div>
        </>
    );
}
export default DropDownItems;
