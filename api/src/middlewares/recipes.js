const {Router}= require ('express');
const {getAllRecipes, newRecipes, getRecipeById, getRecipeByIdDb}= require('../controllers/recipes');
const {Diet} = require('../db.js');
const {Recipe} = require('../db.js');

const router = Router();
router.get('/', async (req, res,next)=>{
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
        next(error)
       // res.status(400).send({error: 'error en catch'})
    }
    }   
)

router.post('/', async (req, res)=>{
    try {
       const{name, dish_summary, health_score, instructions, diets, createdInDb} = req.body
       if (!name) {res.status(400).send('Name is required')}
       else if ( !dish_summary || dish_summary.length < 10 ) {res.status(400).send('Insert a summary')}
       else if(name.length>255 || name.length < 3){res.status(400).send('The name is too long or too short')}
       else if(!Number.isInteger(health_score)){res.status(400).send('Health score must to be a Integer')}
       else if(health_score>100 || health_score<0){res.status(400).send('Health score is out to range (0-100)')}
       else {const recipeCreated = await newRecipes(name, dish_summary, health_score, instructions, diets, createdInDb)
       res.status(200).send(recipeCreated)}
          }
        catch (error) {
        res.send(error.message)}})


 router.get('/:id', async (req,res,next)=>{
            let id = req.params.id
            console.log(id)
           try {
                 
              //  if(id.includes('-')) {
                   if(id) {
                let recipe_id_api = await getRecipeById(id)
                console.log(recipe_id_api)
                recipe_id_api ?
                res.status(200).send(recipe_id_api):
                res.status(400).send('Id not found') 
            } 
            //let recipes_id_db = await getRecipeByIdDb(id)
           //     recipes_id_db ?
           //     res.status(200).send(recipes_id_db) :
           //     res.status(400).send('Id not found')
                                          }
        catch (error) {next(error)
        }}
      ) 


/* 
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
}})  */
//const valideId = id.includes('-');
//[ ] GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado
module.exports = router;

