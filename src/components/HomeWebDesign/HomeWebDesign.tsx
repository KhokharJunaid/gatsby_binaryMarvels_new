import React, { useEffect } from 'react';
import LeftToRight from '../LeftToRight/LeftToRight';
import WebDesignImg from "../../images/HomeWeb.png"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParentVariants } from '../../services/animation.service';
import * as HomeWebDesignStyles from './HomeWebDesign.module.css';
function HomeWebDesign() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            variants={ParentVariants}
            initial="hidden"
            animate={controls}
            className={HomeWebDesignStyles.main_parent_web_design}
        >
            <LeftToRight
                h1Text="Web design"
                h2Text="A genius web design is all that is needed to enhance your business, and our team of mavericks will do just that for you."
                imgSrc={WebDesignImg}
                capitalValue="w"
                pText="Binary marvels has specialized teams of personnel who will make a world class never seen before web design that’ll propel your business sky high. With an always can do attitude, our agency/company will make sure you are satisfied and offer services. From consultancy, planning, design and development to hosting and support, we offer a full end-to-end service, and we’ll make sure our work exceeds your expectations."
            />
        </motion.div>
    );
}

export default HomeWebDesign;
