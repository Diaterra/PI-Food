import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDiets, postRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useHistory } from "react-router-dom";

 export const validate=(input)=>{
    let errors={};
    
 if(!input.name){
    errors.name='Name is required'
 } else if(input.name.length >255 || input.name.length < 3) {
    errors.name = 'The name is too long or too short'
 }
 if(!input.dish_summary || input.dish_summary.length < 10 ){
    errors.dish_summary='Dish_summary is required'
 } 
 
 if (input.health_score < 0 || input.health_score > 100){
    errors.health_score = 'Health score is out to range (0-100)'
 }  else if (isNaN(input.health_score)) {
    errors.health_score = 'Health score must to be a number' 
 }

return errors}



const CreateRecipe = () => {
    const dispatch = useDispatch();
    const diets = useSelector((state)=>state.diets);
    const history = useHistory()
   
    const [input,setInput]=useState({
       name: '',
       dish_summary: '',
       health_score: 10,
       instructions: '',
       diets:[]
    })
    useEffect(()=>{dispatch(getDiets())}, [dispatch])
   
    function handleChangeInput(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        });
         SetErrors(validate({
            ...input,
            [event.target.name] : event.target.value}))

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
        SetErrors(validate(input));
        const getError = validate(input);
        if(Object.values(getError).length !== 0){
            alert('This action does not complete, check the fields')
            setInput({     //esto es para que que se vacie el form
                name: '',
                dish_summary: '',
                health_score: '',
                instructions: 0,
                diets:[]});
        } else { dispatch(postRecipe(input))
            
        alert('Recipe created')
        setInput({     //esto es para que que se vacie el form
        name: '',
        dish_summary: '',
        health_score: 0,
        instructions: '',
        diets:[]});
        history.push('/home')                
    }}
    
 /*  function handleDelete(event){
    setInput({
        ...input,
        diets: input.diets.filter(element=>element !==event)
    })
  } */
 const [errors, SetErrors]= useState({
    name:'',
    dish_summary: '',
    health_score: 0,
    instructions: '',
    diets: [],
}) 
    return(
        <> 
        <NavBar/>  
        <h1>Create Recipe</h1>
        <form onSubmit={event=>handleSubmit(event)}>
            <label>Name*:</label>
            <input type= 'text' 
            name= 'name'
            value={input.name} 
            onChange={event=>handleChangeInput(event)}
            placeholder='Name'
            className={errors.name && "danger"}
            required/>
            {errors.name && <p>{errors.name}</p>}             
            
            <label>Dis_summary*:</label>
            <input type='text'
            name= 'dish_summary' 
            value={input.dish_summary} 
            onChange={event=>handleChangeInput(event)}
            placeholder='dish_summary'
            className={errors.name && 'danger'}
            required 
            /> 
            {errors.dish_summary && <p>{errors.dish_summary}</p>} 
            
            <label>Health_score:</label>
            <input type="number" 
            name= 'health_score' 
            value={input.health_score} 
            onChange={event=>handleChangeInput(event)}
            className={errors.name && 'danger'}/>
            {errors.health_score && <p>{errors.health_score}</p>}    
            
           
            <label>Instructions</label>
            <input type='text' 
            name='instructions' 
            value={input.instructions} 
            onChange={event=>handleChangeInput(event)} />
                
            
            <div>
            <select onChange={event=>handleSelectDiets(event)}>
            <option>Diets:</option>  
                {diets?.map((element)=>
             <option value={element.name}>{element.name}</option> )}
             </select> 
            
            </div>
            {/* <ul><li>{input.diets.map(e=>e + ' ,')}</li></ul> */}
            <button type='submit' disable={Object.keys(errors).length}>Create Recipe</button>
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
