import { Link } from 'gatsby';
import React from 'react';
import NavHeadings from '../../../NavHeadings/NavHeadings';
function HeaderContact() {
  return (
    <>
      <div>
        <div className="ant-dropdown-link">
          <Link to="/contact">
            <a>
              <NavHeadings text={'CONTACT'} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
export default HeaderContact;
