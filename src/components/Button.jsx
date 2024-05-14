import React from "react";
import "../style/paginaLogin.css"

export default function BotaoCriarConta({className,textobtt,caminhopagina}){
    return(
        <button className={className} onClick={Screen({caminhopagina})}>{textobtt}</button>
    )
}

function Screen({caminhopagina}){
    window.location.href = {caminhopagina}
}
