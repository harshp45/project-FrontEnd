import React from 'react'
import '../css/Login.css'

const login = () => {
    return (
        <div className="body">
            <div className="login">
            <div className="container border">
                
                    <h4>Login</h4>
                    <form >
                    <div className="form-group d-flex ms-5">
                        <span className="user-icon">
                        <i className="fas fa-user"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter Email Id" required="required" />
                    </div>
                    <div class="form-group d-flex ms-5">
                        <span className="user-icon"><i class="fas fa-unlock"></i></span>
                        <input type="password" class="form-control" placeholder="Enter Password" required="required" />					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                    <button className="btn btn-primary">Submit</button>
                    <a className="mt-2 f-pwd">Forgot password?</a>
                    </div>
                </form>
                <hr></hr>
                    <div className=" d-flex justify-content-evenly">
                        <h5 className="mt-2 mb-3">New user?</h5>
                        <a href="/registration"><button className="btn btn-info mb-2"> Register</button></a>
                    </div>
                </div>
        </div>
        </div>
        
        
    )
}

export default login
