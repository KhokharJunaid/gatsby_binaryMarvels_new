import { Button } from 'antd';
import React from 'react';
import * as OppsModelStyles from './OppsModal.module.css';
function OppsModal({ onCancelOpps }: { onCancelOpps: any }) {
    return (
        <div className={OppsModelStyles.modal_child}>
            <div>
                <img alt="" src="/Assets/Images/logo.png" className={OppsModelStyles.img} />
            </div>
            <div className={OppsModelStyles.title}>
                <h1>Opps</h1>
            </div>
            <div className={OppsModelStyles.body}>
                <p>please Enter a valid email address</p>
            </div>
            <div className={OppsModelStyles.footer}>
                <Button
                    onClick={() => {
                        onCancelOpps(false);
                    }}
                    className={OppsModelStyles.modal_btn}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}
export default OppsModal;
