import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import CurrencyFormat from "react-currency-format";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import "../css/Subtotal.css";
import {Redirect} from 'react-router';

const Subtotal = ({totalprice, totalproducts, wholecart}) =>{
    const [token, setToken] = useState("");
    const [loading, setLoading]=useState(true);
    const [selected,setSelected]=useState(false)
    const [user, setUser] = useState([]);
    const {register, formState: { errors }, handleSubmit} = useForm();
    const history = useHistory();

    useEffect(()=>{
        var token = localStorage.getItem('token');
        if(token==="")
        {
            setLoading(false);
        }
        else
        {
            setToken(token);
            var decoded = jwt_decode(token);
            setUser(decoded.user);
        }
    }, []);

    var items = [];
    for(var i=0;i<wholecart.length;i++)
    {
        items[i] = wholecart[i].itemname; 
    }


    const submit = (e) =>{
        console.log(JSON.stringify(e));
        var customeraddress = e.addressline + ", " + e.city + ", ON " + e.postal;
        console.log("Full Address"+customeraddress);
        
        fetch("https://dishes-backend.herokuapp.com/api/order/add",{
            method: 'POST',
            body: JSON.stringify({
                customername: e.customername,
                customeremail: user.email,
                customeraddress: customeraddress,
                items: items,
                totalprice: totalprice
            }),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data => 
            { 
                console.log(data) 
                setSelected(true)
            })
    }

    if(selected)
    {
        fetch('https://dishes-backend.herokuapp.com/api/cart/deleteByUser',{
            method:'DELETE',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data => 
            { 
                console.log(data); 
            })
        return <Redirect push to={{
            pathname: '/confirmation',
          }}
          /> 
    }

    return(
            <div className="subtotal-main-div">
                <h3>Billing Details</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group d-flex ms-5">
                        <span className="formIcon">
                        <i className="fas fa-user"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Name"
                            {...register("customername", { required: true})}     
                        />
                         <div>{errors.customername && "Name is required"}</div>
                    </div>
                    
                    <div className="form-group d-flex ms-5">
                    <span className="formIcon">
                    <i className="fas fa-phone"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Phone Number"
                            {...register("customerphone", { required: true})} 
                            />					
                        <div>{errors.phone && "Phone Number is required"}</div>
                    </div>
                    <div className="form-group d-flex ms-5">
                    <span className="formIcon">
                    <i className="fas fa-map-pin"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Unit/Apt-Address Line" 
                            {...register("addressline", { required: true})}
                        />	
                        <div>{errors.addressline && "AddressLine is required"}</div>				
                    </div>
                    <div className="form-group d-flex ms-5">
                    <span className="formIcon">
                    <i className="fas fa-map-pin"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="City inside Toronto" 
                            {...register("city", { required: true})}
                        />	
                        <div>{errors.city && "City is required"}</div>				
                    </div>
                    <div className="form-group d-flex ms-5">
                    <span className="formIcon">
                    <i className="fas fa-map-pin"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Postal Code (A1A1A1)" 
                            {...register("postal", { required: true})}
                        />
                        <div>{errors.postal && "Postal is required"}</div>						
                    </div>
                    
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                        <p>
                            Subtotal ({totalproducts} items): <strong>${totalprice}</strong>
                        </p>
                        </>
                    )}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

            <button className="orderButton">Place Your Order</button>
            </form>      
        </div>
        
    )
}

export default Subtotal;