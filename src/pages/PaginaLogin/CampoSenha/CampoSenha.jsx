import React from "react";
import "./CampoSenha.css"

export default function CampoSenha({ iconSrc, placeholder, value, onChange }) {
    return (
        <div className="campoSenha">
            <img src={iconSrc}></img>
            <input 
                type="password" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} // O evento onChange chama a função passada via prop
            />
{/*             <div className="icon2">
                <a href="">
                    <img src={icon2Src}></img>
                </a>

            </div> */}
        </div>
    )
}