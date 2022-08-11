import React from 'react';
import type { HeadFC } from "gatsby"

import Layout from '../../components/Layout/Layout';
import OrderBanner from '../../components/OrderBanner/OrderBanner';
import OrderForm from '../../components/OrderForm/OrderForm';

function Order() {
    return (
        <>
            <Layout>
                <div className="mainContainer">
                    <div className="childContainer">
                        <div style={{ padding: '0 26px' }}>
                            <OrderBanner />
                            <OrderForm />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Order;
export const Head: HeadFC = () => <title>Order - Binary Marvels | Software Company</title>

