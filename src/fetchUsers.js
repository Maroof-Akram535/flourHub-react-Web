import React from 'react';
import AxiosCall from './Api/Api';
// import AXIOS from 'axios';
import { useState, useEffect } from 'react';
export default function FetchUsers() {
    var userName = "Maroof";
    const [users, setUsers] = useState([]);
    const [erre,setErr]=useState(" ");
    const fetchUser = (e) => {
        e.preventDefault();
        AxiosCall.FetchData().then(res => {
            setUsers(res.data);
        }).catch(err=>{
            console.log("ererre9");
             setErr("You are Unothorized!!! LOGIN AGAIN");
        })
    }
    return (
        <div>
            <h1> HEllo</h1>
            <button onClick={(e) => fetchUser(e)} type="button">Fetch Users</button>
            <ul>
                {users.map(dataValue =>
                    <div>
                        <li key={""}>Email: {dataValue.email}</li>
                        <li key={""}>Pasword: {dataValue.password}</li>
                    </div>
                )
                }
            </ul>
            <h1>{erre}</h1>
        </div>
    );
}