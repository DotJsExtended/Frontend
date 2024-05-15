import React from "react";
import { Link } from "react-router-dom";

export default function ButtonTxt({className,caminho, img, texto}){
    return(
        
            <Link to={caminho}>
                <div className={className}>
                    <img src={img}></img>
                    <p>{texto}</p> 
                </div>
            </Link>
        
    )
}
