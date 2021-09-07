import React from 'react'
export default function SelectInputFeild(props) {
    return (
        <div>
            <label>
                {props.label}
            </label><br />
            <select
                name={props.name}
                onChange={props.handleChange}
                required
            >
                <option value=""> Select an Option</option>
                {props.options.map(values =>
                    <option value={values} key={values}>{values}</option>
                )}
            </select>
        </div>
    )
}
