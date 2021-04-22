import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import CartProduct from './CartProduct';

function Cart() {
    
    const [cart, setCart] = useState([]);
    const [tempOrder, setTempOrder] = useState([]);
    const [token, setToken] = useState("");
    const [loading, setLoading]=useState(true);
    const [user, setUser] = useState([]);
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

  return (
    <div>
        {loading?(
                <div className="checkout">
                    <div>
                        
                        <h3>Hello, {user.firstname}</h3>
                        <h3 className="checkout__title">Your Cart</h3>

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

                    <div className="checkout__right">
                        {/* <Subtotal /> */}
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