import React from 'react'
export default function InputFeild(props) {
    return (
        <div>

            <label>
                {props.label}
            </label><br />
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                required
            />
        </div>
    )
}
