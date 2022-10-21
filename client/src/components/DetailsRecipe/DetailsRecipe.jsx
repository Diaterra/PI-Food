import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRecipe_Id} from  "../../redux/actions";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";



const DetailsRecipe = (props)=>{
const dispatch = useDispatch()

const recipe_id = useSelector((state)=>state.recipeDetail)

const id = props.match.params.id
console.log(id)

useEffect(()=>{
   dispatch(getRecipe_Id(id));
   },[dispatch,id]
)

 console.log(recipe_id)

return (
        
        //.map((element)=recipe_id> {return (
            <div>
            <NavBar/>  
            
            <div>
            <h2>{recipe_id.name}</h2>
            {recipe_id.image ? <img src={recipe_id.image} alt='icon' width='200px' height='250px'/>:<img src='https://cdn6.aptoide.com/imgs/e/0/8/e08b4393fd23e8a9cdf0e71b96338d18_icon.png'/>}
            {/* <h2>{recipe_id.dishTypes}</h2> */}
              <p>{recipe_id.dish_summary}</p>  
                     <h2>{recipe_id.health_score}</h2>
          <p>{recipe_id.instructions}</p>   
          </div>
          
            </div>
       // )
      //  }))
    )
     
}
export default DetailsRecipe;
