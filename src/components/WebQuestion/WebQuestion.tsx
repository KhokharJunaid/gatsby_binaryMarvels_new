import React from 'react';
import TwoComponents from '../TwoComponents/TwoComponents';
import TextDesign from '../TextDesign/TextDesign';
import WebMarvels from "../../images/WebMarvels.png"
import * as WebQuestionStyles from './WebQuestion.module.css';
function WebQuestion() {
    const list = [
        '	90% of the time our customers say “It’s not a job well done, but it’s a job that is done excellent” ',

        '  	Other than us, apexes of web design have presented us with prizes and awards',

        '	We are cheap and we are creative. Our web design prices are comparatively lower than other web design agencies but, this does not decrease our affection for creativity nor does it harm the quality of the work',

        ' 	We, at binary marvels believe in long term customer relations and want our clients to keep returning to us for their work and for that one needs to fully satisfy the client and finish the job so well, that it exceeds the client’s expectations, and we do just that.',
    ];
    return (
        <div className={WebQuestionStyles.main}>
            <div >
                <div >
                    <TwoComponents
                        h1Text="Why BINARY MARVELS?"
                        h1Textt=""
                        pText="You might ask yourself ‘why should I offer work to binary marvels and not any agency other than us’."
                        pTextt=" Well, the answer is simple and it’s “why not” and let me tell you why you should believe me:"
                        list={list}
                        imgSrc={WebMarvels}
                    />
                </div>
            </div>
            <TextDesign
                h1Text="UI& UX design"
                pText1="Web design is the basic essence of a well propelled business website that sells. And for that our teams of professionals with amazingly creative minds are ready to manifest a culmination of your ideas and leave you in “awe”."
                pText2=""
            />
            <TextDesign
                h1Text="With specialized skill, patience and diligence we’ll excel your expectations."
                pText1=" Binary marvels are a professional web design agency that covers all aspects of web design, including graphic design, programming, usability, SEO, Google Ad Words, etc. We will also take care of everything website related and leave our clients at ease."
                pText2="To take an insight look at our creative projects check out our portfolio"
            />
            <TextDesign
                h1Text="Looking for a professional web design service?"
                pText1="Our completions made people come back for more which is due to our exquisitely classic web designs and excellent content on those websites. Coming to the functioning of our websites, they are remarkably perfect and work smoothly because   "
                pText2="they are made with fine precision. Any future queries of our clients are dealt professionally and made sure that the client leaves with a solution and most important of all is ‘fully satisfied’."
            />
            <TextDesign
                h1Text="Redesigning and rebranding – bringing websites to life"
                pText1="Websites that are worn out and have disappeared from top search results on search engines can be brought back to life with just a redesign by Binary marvels."
                pText2="Binary marvels intricate knowledge of state of the art technologies helps it maneuver best strategies for SEO optimization and a vibrant visual redesign that stands out.
        Binary marvels will give your website a makeover to the visual appearance and offer basic SEO optimization that’ll result in a website with modern appearance and more visitors than ever.
        "
            />
        </div>
    );
}
export default WebQuestion;
