const {Recipe} = require ('../models/Recipe');
const {Diet} = require ('../models/Diet');
const axios = require('axios');
const {API_KEY} = process.env;
const recipes_api = require('../utils/recipes_api.js');



const getRecipesApi = ()=> {
    //const recipesApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    // const recipes = recipesApi.data.results?.map((element)=>{
   try {
    const recipes =  recipes_api.results?.map((element)=>{
        return {
         name : element.title,
         dish_summary : element.summary,
         health_score : element.healthScore,
         instructions : element.analyzedInstructions?.map(element=>
         element),
         diets: element.diets.map((element) => element)
       }});
       return recipes;
   } catch (error) {
    
   }
    
};

const getRecipesDb = async () => {
    try {
        const recipedb = await Recipe.findAll({
            include:{
                model: Diet,
                attributes : ["name"],
                through:{
                    attributes:[]
                }
            }
        }) 
        return recipedb;
    } catch (error) {
        
    }
   
   /*  if (recipedb.lenght){return recipedb}
    else{
        throw Error ('no hay nada en el db')
    } */
}

const getAllRecipes = async () => {
    const api_recipes = await getRecipesApi();
    const db_recipes = await getRecipesDb();
    const allrecipes = api_recipes.concat(db_recipes);
    return allrecipes}

module.exports = {getRecipesApi, getRecipesDb, getAllRecipes};



//[ ] POST /recipes:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos relacionada con sus tipos de dietas.



//[ ] GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta          (endpoint)
//Incluir los tipos de dieta asociados