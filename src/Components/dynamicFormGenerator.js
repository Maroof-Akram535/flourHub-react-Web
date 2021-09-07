import React from 'react'
import InputFeild from './inputFeild';
import SelectInputFeild from './selectInputFeild';
import { useState } from 'react';
export default function DynamicFormGenerator(props) {
    const [userData, setUserData] = useState(
        {
            userEmail: "",
            userPassword: " ",
            userName: " ",
            userCity: " ",
            userRole: "user"
        }
    )
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = () => {
        props.handleSubmit(userData);
    }
    let formSchema = props.formSchema;
    let buttonCheck = false;
    return (
        <form>
            {formSchema.map(feilds => {
                if (feilds.type === 'text' || feilds.type === 'email' || feilds.type === 'password') {
                    return (
                        <InputFeild
                            label={feilds.label}
                            type={feilds.type}
                            name={feilds.name}
                            placeholder={feilds.placeholder}
                            key={feilds.placeholder}
                            handleChange={handleChange}
                        />
                    )
                };
                if (feilds.type === 'select') {
                    buttonCheck = true;
                    return (
                        <SelectInputFeild
                            label={feilds.label}
                            name={feilds.name}
                            options={feilds.options}
                            handleChange={handleChange}
                        />
                    )
                };
            })}
            <div className="buttonContainer" >
                <button type="button" onClick={handleSubmit}> {buttonCheck ? "SignUp" : "Login"}</button>
            </div>
        </form>
    )
}
