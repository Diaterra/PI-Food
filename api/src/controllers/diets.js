const {Diet} = require ('../db');
const diets = require ('../utils/diets_api');
const {API_KEY} = process.env;
const axios = require('axios');

 const getAlldiets = async function (){
  try {
  const allRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
  const takediets = allRecipes.data.results?.map((element)=>element.diets);

  const diets2=[]
  takediets.forEach((element)=>{
    for (let i= 0; i < element.length; i++) {
            diets2.push(element[i]);
  }})
   
    diets2.forEach(element => {
        if (element) {
            Diet.findOrCreate({
                where: { name: element }
            })
        }
    });
    const getDiets = await Diet.findAll();
    return getDiets;
  } catch (error) {
        
  } 
  
  
 }
    module.exports= {getAlldiets}

/* const getAlldiets = async function (){
    diets.forEach(element => {
       Diet.findOrCreate({
        where:{
            name: element
        }
       })
    });
    const getDiets = await Diet.findAll();
    
    return getDiets;
   
}; */

