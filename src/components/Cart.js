import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Subtotal from './Subtotal';
import CartProduct from './CartProduct';
import '../css/cart.css'
import { parse } from '@babel/core';

function Cart() {
    
    const [cart, setCart] = useState([]);
    const [token, setToken] = useState("");
    const [loading, setLoading]=useState(true);
    const [user, setUser] = useState([]);
    let history = useHistory(); 

    useEffect(()=>
    {
        var token = localStorage.getItem('token');
        if(token==="")
        {
            setLoading(false);
        }
        else
        {
            setToken(token); //Set Token
            var decoded = jwt_decode(token); //Decode Token
            setUser(decoded.user);

            //API Call
            fetch("https://dishes-backend.herokuapp.com/api/cart/listbyuser",{
            method: 'POST',
            body:JSON.stringify({email:decoded.user.email}),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data =>{ setCart(data) })
            
        }
        
    }, []);

    var count = 0;
    var itemCount = cart.length;
    for(var i=0;i<cart.length;i++)
    {
        
        count = parseFloat(count + cart[i].price)
        
    }
    
  return (
    <div>
        {loading?(
                <div className="cart-main-div">
                    <h3>Hello, {user.firstname}</h3>
                        <div className="div-flex">
                            <div className="cart-subtotal">
                                <h3>Your Order Cart</h3>
                            </div>
                        </div>

                           
        <div className="nav-line"></div>

                        <div className="row">

                            <div className="col-sm-9">
                                <div>
                                    {cart.map(item => (
                                        <CartProduct
                                            id={item._id}
                                            itemname={item.itemname}
                                            image={item.image}
                                            category={item.category}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                    
                                
                            </div>
                            <div className="col-sm-3">
                                <div>
                                <span>
                                    <Subtotal 
                                    totalprice={count.toFixed(2)}
                                    totalproducts={itemCount}
                                    wholecart={cart}
                                    />
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="nav-line"></div>
                </div>
        ):(
            <>
                {history.push("/")}
            </>
        )}
    </div>
  );
}

export default Cart;