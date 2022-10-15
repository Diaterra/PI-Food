import { FILTER_CREATED, FILTER_TYPE_OF_DIET, GET_RECIPES } from "../actions";


const initialState = {
    recipes: [],
    allRecipes:[],
    diets:[],
    alldiets:[], //creo este estado para tener de backup para que tenga siempre todas las recetas, para cuando uno filtre 
    
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_RECIPES:             //esta accion me llena los estados iniciales con todo
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
        case FILTER_CREATED:
            const recipes = state.allRecipes
            const createdFiltered = action.payload ==='All' ? recipes : recipes.filter((elem)=>elem.createdInDb)
            return {
                ...state,  //devuelve el estado, y solo cambia la propiedad del recipes filtrado.
                recipes:createdFiltered
            };
        case FILTER_TYPE_OF_DIET:
            const allRecipes = state.allRecipes
            const dietsApi =[]
            const dietsDb = []

            allRecipes.forEach((element)=>{if(element.hasOwnProperty('diets') && element.diets.includes(action.payload)){
             dietsApi.push(element)}})
                console.log(allRecipes)
            allRecipes.forEach((element)=>{if(element.hasOwnProperty('diets') && element.diets.find((e)=>e.name === action.payload)){
                dietsDb.push(element)
            }})

            const Recipes_Diets = dietsApi.concat(dietsDb)

            //const filterDiets = action.payload === 'All' ? allRecipes : Recipes_Diets
            
            return{
                ...state,
                recipes: action.payload === 'All' ? allRecipes : Recipes_Diets
            };
        default: 
            return {...state};    
    }
}



export default rootReducer;
