import { Button, Col, Form, Input, message, Row, Switch } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useState } from 'react';

import AnimatedInput from '../AnimatedInput/AnimatedInput';
import AnimatedInputLarge from '../AnimatedInputLarge/AnimatedInputLarge';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as OrderMarketingStyles from './OrderMarketing.module.css';

function OrderMarketing({ placeholderOne }: { placeholderOne: any }) {
    const [policy, setPolicy] = useState(false);
    const [form] = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const handlePolicy = (e: boolean) => {
        setPolicy(e);
    };

    const [] = React.useState(1);


    const onFinish = (values: any) => {

        setIsLoading(true);
        axios.post("https://binarymarvels-order-form.herokuapp.com/marketing", {
            name: values.fullname,
            budget: values.budget,
            phone: values.phone,
            email: values.email,
            company: values.company,
            website: values.website,
            seo: values.seo,
            searchEngine: values.buisness,
            additionalInformation: values.services,
        })
            .then((response: any) => {
                console.log("response======>", response);
                message.success('You email submit sucessfull');
                form.resetFields();
                setIsLoading(false);

            }, ((error: any) => {
                console.log("error======>", error);
                message.error(error?.response?.data.message);
            }))
    };

    return (
        <>
            <Form
                form={form}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div id="form" className={OrderMarketingStyles.order_form_parent}>
                    <CustomHeadingThree text={'Please filled the required field(*)'} />
                    <br />

                    <div className={OrderMarketingStyles.order_form_child}>
                        <Row className={OrderMarketingStyles.order_form_child}>
                            <Col sm={24} md={24} lg={11} xl={9} xxl={9}>
                                <Form.Item
                                    name="fullname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your FullName!',
                                        },
                                    ]}
                                >
                                    <AnimatedInput label="Full Name*" placeholder="Full Name*" />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={11} xl={9} xxl={9}>
                                <Form.Item
                                    name="company"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your company name!',
                                        },
                                    ]}
                                >
                                    <AnimatedInput label="Company" placeholder="Company" />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={2} xl={6} xxl={6}></Col>
                        </Row>
                        {/* Emailll>>>> ===============*/}

                        <Row className={OrderMarketingStyles.order_form_child}>
                            <Col sm={24} md={24} lg={11} xl={9} xxl={9}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <AnimatedInput
                                        label="E-mail*"
                                        placeholder="E-mail*"
                                        type="email"
                                    />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={11} xl={9} xxl={9}>
                                <Form.Item
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phonenumber',
                                        },
                                    ]}
                                >
                                    <AnimatedInput
                                        label="Telephone"
                                        placeholder="Telephone"
                                        type="number"
                                    />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={2} xl={6} xxl={6}></Col>
                        </Row>
                        {/* website ====================*/}
                        <Row>
                            <Col sm={24} md={24} lg={24} xl={24} xxl={24}>
                                <Form.Item
                                    name="website"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please input your website name!',
                                        },
                                    ]}
                                >
                                    <AnimatedInputLarge label="Website" placeholder="Website" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                    <CustomParagraph text={placeholderOne} />
                    <Form.Item
                        name="seo"
                        rules={[{ required: true, message: 'Please input your SEO type!' }]}
                    >
                        <Input.TextArea className={OrderMarketingStyles.order_palceholder} />
                    </Form.Item>
                    <CustomParagraph text="Which search engines are the most important for your business (google.com, google.rs, google.co.uk…)" />
                    <Form.Item
                        name="buisness"
                        rules={[
                            { required: true, message: 'Please input search engines!' },
                        ]}
                    >
                        <Input.TextArea className={OrderMarketingStyles.order_palceholder} />
                    </Form.Item>
                    <CustomParagraph text="Additional information / Short description of the desired service *" />
                    <Form.Item
                        name="services"
                        rules={[
                            { required: true, message: 'Please input services discription!' },
                        ]}
                    >
                        <Input.TextArea className={OrderMarketingStyles.order_palceholder} />
                    </Form.Item>
                    <div>
                        <div className={OrderMarketingStyles.budget}>
                            <p className={OrderMarketingStyles.budget_text}>Budget</p>
                            <Form.Item
                                name="budget"
                                rules={[
                                    { required: true, message: 'Please enter your budget!' },
                                ]}
                            >
                                <Input type="number" className={OrderMarketingStyles.order_detail_budget} />
                            </Form.Item>

                            <Form.Item valuePropName="checked" labelAlign="right">
                                <Switch
                                    checkedChildren="YES"
                                    unCheckedChildren="NO"
                                    className={OrderMarketingStyles.link}
                                    onChange={(e: boolean) => {
                                        console.log('e', e);
                                        handlePolicy(e);
                                    }}
                                />

                                <a className={OrderMarketingStyles.link_text}>I agree with privacy policy</a>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                className={OrderMarketingStyles.order_btn}
                                disabled={isLoading || !policy}
                            >
                                {isLoading ? 'Submiting....' : 'Submit'}
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </>
    );
}
export default OrderMarketing;
