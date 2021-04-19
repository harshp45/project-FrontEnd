import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import { useLocation, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../css/Menu.css';

const Data = props =>
{  
    function addToCart(itemname, image, location, price, category, sellername, sellerEmail, quantity, user){
        fetch("https://dishes-backend.herokuapp.com/api/cart/add",{
            method: 'POST',
            body: JSON.stringify({
                itemname: itemname,
                image: image,
                location: location,
                price: price,
                category: category,
                sellername: sellername,
                sellerEmail: sellerEmail,
                quantity: quantity,
                user: user
            }),
            headers: {'Content-Type': 'application/json', 
            'x-access-token':props.check}
        })
        .then(response =>response.json())
        .then(data => { console.log(data) })
        
    }
    const imgPath=`/dishes/${props.new.image}`;

    return(
        <div className="mx-auto row w-50 h mt-5">
            <div className="border mx-5 col-sm card-color h  overflow-auto menu-items d-flex">
                <div className="col-sm-8">
                    <img src={imgPath} alt="Dishes" className="menu-picture "/>
                </div>
                <div className="col-sm-4 text-sm-left">
                    <p class="card-text h4 title">{props.new.itemname}</p>
                    <p className="card-text"><b>Location:</b> {props.new.location}</p>
                    <p className="card-text"><b>Price:</b> {props.new.price}</p>
                    <p className="card-text"><b>Category: </b>{props.new.category}</p>
                    <p className="card-text"><b>User: </b>{props.currentUser.firstname}</p>
                    <button 
                        type="submit" 
                        class="btn btn-primary" 
                        onClick={(e)=>addToCart(props.new.itemname, props.new.image, props.new.location, props.new.price, props.new.category, props.new.sellername, props.new.sellerEmail, 2, props.currentUser.email)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

 

function Menu() 
{
    const [menu, setMenu] = useState([]);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("");
    const [loading,setLoading]=useState(true);
    let location = useLocation();
    let history = useHistory(); 
    

    useEffect(()=>
    {
        var token = localStorage.getItem('token');
        console.log(token);
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

        fetch("https://dishes-backend.herokuapp.com/api/menu/list",{
            headers: {'Content-Type': 'application/json', 
            'x-access-token':token}
        })
        .then(response =>response.json())
        .then(data =>{ setMenu(data) })
    }, []);



    function menuList()
    {
        console.log("Inside MEnu list:"+token);
        return menu.map(data=>{
            return <Data new={data} currentUser={user} check={token}/>
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