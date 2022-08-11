import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import OrderGraphic from '../OrderGraphic/OrderGraphic';
import OrderMarketing from '../OrderMarketing/OrderMarketing';
import OrderWebsite from '../OrderWebsite/OrderWebsite';

function OrderForm() {
    const [formData] = useContext(FormContext);

    const [] = React.useState(1);

    return (
        <>
            <div style={{ paddingLeft: '3%' }}>
                {formData === 1 && <OrderWebsite placeholderOne={'I have hosting'} />}
                {formData === 2 && <OrderGraphic placeholderOne={''} />}
                {formData === 3 && (
                    <OrderMarketing
                        placeholderOne={'List keywords/phrases for which your want SEO'}
                    />
                )}
            </div>
        </>
    );
}
export default OrderForm;
