import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRecipe_Id} from  "../../redux/actions";

const DetailsRecipe = (props)=>{

const dispatch = useDispatch()
const recipe_id = useSelector((state)=>state.recipeDetail)


const id = props.match.params.id
console.log(id)
useEffect(()=>{
    dispatch(getRecipe_Id(id))},[dispatch,id]
)
console.log(recipe_id)

    return (
        
        //recipe_id.map((element)=> {return (
            <div>
            <h2>{recipe_id.name}</h2>
            <img src={recipe_id.image} alt='icon' width='200px' height='250px'/>
            <h2>{recipe_id.dishTypes}</h2>
            <h2>{recipe_id.health_score}</h2>
            </div>
       // )
      //  }))
    )
     
}

export default DetailsRecipe;