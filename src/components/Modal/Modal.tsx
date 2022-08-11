import { Button } from 'antd';
import React from 'react';
import * as ModelStyles from './Modal.module.css';
function Modals({ onCancel }: { onCancel: any }) {
    return (
        <div>
            <div className={ModelStyles.modal_child}>
                <div>
                    <img alt="" src="/Assets/Images/logo.png" className={ModelStyles.img} />
                </div>
                <div className={ModelStyles.title}>
                    <h1>THANKS</h1>
                </div>
                <div className={ModelStyles.body}>
                    <p>You have been successfully subcribe to our newsletter asasa</p>
                </div>
                <div className={ModelStyles.footer}>
                    <Button
                        onClick={() => {
                            onCancel(false);
                        }}
                        className={ModelStyles.modal_btn}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Modals;
