import React from 'react';
import { Row, Col, Dropdown, Divider } from 'antd';
import NavHeadings from '../../../NavHeadings/NavHeadings';
import * as HeaderDevelopmentStyles from './HeaderDevelopment.module.css';
import CustomParagraph from '../../../CustomParagraph/CustomParagraph';
import { Link } from 'gatsby';
import BlueImg from '../../../../images/blueImg.jpg';


function HeaderDevelopment() {
  const menu = (
    <div className={HeaderDevelopmentStyles.Parent}>
      <div className={HeaderDevelopmentStyles.child}>
        <div>
          <h2 className={HeaderDevelopmentStyles.text}>Graphic</h2>
          <CustomParagraph text={'hello to our New world of web Designing'} />
        </div>
        <Divider className={HeaderDevelopmentStyles.divider} />
        <div>
          <Row gutter={[2, 2]}>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />{' '}
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={
                    'hello to the new world of our website orld of our website'
                  }
                />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />{' '}
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />{' '}
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <img alt=""
                src={BlueImg}
                className={HeaderDevelopmentStyles.home_img}
              />{' '}
              <div className={HeaderDevelopmentStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
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
            <Link to="/web-development">
              <a>
                <NavHeadings text={'WEB DEVELOPMENT'} />
              </a>
            </Link>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
export default HeaderDevelopment;
