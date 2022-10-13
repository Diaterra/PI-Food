const {Recipe} = require ('../db.js');
const {Diet} = require ('../db.js');
const {API_KEY} = process.env;
const recipes_api = require('../utils/recipes_api');
const axios = require ('axios');


//`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//const recipes_api = require('../utils/recipes_api.js');
//80bfe41041ad4e7f8a7118f5def5a770

const getRecipesApi = async function (){
   // const resultsUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
   // const totalrecipes = await resultsUrl.data.results?.map((element)=>{
    const totalrecipes =  recipes_api.results?.map((element)=>{    
         return {
         id: element.id,
         name: element.title,
         dish_summary: element.summary,
         health_score: element.healthScore,
         instructions: element.analyzedInstructions[0]?.steps.map((element)=> {
         return {
                number_steps: element.number,
                step: element.step
           }
        }),
         diets: element.diets.map((element) => element)
       }});
       return totalrecipes;  
    };

const getRecipesDb = async () => {
    try {
        const recipedb = await Recipe.findAll({
            include:{
                model: Diet,
                attributes: ["name"],
                through:{
                    attributes:[]
                }
            }
        }) 
        return recipedb;
    } catch (error) {   
    } }

const getAllRecipes = async () => {
    const api_recipes = await getRecipesApi();
    const db_recipes = await getRecipesDb();
    const allrecipes = api_recipes.concat(db_recipes);
    return allrecipes}


const newRecipes = async (name, dish_summary, health_score, instructions, diets, createdInDb) =>{
    try {
        const newRecipe = await Recipe.create({
            name,
            dish_summary,
            health_score,
            instructions,
            createdInDb,
         })
         if (diets) {
            const dietsDb = await Diet.findAll({
            where: {
                name:diets
            }})
            await newRecipe.addDiet(dietsDb);
        }
          return newRecipe;
    } catch (error) {
        console.log(error)
    }
     
     //tengo que encontrarla en un modelo que tengo y teiene que coincidir lo que le estoy pasando por parametro, etonces le digo que agrege las dietas que coincidieron con el name
 }

 //const getById = async function(id){
//    const getAllRecipes = await getAllRecipes();

////    if (id){
 //       const getrecipeId = await getAllRecipes.filter((element)=>element.id.toString() === id.toString())
////        if (getrecipeId.length){ return getrecipeId
 ////       } else { throw new Error ({message:'recipe with id not found'})}
//    }
// }

 //const getByIdDb = async function(id){
 //   if (id){
////        const getrecipeId2 = await Recipe.findByPk(id)
 //       if (getrecipeId2){ return getrecipeId2
//        } else { throw new Error ({message:'recipe with id not found'})}
////    }
 //}
 



module.exports = {getRecipesApi,
     getRecipesDb, 
     getAllRecipes, 
     newRecipes};



//[ ] POST /recipes:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos relacionada con sus tipos de dietas.



//[ ] GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta          (endpoint)
//Incluir los tipos de dieta asociados