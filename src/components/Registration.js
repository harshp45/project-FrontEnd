import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router'
import '../css/Registration.css'

const Registration = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [user, setUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);

 

    const submit = (e) => {
        fetch('https://dishes-backend.herokuapp.com/api/user/add', {
          method: 'POST',
          body: JSON.stringify(e),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => { 
                setSubmitted(true) 
                response.json()})
        .then(data => setUser(data))
      }

      

      console.log(user);

      if (submitted) {
        return <Redirect push to={{
          pathname: '/',
        }}
        />
      }  


    return (
        <div className="body">
            <div className="register">
            <div className="container border">
                
                    <h4>Registration</h4>
                    <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter First Name" 
                            {...register("firstname", { required: true})}/>
                            <div>{errors.firstname && "First Name is required"}</div>
                        
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Last Name"
                            {...register("lastname", { required: true})}/>
                            <div>{errors.lastname && "Last Name is required"}</div>
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Phone Number" 
                            {...register("phone", { required: true, pattern:/[0-9]{10}/})}/>
                            <div>{errors.phone && "Phone Number is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Address" 
                            {...register("address", { required: true})}/>
                            <div>{errors.address && "Address is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Email" 
                            {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                            <div>{errors.email && "Email is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter Password" 
                            {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}/>
                            <div>{errors.password && "Password is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Type" 
                            {...register("type", { required: true})}/>
                            <div>{errors.type && "Type is required"}</div>					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                        <button type="submit" className="btn btn-primary ">Register</button>
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
