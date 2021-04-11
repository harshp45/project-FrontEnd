import React, { useState, useEffect } from 'react'
import { useLocation, Link} from "react-router-dom";
import '../css/Template.css'

function Header() {

    const [token,setToken] = useState([]);

    useEffect(()=>{
        fetch("https://dishes-backend.herokuapp.com/api/user/token",{
            headers: {'Content-Type': 'application/json', 
            }
        })
        .then(response => response.json())
        .then(data => setToken(data))
    }, []);

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="/">Homestyle Delicacies</a>
                <Link to={{pathname:"menu", state:{test: token.token}}}>Menu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                <ul className="navbar-nav float-end mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/registration">Register </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div> 
    )
}

export default Header
