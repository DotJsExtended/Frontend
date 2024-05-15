import React from "react";
import "../style/paginaLogin.css"
import { Link } from "react-router-dom";

export default function BotaoCriarConta({className,textobtt, caminho}){
    return(
        <Link to={caminho}><button className={className} >{textobtt}</button></Link>
    )
}