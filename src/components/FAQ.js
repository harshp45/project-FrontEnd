import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";


function FAQ() {

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
        <center><h1>FAQ Page</h1></center>
        {loading?(
            <>
                <p>This is FAQ page!!</p>
            </>

        ):(
            <>
                {history.push("/")}
            </>
        )}
    </div>
  );
}

export default FAQ;