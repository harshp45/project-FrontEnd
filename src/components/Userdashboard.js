import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import { useForm } from 'react-hook-form';
import jwt_decode from "jwt-decode";
import { useHistory} from "react-router-dom";
import {Redirect} from 'react-router';

//Images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";  

const Userdashboard = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("");
    const [loading,setLoading]=useState(true);
    let history = useHistory(); 
    const [location,setLocation]=useState("")
    const [selected,setSelected]=useState(false)

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
    },[]);
 

    
    const submit = (e) => 
    {
     
        setLocation(e.location)
        setSelected(true)
      
    }
    if(selected)
    {
        localStorage.setItem('place', location);
        return <Redirect push to={{
            pathname: '/menu',
          }}
          /> 
    }

    return (
        <div>
            {loading?(
            <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={image2} class="d-block w-100 m-image" alt="..." ></img>
                    </div>
                    <div class="carousel-item">
                    <img src={image3} class="d-block w-100 m-image" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={image1} class="d-block w-100 m-image" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <form className="form-posi border" onSubmit={handleSubmit(submit)}>
                <div className="form-group d-flex ">
                    <select className="form-select form-select-sm" {...register("location", { required: "select one option"})}>
                        <option selected>--Select Location--</option>
                        <option value="Etobicoke">Etobicoke</option>
                        <option value="North York">North York</option>
                        <option value="Downtown">Downtown</option>
                    </select>
                    <div>{errors.location && "Location is required"}</div>
                </div>
                <div className="form-group d-flex">
                    <button  type="submit" className="btn btn-warning mb-2"> Order Now</button>
                </div>
            </form>
            </>
            ):(
                <>
                    {history.push("/")}
                </>
            )}
        </div>
    )
}

export default Userdashboard;
