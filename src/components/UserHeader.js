import React from 'react';
import CartIcon from '@material-ui/icons/ShoppingCart';
import '../css/Template.css'

function UserHeader() {

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="/userdashboard">Homestyle Delicacies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                <ul className="navbar-nav float-end mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/menu">Menu</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/cart">
                        <CartIcon/>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div> 
    )
}

export default UserHeader;
