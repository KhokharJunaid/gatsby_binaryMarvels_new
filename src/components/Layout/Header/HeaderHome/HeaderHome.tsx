import React from 'react';
import { Row, Col, Dropdown, Divider } from 'antd';
import NavHeadings from '../../../NavHeadings/NavHeadings';
import * as HeaderHomeStyles from './HeaderHome.module.css';
import CustomParagraph from '../../../CustomParagraph/CustomParagraph';
import CustomHeadingOne from '../../../CustomHeadingOne/CustomHeadingOne';
import BlueImg from '../../../../images/blueImg.jpg';
import { Link } from 'gatsby';

function HeaderHome() {
  const menu = (
    <div className={HeaderHomeStyles.Parent}>
      <div className={HeaderHomeStyles.child}>
        <div className={HeaderHomeStyles.main_Heading}>
          <CustomHeadingOne text={'Home'} />
          <CustomParagraph text={'Home destination for our nights'} />
        </div>
        <Divider className={HeaderHomeStyles.divider} />
        <div className={HeaderHomeStyles.cards_parent}>
          <Row gutter={[2, 2]}>
            <Col xs={12} sm={812} md={12} lg={12} xl={12} xxl={12}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <img alt=""
                    src={BlueImg}
                    className={HeaderHomeStyles.home_img}
                  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className={HeaderHomeStyles.text_parent}>
                    <h2>{'Home source'}</h2>
                    <CustomParagraph
                      text={
                        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, id.'
                      }
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={812} md={12} lg={12} xl={12} xxl={12}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <img alt=""
                    src={BlueImg}
                    className={HeaderHomeStyles.home_img}
                  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className={HeaderHomeStyles.text_parent}>
                    <h2>{'Home source'}</h2>
                    <CustomParagraph
                      text={
                        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, id.'
                      }
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-link">
            <Link to="/home">
              <a>
                <NavHeadings text={'HOME'} />
              </a>
            </Link>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
export default HeaderHome;
