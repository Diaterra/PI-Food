import React from "react";
import { NavLink } from "react-router-dom";



const NavBar = ()=>{
    return (
        <nav>
            <ul>
                <li><NavLink to='/Home'>Home</NavLink></li>
                <li><NavLink to='/'>Start</NavLink></li>
                <li><NavLink to='/createRecipe'>Create Recipe</NavLink></li>
            </ul>    
        </nav>
    )
}

export default NavBar;