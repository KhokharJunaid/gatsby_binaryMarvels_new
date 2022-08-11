import { CloseCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import React, { useState } from 'react';
import * as DropDownStyles from './DropDown.module.css';
import DropLink from './dropLink/dropLink';
import PhoneIcon from './phoneIcon/phoneIcon';
import TopEmail from "../../../../images/topEmail.svg"
import TopBlog from "../../../../images/topBlog.svg";

function DropDown() {
  //
  const location = useLocation();
  //
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <div className={DropDownStyles.drop_down}>
        <div className={DropDownStyles.btn_paren}>
          {!visible && (
            <Button
              id="openBtn"
              className={DropDownStyles.drop_downbtn}
              onClick={showDrawer}
            >
              <UnorderedListOutlined className={DropDownStyles.opn_btn} />
            </Button>
          )}
        </div>
        {visible && (
          <Drawer
            onClose={onClose}
            visible={visible}
            className={DropDownStyles.drop_down_inside}
            closeIcon={
              <CloseCircleOutlined
                onClick={onClose}
                className={DropDownStyles.close_btn}
              />
            }
          >
            <div className={DropDownStyles.drop_down_inside_parent}>
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/home">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color: location.pathname === '/home' ? '#0f76de' : '#ffffff',
                    }}
                  >
                    Home
                  </a>
                </Link>
              </span>
              <br />
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/web-design">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color:
                        location.pathname === '/web-design' ? '#0f76de' : '#ffffff',
                    }}
                  >
                    WEB DESIGN
                  </a>
                </Link>
              </span>
              <br />
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/web-development">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color:
                        location.pathname === '/web-development'
                          ? '#0f76de'
                          : '#ffffff',
                    }}
                  >
                    WEB DEVELOPMENT
                  </a>
                </Link>
              </span>
              <br />
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/graphic-design">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color:
                        location.pathname === '/graphic-design'
                          ? '#0f76de'
                          : '#ffffff',
                    }}
                  >
                    GRAPHIC DESIGN
                  </a>
                </Link>
              </span>
              <br />
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/digital-marketing">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color:
                        location.pathname === '/digital-marketing'
                          ? '#0f76de'
                          : '#ffffff',
                    }}
                  >
                    MARKETING
                  </a>
                </Link>
              </span>
              <br />
              <span className={DropDownStyles.drop_down_inside_plus}>+ </span>
              <span className={DropDownStyles.drop_down_inside_text}>
                <Link to="/contact">
                  <a
                    className={DropDownStyles.href}
                    style={{
                      color:
                        location.pathname === '/contact' ? '#0f76de' : '#ffffff',
                    }}
                  >
                    CONTACT
                  </a>
                </Link>
              </span>
            </div>
            <div className={DropDownStyles.drop_down_inside_icon_parent}>
              <PhoneIcon />

              <div className={DropDownStyles.icons}>
                <Link to="mailto:info@binarymarvels.com">
                  {/* <div className={DropDownStyles.social_media_icons}>
                    <Image src="/Assets/Images/topEmail.svg" layout="fill" />
                  </div> */}
                  <img alt=""
                    src={TopEmail}
                    className={DropDownStyles.social_media_icons}
                  />
                </Link>
                {/* <a to="mailto:info@binarymarvels.com">
                  <img alt=""
                    src="/Assets/Images/topEmail.svg"
                    className={DropDownStyles.social_media_icons}
                  />
                </a> */}
              </div>
              <div className={DropDownStyles.icons}>
                {/* <a to="https://blog.binarymarvels.com/">
                  <img alt=""
                    src="/Assets/Images/topBlog.svg"
                    className={DropDownStyles.social_media_icons}
                  />
                </a> */}
                <Link to="https://blog.binarymarvels.com/">
                  {/* <div className={DropDownStyles.social_media_icons}>
                    <Image src="/Assets/Images/topBlog.svg" layout="fill" />
                  </div> */}
                  <img alt=""
                    src={TopBlog}
                    className={DropDownStyles.social_media_icons}
                  />
                </Link>
              </div>

              <DropLink />
            </div>
          </Drawer>
        )}
      </div>
    </div>
  );
}
export default DropDown;
