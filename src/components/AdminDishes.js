import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import { useLocation, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../css/Menu.css';

const Data = props =>
{    
    const imgPath=`/dishes/${props.new.image}`
    console.log(imgPath); 

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
                    <p className="card-text"><b>Seller Name: </b>{props.currentUser.firstname}</p>
                </div>
            </div>
        </div>
    )

}



function AdminDishes() 
{
    const [menu, setMenu] = useState([]);
    const [user, setUser] = useState([]);
    const [loading,setLoading]=useState(true);
    let location = useLocation();
    let history = useHistory(); 
    
    

    useEffect(()=>{
        var token = localStorage.getItem('token');
        console.log(token);
        if(token==="")
        {
            setLoading(false);
        }
        else
        {
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
        return menu.filter(item => item.sellerEmail===user.email).map(item=>{
            return <Data new={item} currentUser={user}/>
        })
    }
  


    return (
        <div>
            <center><h1>My Dishes</h1></center>

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

export default AdminDishes;