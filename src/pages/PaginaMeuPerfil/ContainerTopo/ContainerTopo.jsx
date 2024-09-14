import React from "react";
import "./ContainerTopo.css"

export default function ContainerTopo() {
  return (
    <div className="ContainerTopo">
    <div className="containerHeader">
    <div className="topo">
        <h3>Meu Perfil</h3>
          <div className="icon-perfil">
            <img src="IconePaginaPerfil.png"></img>
          </div>
          <div className="camera-icon">
              <img src="camera-icon.svg"></img>
          </div>
    </div>
    <div className="header1">
      <h1>Marcos Oliveira</h1>
      <p>Designer Gráfico & Motion Designer</p>
    </div>
    <div className="header2">
      <p>Trabalhos</p>
      <h1>134</h1>
      <p>Clientes</p>
      <h1>108</h1>
      <p>Conexões</p>
      <h1>245</h1>
          <div className="editar-icon">
              <img src="editar-icon.svg"></img>
          </div>
    </div>
    </div>
    <div className="SobreMim">
          <div className="sobre-mim-icon">
              <img src="sobre-mim-icon.svg"></img>
          </div>
        <h3>Sobre mim</h3>
        <h3>Ver mais</h3>
        <p>Designer Gráfico e Motion Designer com 7 anos de experiência. Especialista em identidades visuais, animações e 
            vídeos promocionais. Apaixonado por criar peças visuais impactantes e inovadoras. Detalhista e focado na satisfação do cliente. Vamos dar vida às suas ideias!</p>
    </div>
    </div>
  );
}