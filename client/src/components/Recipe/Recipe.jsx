import React from "react";


const Recipe = ({name,image,health_score,diets})=>{
    return (
        <div>
        <h2>{name}</h2>
        <img src={image} alt='img not found' width='200px' height='250px'/>
        <h2>{health_score}</h2>
        <h3>{diets}</h3>
        </div>
    )
}

export default Recipe;