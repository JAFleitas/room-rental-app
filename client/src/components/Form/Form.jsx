import React, {useEffect, useState} from "react";
import { Link, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";





function validate(input){
    let error= {};

    if(!input.name) {
       error.name=" A name is required"}

    if(!input.location){
        error.location= "required field"
    }
    if(!input.price){
        error.price="required field"  
    }
    if(!input.numberOfRooms){
        error.numberOfRooms="required field"
    }
    if(!input.maxNumberOfPeople){
        error.numberOfRooms="required field"

    }
    if(!input.description){
        error.description="required field"
    }
    if(!input.rating){
        error.rating="required field"

    }
    if(!input.image){
        error.image="required field"
    }
       
    return error;   
        
}









export default function newRental(){

    const dispatch= useDispatch()
    const [error, setError]= useState({})
    const [input,setInput]=useState({
        name:"",
        location:"",
        price:"",
        numberOfRooms:"",
        maxNumberOfPeople:"",
        description:"",
        rating:"",
        image:""
    })

    function handleChange(e){
        setInput ({
            ...input,
            [e.target.name] : e.target.value
        })
      
        setError(validate({
            ...input,
            [e.currentTarget.name]:e.target.value
        }))
    };

    function submit(){
        
    }

      


    return(
        
        <div>
            <h1> NEW RENTAL </h1>
           <form>
               <div>
                   <label> Name: </label>
                   <input type="text"  name="name" value={input.name}  onChange={(e)=> handleChange(e)} ></input>
                   {error.name &&(
                       <p> {error.name} </p>
                   )}
                   
                 
               </div>
               <div>
                   <label>Location:</label>
                   <input type="text" name="location" value={input.location}  onChange={(e)=> handleChange(e)}></input>
                   {error.location &&(
                       <p> {error.location} </p>

                   )}
               </div>
               <div>
                   <label>Price:</label>
                   <input type="number" min="0" defaultValue={input.price} name="price" onChange={(e)=> handleChange(e)} ></input>
                   {error.price &&(
                       <p> {error.price} </p>
                   )}
               </div>
               <div>
                   <label>Number of Room: </label>
                   <input type="number" min="1" defaultValue={input.numberOfRooms} name="numberOfRooms" onChange={(e)=> handleChange(e)} ></input>
                   {error.numberOfRooms &&(
                       <p> {error.numberOfRooms} </p>
                   )}
               </div>
               <div>
                   <label> Maxime number of People: </label>
                   <input type="number" defaultValue={input.maxNumberOfPeople} name="maxNumberOfPeople" onChange={(e)=> handleChange(e)} />
                   {error.maxNumberOfPeople &&(
                       <p>{error.maxNumberOfPeople}</p>
                   )}
               </div>
               <div>
                   <label > Description: </label>
                   <input type="text" defaultValue={input.description} name="description" onChange={(e)=> handleChange(e)} ></input>
                   {error.description &&(
                       <p>{error.description} </p>
                   ) }
               </div>
               <div>
                   <label>Rating: </label>
                   <input type="number" min="0" max="5" defaultValue={input.rating} name="rating " onChange={(e)=> handleChange(e)} ></input>
                   {error.rating &&(
                       <p>{error.rating}</p>
                   )}
               </div>
               <div>
                   <label> Image: </label>
                   <input type="url" defaultValue={input.image} name="image" onChange={(e)=> handleChange(e)} />
                   {error.image && (
                       <p> {error.image} </p> 
                   )}

               </div>
               <div>
                   <button>
                       CREATE
                   </button>
               </div>
               <div>
                   <Link to="/">
                       <button> Home </button>
                   </Link>
               </div>
               
               
               
           </form> 

        </div>
       
    )

}