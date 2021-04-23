import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Subtotal.css";
import { useHistory } from "react-router-dom";

const Subtotal = ({totalprice, totalproducts, wholecart}) =>{
    const history = useHistory();

    

    const submitOrder = () =>{
        console.log(wholecart);
    }

    return(
            <div className="subtotal-main-div">
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

            <button onClick={submitOrder()}>Place Your Order</button>

        </div>
        
    )
}

export default Subtotal;