import React from 'react'
import { useEffect } from 'react';
import { Descriptions, Badge, Button, Alert } from 'antd';
import AxiosCall from '../../apiRequests/index';
import useForceUpdate from 'use-force-update';
export default function ShowAllorders() {
    const [orderDetails, setOrderDetails] = React.useState([]);
    const [successMessage, setSuccessMesage] = React.useState(false);
    const [message, setMessage] = React.useState('');
    var forceUpdate = useForceUpdate();
    useEffect(() => {
        AxiosCall.showAllOrderDetails().then(orderDetails => {
            setOrderDetails(orderDetails);
        });
    }, [])
    const handleClose = () => {
        AxiosCall.showAllOrderDetails().then(orderDetails => {
            setOrderDetails(orderDetails);
            setSuccessMesage(false);
        })
        forceUpdate();
    };
    const handleClick = (details) => {
        if (details.status === "Accept Order") {
            setMessage("You have Accepted  an Order and move it  from Pending to Deleivery  Stage! ")
            details.status = "Deleivered ?";
            details.message = "Your Order Status:Your Order Have Been Moved from Pending To delievery Stage";
            AxiosCall.updateOrderStatus(details);
        }
        else if (details.status === "Deleivered ?") {
            setMessage("You have Delievered This Order To your Customer ")
            details.status = "Delete";
            details.message = "Your Order Status:Your Order Have Been Deleiverd To You Thank You For Shopping!";
            AxiosCall.updateOrderStatus(details);
        }
        else {
            AxiosCall.deleteOrder({ pId: details.id })
            setMessage("Order have been Deleted Successfuly")
            if (details.status === "Accept Order") {
                details.message = "Sorry We are Unable to Deliever Your Ordder.Product Is Currently Out of Stock!";
            }
        }
        setSuccessMesage(true);
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>History For  All Orders</h1>
            {successMessage ? <div style={{ textAlign: "center" }}><Alert message={message} type="success" style={{ margin: "auto", width: "50%" }} closable afterClose={handleClose} /> </div> : null}
            {orderDetails.map(details => {
                return (<Descriptions title="OrderDetails" bordered>
                    {details.userDetails.map(info => {
                        return (<Descriptions.Item label="Booked By">
                            <div>
                                <p> Customer Name:{info.name}</p>
                                <p> Customer Email:{info.email}</p>
                                <p> Customer City:{info.city}</p>
                                <p> Customer Cell:{details.user_Cell}</p>
                            </div>
                        </Descriptions.Item>
                        )
                    })}
                    <Descriptions.Item label="Products Included">
                        {details.porductDetails.map(prodDetail => {
                            return (<div>
                                <h5> Product Name:{prodDetail.name}</h5>
                                <p> Product Category:{prodDetail.category}</p>
                                <p> Product Price:{prodDetail.price}</p>
                                <p> Product Weight:{prodDetail.weight}</p>
                            </div>
                            )
                        })}
                    </Descriptions.Item>
                    <Descriptions.Item label="Shipment Details">
                        <div>
                            <p> Shipment Address:{details.order_Adress}</p>
                            <p> Order Booking  Date:{details.order_date}</p>
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="Order Track">
                        <Button type='primary' onClick={handleClick.bind(this, { id: details._id, status: details.status, userId: details.user_id, message: "" })}>{details.status}</Button>
                        {details.status === "Accept Order" ? <Button type='primary' onClick={handleClick.bind(this, { id: details._id, status: "none", userId: details.user_id, message: "" })}>Reject Order</Button> : null}
                    </Descriptions.Item>
                </Descriptions>)
            })}
        </div>
    )
}
