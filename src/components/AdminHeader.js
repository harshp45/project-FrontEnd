import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Template.css'

function AdminHeader() {

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand logo" href="/"><img className="hd-logo" src="/Logo.png" />Homestyle Delicacies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                <ul className="navbar-nav float-end mb-2 mb-lg-0">
                <li className="nav-item">
                        <a className="nav-link" href="/addDish">Add Dish</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/myDishes">My Dishes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Logout </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div> 
    )
}

export default AdminHeader;
