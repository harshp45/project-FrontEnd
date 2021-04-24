import React, { useEffect, useState } from 'react';
import "../css/Confirmation.css";
import { useForm } from 'react-hook-form';
import { useHistory} from "react-router-dom";
import {Redirect} from 'react-router';

const Confirm = () => {
    const { handleSubmit } = useForm();
    const [loading,setLoading] = useState(true);
    const [back, setBack] = useState(false)
    let history = useHistory();

    useEffect(()=>
    {
        var token = localStorage.getItem('token');
        if(token==="")
        {
            setLoading(false);
        }
    });

    const submit = (e) =>
    {
        setBack(true);
    }

    if(back)
    {
        return <Redirect push to={{
            pathname: '/userdashboard',
          }}
        /> 
    }

    return (
        <div className="posi">
             {loading?(
            <div>
            <span className="tick"><i class="fas fa-check-circle fa-7x"></i> </span>
            <h2 className="mt-4">Order Confirmed</h2>
            <form onSubmit={handleSubmit(submit)}>
                <button type="submit" className="orderButton">Return to dashboard</button>
            </form>
            </div>
            ):(
                <>
                   {history.push("/")}
                </>
            )}
        </div>
    )
}

export default Confirm;
