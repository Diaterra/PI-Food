import React from "react";
import {Link} from 'react-router-dom';

const LandingPage = ()=>{
    return(
        
        <div>
         <h1>Estamos en mi PI</h1>
         <Link to ='/recipes'>
            <button>Enter</button>
         </Link>   
        </div>
        
    )
}

export default LandingPage;