import NavBarLateral from "../../components/NavBar lateral/NavBarLateral";
import ContainerTopo from './ContainerTopo/ContainerTopo';
import AreaLinksETags from './AreaLinksETags/AreaLinksETags';
import TrabalhosImagens from './TrabalhosImagens/TrabalhosImagens';

export default function PaginaMeuPerfil(){
    return(
        <div className="PaginaMeuPerfil">
        <NavBarLateral />
        <ContainerTopo />
        <AreaLinksETags />
        <TrabalhosImagens />
        </div>
    )
}