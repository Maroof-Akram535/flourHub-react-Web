import React from 'react';
import AxiosCall from './Api/Api';
export default function UpdateUsers()
{
    const updateUser=()=>{
       AxiosCall.UpdateData();
    }
    return(
        <div> 
            <button onClick={ updateUser} type="button">Update Users</button>
        </div>
       
    )
}