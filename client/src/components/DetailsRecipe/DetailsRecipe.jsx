import React from "react";

const DetailsRecipe = ({name,image,dishTypes,diets,dish_summary,health_score,instructions})=>{
    return (
        <div>
        <h2>{name}</h2>
        <img src={image} alt='img not found' width='200px' height='250px'/>
        <h3>{dishTypes}</h3>
        <h3>{diets}</h3>
        <h4>{dish_summary}</h4>
        <h4>{health_score}</h4>
        <h4>{instructions}</h4>
        </div>
    )
}

export default DetailsRecipe;