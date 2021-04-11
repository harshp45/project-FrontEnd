import React, { useEffect, useState } from 'react';
import { useLocation, Link} from "react-router-dom";
import '../css/Menu.css';

function Menu() {


    const [menu, setMenu] = useState([]);

    let location = useLocation();

    useEffect(()=>{
        fetch("https://dishes-backend.herokuapp.com/api/menu/list",{
            headers: {'Content-Type': 'application/json', 
            'x-access-token':location.state.userToken}
        })
        .then(response => response.json())
        .then(data => setMenu(data))
    }, []);

    console.log(location.state.userToken);

    // console.log(menu);

        // //GetToken
        // const uToken = "https://dishes-backend.herokuapp.com/api/user/token";
        // const uTokenResponse = await fetch(uToken, {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json',
        //     }
        // });
        // const Tokendata = await uTokenResponse.json();
        // const token = Tokendata.token;

    return (
        <div>
            <center><h1>Menu</h1></center>
            {menu.map(dish=>(
                <div className="mx-auto w-100 row col-sm-12 h mt-5">
                <div className="border mx-5 col-sm card-color h overflow-auto">
                    <img src="" alt="" />
                    <p class="card-text">{dish.itemname}</p>
                    <p className="card-text"><b>Location:</b> {dish.location}</p>
                    <p className="card-text"><b>Price:</b> {dish.price}</p>
                    <p className="card-text"><b>SellerName: </b>{dish.sellername}</p>
                    <p className="card-text"><b>Category: </b>{dish.category}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
                </div>
            ))}
               
        </div>

    )
}

export default Menu;