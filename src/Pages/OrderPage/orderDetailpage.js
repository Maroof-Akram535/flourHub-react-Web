import React from 'react'
import { Store } from '../../store/store';
import { Table, Button, Modal, Alert } from 'antd';
import { useState } from 'react';
import { Tabs } from 'antd';
import UserInfo from '../../Components/shippingDetails';
import useCheckout from '../../services/customHooks/checkOut';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
export default function ConfirmOrder() {
    var checkout = useCheckout();
    var store = React.useContext(Store);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
        localStorage.clear();
        window.location.href = '/';
    };
    const handleBackToShop = () => {
        store.dispatch({ type: "flushCart", payload: null })
    };
    function callback(key) {
        console.log(key);
    }
    const handleCheckOut = () => {
        checkout.checkOut();
        showModal();
    }
    const calculateTotalAmount = () => {
        var totalAmount = 0;
        store.state.cart.forEach(products => {
            totalAmount = totalAmount + products.productPrice;
        })
        return "Rs:" + totalAmount;
    }
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Product Weight',
            dataIndex: 'productWeight',
            align: 'right',
        },
        {
            title: 'Product Quantity',
            dataIndex: 'quantity',
            align: 'right',
        },
        {
            title: 'Product Price',
            dataIndex: 'productPrice',
            align: 'right',
        },
    ];
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Shipping" key="1">
                    <UserInfo title="Card title" />
                </TabPane>
                <TabPane tab="Payment" key="2">
                    <h2>We have only Cash on Deileivery Service</h2>
                </TabPane>
                <TabPane tab="Confirmation" key="3">
                    <Table
                        columns={columns}
                        dataSource={store.state.cart}
                        bordered
                        title={() => <h5> Your Order Details!</h5>}
                    />
                    <div style={{ margin: "auto" }}><h3>Total Price  {calculateTotalAmount()} </h3></div>
                    <Button type="primary" onClick={handleCheckOut}>Check Out</Button>
                </TabPane>
            </Tabs>
            <Modal footer={null} title="Order Placed" visible={isModalVisible} closable={false}>
                <Alert
                    message="Success Tips"
                    description="You have Successfully Placed an order On Flour Hub!Thank you For Shopping!"
                    type="success"
                    showIcon
                />
                <Button type="primary" onClick={handleOk}>Logout ?</Button>
                <Link to='/'> <Button type="primary" onClick={handleBackToShop}>Back To Shop ?</Button> </Link>
            </Modal>
        </div>
    )
}
