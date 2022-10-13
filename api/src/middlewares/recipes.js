const {Router}= require ('express');
const {getAllRecipes, newRecipes}= require('../controllers/recipes');
const {Diet} = require('../db.js');
const {Recipe} = require('../db.js');

const router = Router();

router.get('/', async (req, res)=>{
    const name = req.query.name;
    try {
      
    let total_recipes = await getAllRecipes();
        
    if(name) {
     let recipes_name = total_recipes.filter((element)=>element.name.toLowerCase().includes(name.toLowerCase()));
       if(recipes_name.length){ res.status(200).send(recipes_name)}
       else {res.status(404).send('Recipe not found')
       }}
    else {res.status(200).send(total_recipes)
       } }

    catch (error) {
        res.status(400).send({error: 'error en catch'})
    }
    }   
)


router.post('/', async (req, res)=>{
    try {
       const{name, dish_summary, health_score, instructions, diets, createdInDb} = req.body
       if (!name || !dish_summary ) {res.status(400).send('Complete all imput')}
       else {const recipeCreated = await newRecipes(name, dish_summary, health_score, instructions, diets, createdInDb)
       res.status(200).send(recipeCreated)}
          }
        catch (error) {
        res.send(error.message)}})



router.get('/:id', async (req,res)=>{
    let {id} = req.params;
    let total_recipes = await getAllRecipes();
    
    try {
        if (id){
        const getrecipeId = total_recipes.filter((element)=> element.id == id)
        console.log(getrecipeId)
        getrecipeId.length ?
        res.status(200).send(getrecipeId) :
        res.status(400).send('Id not found')
        } 
       }
catch (error) {
console.log(error)
}})

//const valideId = id.includes('-');
//[ ] GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

module.exports = router;