import React from "react";
import "../../style/paginaLogin.css"

export default function CampoLogin({iconSrc, placeholder, icon2Src}){
    return(
        <div className="campoSenha">
            <img src={iconSrc}></img>
            <input type="text" placeholder={placeholder} />
            <div className="icon2">
                <a href="">
                    <img src={icon2Src}></img>
                </a>
                
            </div>
        </div>
    )
}