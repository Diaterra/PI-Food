const {Router}= require ('express');
const {getRecipesApi, getRecipesDb, getAllRecipes}= require('../controllers/recipes')

const router = Router();

router.get('/',async (req,res)=>{
    try {
     //   const {name}= req.query
     //   const allRecipes = await getAllRecipes();
     //   if(name) {
     //      const recipes_name = await allRecipes.filter((element)=> element.name.toLowerCase().includes(name.toLowerCase()))
     //      recipes_name.length ? 
     //      res.status(200).send(recipes_name) :
     //      res.status(400).send('Recipe not found');  
    //    } 
    //    else {
     //    return res.status(200).send(allRecipes)}
        const recipes = await getAllRecipes()
        return res.status(200).json(recipes)
    } catch (error) {
        return res.status(400).send('Found error');
    }
    
    
})

//[ ] GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

module.exports = router;