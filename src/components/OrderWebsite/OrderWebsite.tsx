import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    message,
    Radio,
    Row,
    Switch,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useState } from 'react';

import AnimatedInput from '../AnimatedInput/AnimatedInput';
import AnimatedInputLarge from '../AnimatedInputLarge/AnimatedInputLarge';
import AnimatedInputMaxHeight from '../AnimatedInputMaxHeight/AnimatedInputMaxHeight';
import CustomHeadingThree from '../CustomHeadingThree/CustomHeadingThree';
import CustomParagraph from '../CustomParagraph/CustomParagraph';
import * as OrderWebsiteStyles from './OrderWebsite.module.css';
function OrderWebsite({ placeholderOne }: { placeholderOne: any }) {
    // const [serviceList, setServiceList] = useState([]) as any;
    const [form] = useForm();
    const [isLoading, setIsLoading] = useState(false);
    //policies
    const [policy, setPolicy] = useState(false);
    const handlePolicy = (e: boolean) => {
        setPolicy(e);
    };


    //on finish
    const onFinish = (values: any) => {
        setIsLoading(true);
        axios.post("https://binarymarvels-order-form.herokuapp.com/mail", {
            email: values.email,
            name: values.fullname,
            phone: values.phone,
            message: values.intoduction,
            company: values.company,
            website: values.website,
            domain: values.domainName,
            language: values.language,
            likewebsite: values.likewebsite,
            service: values.services,
            budget: values.budget,
            ihosting: values.hosting,
            idomain: values.domain,
            updatesite: values.updateSite,
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
                <div id="form" className={OrderWebsiteStyles.order_form_parent}>
                    <CustomHeadingThree text={'Please filled the required field(*)'} />
                    <br />

                    <Row className={OrderWebsiteStyles.order_form_child}>
                        <Col sm={24} md={12} lg={11} xl={9} xxl={9}>
                            <Form.Item
                                name="fullname"
                                rules={[
                                    { required: true, message: 'Please input your FullName!' },
                                ]}
                            >
                                <AnimatedInput label="Full Name*" placeholder="Full Name*" />
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={11} xl={9} xxl={9}>
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
                        <Col sm={24} md={12} lg={2} xl={6} xxl={6}></Col>
                    </Row>
                    {/* Emailll>>>> ===============*/}

                    <Row className={OrderWebsiteStyles.order_form_child}>
                        <Col sm={24} md={12} lg={11} xl={9} xxl={9}>
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
                        <Col sm={24} md={12} lg={11} xl={9} xxl={9}>
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
                        <Col sm={24} md={12} lg={24} xl={24} xxl={24}>
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

                    <div>
                        <Form.Item name="hosting" valuePropName="checked">
                            <Checkbox name="hosting">
                                {placeholderOne}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="domain" valuePropName="checked">
                            <Checkbox name="domain">
                                I have domain
                            </Checkbox>
                        </Form.Item>
                        {/* domain ===>>>>>>>*/}
                        <Form.Item
                            name="domainName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your domain!',
                                },
                            ]}
                        >
                            <AnimatedInputMaxHeight
                                placeholder="Your domain name"
                                label="Your domain name"
                            />
                        </Form.Item>
                        <br />
                        <br />
                        <br />
                        <CustomParagraph
                            text={'Do you want us to update your site with content?'}
                        />
                        <Form.Item
                            name="updateSite"
                            rules={[{ required: true, message: 'Please select Yes or No!' }]}
                        >
                            <div >
                                <Radio.Group >
                                    <Radio value={'Yes'} >
                                        Yes
                                    </Radio>
                                    <Radio value={'No'} >
                                        No
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </Form.Item>
                        <Form.Item
                            label="How many languages would website have?"
                            name="language"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter how many language you want!',
                                },
                            ]}
                        >
                            <Input
                                className={OrderWebsiteStyles.order_domain_counting}
                                placeholder="0"
                                maxLength={5}
                                type="number"
                            />
                        </Form.Item>
                        <div >
                            <p>
                                Navigation items (number of pages), wanted functionalities, do
                                you have a website that you like and why?
                            </p>
                            <p>
                                The more details you mention in your request, our offer will be
                                more precise and detailed
                            </p>
                            <br />
                            <Form.Item
                                name="intoduction"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input  introduction!',
                                    },
                                ]}
                            >
                                <Input.TextArea className={OrderWebsiteStyles.order_detail} />
                            </Form.Item>
                            <br />
                            <br />
                            <div>
                                <Form.Item
                                    name="likewebsite"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input  website you like!',
                                        },
                                    ]}
                                >
                                    <AnimatedInputLarge
                                        placeholder="Website you like:"
                                        label="Website you like:"
                                    />
                                </Form.Item>
                            </div>
                            {/* //Checking */}

                            <Form.List name="services">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map((field: any) => (
                                            <div key={field.key} className={OrderWebsiteStyles.space_inputs}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'Service_Name']}
                                                    fieldKey={[field.fieldKey, 'Service_Name']}
                                                    className={OrderWebsiteStyles.Service_Name}
                                                >
                                                    <Input
                                                        className={OrderWebsiteStyles.service_input_field}
                                                        prefix={
                                                            <MinusCircleOutlined
                                                                onClick={() => remove(field.name)}
                                                                className={OrderWebsiteStyles.remove_button}
                                                            />
                                                        }
                                                    />
                                                </Form.Item>
                                            </div>
                                        ))}

                                        <Form.Item>
                                            <Button
                                                onClick={() => add()}
                                                block
                                                icon={<PlusOutlined />}
                                                className={OrderWebsiteStyles.order_detail_url_add}
                                            >
                                                ADD URL
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </div>
                        <p >Budget</p>
                        <div className={OrderWebsiteStyles.budget}>
                            <Form.Item
                                name="budget"
                                rules={[
                                    { required: true, message: 'Please enter your budget!' },
                                ]}
                            >
                                <Input type="number" className={OrderWebsiteStyles.order_detail_budget} />
                            </Form.Item>

                            <Form.Item valuePropName="checked" labelAlign="right">
                                <Switch
                                    checkedChildren="YES"
                                    unCheckedChildren="NO"
                                    className={OrderWebsiteStyles.link}
                                    onChange={(e: boolean) => {
                                        console.log('e', e);
                                        handlePolicy(e);
                                    }}
                                />

                                <a className={OrderWebsiteStyles.link_text}>I agree with privacy policy</a>
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                className={OrderWebsiteStyles.order_btn}
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
export default OrderWebsite;
