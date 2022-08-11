import React, { useState } from 'react';
import { Input } from 'antd';

import * as AnimatedInputStyles from './AnimatedInput.module.css';

const AnimatedInput = (props: any) => {
    let { label, value, placeholder, type, required } = props;
    const [focus, setFocus] = useState(false);

    if (!placeholder) placeholder = label;

    const isOccupied = focus || (value && value.length !== 0);

    const labelClass = isOccupied ? AnimatedInputStyles.label : AnimatedInputStyles.as_placeholder;

    const requiredMark = required ? <span className="text-danger">*</span> : null;

    return (
        <div
            className={AnimatedInputStyles.float_label}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            <Input
                id={'inputFocusContainer' + label}
                onChange={props.onChange}
                type={type}
                className={AnimatedInputStyles.input_form}
                autoComplete="off"
            />
            <label className={labelClass}>
                {isOccupied ? label : placeholder} {requiredMark}
            </label>
        </div>
    );
};

export default AnimatedInput;
