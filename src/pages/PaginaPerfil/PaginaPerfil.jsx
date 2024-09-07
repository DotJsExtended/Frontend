import React from 'react';
import ContainerTopo from './ContainerTopo/ContainerTopo';
import ContainerOpcoes from './ContainerOpcoes/ContainerOpcoes';
import AreaLinksETags from './AreaLinksETags/AreaLinksETags';
import TrabalhosImagens from './TrabalhosImagens/TrabalhosImagens';

export default function PaginaPerfil() {
  return (
    <div className="app">
      <ContainerOpcoes />
      <div className="main-content">
        <ContainerTopo />
        <AreaLinksETags />
        <TrabalhosImagens />
      </div>
    </div>
  );
}

