import React from "react";
import "./TrabalhosImagens.css"

export default function TrabalhosImagens() {
  return (
    <div className="portfolio">
        <div className="portfolio-topo">
          <h3>Portfolio</h3>
            <div className="seta-portfolio-icon">
                <img src="seta-portfolio-icon.svg"></img>
            </div>
        </div>
      <div className="trabalhos-imagens">
        <img src="/ImagemTrabalho1.png"></img>
        <img src="/ImagemTrabalho2.png"></img>
        <img src="/ImagemTrabalho3.png"></img>
        <img src="/ImagemTrabalho4.png"></img>
      </div>
    </div>
  );
}