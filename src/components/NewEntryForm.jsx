import React from 'react';
import { Form, Row, Col, Button, Input, Switch } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const initValueForm = {
    description: '',
    value: '',
    isExpense: false
}

function NewEntryForm({ addNewEntry }) {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values)
        const entry = { ...values}
        addNewEntry(entry);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            form={form}
            name="basic"

            initialValues={{...initValueForm}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Row>
                <Col span={20}>
                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input size='large' placeholder='Description' />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item
                        name="value"
                        rules={[{ required: true, message: 'Please input your value!' }]}
                    >
                        <Input prefix={<CheckOutlined style={{ fontSize: 16 }} />} size='large' placeholder='Value' />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify='end'>
                <Col>
                    <Form.Item
                        colon={false}
                        name="isExpense"
                        label="Expensed"
                        labelCol={{ flex: 1 }}
                        wrapperCol={{flex: 1}}
                        valuePropName="checked"
                    >
                        <Switch />

                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                        <Button type="primary" danger htmlType="reset">
                            Cancel
                        </Button>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>




            </Row>



        </Form>
    );
}

export default NewEntryForm;