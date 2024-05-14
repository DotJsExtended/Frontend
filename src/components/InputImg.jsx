import React from "react";
import "../style/paginaLogin.css"

export default function Input({iconSrc, placeholder, icon2Src, className}){
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