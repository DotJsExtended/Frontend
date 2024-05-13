import React from "react";
import "../style/paginaLogin.css"

export default function Campo({iconSrc, placeholder, icon2Src, className}){
    return(
        <div className={className}>
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

//classname campoSenha

//fazer className do login e ele é sem icon25rc