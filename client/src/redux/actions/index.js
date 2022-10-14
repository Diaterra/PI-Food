import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_ID = 'GET_RECIPE_ID';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const CREATE_RECIPE = 'CREATE RECIPE';



export function getRecipes(){
    return async function (dispatch){
        const info = await axios.get('http://localhost:3001/recipes');
        return dispatch({type: 'GET_RECIPES', payload: info.data})
    }
}