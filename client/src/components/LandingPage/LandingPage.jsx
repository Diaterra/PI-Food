import React from "react";
import {Link} from 'react-router-dom';

const LandingPage = ()=>{
    return(
        
        <div>
         <h1>LETS GO TO COOK</h1>
         <Link to ='/home'>
            <button>GO</button>
         </Link>   
        </div>
        
    )
}

export default LandingPage;