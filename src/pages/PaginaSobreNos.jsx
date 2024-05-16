import Voltar from "../components/Voltar";
import '../style/PaginaSobreNos.css';
import ImagemTexto from "../components/ImagemTexto";

export default function PaginaSobreNos()
{
    return (
        <div>
            <div className="PaginaSobreNos">
                <div className="headerPaginaSobreNos">
                    <Voltar />
                    <div className="textoSobreNos">
                        QUAL É O SEU <especial className="objetivoTextoSobreNos">OBJETIVO</especial> AO SE CADASTRAR NO <especial className="freelabTextoSobreNos">FREELAB</especial>?
                    </div>
                </div>

                <div className="imagensTextoSobreNos">
                    <ImagemTexto className="textoImagemSobreNos1" srcImage="/imagemSobreNos1.svg" texto="Busco oportunidades como freelancer"/>
                    <ImagemTexto className="textoImagemSobreNos2" srcImage="/imagemSobreNos2.svg" texto="Estou interessado em contratar freelancers para projetos."/>
                </div>
            </div>
        </div>
    )
}