import React from "react";
import "./AreaLinksETags.css"

export default function AreaLinksETags() {
  return (
    <div className="links-tags">
      <div className="links">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
        <a href="#">MyPortfolio.com</a>
        <a href="#">Curriculo.com</a>
      </div>
      <div className="tags">
        <span>Design Gráfico</span>
        <span>Motion Design</span>
        <span>Photoshop</span>
        <span>Edição de Vídeo</span>
        <span>Premiere Pro</span>
      </div>
    </div>
  );
}