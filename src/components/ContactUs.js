import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";


function ContactUS() {

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
        <center><h1>Contact US Page</h1></center>
        {loading?(
            <>
                <p>This is contact us page!!</p>
            </>

        ):(
            <>
                {history.push("/")}
            </>
        )}
    </div>
  );
}

export default ContactUS;