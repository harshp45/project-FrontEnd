import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router'
import '../css/Registration.css'

const AddDishes = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [menu, setMenu] = useState([]);
    const [submitted, setSubmitted] = useState(false);

 

    const submit = (e) => {
        // fetch('https://dishes-backend.herokuapp.com/api/menu/add', {
        //   method: 'POST',
        //   body: JSON.stringify(e),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        // .then(response => { 
        //         setSubmitted(true) 
        //         response.json()})
        // .then(data => setMenu(data))
        console.log(JSON.stringify(e));
      }

      

      console.log(menu);

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
                
                    <h4>Add Dishes into Menu</h4>
                    <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Dish Name" 
                            {...register("itemname", { required: true})}/>
                            <div>{errors.itemname && "Dish Name is required"}</div>
                        
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="file" 
                            className="form-control" 
                            placeholder="Upload Image"
                            {...register("image", { required: true})}/>
                            <div>{errors.lastname && "Select File to Upload"}</div>
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                            <select  className="form-control"  {...register("category", { required: "select one option"})}>
                                <option value="">--Select Category--</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>
                            <div>{errors.category && "Category is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                            <select  className="form-control"  {...register("location", { required: "select one option"})}>
                                <option value="">--Select Location--</option>
                                <option value="Etobicoke">Etobicoke</option>
                                <option value="North York">North York</option>
                                <option value="Downtown">Downtown</option>
                            </select>
                            <div>{errors.location && "Location is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Price" 
                            {...register("price", { required: true})}/>
                            <div>{errors.price && "price is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Your Email" 
                            {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                            <div>{errors.email && "Email is required"}</div>					
                    </div>
                    <div className="form-group d-flex ms-5 justify-content-evenly">
                        <button type="submit" className="btn btn-primary ">Add Dish</button>
                    </div>
                    </form>
                </div>
        </div>
        </div>
    )
}
export default AddDishes;
