import React from 'react'
import WheatFlourImage from '../../assests/images/homeWheatImage.jpg'
import MaizeFlourImage from '../../assests/images/shutterstock_240786739.jpg'
import RiceFlourImage from '../../assests/images/Rice-flour-3_1400x.jpg'
import MilletFlourImage from "../../assests/images/milletFlour.jpg"
import AvatarImage from '../../assests/images/wheatImage.jpg'
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';
import { Store } from '../../store/store';
const { Meta } = Card;
import {
    Link
} from 'react-router-dom';
export default function HomePage() {
    var store = React.useContext(Store);
    const handleClick = (payload) => {
        {
            store.dispatch({ type: 'setProductLocation', payload: payload })
        }
    }
    return (
        <div style={{
            margin: "10px"
        }}>
            {console.log('home page')}
            <Row>
                <Col span={6}>
                    <section>
                        <Link to='/wheatflour' onClick={handleClick.bind(this, 'wheatFlour')} >
                            <Card
                                style={{
                                    margin: "5px",
                                    width: "400px"
                                }}
                                cover={
                                    <img
                                        alt="wheatFlour"
                                        src={WheatFlourImage}
                                        style={{ width: "400px", height: "200px" }}
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src={AvatarImage} />}
                                    title="Brown Wheat Flour"
                                    description="Fresh and Organic Wheat Flour"
                                />
                            </Card>
                        </Link>
                    </section>
                </Col>
                <Col span={6}>
                    <section>
                        <Link to='/wheatflour' onClick={handleClick.bind(this, 'MaizeFlour')}  >
                            <Card
                                style={{
                                    margin: "5px",
                                    width: "400px"
                                }}
                                cover={
                                    <img
                                        alt="maizeFlour"
                                        src={MaizeFlourImage}
                                        style={{ width: "400px", height: "200px" }}
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src={AvatarImage} />}
                                    title="Maize Flour "
                                    description="Fresh and Organic Maize Flour"
                                />
                            </Card>
                        </Link>
                    </section>
                </Col>
                <Col span={6}>
                    <section>
                        <Link to='/wheatflour' onClick={handleClick.bind(this, 'RiceFlour')}  >
                            <Card
                                style={{
                                    margin: "5px",
                                    width: "400px"
                                }}
                                cover={
                                    <img
                                        alt="riceFlour"
                                        src={RiceFlourImage}
                                        style={{ width: "400px", height: "200px" }}
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src={AvatarImage} />}
                                    title="Rice Flour"
                                    description="Fresh and Organic  Rice Flour"
                                />
                            </Card>
                        </Link>
                    </section>
                </Col>
                <Col span={6}>
                    <section>
                        <Link to='/wheatflour' onClick={handleClick.bind(this, 'MilletFlour')}  >
                            <Card
                                style={{
                                    margin: "5px",
                                    width: "400px"
                                }}
                                cover={
                                    <img
                                        alt="riceFlour"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        src={MilletFlourImage}
                                        style={{ width: "400px", height: "200px" }}
                                    />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src={AvatarImage} />}
                                    title="Millet Flour"
                                    description="Fresh and Organic Millet Flour"
                                />
                            </Card>
                        </Link>
                    </section>
                </Col>
            </Row>
        </div>
    )
}
