import React from 'react';
import AxiosCall from './Api/Api';
export default function UpdateUsers()
{
    const deleteUser=()=>{
       AxiosCall.deleteData();
    }
    return(
        <div> 
            <button onClick={ deleteUser} type="button">Delete User</button>
        </div>
       
    )
}