import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Redirect} from 'react-router';


const AddDishes = () => {

    console.log(localStorage.getItem('token'));

    return(
        <div>
            <h1>Hello!!</h1>
        </div>
    );

}


export default AddDishes;