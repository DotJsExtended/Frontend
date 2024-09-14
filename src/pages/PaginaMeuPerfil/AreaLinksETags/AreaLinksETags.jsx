import React from "react";
import "./AreaLinksETags.css"

export default function AreaLinksETags() {
  return (
    <div className="links-tags">
      <div className="links">
          <div className="links-icon">
              <img src="links-icon.svg"></img>
          </div>
        <h3>Links</h3>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Behance</a>
        <a href="#">MyPortfolio.com</a>
        <a href="#">Curriculo.com</a>
      </div>
      <div className="tags">
          <div className="tags-icon">
              <img src="tags-icon.svg"></img>
          </div>
        <h3>Tags</h3>
          <div className="design-grafico">
              <p>Design Gráfico</p>
          </div>
          <div className="motion-design">
              <p>Motion Design</p>
          </div>
          <div className="photoshop">
              <p>Photoshop</p>
          </div>
          <div className="edicao-de-video">
              <p>Edição de Vídeo</p>
          </div>
          <div className="premiere-pro">
              <p>Premiere Pro</p>
          </div>
      </div>
    </div>
  );
}