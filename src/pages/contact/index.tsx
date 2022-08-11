import React from 'react';
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout/Layout';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

function Contact() {
    return (
        <>
            <Layout>
                <div className="mainContainer">
                    <div className="childContainer">
                        <div className="innerMainDiv">
                            <div className="contact_banner">
                                <ContactBanner />
                            </div>
                            <div className="contact_info">
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Contact;

export const Head: HeadFC = () => <title>Contact-Binary Marvels | Software Company</title>
