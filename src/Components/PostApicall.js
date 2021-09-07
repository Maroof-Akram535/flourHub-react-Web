import  React from 'react';
import axios from 'axios';
import {useEffect} from 'react';

function PostApicall()
{
    useEffect(()=>{
      console.log("In use Effect");
      axios.post('http://localhost:9000/admin/product')
    })
    return(
         <h1>This Component make axios Request</h1>
    );

}
export default PostApicall;