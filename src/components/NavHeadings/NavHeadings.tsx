import React from 'react';
import * as NavHeadingsStyles from './NavHeadings.module.css';
function NavHeadings({ text }: { text: string }) {
    return <h3 className={NavHeadingsStyles.nav_heading}>{text}</h3>;
}
export default NavHeadings;
