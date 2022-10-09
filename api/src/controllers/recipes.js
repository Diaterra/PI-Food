const Recipe = require ('../models/Recipe');
const axios = require('axios');
const {API_KEY} = process.env;

//[ ] GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

const getRecipesApi = async ()=>{
    //const recipesApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
}



//[ ] GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados
//[ ] POST /recipes:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos relacionada con sus tipos de dietas.