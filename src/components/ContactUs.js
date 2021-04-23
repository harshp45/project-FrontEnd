import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router';
import { useHistory} from "react-router-dom";
import Location from './Location';
import '../css/ContactUs.css';

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
          pathname: '/contactus',
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

                                  <div class="fcf-form-group">
                                      <label for="Name" class="fcf-label">Your name</label>
                                      <div class="fcf-input-group">
                                          <span className="user-icon">
                                              <i className="fas fa-user"></i>
                                          </span>
                                          <input type="text" id="Name" name="Name" class="fcf-form-control"  {...register("name", { required: true})}/>
                                            <div>{errors.name && "Name is required"}</div>
                                      </div>
                                  </div>

                                  <div class="fcf-form-group">
                                      <label for="Email" class="fcf-label">Your email address</label>
                                      <div class="fcf-input-group">
                                          <span className="user-icon">
                                              <i class="fas fa-envelope-square"></i>
                                          </span>
                                          <input type="email" id="Email" name="Email" class="fcf-form-control" {...register("email", { required: true})}/>
                                            <div>{errors.email && "Email is required"}</div>
                                      </div>
                                  </div>

                                  <div class="fcf-form-group">
                                      <label for="Message" class="fcf-label">Your message</label>
                                      <div class="fcf-input-group">
                                          <span class="user-icon"><i class="fas fa-comments"></i></span>
                                          <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000"  {...register("query", { required: true})}> Enter your comments here...</textarea>
                                            <div>{errors.query && "Query is required"}</div>
                                      </div>
                                  </div>

                                  <div class="fcf-form-group">
                                      <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                                  </div>


                              </form>
                          </div>
                          <div className="col-sm-6 align-items-left">
                              <span>
                                  <i class="fas fa-address-card"></i> Our Address <br></br>
                            1294 Islington Avenue,Etobicoke, M9A 3K2
                            </span><br />
                              <span>
                                  <i class="fas fa-envelope-square"></i> Our Email <br></br>
                                  contact.homestyledelicacies@gmail.com
                            </span><br />
                              <span>
                                  <i class="fas fa-phone-square"></i> Our Phone <br></br>
                            +14372256785
                            </span><br /><br />
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