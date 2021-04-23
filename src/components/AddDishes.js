import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router'
import jwt_decode from "jwt-decode";
import '../css/Registration.css'

const AddDishes = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("");
    const [loading,setLoading]=useState(true);
    const [menu, setMenu] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>
    {
        var token = localStorage.getItem('token');
        console.log(token);
        if(token==="")
        {
            setLoading(false);
        }
        else
        {
            setToken(token);
            var decoded = jwt_decode(token);
            setUser(decoded.user);
        }
    }, []);
 

    const submit = (e) => {

        fetch('http://localhost:4000/api/menu/add', {
          method: 'POST',
          body: JSON.stringify({
              itemname:e.itemname,
              image:"abc.jpg",
              location:e.location,
              category:e.category,
              price:e.price
          }),
          headers: {'Content-Type': 'application/json', 
          'x-access-token':token},
        })
        .then(response => { 
                setSubmitted(true) 
                response.json()})
        .then(data => setMenu(data))
        }

      


      if (submitted) {
        return <Redirect push to={{
          pathname: '/myDishes',
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
                            name="itemname"
                            placeholder="Enter Dish Name" 
                            {...register("itemname", { required: true})}/>
                            <div>{errors.itemname && "Dish Name is required"}</div>
                        
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="file" 
                            className="form-control" 
                            name="image"
                            placeholder="Upload Image"
                            {...register("image", { required: true})}/>
                            <div>{errors.lastname && "Select File to Upload"}</div>
                        
                    </div>
                    <div class="form-group d-flex ms-5">
                            <select  className="form-control" name="category"  {...register("category", { required: "select one option"})}>
                                <option value="">--Select Category--</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                            </select>
                            <div>{errors.category && "Category is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                            <select  className="form-control" name="location"  {...register("location", { required: "select one option"})}>
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
                            name="price"
                            {...register("price", { required: true})}/>
                            <div>{errors.price && "price is required"}</div>					
                    </div>
                    <div class="form-group d-flex ms-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Your Email" 
                            name="email"
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
