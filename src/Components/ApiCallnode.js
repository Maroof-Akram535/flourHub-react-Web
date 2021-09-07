import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';

function CallNodeApi()
{
    const[titte,setTiitle]=useState("No Name");
    useEffect(()=>{
       axios.get(
        'http://localhost:9000/admin/add-product'
       )
       .then(res=>{
           const dataC=res.data;
           setTiitle(dataC);
       })
    },[]);
     return(
       <div>
           <h1> Data Coming From Backend = {titte}</h1>
       </div>  
     )
}
export default CallNodeApi;