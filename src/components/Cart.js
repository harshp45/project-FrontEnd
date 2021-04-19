import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";


function Cart() {

    const [loading, setLoading]=useState(true);
    let history = useHistory(); 

    useEffect(()=>{
      if(localStorage.getItem('token')==="")
      {
          setLoading(false);
      }
    })

 
  return (
    <div>
        <center><h1>Cart Page</h1></center>
        {loading?(
            <>
                <p>This is cart page!!</p>
            </>

        ):(
            <>
                {history.push("/")}
            </>
        )}
    </div>
  );
}

export default Cart;