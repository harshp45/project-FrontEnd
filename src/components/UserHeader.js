import React from 'react';
import CartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import '../css/Template.css'
import { Link } from 'react-router-dom';

function userHeader() {


    return (
            <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">
                 
                <Link className="navbar-brand logo" to="/userdashboard">Homestyle Delicacies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                    <ul className="navbar-nav float-end mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/userdashboard">
                                <RestaurantMenuIcon /> Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/menu">
                                <RestaurantMenuIcon /> Menu
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/contactus">
                                <ContactSupportIcon />Contact Us
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/aboutus">
                                <InfoIcon />About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/logout">
                                <ExitToAppIcon />Logout
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/cart">
                                <CartIcon/> Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div> 
    )
}

export default userHeader;
