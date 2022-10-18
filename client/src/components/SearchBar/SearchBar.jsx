import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipe_Name } from "../../redux/actions";



const SearchBar = ()=>{

const dispatch = useDispatch()
const [name,setName]= useState('')

function handleChange(event) {
    event.preventDefault();
    setName(event.target.value);
    console.log(name)
  }

function handleSubmit(event) {
    event.preventDefault();
    dispatch(getRecipe_Name(name))
    console.log((getRecipe_Name(name)))
    setName('');
  }
    return (
        <>
         <input
                type="text"
                placeholder="Search Recipe..."
                onChange={(event) => handleChange(event)}
          ></input>
          <button
            type='submit'
            onClick={event=>handleSubmit(event)}
          >Find Recipe</button>
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
                  
          
  
  
 
