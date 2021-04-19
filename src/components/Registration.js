import React from 'react'
import '../css/Registration.css'

const Registration = () => {
    return (
        <div className="body">
            <div className="register">
            <div className="container border">
                
                    <h4>Registration</h4>
                    <form>
                    <div className="form-group d-flex ms-5">
                        <input type="text" className="form-control" placeholder="Enter First Name" required="required" />
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input type="text" className="form-control" placeholder="Enter Last Name" required="required" />					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input type="text" className="form-control" placeholder="Enter Phone Number" required="required" />					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input type="text" className="form-control" placeholder="Enter Email Id" required="required" />					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input type="password" className="form-control" placeholder="Enter Password" required="required" />					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                    <button className="btn btn-primary ">Register</button>
                    </div>
                    </form>
                    <hr></hr>
                    <div className=" d-flex justify-content-evenly">
                        <h5 className="mt-2 mb-3">Already Registered?</h5>
                        <a href="/"><button className="btn btn-info mb-2"> Login</button></a>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Registration
