const {Diet} = require ('../db');
const diets = require ('../utils/diets_api')


const getAlldiets = async function (){
    diets.forEach(element => {
       Diet.findOrCreate({
        where:{
            name: element
        }
       })
    });
    const getDiets = await Diet.findAll();
    
    return getDiets;
   
};

module.exports= {getAlldiets}