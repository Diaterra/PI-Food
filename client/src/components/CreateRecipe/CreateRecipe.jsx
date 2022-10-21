import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDiets, postRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


/* export const validate=(input)=>{
    let errors={};
    
 if(!input.name){
    errors.name='Name is required'
 } else if(input.name.length>255 || input.name.length < 3) {
    errors.name = 'The name is too long or too short'
 }
 if(!input.dish_summary){
    errors.dish_summary='Dish_summary is required'
 } else if (input.name.length < 10){
    errors.dish_summary = 'Insert a summary'
 }
 if (input.health_score < 0 || input.health_score > 100){
    errors.health_score = 'Health score is out to range (0-100)'
 } /* else if (!Number.isInteger(health_score)){
    errors.health_score = 'Health score must to be a Integer' */
 /*
}
return errors}

 */

const CreateRecipe = () => {
    const dispatch = useDispatch();
    const diets = useSelector((state)=>state.diets);
   
    const [input,setInput]=useState({
       name: '',
       dish_summary: '',
       health_score: '',
       instructions: '',
       diets:[]
    })
    useEffect(()=>{dispatch(getDiets())}, [])
   
    function handleChangeInput(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        /* SetErrors({
            ...input,
            [event.target.name] : event.target.value
        }) */
        console.log(input)
    }
    function handleSelectDiets(event){
     if(!input.diets.includes(event.target.value)){
           setInput({
            ...input,
            diets:[...input.diets, event.target.value]
        }) 
        console.log(input)
    }
    }
   function handleSubmit(event){
        event.preventDefault()
        console.log(input)
        dispatch(postRecipe(input))
        alert('Recipe created')
        setInput({     //esto es para que que se vacie el form
        name: '',
        dish_summary: '',
        health_score: '',
        instructions: '',
        diets:[]})                
    }
    
 /*  function handleDelete(event){
    setInput({
        ...input,
        diets: input.diets.filter(element=>element !==event)
    })
  } */
/* const [errors, SetErrors]= useState({
    name:'',
    dish_summary: '',
    health_score: '',
    instructions: '',
    diets: [],
}) */
    return(
        <> 
        <NavBar/>  
        <h1>Create Recipe</h1>
        <form onSubmit={event=>handleSubmit(event)}>
            <label htmlFor="name">Name*:</label>
            <input type= 'text' 
            name= 'name' 
            onChange={event=>handleChangeInput(event)}
            // className={errors.name && "danger"}
            >
            {/* {errors.name && <p>{errors.name}</p>}             */}
    
            </input>
            <label>Dish_summary*:</label>
            <input type='text' 
            value={input.dish_summary} 
            name= 'dish_summary' 
            onChange={event=>handleChangeInput(event)}
            // className={errors.name && 'danger'}  
            > 
            {/* {errors.dish_summary && <p>{errors.dish_summary}</p>}     */}
            </input>
            <label>Health_score:</label>
            <input type='number' 
            value={input.health_score} 
            name= 'health_score' 
            onChange={event=>handleChangeInput(event)}
            // className={errors.name && 'danger'} 
            >  
            {/* {errors.health_score && <p>{errors.health_score}</p>}    */}
            </input>
            <label>Instructions</label>
            <input type='text' 
            value={input.instructions} 
            name='instructions' 
            onChange={event=>handleChangeInput(event)} 
            // className={errors.name && 'danger'} 
             >    
            </input>
            <div>
            <select onChange={event=>handleSelectDiets(event)}>
            <option>Diets:</option>  
                {diets?.map((element)=>
             <option value={element.name}>{element.name}</option> )}
             </select> 
            
            </div>
            {/* <ul><li>{input.diets.map(e=>e + ' ,')}</li></ul> */}
            <button type='submit'>Create Recipe</button>
            <div>
           {/*   {input.diets.map(
             (el, index) => <div key = {index}><p>{el}</p>
                      <button onClick={() => handleDelete(el)}>x</button></div>)}
                */}
                 </div>       
            <></>
        </form>
             </>
    )
}
export default CreateRecipe;





