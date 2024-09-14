import NavBarLateral from "../../components/NavBar lateral/NavBarLateral";
import ContainerTopo from './ContainerTopo/ContainerTopo';
import AreaLinksETags from './AreaLinksETags/AreaLinksETags';
import TrabalhosImagens from './TrabalhosImagens/TrabalhosImagens';
import "./PaginaMeuPerfil.css"

export default function PaginaMeuPerfil() {
    return (
        <div className="PaginaMeuPerfil">
            <NavBarLateral />
            <div>
                <ContainerTopo />
                <AreaLinksETags />
                <TrabalhosImagens />
            </div>

        </div>
    )
}