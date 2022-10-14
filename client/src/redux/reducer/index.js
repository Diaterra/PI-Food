import { GET_RECIPES } from "../actions";
import store from '../store/index';

const initialState = {
    recipes: [],
}

const rootReducer = (state= initialState, action)=>{
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
            };
        default: 
            return {...state};    
    }
}

//store.dispatch(GET_RECIPES);

export default rootReducer;
