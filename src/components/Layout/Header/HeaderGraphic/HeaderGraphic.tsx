import React from 'react';
import { Row, Col, Dropdown, Divider } from 'antd';
import NavHeadings from '../../../NavHeadings/NavHeadings';
import * as HeaderGraphicsStyles from './HeaderGraphic.module.css';
import CustomParagraph from '../../../CustomParagraph/CustomParagraph';
import { Link } from 'gatsby';
import BlueImg from '../../../../images/blueImg.jpg';


function HeaderGraphic() {
  const menu = (
    <div className={HeaderGraphicsStyles.Parent}>
      <div className={HeaderGraphicsStyles.child}>
        <div>
          <h2 className={HeaderGraphicsStyles.text}>Graphic</h2>
          <CustomParagraph text={'hello to our New world of web Designing'} />
        </div>
        <Divider className={HeaderGraphicsStyles.divider} />
        <div className={HeaderGraphicsStyles.cards_parent}>
          <Row gutter={[2, 2]}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img alt=""
                src={BlueImg}
                className={HeaderGraphicsStyles.home_img}
              />
              <div className={HeaderGraphicsStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img alt=""
                src={BlueImg}
                className={HeaderGraphicsStyles.home_img}
              />{' '}
              <div className={HeaderGraphicsStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={'hello to the new world of our website'}
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img alt=""
                src={BlueImg}
                className={HeaderGraphicsStyles.home_img}
              />{' '}
              <div className={HeaderGraphicsStyles.text_parent}>
                <h2>Graphic Designing</h2>
                <CustomParagraph
                  text={
                    'hello to the new world of our website orld of our website'
                  }
                />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img alt=""
                src={BlueImg}
                className={HeaderGraphicsStyles.home_img}
              />{' '}
              <div className={HeaderGraphicsStyles.text_parent}>
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
            <Link to="/graphic-design">
              <a>
                <NavHeadings text={'GRAPHIC DESIGN'} />
              </a>
            </Link>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
export default HeaderGraphic;
