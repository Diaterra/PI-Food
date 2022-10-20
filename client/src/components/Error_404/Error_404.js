import React from "react";
import { Link } from "react-router-dom";


const Error_404 = ()=>{
    return (
        <>
        <h1>Oops!!! Page not found</h1>
        <Link>
        <button>Go back Home</button>
        </Link>
        </>
    )
}

export default Error_404;