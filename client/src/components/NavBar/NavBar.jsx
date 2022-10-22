import React from "react";
import { Link } from "react-router-dom";



const NavBar = ()=>{
    return (
        <nav>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/createRecipe'>Create Recipe</Link></li>
            </ul>    
        </nav>
    )
}

export default NavBar;