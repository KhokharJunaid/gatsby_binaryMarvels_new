import { Button, Form, Input, message, Modal } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as HomeSubscriberStyles from './HomeSubcriber.module.css';
import Modals from '../Modal/Modal';
import OppsModal from '../OppsModal/OppsModal';
import { useForm } from 'antd/lib/form/Form';

function HomeSubcriber() {
    const [form] = useForm();
    const axios = require('axios')
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleOpps, setIsModalVisibleOpps] = useState(false);


    const onFinish = (values: any) => {
        setIsLoading(true);
        axios.post("https://binarymarvels-order-form.herokuapp.com/subscribe", {
            email: values?.email,
        })
            .then((response: any) => {
                console.log("response======>", response);
                setIsModalVisible(true);
                form.resetFields();
                setIsLoading(false);

            }, ((error: any) => {
                console.log("error======>", error);
                setIsModalVisibleOpps(true);
            }))
    };

    const handleCancel = (value: boolean) => {
        setIsModalVisible(value);
    };
    const handleCancelOpps = (value: boolean) => {
        setIsModalVisibleOpps(value);
    };

    return (
        <>
            <Modal visible={isModalVisible} footer={false}>
                <Modals onCancel={handleCancel} />
            </Modal>
            <Modal visible={isModalVisibleOpps} footer={false}>
                <OppsModal onCancelOpps={handleCancelOpps} />
            </Modal>
            <div className={HomeSubscriberStyles.subcriber_parent}>
                <div>
                    <h2 className={HomeSubscriberStyles.subcriber_text}>
                        Subscribe to our mailing list
                    </h2>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item name="email">
                            <div>
                                <Input className={HomeSubscriberStyles.subcribe_line} type="email" />
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className={HomeSubscriberStyles.btn}
                                disabled={isLoading}
                                htmlType="submit"
                            >
                                {isLoading ? 'Subscribing...' : 'Subscribe'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default HomeSubcriber;
