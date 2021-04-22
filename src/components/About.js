import React, { useEffect, useState } from 'react';
import { useHistory} from "react-router-dom";
import Nirmit from '../images/Nirmit.jpg';
import Harsh from '../images/Harsh.jpg';
import Prima from '../images/Prima.jfif';


function About() {

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
            <div className="container-fluid w-70 mt-2">
              <div className="d-flex row">
                <div className="col-12">
                  <h3 className="mx-auto text-lg-center w-75 text-info">
                    Designed and Developed by: 
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <h3 className="text-lg-right">
                  <img src={Harsh} alt="Developer Harsh" className="rounded-circle"  width="100" height="100" />  
                  </h3>
                </div>
                <div className="col-6">
                  <h3 className="text-lg-right text-info mt-4">
                    <a href="https://www.linkedin.com/in/harsh-patel-935816115/" rel="external" className="text-success">Harsh Patel</a> <br></br>
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <h3 className="text-lg-right">
                    <img src={Nirmit} alt="Developer Nirmit" className="rounded-circle"  width="100" height="100" /> 
                  </h3>
                </div>
                <div className="col-6">
                  <h3 className="text-lg-left text-info mt-4">
                    <a href="https://www.linkedin.com/in/nirmit-patel-7b1562196/" rel="external" className="text-success">Nirmit Patel</a> <br></br>
                  </h3>
                </div>
              </div>

            <div className="row col-12">
              <div className="col-6">
                <h3 className="text-lg-right">
                  <img src={Prima} alt="Developer Prima" className="rounded-circle"  width="100" height="100" />  
                </h3>
              </div>
              <div className="col-6">
                <h3 className="text-lg-left text-info mt-4">
                  <a href="https://www.linkedin.com/in/prima-patel-2a08a211b/" rel="external" className="text-success">Prima Patel</a><br></br>
                </h3>
              </div>
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

export default About;