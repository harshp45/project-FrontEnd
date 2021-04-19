import React, { useState, useEffect } from 'react'
import '../css/Template.css'
import LockOpen from '@material-ui/icons/LockOpen';

import { Link } from 'react-router-dom';

function Header() {

    return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/">Homestyle Delicacies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                        <ul className="navbar-nav float-end mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <LockOpen /> Login
                                </Link>
                                </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">
                                    <span><i class="fas fa-sign-in-alt"></i></span> <span className="ms-1">Register</span> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> 
    )
}

export default Header
