import Voltar from "../components/Voltar";

import ImagemTexto from "../components/ImagemTexto";
import { Link } from "react-router-dom";

export default function PaginaPreCadastro()
{
    return (
        <div>
            <div className="PaginaPreCadastro">
                <div className="headerPaginaPreCadastro">
                    <Voltar />
                    <div className="textoPreCadastro">
                        QUAL É O SEU <especial className="objetivoTextoPreCadastro">OBJETIVO</especial> AO SE CADASTRAR NO <especial className="freelabTextoSobreNos">FREELAB</especial>?
                    </div>
                </div>

                <div className="imagensTextoPreCadastro">
                    <Link to={"/cadastro"}><ImagemTexto className="textoImagemSobreNos1" srcImage="/imagemSobreNos1.svg" texto="Busco oportunidades como freelancer"/></Link>
                    <Link to={"/cadastro"}><ImagemTexto className="textoImagemSobreNos2" srcImage="/imagemSobreNos2.svg" texto="Estou interessado em contratar freelancers para projetos."/></Link>
                </div>
            </div>
        </div>
    )
}