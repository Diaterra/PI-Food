import { bindActionCreators } from "redux";

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_ID = 'GET_RECIPE_ID';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const CREATE_RECIPE = 'CREATE RECIPE';
export const FILTER_CREATED = 'FILTER_BY_CREATED';
export const FILTER_TYPE_OF_DIET = 'FILTER_TYPE_OF_DIET';
export const GET_DIETS ='GET_DIETS'


export const getRecipes = () => {
    return async function (dispatch){
        fetch(`http://localhost:3001/recipes`)
        .then(response => response.json())
        .then(data => dispatch({type: GET_RECIPES, payload: data}))
    }
} 

export const getDiets = ()=>{
    return async function (dispatch){
        fetch(`http://localhost:3001/diets`)
        .then(response=>response.json())
        .then(data=>dispatch({type: GET_DIETS, payload:data}))
    }
}

    
export const filterCreated = (payload) =>{   //el payload es el value del imput
    return {
        type : FILTER_CREATED,
        payload,
    }
}

export const filterTypeOfDiet = (payload)=>{
    return {
        type: FILTER_TYPE_OF_DIET,
        payload,
    }
}

/* const json = await axios.get('http://localhost:3001/recipes');
return dispatch({type: GET_RECIPES, payload: json.data}) */

/* export const getOK = () => {
          return  ({type: GET_RECIPES})
    } */