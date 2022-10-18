import { FILTER_CREATED, FILTER_TYPE_OF_DIET, GET_RECIPES, ORDER_RECIPES_NAME, ORDER_RECIPES_HEALTH_SC,GET_RECIPE_ID, GET_RECIPE_NAME,CREATE_RECIPE,GET_DIETS} from "../actions";


const initialState = {
    recipes: [],
    allRecipes:[],
    diets:[],
    alldiets:[],
    recipeDetail:{}, //creo este estado para tener de backup para que tenga siempre todas las recetas, para cuando uno filtre  
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_RECIPES:             //esta accion me llena los estados iniciales con todo
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
        case GET_RECIPE_ID:{
            return{
                ...state,
                recipeDetail:action.payload
            }
        };
        case GET_RECIPE_NAME:{
            return{
                ...state,
                recipes:action.payload
            }
        };
        case FILTER_CREATED:
            const recipes = state.allRecipes
            
            const createdFiltered = action.payload === 'created' ? recipes.filter((elem)=>elem.createdInDb) : recipes.filter((elem)=>!elem.createdInDb)
            console.log(createdFiltered)            
            return {
                ...state,  //devuelve el estado, y solo cambia la propiedad del recipes filtrado.
                recipes: action.payload === 'created' ? createdFiltered : recipes
            };
        case FILTER_TYPE_OF_DIET:
            const allRecipes = state.allRecipes
           
            const recipes_filter_diet = allRecipes.filter((element)=>{
                let recipe = element.diets.map(e =>e.name)
                if (recipe.includes(action.payload)){return element}
            })
                    
            return{
                ...state,
                recipes: action.payload === 'All' ? allRecipes : recipes_filter_diet
            };
        case ORDER_RECIPES_NAME:
            let recipesToOrder = action.payload === 'asc' ? 
                state.recipes.sort(function(a,b){
                    if(a.name.toLowerCase()>b.name.toLowerCase()){
                        return 1;
                    }
                    if(a.name.toLowerCase()<b.name.toLowerCase()){
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function(a,b){
                    if(a.name.toLowerCase()>b.name.toLowerCase()){
                        return -1;
                    }
                    if(a.name.toLowerCase()<b.name.toLowerCase()){
                        return 1;
                    }
                    return 0;
                }) 
                return {
                    ...state,
                    recipes : recipesToOrder
                }
        case ORDER_RECIPES_HEALTH_SC:
            let recipesToOrderHealth = action.payload === 'asc health' ?

                state.recipes.sort(function(a,b){
                    if(a.health_score<b.health_score) {return -1};
                    if(a.health_score>b.health_score) {return 1};
                    return 0
                }) :
                state.recipes.sort(function(a,b){
                    if(a.health_score>b.health_score) {return -1};
                    if(a.health_score<b.health_score) {return 1};
                    return 0
                })
            
            return{
                ...state,
                recipes: recipesToOrderHealth
            }
        case CREATE_RECIPE:{
            return {
                ...state,

            }
        } 
        
        case GET_DIETS:
            {return {
                ...state,
                diets: action.payload
            }}
        default: 
            return {...state};    
    }
}

export default rootReducer;
