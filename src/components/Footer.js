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
                <span style={{color: "whitesmoke"}} className="mx-3"><i class="fas fa-envelope"></i>&nbsp;contact.homestyledelicacies@gmail.com</span>
                <span style={{color: "whitesmoke"}} className="mx-3"><i class="fas fa-phone"></i>&nbsp;+1 647-571-3096</span>
                <span style={{color: "whitesmoke"}} className="mx-3"><i class="fas fa-map-marker"></i>&nbsp;contact.homestyledelicacies@gmail.com</span>
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