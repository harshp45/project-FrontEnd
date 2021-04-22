import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Subtotal.css";
import { useHistory } from "react-router-dom";

const Subtotal = ({totalprice, totalproducts}) =>{
    const history = useHistory();


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

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal;