import React from 'react';
import BannerShared from '../Bannershared/Bannershared';
import contact_main_image from "../../images/contact_main_image.png"

function ContactBanner() {
    return (
        <>
            <div>
                <BannerShared
                    h1Text="Contact"
                    h2Text="Do you have a project that you think we love,
                    or maybe or you just want to say hello to us? "
                    imgSrc={contact_main_image}
                    capitalValue="C"
                    button1="PORTFOLIO"
                    button2="ORDER"
                />
            </div>
        </>
    );
}
export default ContactBanner;
