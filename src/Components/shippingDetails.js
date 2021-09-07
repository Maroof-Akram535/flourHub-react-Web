import React from 'react'
import { Form, Input, message, Button } from 'antd';
import { Store } from '../store/store';
export default function UserInfo() {
    var store = React.useContext(Store);
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const onFinish = values => {
        store.dispatch({ type: 'shipingDetails', payload: values })
    }
    const success = () => {
        message.success({
            content: 'Your Shipping Adress has been Saved Sucssefully!',
            className: 'custom-class',
            style: {
                marginTop: '8vh',
            },
            duration: 1,
        });
    };
    const handleClick = () => {
        success();
    }
    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>Your Shipping Details</h3>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={'customerName'} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'customerEmail'} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'cutomerCity'} label="City">
                    <Input />
                </Form.Item>
                <Form.Item name={'customerZipCode'} label="Zip Code">
                    <Input />
                </Form.Item>
                <Form.Item name={'customerAddress'} label="Address">
                    <Input />
                </Form.Item>
                <Form.Item name={'customerCellNumber'} label="Cell Number">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" onClick={handleClick}>
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
