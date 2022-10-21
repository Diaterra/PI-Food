import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState } from "react";
import {getRecipes,filterCreated,getDiets, filterTypeOfDiet, orderRecipesName,orderRecipesHealthSc} from "../../redux/actions";
import Recipe from "../Recipe/Recipe";
import {Link} from 'react-router-dom';
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import recipe from '../Home/recipe.png';
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading"


const Home = () =>{

const dispatch = useDispatch();
const recipes = useSelector((state)=>state.recipes); //el arreglo del estado que lo traer del reducer
const diets = useSelector((state)=>state.diets);
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
    dispatch(getRecipes());dispatch(getDiets())
},[dispatch]) 



function recipesRefresh (){
    dispatch(getRecipes());dispatch(getDiets())
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
    // order inicia con el estado en string vacio, mientras que 
    // se encuentre en ese no cambia el estado en SetOrder, si en cambio 
    // el value que toma el order es asc, dispacha la accion y retorna un valor que va a setear el setOrder al entrar
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
        <NavBar/>  
        
        {diets && recipe ?
        <div>
        <h1>PI FOOD DIANA</h1>
        <button onClick={event=>recipesRefresh(event)}>Refresh</button>
       {/*    <div>
           <select onChange={event=>handleSortName(event)}>
            <option value=' '>Alphabetical Order</option> 
           <option value= 'asc'>Ascendente</option>
           <option value= 'desc'>Descendente</option>
           </select> 
        </div>  */}
        <div>
           
           <button value= 'asc' onClick={event=>handleSortName(event)}>A-Z</button>
           <button value= 'desc' onClick={event=>handleSortName(event)}>Z-A</button>
          
        </div>
       {/*  <div>
           <select onChange={event=>handleSortHealth(event)}>
           <option value=' '>Health Score Order</option>
           <option value= 'asc health'>Ascendente health</option>
           <option value= 'desc health'>Descendente health</option>
           </select> 
        </div>  */}
        <div>
           
           <button value= 'asc health' onClick={event=>handleSortHealth(event)}>Ascendente health</button>
           <button value= 'desc health' onClick={event=>handleSortHealth(event)}>Descendente health</button>
          
        </div> 
        <div>        
           <select onChange = {event=>handleFilterCreated(event)}>
           <option value='All'>All</option>
           <option value= 'created'>Created</option>
           </select> 
        </div>
        <div>
        <select defaultValue='Diets'onChange={event=>handleFilterDiets(event)}>
           <option disabled>Diets</option>
           {diets?.map((element)=> <option value={element.name}>{element.name}</option>)}
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
                    image={element.image}
                    health_score= {element.health_score} 
                    diets={element.diets.map(e => <p>{e.name}</p>)}
             />
             </Link>        
             </div>)
       })
         } 
        </div>  </div> : <Loading/>}
        </div>
       




    )
    
    
    {/* </body>: <Loading/>}
    </div> */}
}

export default Home;