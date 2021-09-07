import React from 'react'
import DynamicForm from '../../Components/dynamicFormGenerator';
import { Card } from 'antd';
import '../../assests/styles/Form.css'
import API_REQUEST from '../../apiRequests/index';
import { useState } from 'react';
import Login from '../LoginPage/loginPage';
import { useHistory } from 'react-router-dom';
import { Alert } from 'antd';
export default function SingUp() {
    const history = useHistory();
    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };
    const [errorMesssage, setErrorMessage] = useState(false);
    var formSchema = [
        { label: "Enter Your Name", type: "text", name: "userName", placeholder: "User Name" },
        { label: "Enter Your Email", type: "email", name: "userEmail", placeholder: "User Email" },
        { label: "Enter Your Password ", type: "password", name: "userPassword", placeholder: "Password" },
        { label: "Select Your City", type: "select", name: "userCity", options: ["Lahore", "Islamabad", "Karachi", "Sialkot"] }
    ];
    const handleSubmit = (userData) => {
        API_REQUEST.createUser(userData).then(res => {
            if (res === true) {
                console.log("Hello");
                history.push('/login');
                setErrorMessage(false);
            }
            else {
                setErrorMessage(true)
            }
        })
    }
    return (
        <div>
            <Card className="login-box" title="Sign Up" style={{ width: 500 }}>
                {errorMesssage ? <Alert
                    message="This Email already exists! Try another One"
                    type="error"
                    closable
                    onClose={onClose}
                /> :
                    null
                }
                <DynamicForm
                    formSchema={formSchema} handleSubmit={handleSubmit} />
            </Card>
        </div>
    )
}
