import React from 'react';
import * as MainFooterStyles from './MainFooter.module.css';
import FooterContact from '../FooterContact/FooterContact';
import FooterLists from '../FooterLists/FooterLists';
import FooterIcons from '../FooterIcons/FooterIcons';
function MainFooter() {
  return (
    <>
      <div className={`${MainFooterStyles.footer} ${MainFooterStyles.footerNewSettings}`}>
        <div className={MainFooterStyles.footerNewSettingsTwo}>
          <FooterContact />
          <FooterLists />
          <FooterIcons />
        </div>
      </div>
    </>
  );
}
export default MainFooter;
