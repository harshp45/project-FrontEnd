import React, { useEffect, useState } from 'react';
import { useLocation, useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../css/Menu.css';
const Data=props=>(

    <div className="mx-auto w-100 row col-sm-12 h mt-5">
    <div className="border mx-5 col-sm card-color h overflow-auto">
        <img src="" alt="" />
        <p class="card-text">{props.new.itemname}</p>
        <p className="card-text"><b>Location:</b> {props.new.location}</p>
        <p className="card-text"><b>Price:</b> {props.new.price}</p>
        <p className="card-text"><b>SellerName: </b>{props.new.sellername}</p>
        <p className="card-text"><b>Category: </b>{props.new.category}</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
    </div>
)

function Menu() {

    const [menu, setMenu] = useState([]);
    const [loading,setLoading]=useState(true);
    let history = useHistory();
    let location = useLocation();

    useEffect(()=>{
        
    if (typeof location.state.userToken == 'undefined'){
        setLoading(false)
    }
    fetch("https://dishes-backend.herokuapp.com/api/menu/list",{
        headers: {'Content-Type': 'application/json', 
        'x-access-token':location.state.userToken}
    })
    .then(response =>response.json())
    .then(data =>{ setMenu(data) })
    }, []);


    function menuList(){
        return menu.map(data=>{
            return <Data new={data}/>
        })
    }
  


    return (
        <div>
            <center><h1>Menu</h1></center>

        {loading?(
            <>
              {menuList()}
            </>

        ):(
            <>
      {history.push("/")}

            </>

        )}
        

           
               
        </div>

    )
}

export default Menu;