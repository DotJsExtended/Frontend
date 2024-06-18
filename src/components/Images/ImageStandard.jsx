import React from "react";

export default function ImageStandard({ imagem, className }) {
    return (
        <div className={className}>
            <img src={imagem}></img>
        </div>

    )
}
