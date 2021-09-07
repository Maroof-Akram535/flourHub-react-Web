import React from 'react';
import { useState } from 'react';
import AxiosCall from './Api/Api';
import './Assests/styles/Form.css';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
    }
    const handleSubmit = () => {
        const data = {
            email: email,
            password: password
        }
        AxiosCall.SendData(data);
    }
    return (
        <div className="login-box">
        <form>
        <div className="user-box">
            <input type="text" placeholder="Enter Email Addres" name="email" onChange={handleChange} />
            <label>Email</label>
            </div>
            <div className="user-box">
            <input type="text" placeholder="Enter Password" name="passsword" onChange={handleChange} />
            <label>Password</label>
            </div>
            <button onClick={handleSubmit} type="button">SignUp</button>
        </form>
    </div>
    );
}