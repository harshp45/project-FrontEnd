import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import '../css/cartProduct.css'

function CartProduct({ id, image, itemname, price, category, hideButton}) {
 
    const imgPath=`/dishes/${image}`;
    const [token, setToken] = useState("");
    const [loading, setLoading]=useState(true);
    const [user, setUser] = useState([]);

    useEffect(()=>
    {
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

    const deleteProduct = (e) =>{
            fetch("https://dishes-backend.herokuapp.com/api/cart/delete",{
            method: 'DELETE',
            body: JSON.stringify({
                id: e
            }),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data => { console.log(data) })
          
    }

    


    return (
        <div>
        <div className='cartProduct-main-div'>
            <div className="cartImage">
                <img src={imgPath} />
            </div>

            <div className='cartProductDetails'>
                <p className='Product-title'>{itemname}</p>
                <div>
                    <p>Category: <strong>{category}</strong></p>
                    <span>$ <strong>{price}</strong></span>
                </div>

   
                {!hideButton && (
                    <button onClick={(e)=>deleteProduct(id)}>Remove from Cart</button>
                )}
            </div>
            
        </div>
        </div>
    )
}

export default CartProduct;
