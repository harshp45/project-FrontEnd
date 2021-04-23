import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router';
import { useHistory} from "react-router-dom";
import Location from './Location';

function ContactUS() {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [loading, setLoading]=useState(true);
    const [submitted, setSubmitted] = useState(false);
    let history = useHistory(); 

    useEffect(()=>{
      if(localStorage.getItem('token')==="")
      {
          setLoading(false);
      }
    })

    const submit = (e) => {
        fetch('https://dishes-backend.herokuapp.com/api/contact/sendMail', {
          method: 'POST',
          body: JSON.stringify(e),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => 
            { 
                setSubmitted(true) 
                response.json()
            })
        .then(data => console.log(data))
      }


      if (submitted) {
        return <Redirect push to={{
          pathname: '/',
        }}
        />
      } 

 
  return (
    <div>
        {loading?(
            <>
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className="h4-color">Ask us anything!!!</h2>
                        <form onSubmit={handleSubmit(submit)} >
                            <div className="form-group d-flex ms-5">
                                <span className="user-icon">
                                <i className="fas fa-user"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Name"
                                    {...register("name", { required: true})}/>
                                <div>{errors.name && "Name is required"}</div>
                            </div>
                            <div className="form-group d-flex ms-5">
                                <span className="user-icon">
                                <i class="fas fa-envelope-square"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Email"
                                    {...register("email", { required: true})}/>
                                <div>{errors.email && "Email is required"}</div>
                            </div>
                            <div className="form-group d-flex ms-5">
                                <span class="user-icon"><i class="fas fa-comments"></i></span>
                            <textarea type="text" columns="50"  {...register("query", { required: true})}> Enter your comments here...</textarea>
                            <div>{errors.query && "Query is required"}</div>
                            </div>
                            
                            <div className="form-group d-flex ms-5">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6 align-items-left">
                        <span>
                        <i class="fas fa-address-card"></i> Our Address <br></br>
                        1294 Islington Avenue,Etobicoke, M9A 3K2 
                        </span>
                     <Location />
                    </div>

                </div>
            </>

        ):(
            <>
                {history.push("/")}
            </>
        )}
    </div>
  );
}

export default ContactUS;