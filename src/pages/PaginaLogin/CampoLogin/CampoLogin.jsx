// CampoLogin.js
import React from "react";
import "./CampoLogin.css"

export default function CampoLogin({ className, iconSrc, placeholder, value, onChange, type }) {
    return (
        <div className="campoLogin">
            <img src={iconSrc} alt="icon" />
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} // Aqui o evento onChange chama a função passada via prop
            />
        </div>
    );
}
