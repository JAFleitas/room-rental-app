import React, {useEffect, useState} from "react";
import { Link, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Input,
        Title,
        Parrafo,
        Boton,
        Home} from"./styled"




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
    if(!input.flat){
        error.flat="required field"
    }
       
    return error;   
        
}









export default function newRental(){

    // const dispatch = useDispatch()

    const [error, setError]= useState({})
    const [input,setInput]=useState({
        name:"",
        location:"",
        price:"",
        numberOfRooms:"",
        maxNumberOfPeople:"",
        description:"",
        rating:"",
        image:"",
        flat:""
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

    
    // function handleSubmit(e){
    //     e.preventDefault()
    //     if(input.name.length>=2 &&
    //         input.location.length>=2&&
    //         input.price.length>0&&
    //         input.numberOfRooms.length>=1&&
    //         input.numberOfRooms.length<=6&&
    //         input.maxNumberOfPeople.length>=1&&
    //         input.description.length>1&&
    //         input.image.length>=1
    //         ){

    //     }
    // }

      


    return(
        
        <div>
            <Title> NEW RENTAL </Title>
           <form>
               <div>
                   <label> <b>Name:</b> </label>
                   <Input type="text"  name="name" value={input.name}  onChange={(e)=> handleChange(e)} ></Input>
                   {error.name &&(
                       <Parrafo> {error.name} </Parrafo>
                   )}
                   
                 
               </div>
               <div>
                   <label>Location:</label>
                   <input type="text" name="location" value={input.location}  onChange={(e)=> handleChange(e)}></input>
                   {error.location &&(
                       <Parrafo> {error.location} </Parrafo>

                   )}
               </div>
               <div>
                   <label>Price:</label>
                   <input type="number" min="0" defaultValue={input.price} name="price" onChange={(e)=> handleChange(e)} ></input>
                   {error.price &&(
                       <Parrafo> {error.price} </Parrafo>
                   )}
               </div>
               <div>
                   <label>Number of Room: </label>
                   <input type="number" min="1" defaultValue={input.numberOfRooms} name="numberOfRooms" onChange={(e)=> handleChange(e)} ></input>
                   {error.numberOfRooms &&(
                       <Parrafo> {error.numberOfRooms} </Parrafo>
                   )}
               </div>
               <div>
                   <label> Maxime number of People: </label>
                   <input type="number" defaultValue={input.maxNumberOfPeople} name="maxNumberOfPeople" onChange={(e)=> handleChange(e)} />
                   {error.maxNumberOfPeople &&(
                       <Parrafo>{error.maxNumberOfPeople}</Parrafo>
                   )}
               </div>
               <div>
                   <label > <strong> Description:</strong>  </label>
                   <input type="text" defaultValue={input.description} name="description" onChange={(e)=> handleChange(e)} ></input>
                   {error.description &&(
                       <Parrafo>{error.description} </Parrafo>
                   ) }
               </div>
               <div>
                   <label >Pets:</label>
                   <select > 
                       <option>---</option>
                       <option > Yes </option>
                       <option > No </option>
                   </select>
               </div>
               <div>
                   <label > WiFi: </label>
                   <select>
                       <option>---</option>
                       <option>Yes</option>
                       <option>No</option>
                   </select>
               </div>
               <div>
                   <label > Flat: </label>
                   <input type="number" min="0" name="flat" onChange={(e)=> handleChange(e)} />
                   {error.flat &&(
                       <Parrafo>{error.flat}</Parrafo>
                   )}
               </div>
            
               <div>
                   <label> Image: </label>
                   <input type="url" defaultValue={input.image} name="image" onChange={(e)=> handleChange(e)} />
                   {error.image && (
                       <Parrafo> {error.image} </Parrafo> 
                   )}

               </div>
               <div>
                   <Boton>
                       CREATE
                   </Boton>
                   {
                       
                   }
               </div>
               <div>
                   <Link to="/">
                       <Home> Home </Home>
                   </Link>
               </div>
               
               
               
           </form> 

        </div>
       
    )

}