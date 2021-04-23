import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Subtotal from './Subtotal';
import CartProduct from './CartProduct';
import '../css/cart.css'
import { parse } from '@babel/core';

function Cart() {
    
    const [cart, setCart] = useState([]);
    const [tempOrder, setTempOrder] = useState([]);
    const [token, setToken] = useState("");
    const [loading, setLoading]=useState(true);
    const [user, setUser] = useState([]);
    const [total, setTotal] = useState(0);
    let history = useHistory(); 

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
        fetch("https://dishes-backend.herokuapp.com/api/cart/listbyuser",{
            method: 'POST',
            body:JSON.stringify({email:"niks007@gmail.com"}),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data =>
        {
            setCart(data) 
        })


    }, []);

    console.log("Outside Token: "+token);
    console.log("Cart:" +JSON.stringify(cart));

    var count = 0;
    var itemCount = cart.length;
    for(var i=0;i<cart.length;i++)
    {
        
        count = parseFloat(count + cart[i].price)
        
    }
    console.log(itemCount);
    console.log("Total Price: $"+count.toFixed(2));


  return (
    <div>
        {loading?(
                <div className="cart-main-div">
                    <h3>Hello, {user.firstname}</h3>
                    <div className="div-flex">
                    <div className="cart-subtotal">
                        <h3>Your Order Cart</h3>
                    </div>
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
                   
                    <div className="nav-line"></div>
                    <div>
                        
                        {cart.map(item => (
                            <CartProduct
                            id={item._id}
                            itemname={item.itemname}
                            image={item.image}
                            category={item.category}
                            price={item.price}
                            quantity={item.quantity}
                            check={token}
                            />
                        ))}

                    </div>

                   
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