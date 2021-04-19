import React from 'react'
import '../css/Dashboard.css';

//Images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";  

const Userdashboard = () => {
    return (
        <div className="dash-main-div">
            <div className="home__container">
                <img src={image1} alt="" className="m-image"/>
            </div>
        </div>
    )
}

export default Userdashboard;
