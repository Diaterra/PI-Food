import React from "react";


const Recipe = ({name,image,diets})=>{
    return (
        <div>
        <h2>{name}</h2>
        <img src={image} alt='img not found' width='200px' height='250px'/>
        <h3>{diets}</h3>
        </div>
    )
}

export default Recipe;