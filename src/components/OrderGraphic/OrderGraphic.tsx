import { Button, Form, Input, Select, Switch, message, Col, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useState } from 'react';

import AnimatedInput from '../AnimatedInput/AnimatedInput';
import AnimatedInputLarge from '../AnimatedInputLarge/AnimatedInputLarge';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as OrderGraphicSyles from './OrderGraphic.module.css';
function OrderGraphic({ placeholderOne }: { placeholderOne: any }) {
    const [form] = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    const [policy, setPolicy] = useState(false);
    const handlePolicy = (e: boolean) => {
        setPolicy(e);
    };


    //on finish
    const onFinish = (values: any) => {
        setIsLoading(true);
        axios.post("https://binarymarvels-order-form.herokuapp.com/graphic", {
            additionalInformation: values.field,
            name: values.fullname,
            phone: values.phone,
            email: values.email,
            company: values.company,
            website: values.website,
            budget: values.budget,
            product: values.product,
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
            <Form onFinish={onFinish} form={form}>
                <div className={OrderGraphicSyles.main}>
                    <div className={OrderGraphicSyles.order_form_child_name}>
                        <CustomHeadingThree text={'Please filled the required field(*)'} />
                        <br />
                        <Row className={OrderGraphicSyles.order_form_child}>
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

                        <Row className={OrderGraphicSyles.order_form_child}>
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
                                    <AnimatedInput label="E-mail*" placeholder="E-mail*" />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={11} xl={9} xxl={9}>
                                <Form.Item
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phonenumber!',
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
                                            message: 'Please input  website name!',
                                        },
                                    ]}
                                >
                                    <AnimatedInputLarge label="Website" placeholder="Website" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                    <CustomParagraph text="You need a graphic design of the following product:" />
                    <Form.Item
                        name="product"
                        valuePropName="checked"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your graphic design!',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            className={OrderGraphicSyles.drop_down_btn}
                            onChange={handleChange}
                        // optionLabelProp="label"
                        >
                            <Option value="Logotype" label="Logotype / Logo">
                                <div className="demo-option-label-item">Logotype / Logo</div>
                            </Option>
                            <Option value="business" label="Business card">
                                <div className="demo-option-label-item">Business card</div>
                            </Option>
                            <Option value="memorandum" label="Memorandum">
                                <div className="demo-option-label-item">Memorandum</div>
                            </Option>
                            <Option value="flyer" label="Flyer">
                                <div className="order_radio">Flyer</div>
                            </Option>
                            <Option value="graphic " label="Book of graphic standards">
                                <div className="order_radio">Book of graphic standards</div>
                            </Option>
                            <Option value="packaging" label="Packaging">
                                <div className="order_radio">Packaging</div>
                            </Option>
                            <Option value="poster" label="Poster">
                                <div className="order_radio">Poster</div>
                            </Option>
                            <Option value="billboard" label="Billboard">
                                <div className="order_radio">Billboard</div>
                            </Option>
                            <Option value="brochure" label="Brochure">
                                <div className="order_radio">Brochure</div>
                            </Option>
                            <Option value="catalogue" label="Catalogue">
                                <div className="order_radio">Catalogue</div>
                            </Option>
                            <Option value="cover " label="Book cover Other">
                                <div className="order_radio">Book cover Other</div>
                            </Option>
                            <Option value="fold" label="Book fold">
                                <div className="order_radio">Book fold (pre-press)</div>
                            </Option>
                            <Option value="application" label="Application">
                                <div className="order_radio">Application for T-shirt</div>
                            </Option>
                            <Option value="menu" label="menu">
                                <div className="order_radio">
                                    Menu (drink card, cocktail menu, beverage list..)
                                </div>
                            </Option>
                            <Option value="others" label="Others ">
                                <div className="order_radio">
                                    Others (bag, purses, notebooks, etc..)
                                </div>
                            </Option>
                        </Select>
                    </Form.Item>
                    <CustomParagraph text="Additional information / Short description of the desired service" />
                    <Form.Item
                        name="field"
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input.TextArea className={OrderGraphicSyles.order_palceholder} />
                    </Form.Item>

                    <div className={OrderGraphicSyles.budget}>
                        <p className={OrderGraphicSyles.budget_text}>Budget</p>
                        <Form.Item
                            name="budget"
                            rules={[{ required: true, message: 'Please enter your budget!' }]}
                        >
                            <Input type="number" className={OrderGraphicSyles.order_detail_budget} />
                        </Form.Item>

                        <Form.Item valuePropName="checked" labelAlign="right">
                            <Switch
                                checkedChildren="YES"
                                unCheckedChildren="NO"
                                className={OrderGraphicSyles.link}
                                onChange={(e: boolean) => {
                                    console.log('e', e);
                                    handlePolicy(e);
                                }}
                            />

                            <a className={OrderGraphicSyles.link_text}>I agree with privacy policy</a>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            className={OrderGraphicSyles.order_btn}
                            disabled={isLoading || !policy}
                        >
                            {isLoading ? 'Submiting....' : 'Submit'}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </>
    );
}
export default OrderGraphic;
