import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDiets, postRecipe } from "../../redux/actions";

const CreateRecipe = () => {

    const dispatch = useDispatch();
    const diets = useSelector((state)=>state.diets);

    const [input,setInput]=useState({
       name: '',
       dish_summary: '',
       health_score: '',
       instructions: '',
       createdInDb: true,
       diets:[]
    })

    function handleChangeInput(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        console.log(input)
    }
    function handleSelectDiets(event){
        setInput({
            ...input,
            diets:[...input.diets, event.target.value]
        }) 
        console.log(input)
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
        createdInDb: true,
        diets:[]})
        
    }
    
    useEffect(()=>{dispatch(getDiets())}, [])


    return(
        <> 
        <h1>Create Recipe</h1>
        <form onSubmit={event=>handleSubmit(event)}>
            <label>Name:</label>
            <input type= 'text' value={input.name} name= 'name' onChange={event=>handleChangeInput(event)}></input>
            <label>Dish_summary:</label>
            <input type='text' value={input.dish_summary} name= 'dish_summary' onChange={event=>handleChangeInput(event)}></input>
            <label>Health_score:</label>
            <input type='number' value={input.health_score} name= 'health_score' onChange={event=>handleChangeInput(event)}></input>
            <label>Instructions</label>
            <input type='text' value={input.instructions} name='instructions' onChange={event=>handleChangeInput(event)} ></input>
            <div>
            <select onChange={event=>handleSelectDiets(event)}>
            <label>Diet:</label>  
                {diets.map((element)=>
             <option value={element.name}>{element.name}</option> )}
           
            </select>
            </div>
            <ul><li>{input.diets.map(e=>e + ' ,')}</li></ul>
            <button type='submit'>Create Recipe</button>
            
            
            <></>
        </form>

        </>
    )
}

export default CreateRecipe;