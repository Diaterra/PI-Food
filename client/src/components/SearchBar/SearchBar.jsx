import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipe_Name } from "../../redux/actions";
import {Link} from 'react-router-dom';



const SearchBar = ()=>{

const dispatch = useDispatch()
const [name, setName]= useState('')



function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value)
    
  }

function handleSubmit(event) {
    event.preventDefault();
    dispatch(getRecipe_Name(name))
    console.log(dispatch(getRecipe_Name(name)))

    setName('');
  }
    return (
        <>
         <input
                type="text"
                value={name}
                placeholder="Search Recipe..."
                onChange={(event) => handleChange(event)}
          ></input>
          <button
            type='submit'
            onClick={event=>handleSubmit(event)}
          >Find Recipe</button>
          <div>
           <Link to ='/createRecipe'>
           <button>Create Recipe</button>
        </Link>   
       </div>
        </>
        
    )
}
  
export default SearchBar;  
  
   
            {/* {recipes.map((element) => {
              return (
                <li>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button
                    onClick={() =>
                      this.handleClick({ id: movie.imdbID, Title: movie.Title }) */}
                  
          
  
  
 
