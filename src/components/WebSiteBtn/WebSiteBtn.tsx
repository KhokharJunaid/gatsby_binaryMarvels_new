import { Button } from 'antd';
import React, { useEffect } from 'react';
import { ParentVariants } from '../../services/animation.service';
import CustomHeadingOne from '../CustomHeadingOne/CustomHeadingOne';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as WebSiteBtnStyles from './WebSiteBtn.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';

function WebSiteBtn({
    h1Text,

    pText,
    p1Text,
    button,
}: {
    h1Text: string;

    pText: string;
    p1Text: string;
    button: string;
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <>
            <motion.div
                className={WebSiteBtnStyles.web_site_btn_parent}
                ref={ref}
                variants={ParentVariants}
                initial="hidden"
                animate={controls}
            >
                <CustomHeadingOne text={`${h1Text}`} />
                <CustomParagraph text={`${pText}`} />
                <br />
                <CustomParagraph text={`${p1Text}`} />
                <Link to="/order">
                    <Button className={WebSiteBtnStyles.btn}>{`${button}`}</Button>
                </Link>
            </motion.div>
        </>
    );
}
export default WebSiteBtn;
