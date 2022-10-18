import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState } from "react";
import {getRecipes,filterCreated,getDiets, filterTypeOfDiet, orderRecipesName,orderRecipesHealthSc} from "../../redux/actions";
import Recipe from "../Recipe/Recipe";
import {Link} from 'react-router-dom';
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";


const Home = () =>{

const dispatch = useDispatch();
const recipes = useSelector((state)=>state.recipes); //el arreglo del estado que lo traer del reducer
const [order, SetOrder]= useState(' ')
const [actualPage, SetActualPage] = useState(1); //  pagina actual, y el estado de la pagina actual
const [recipesxPage, SetRecipesxPage] = useState(9); // cantidad de recetas por pagina
const positionOfLastRecipe = actualPage * recipesxPage; // el indice de la ultima receta
const positionOfFirstRecipe = positionOfLastRecipe - recipesxPage; // el indice de la primera receta
const actualRecipes = recipes.slice(positionOfFirstRecipe,positionOfLastRecipe) // esta constante guarda todos los personajes que tengo por pagina, el slice toma un porcion del array segun pase por parametro, y paso el indice de la primera receta, hasta el indice de la ultima receta), el segundo parametro no lo toma el slice pero igualemente va del 0 al 9, por ende toma las 9 recetas

// 1 -----9-----0  [0,9]
// 2 -----18-----9 [9,18]
// 3 -----27 -----9 [18,27]
// 4 ----36 ----27 [27,36]
const pagination = (numberPage)=>
{SetActualPage(numberPage)}
    //declaro una constante, que se le pasa el numero de la pagina y setear la pagina en ese numero de pagina, sirve para el renderizado

useEffect(()=>{
    dispatch(getRecipes())
},[dispatch]) 

function recipesRefresh (){
    dispatch(getRecipes())
}

function handleFilterCreated(event){
    dispatch((filterCreated(event.target.value)))
    console.log(filterCreated(event.target.value)) //el event.target.value es el imput que ingresa cuando en el select, el cual termina siendo el payload que va a a la accion 
}

//dispatch(filterCreated(event.target.value))
//    console.log(filterCreated(event.target.value))



function handleFilterDiets(event){
    dispatch(filterTypeOfDiet(event.target.value))
}


function handleSortName (event){
    event.preventDefault(event);
    dispatch(orderRecipesName(event.target.value));
    SetActualPage(1);
    order ?  SetOrder(false) : SetOrder(`Ordenado ${event.target.value}`)
    //SetOrder(`Ordenado ${event.target.value}`) 

    //  //seteame el ordenamiento en la pagina 1
} 

function handleSortHealth(event){
    console.log(event.target.value)
    dispatch(orderRecipesHealthSc(event.target.value));
    console.log(orderRecipesHealthSc(event.target.value))
    SetActualPage(1)
    order ? SetOrder(false) : SetOrder(`Ordenado ${event.target.value}`)
}
    return (
        <div>
        <h1>PI FOOD DIANA</h1>
        <button onClick={event=>recipesRefresh(event)}>Refresh</button>
          <div>
           <select onChange={event=>handleSortName(event)}>
           <option value=' '>Alphabetical Order</option>
           <option value= 'asc'>Ascendente</option>
           <option value= 'desc'>Descendente</option>
           </select> 
        </div>
        <div>
           <select onChange={event=>handleSortHealth(event)}>
           <option value=' '>Health Score Order</option>
           <option value= 'asc health'>Ascendente health</option>
           <option value= 'desc health'>Descendente health</option>
           </select> 
        </div> 
        <div>        
           <select onChange = {event=>handleFilterCreated(event)}>
           <option value='All'>All</option>
           <option value= 'created'>Created</option>
           </select> 
        </div>
        <div>
           <select onChange={event=>handleFilterDiets(event)}>
           <option value='All'>All</option>
           <option value= 'gluten free'>Gluten Free</option>
           <option value= 'dairy free'>Dairy Free</option>
           <option value= 'ketogenic'>Ketogenic</option>
           <option value= 'lacto vegetarian'>Lacto Vegetarian</option>
           <option value= 'lacto ovo vegetarian'>Lacto Ovo Vegetarian</option>
           <option value= 'ovo vegetarian'>Ovo Vegetarian</option>
           <option value= 'vegan'>Vegan</option>
           <option value= 'pescatarian'>Pescatarian</option>
           <option value= 'paleolithic'>Paleolithic</option>
           <option value= 'primal'>Primal</option>
           <option value= 'fodmap friendly'>Fodmap Friendly</option>
           <option value= 'whole 30'>Whole 30</option>
           </select> 
           <Pagination
           recipesxPage = {recipesxPage}
           recipes = {recipes.length}
           pagination = {pagination}
            />
            <SearchBar/>
            {actualRecipes?.map((element)=>{ return (   //antes del paginado aca mapeabamos todas las recetas, pero ahora como quiero que me las muestre por paginas debo tomar el arreglo que le hice slice, antes el codigo era asi  {recipes?.map((element)=>{ return ( ......
             <div key={element.id}>
             <Link to={'/recipes/' + element.id}>
             <Recipe 
                    name={element.name} 
                    image={element.image ? element.image : <img src='https://cdn6.aptoide.com/imgs/e/0/8/e08b4393fd23e8a9cdf0e71b96338d18_icon.png'/>} 
                    health_score= {element.health_score} 
                    diets={element.diets.map(e => {return (e.name)})}
             />
             </Link>        
             </div>)
       })
         } 
        </div>
        </div>
    )
}

export default Home;