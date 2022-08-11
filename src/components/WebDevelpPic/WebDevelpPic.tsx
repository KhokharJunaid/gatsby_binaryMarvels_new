import React from 'react';
import TwoComponents from '../TwoComponents/TwoComponents';
import DevelopmentProjict from "../../images/DevelopmentProjict.png"
function WebDevelpPic() {
    const list = [
        '	Precise task allocation',

        ' 	Narrow specialization ',

        '	Each project or task has our QA engineers’ approval',

        ' Testing in all browsers and operating systems, and across various devices',
    ];
    return (
        <>
            <div>
                <TwoComponents
                    h1Text="Project management methodology   "
                    h1Textt="for success"
                    pText="Binary marvels has an armada of personnel mentally equipped with the brains and tools to think and work with the methodology of project management which will indeed lead your work to success. our pride lies in:"
                    list={list}
                    imgSrc={DevelopmentProjict}
                    pTextt=""
                />
            </div>
        </>
    );
}
export default WebDevelpPic;
