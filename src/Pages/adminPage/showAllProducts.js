import React from 'react'
import { useEffect, useState } from 'react';
import API_REQUEST from '../../apiRequests/index';
import { Table, Alert, Space, Button, Modal, Form, InputNumber, Input } from 'antd';
import useForceUpdate from 'use-force-update';
import Update from '../../Components/updateModal';
export default function ShowAllProducts() {
    const [products, setProducts] = useState();
    const [successMessage, setSuccessMesage] = useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState('');
    const [updateMessage, setupdateMessage] = React.useState(false);
    const showModal = (productDetails) => {
        setIsModalVisible(true);
        setProductDetails(productDetails);
    };
    const onFinish = values => {
        setIsModalVisible(false);
        var productData = {
            pid: productDetails._id,
            productValues: values
        }
        API_REQUEST.updateProduct(productData)
        setSuccessMesage(true);
        setupdateMessage(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    useEffect(() => {
        API_REQUEST.showAllProduct().then(products => {
            setProducts(products);
        })
    }, [])
    var forceUpdate = useForceUpdate();
    const handleClose = () => {
        setupdateMessage(false);
        API_REQUEST.showAllProduct().then(products => {
            setProducts(products);
            setSuccessMesage(false);
        })
        forceUpdate();
    };
    const handleDelete = (id) => {
        API_REQUEST.deleteProduct({ pId: id })
        setSuccessMesage(true);
    }
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Added On',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={handleDelete.bind(this, record._id)} type="primary">Delete</Button>
                    <Button onClick={showModal.bind(this, record)} type="primary">Update</Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>  All Products Available in Stock</h1>
            {successMessage ? <div style={{ textAlign: "center" }}><Alert message={updateMessage === true ? "Product Updated Succsefully Thank You !" : "Product Deleted Succsefully Thank You!"} type="success" style={{ margin: "auto", width: "50%" }} closable afterClose={handleClose} /> </div> : null}
            <Table columns={columns} dataSource={products} />
            <Modal footer={null} title="Update Product" visible={isModalVisible} onCancel={handleCancel}>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={onFinish}
                >
                    <p>Previous Name :{productDetails.name}</p>
                    <Form.Item
                        label="Update Name:"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <p>Previous Weight :{productDetails.weight}</p>
                    <Form.Item
                        label="Update Weight:"
                        name="weight"
                    >
                        <Input />
                    </Form.Item>
                    <p>Previous Price :{productDetails.price}</p>
                    <Form.Item
                        label="Update Price:"
                        name="price"
                    >
                        <InputNumber/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={onFinish}>Update</Button>
                </Form>
            </Modal>
        </div>
    )
}
