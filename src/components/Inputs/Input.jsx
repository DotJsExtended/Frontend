import React from "react";

export default function Input({iconSrc, placeholder, className, type}){
    return(
        <div className={className}>
            <img src={iconSrc}></img>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
