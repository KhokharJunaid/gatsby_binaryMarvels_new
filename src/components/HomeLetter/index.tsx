import React from 'react';
import * as HomeLetterStyles from "./HomeLetter.module.css"

function HomeLetter({ text }: { text: string }) {
    return <span className={HomeLetterStyles.homeLetter}>{text}</span>;
}

export default HomeLetter;
