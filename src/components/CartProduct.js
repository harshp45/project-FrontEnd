import React from 'react';
import '../css/cartProduct.css'

function CartProduct({ id, image, itemname, price, category, quantity, hideButton, check }) {
 
    const imgPath=`/dishes/${image}`

    const deleteProduct = (e) =>{
            fetch("https://dishes-backend.herokuapp.com/api/cart/delete",{
            method: 'DELETE',
            body: JSON.stringify({
                id: e
            }),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':check}
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
                    <p>Quantity: <strong>{quantity}</strong></p>
                    <span>$ <strong>{price}</strong></span>
                </div>

   
                {!hideButton && (
                    <button onClick={(e)=>deleteProduct(id)}>Remove from Cart</button>
                )}
            </div>
            
        </div>
        <div className="nav-line"></div>
        </div>
    )
}

export default CartProduct;
