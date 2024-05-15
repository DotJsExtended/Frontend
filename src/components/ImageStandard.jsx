import React from "react";
import "../styles/paginaLogin.css"

export default function ImagemPadrao({imagem, className}){
    return(
        <div className={className}>
            <img src={imagem}></img>
        </div>
        
    )
}