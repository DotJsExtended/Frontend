import React from "react";
import "../../styles/paginaLogin.css"

export default function CampoLogin({iconSrc, placeholder, icon2Src}){
    return(
        <div className="campoLogin">
            <img src={iconSrc}></img>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}