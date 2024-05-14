import React from "react";
import "../style/paginaLogin.css"

export default function Buttontxt({className,href, img, texto}){
    return(
        <a className={className} href={href}>
            <img src={img}></img>
            <p>{texto}</p> 
        </a>
        
    )
}