import React from 'react';
import {Redirect} from 'react-router';


const AddDishes = () => {

    localStorage.setItem('token',"")
    if(localStorage.getItem('token')==="")
    {
        return <Redirect push to={{
            pathname: '/',
          }}
          />
    }



    return(
        <div>
            
        </div>
    );

}


export default AddDishes;