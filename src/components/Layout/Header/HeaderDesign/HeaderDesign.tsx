import React from 'react';
import { Row, Col, Dropdown, Divider } from 'antd';
import NavHeadings from '../../../NavHeadings/NavHeadings';
import * as HeaderDesignStyles from './HeaderDesign.module.css';
import CustomParagraph from '../../../CustomParagraph/CustomParagraph';
import BlueImg from '../../../../images/blueImg.jpg';

import { Link } from 'gatsby';
function HeaderDesign() {
  const menu = (
    <div className={HeaderDesignStyles.Parent}>
      <div className={HeaderDesignStyles.child}>
        <div>
          <h2 className={HeaderDesignStyles.text}>Graphic</h2>
          <CustomParagraph text={'hello to our New world of web Designing'} />
        </div>
        <Divider className={HeaderDesignStyles.divider} />
        <div className={HeaderDesignStyles.cards_parent}>
          <Row gutter={[2, 2]}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img
                alt=""
                src={BlueImg}
                className={HeaderDesignStyles.home_img}
              />
              <div className={HeaderDesignStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img
                alt=""
                src={BlueImg}
                className={HeaderDesignStyles.home_img}
              />{' '}
              <div className={HeaderDesignStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img
                alt=""
                src={BlueImg}
                className={HeaderDesignStyles.home_img}
              />{' '}
              <div className={HeaderDesignStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={
                    'hello to the new world of our website orld of our website'
                  }
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img
                alt=""
                src={BlueImg}
                className={HeaderDesignStyles.home_img}
              />{' '}
              <div className={HeaderDesignStyles.text_parent}>
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
            <Link to="/web-design">
              <a>
                <NavHeadings text={'WEB DESIGN'} />
              </a>
            </Link>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
export default HeaderDesign;
