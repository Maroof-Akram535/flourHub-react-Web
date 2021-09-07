import React from 'react'
import DynamicFrom from '../../Components/dynamicFormGenerator';
import { Card } from 'antd';
import '../../assests/styles/Form.css'
import API_REQUEST from '../../apiRequests/index';
import { useState, useEffect } from 'react';
import localStorage from '../../services/localStorage';
import { Store } from '../../store/store';
import { Alert } from 'antd';
import {
    Link,
    Redirect
} from 'react-router-dom';
export default function LoginPage(props) {
    const [errorMesssage, setErrorMessage] = useState(false);
    const [displayMesage, setDisplayMessage] = useState("");
    var store = React.useContext(Store);
    var data;
    const onClose = (e) => {
        e.preventDefault();
        console.log(e, 'I was closed.');
    };
    var formSchema = [
        { label: "Enter Your Email", type: "email", name: "userEmail", placeholder: " Enter User Email" },
        { label: "Enter Your Password", type: "password", name: "userPassword", placeholder: " Enter Password" },
    ]
    const handleSubmit = (userData) => {
        if (props.location.state === '/cart' || props.route === '/') {
            data = {
                userEmail: userData.userEmail,
                userPassword: userData.userPassword
            }
        }
        else {
            data = {
                userEmail: userData.userEmail,
                userPassword: userData.userPassword,
                userRole: 'admin'
            }
        }
        API_REQUEST.loginUser(data).then(res => {
            if (res.data.message) {
                if (res.data.message === "User Not Found") {
                    setErrorMessage(false);
                    setErrorMessage(true);
                    setDisplayMessage("Invalid User Name or Password!");
                }
                else {
                    setErrorMessage(false);
                    setErrorMessage(true);
                    setDisplayMessage("You are Not an Admin");
                }
            }
            else {
                var accestoken = res.data.accessToken;
                console.log("Token Comming From Server", accestoken);
                localStorage.setItem("accessToken", accestoken);
                if ((props.location.state === '/cart') || (props.route === '/')) {
                    store.dispatch({ type: "authenticateUser", payload: res.data.userInfo })
                }
                else {
                    store.dispatch({ type: "authenticateAdmin", payload: res.data.userInfo })
                }
            }
        })
    }
    return (
        <div>
            {console.log("Rendering")}
            <div style={{ textAlign: "center", marginRight: "200px" }}> <h5>Welcome to Flour Hub! Please Login</h5> </div>
            {props.location.state === '/cart' || props.route === '/' ? <p style={{ textAlign: "center", marginTop: "80px", marginRight: "200px" }}>  New Member ?<Link to="/signup">  <span>Register Here</span>  </Link> </p> : <h5 style={{ textAlign: "center", marginTop: "80px", marginRight: "200px" }}>Hello Admin Login Here!</h5>
            }
            <div style={{ marginTop: "10%", marginRight: "10%", textAlign: "center" }}>
                <Card className="login-box" title="Login" style={{ width: 500 }}>
                    {console.log('errorMessage', errorMesssage)}
                    {errorMesssage ? <Alert
                        message={displayMesage}
                        type="error"
                        closable
                        onClose={onClose}
                    /> : null}
                    <DynamicFrom formSchema={formSchema} handleSubmit={handleSubmit} />
                </Card>
            </div>
        </div>
    )
}
