import React from "react";


const Recipe = ({name,image,health_score,diets})=>{
    return (
        <div>
        <h2>{name}</h2>
        {image ? <img src={image} alt='img not found' width='200px' height='250px'/>: <img src='https://cdn6.aptoide.com/imgs/e/0/8/e08b4393fd23e8a9cdf0e71b96338d18_icon.png'/>}
        <h2>{health_score}</h2>
        <h3>{diets}</h3>
        </div>
    )
}

export default Recipe;