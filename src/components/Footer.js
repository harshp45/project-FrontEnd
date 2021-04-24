import React from "react";
import "../css/Footer.css";
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
      <div className="f-main-div">
          <div className="back-top" onClick={scrollToTop}>
              <Link><h6>Back to top</h6></Link>
          </div>

          <div className="nav-line"></div>

            <div className="f-navbar-div">
                <Link to="/userdashboard">
                    <img className="a-logo" src="/Logo.png" />
                </Link>
                <a className="navbar-brand logo">Homestyle Delicacies</a>
            </div>
            
            <div className="row">
                <div className="d-flex flex-row">
                <a href="mailto:contact.homestyledelicacies@gmail.com" className="linkDecor"><span style={{color: "whitesmoke"}} className="mx-3"><i className="fas fa-envelope"></i>&nbsp;contact.homestyledelicacies@gmail.com</span></a>
                <a href="tel:16475713096" className="linkDecor"><span style={{color: "whitesmoke"}} className="mx-3"><i className="fas fa-phone"></i>&nbsp;+1 647-571-3096</span></a>
                <a href="https://www.google.com/maps/place/1294+Islington+Ave,+Etobicoke,+ON+M9A+3K2/@43.648946,-79.5284145,17z/data=!3m1!4b1!4m5!3m4!1s0x882b37a8a5b7f145:0x6b50dfe593cf8995!8m2!3d43.648946!4d-79.5262258" className="linkDecor">
                <span style={{color: "whitesmoke"}} className="mx-3"><i className="fas fa-map-marker"></i>&nbsp;1294 Islington Avenue, Etobicoke, M9A3K2.</span>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{color: "white"}}>
                 © 2021 Homestyle Inc.
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;