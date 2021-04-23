import React, {useState} from 'react';
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
import {Redirect} from 'react-router';
import '../css/Login.css'

const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const [token, setToken] = useState("");
    const [loginError, setLoginError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const axios = require('axios');

    const submit = (e) => {

        axios.post('https://dishes-backend.herokuapp.com/api/user/login',{
            email:e.email,
            password:e.password
        })
        .then(function (response) {
            if(response.status===403)
            {
                console.log("Login Error");
            }
            if(response.status===200)
            {
                setToken(response.data.token);
                setSubmitted(true);
            }
        })
        .catch(function (error) {
            setLoginError("Invalid Credentials");
        })
    }


    if (submitted) 
    {
        var decoded = jwt_decode(token);
        localStorage.setItem('token', token);
        if(decoded.user.type==="seller")
        {
            return <Redirect push to={{
                pathname: '/addDish',
            }}
            /> 
        }
        if(decoded.user.type==="customer")
        {
            return <Redirect push to={{
                pathname: '/userdashboard',
            }}
            />
        }
    }

    return (
        <div className="body">
            <div className="login">
            <div className="container border">
                <h4>{loginError}</h4>
                <h4>Login</h4>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group d-flex ms-5">
                        <span className="user-icon">
                        <i className="fas fa-envelope-square"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Email" 
                            {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                            <div>{errors.email && "Email is required"}</div>
                    </div>
                    <div class="form-group d-flex ms-5">
                        <span className="user-icon"><i class="fas fa-unlock"></i></span>
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Enter Password" 
                            {...register("password", { required: true})}/>
                            <div>{errors.password && "Password is required"}</div>						
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                        <button type="submit" className="btn btn-color">Sign In</button>
                    </div>
                </form>
                <hr></hr>
                    <div className=" d-flex justify-content-evenly">
                        <h5 className="mt-2 mb-3">New user?</h5>
                        <a href="/registration"><button className="btn btn-color mb-2"> Register</button></a>
                    </div>
                </div>
        </div>
        </div>
        
        
    )
}

export default Login;
