import React from 'react'
import { Store } from '../../store/store';
import { Card, Avatar, Button, message } from 'antd';
import AvatarImage from '../../assests/images/wheatImage.jpg';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import useRemoveFromCart from '../../services/customHooks/removeFromcart';
const { Meta } = Card;
export default function Cart() {
    var store = React.useContext(Store);
    var removeFromCart = useRemoveFromCart();
    const success = () => {
        message.success({
            content: 'Item Deleted From Cart',
            className: 'custom-class',
            style: {
                marginTop: '8vh',
            },
            duration: 0.5,
        });
    };
    const handleClick = (id) => {
        removeFromCart.removeFromCart(id);
        success();
    }
    return (
        <div>
            {store.state.cart.length === 0 ? <div style={{ textAlign: "center", marginBottom: "30px" }} ><h1>Your Cart is Empty Now!</h1>
                <Link to='/'><Button type="primary"> Back To Shop </Button></Link> </div> :
                <div>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Items in Your Cart</h1>
                    <div>
                        <Row>
                            {store.state.cart.map(product => {
                                return (
                                    <Col span={6} key={product.productPrice}>
                                        <Card
                                            style={{ width: 300 }}
                                            cover={
                                                <img
                                                    alt="whaetFlour"
                                                    src={product.productDetails.image}
                                                />
                                            }
                                        >
                                            <Meta
                                                avatar={<Avatar src={AvatarImage} />}
                                                title={product.productDetails.title}
                                                description={product.productDetails.description}
                                            />
                                            <p>Price: Rs {product.productPrice}</p>
                                            <p>Wheight: {product.productWeight}</p>
                                            <p>Quantity: {product.quantity}</p>
                                            <Button type="primary" onClick={handleClick.bind(this, product.productId)} >Remove From Cart</Button>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    <Link to='/orderDetails'>   <Button type="primary"> Proceed To Confirm Order </Button> </Link>
                </div>
            }
        </div>
    )
}
