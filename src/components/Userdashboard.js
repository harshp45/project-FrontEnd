import React from 'react'
import '../css/Dashboard.css';
import { Link } from 'react-router-dom';

//Images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";  

const Userdashboard = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={image1} class="d-block w-100 m-image" alt="..." ></img>
                    </div>
                    <div class="carousel-item">
                    <img src={image2} class="d-block w-100 m-image" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={image3} class="d-block w-100 m-image" alt="..."></img>
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

            <form className="form-posi border">
                <div className="form-group d-flex ">
                    <select className="form-select form-select-sm">
                        <option selected>--Select Type--</option>
                        <option value="Etobicoke">Etobicoke</option>
                        <option value="NorthYork">North York</option>
                        <option value="Downtown">Downtown Toronto</option>
                    </select>
                </div>
                <div className="form-group d-flex">
                    <Link to="/menu"><button className="btn btn-warning mb-2"> Order Now</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Userdashboard;
