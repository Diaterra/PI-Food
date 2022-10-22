import React from "react";


const Pagination = ({recipesxPage,recipes,pagination})=>{ //estas props vienen del estado global constante y useSelector, y traer tambien currenta page para el next, pagination lo cambio con por la accion change page
    //me traigo por props todas las recetas, el estado que me renderiza cuantas recetas quiero por pag (recipesxPage), todas las recetas y la constante pagination
    const numberPages = [];
    console.log(numberPages)
    for(let i= 1; i<=Math.ceil(recipes/recipesxPage); i++){ 
        //divido todas las recetas  por la catidad de recetas por paginas, entonces cuando estoy en home, renderizo y le paso por props al componente Pagination los parametros
     numberPages.push(i)}
    
    return (
        <nav>
        <ul>
            {numberPages?.map((number)=>{
                return (
                <li key={number}>
                <a onClick={()=>pagination(number)}>{number}</a>
                </li>)
        })}
        </ul>
        </nav>
        )}

//el Math.ceil redondea a un numero entero la cantidad de recetas que quiero por paginas, este componente renderiza el numerito en si

export default Pagination;