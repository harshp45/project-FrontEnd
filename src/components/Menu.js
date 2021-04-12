import React, { useEffect, useState } from 'react';
import { useLocation, useHistory} from "react-router-dom";
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
                    <p className="card-text"><b>SellerName: </b>{props.new.sellername}</p>
                    <p className="card-text"><b>Category: </b>{props.new.category}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    )

}



function Menu() {

    const [menu, setMenu] = useState([]);
    const [loading,setLoading]=useState(true);
    let history = useHistory();
    let location = useLocation();

    

    useEffect(()=>{
        
    if (typeof location.state.userToken == 'undefined')
    {
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