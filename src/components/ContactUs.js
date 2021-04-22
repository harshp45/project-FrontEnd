import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import Location from './Location';

function ContactUS() {

    const [loading, setLoading]=useState(true);
    let history = useHistory(); 

    useEffect(()=>{
      if(localStorage.getItem('token')==="")
      {
          setLoading(false);
      }
    })

 
  return (
    <div>
        {loading?(
            <>
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className="h4-color">Ask us anything!!!</h2>
                        <form >
                            <div className="form-group d-flex ms-5">
                                <span className="user-icon">
                                <i className="fas fa-user"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Name"/>
                            </div>
                            <div className="form-group d-flex ms-5">
                                <span className="user-icon">
                                <i class="fas fa-envelope-square"></i>
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter Email"/>
                            </div>
                            <div className="form-group d-flex ms-5">
                                <span class="user-icon"><i class="fas fa-comments"></i></span>
                            <textarea type="text" columns="50" required> Enter your comments here...</textarea>
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