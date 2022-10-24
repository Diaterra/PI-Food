import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cleanDetail, getRecipe_Id} from  "../../redux/actions";
import Loading from "../Loading/Loading.jsx";
import NavBar from "../NavBar/NavBar";
import './DetailsRecipe.css'



const DetailsRecipe = (props)=>{
const dispatch = useDispatch()

const recipe_id = useSelector((state)=>state.recipeDetail)

const id = props.match.params.id
console.log(id)

useEffect(()=>{
   dispatch(getRecipe_Id(id));
   return function (){
    dispatch(cleanDetail())
   }
   },[dispatch,id]
)

 console.log(recipe_id)

return (
  
        //.map((element)=recipe_id> {return (
            <div>
              
             
            <NavBar/>  

            {!recipe_id.name && <Loading/>} 
            
            <h1 className="title_recipe">{recipe_id.name}</h1>

            <div className="div_num">
            <h2 className="num_health">{recipe_id.health_score}</h2>
            </div>
           

            <div className="div_details_first">
            <ul className="div_type_diets">{recipe_id.diets?.map(e => <li>{e.name}</li>)}</ul>
            <div className="div_img">
            {recipe_id.image ? <img src={recipe_id.image} className='img-details'  alt='icon'/>:<img src='https://cdn6.aptoide.com/imgs/e/0/8/e08b4393fd23e8a9cdf0e71b96338d18_icon.png'/>}
            </div>
            <p className="instruccions">INSTRUCTIONS: {recipe_id.instructions ? recipe_id.instructions : 'This recipe does not the instructions'}</p>  
            </div>

            <div>
            
            <p>{recipe_id.dish_summary}</p>  
            </div>        
            <h2>Type of dish: {recipe_id.dishTypes?.map(element=>element).join('   /   ')}</h2> 
            </div>
       // )
      //  }))
    )
     
}
export default DetailsRecipe;
