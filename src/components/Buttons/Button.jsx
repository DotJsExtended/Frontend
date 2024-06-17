import React from "react";
import { Link } from "react-router-dom";

export default function Button({ className, textobtt, caminho }) {
    return (
        <Link to={caminho}><button className={className} >{textobtt}</button></Link>
    )
}