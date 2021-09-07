import React from 'react'
import { useState } from 'react';
import { Alert } from 'antd';
import API_REQUEST from '../../apiRequests/index';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
export default function AddProduct() {
    const [messageCheck, setMessageCheck] = useState(false);
    const [componentSize, setComponentSize] = useState('default');
    const [file, setFile] = useState();
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const handleClose = () => {
        setMessageCheck(false);
    };
    const onFinish = (values) => {
        var productObject={
            values:values,
            file:file
        }
        API_REQUEST.createProduct(productObject).then(res => {
            setMessageCheck(true);
        })
    }
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Welcome to Admin Pannel</h1>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Add Product of Your Choice</h1>
            { messageCheck ? <div style={{ textAlign: "center" }}><Alert message="Product Added Succsefully Thank You !" type="success" style={{ margin: "auto", width: "50%" }} closable onClose={handleClose} /> </div> : null}
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                onFinish={onFinish}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="productName" label="Product Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="productCategory" label="Product Category" rules={[{ required: true }]}>
                    <Select  >
                        <Select.Option value="">Select Category</Select.Option>
                        <Select.Option value="wheatFlour">WheatFlour</Select.Option>
                        <Select.Option value="RiceFlour">RiceFlour</Select.Option>
                        <Select.Option value="MaizeFlour">MaizeFlour</Select.Option>
                        <Select.Option value="MilletFlour">MilletFlour</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="productWeight" label="Product Weight" rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value="">Select Category</Select.Option>
                        <Select.Option value="1kg">1Kg</Select.Option>
                        <Select.Option value="2kg">2kg</Select.Option>
                        <Select.Option value="3kg">3kg</Select.Option>
                        <Select.Option value="4kg">4kg</Select.Option>
                    </Select>
                </Form.Item >
                <Form.Item name="productPrice" label="Product Price" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="productId" label="Product Id" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="productDate" label="Select Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <input onChange={handleChange} type="file" id="myfile" name="image" />

                <Form.Item>
                    <Button htmlType="submit" style={{ marginLeft: "70%" }} type="primary">Add Product</Button>
                </Form.Item>

            </Form>
        </div >
    )
}
