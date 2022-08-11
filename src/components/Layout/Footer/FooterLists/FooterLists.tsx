import { Col, Row } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import * as FooterListStyles from './FooterLists.module.css';
function FooterLists() {
  return (
    <>
      <div className={FooterListStyles.footer_list}>
        <Row>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <h3 className={FooterListStyles.text_heading}>COMPANY</h3>
              <ul className={FooterListStyles.list}>
                <li>
                  <a className={FooterListStyles.links}>About us</a>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Marvels Team</a>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Clients</a>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Careers</a>
                </li>

                <li>
                  <a className={FooterListStyles.links}>Privacy Policy</a>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Cookie Policy</a>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Site Map</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div >
              <h3 className={FooterListStyles.text_heading}>SERVICES</h3>
              <ul className={FooterListStyles.list}>
                <li>
                  <Link to="/graphic-design">
                    <a className={FooterListStyles.links}>Web Design</a>
                  </Link>
                </li>
                <li>
                  <Link to="/web-development">
                    <a className={FooterListStyles.links}>Web Development</a>
                  </Link>
                </li>
                <li>
                  <Link to="/graphic-design">
                    <a className={FooterListStyles.links}>Graphic Design</a>
                  </Link>
                </li>
                <li>
                  <Link to="/digital-marketing">
                    <a className={FooterListStyles.links}>Marketing</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div >
              <h3 className={FooterListStyles.text_heading}>SERVICES</h3>
              <ul className={FooterListStyles.list}>
                <li>
                  <Link to="/graphic-design">
                    <a className={FooterListStyles.links}>Web Design</a>
                  </Link>
                </li>
                <li>
                  <Link to="/web-development">
                    <a className={FooterListStyles.links}>Web Development</a>
                  </Link>
                </li>
                <li>
                  <Link to="/graphic-design">
                    <a className={FooterListStyles.links}>Graphic Design</a>
                  </Link>
                </li>
                <li>
                  <Link to="/digital-marketing">
                    <a className={FooterListStyles.links}>Marketing</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <h3 className={FooterListStyles.text_heading}>EDUCATION</h3>
              <ul className={FooterListStyles.list}>
                <li>
                  <Link to="https://blog.binarymarvels.com/">
                    <a className={FooterListStyles.links}>Blogs</a>
                  </Link>
                </li>
                <li>
                  <a className={FooterListStyles.links}>Wiki</a>
                </li>
                <li>
                  <Link to="https://www.youtube.com/channel/UCcSpJeYQkCh7vtj9VLNnGuQ">
                    <a className={FooterListStyles.links}>Tutorial</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className={FooterListStyles.islb}>
              <h3 className={FooterListStyles.text_heading}>PAKISTAN</h3>
              <p className={FooterListStyles.details}>
                Address: Suit 8, Sakib Mall Chakri, Road
              </p>
              <p className={FooterListStyles.details}>Rawalpindi, Pakistan</p>
              {/* <p className={FooterListStyles.details}>Pakistan</p> */}
              <a href="mailto:info@binarymarvels.com">
                <p className={FooterListStyles.details}>Email: info@binarymarvels.com</p>
              </a>
              <p className={FooterListStyles.details}>Tel: +92515126442</p>
              <p className={FooterListStyles.details}>Working Hours:</p>
              <p className={FooterListStyles.details}>Mon - Fri 09:00 - 05:00</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default FooterLists;
