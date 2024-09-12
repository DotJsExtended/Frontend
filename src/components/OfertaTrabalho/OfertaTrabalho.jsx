import "./OfertaTrabalho.css"
import Button from "../Buttons/Button"
export default function OfertaTrabalho({ oferta }) {
    return (
        <div className="ofertaTrabalho">
            <div className="headerOfertaTrabalho">
                <div className="infosEmpresaHeader">
                    <img src={oferta.icon}></img>
                    <div>
                        <h5>{oferta.nomeEmpresa}</h5>
                        <p>{oferta.segmento}</p>
                    </div>
                </div>

                {oferta.situacao === "disponivel" ?
                    <div className="situacaoOferta disponivel">
                        <p>Disponível</p>
                    </div>
                    : oferta.situacao === "encerrado" ? 
                    <div className="situacaoOferta encerrado">
                        <p>Encerrado</p>
                    </div> :
                    <div className="situacaoOferta andamento">
                        <p>Em andamento</p>
                    </div> 
                }

                <div className="salvarButton">
                    <img src="/salvarHome.svg" alt="" />
                </div>
            </div>
            <div className="descricaoOfertaTrabalho">
                <h5>{oferta.cargoProcurado}</h5>
                <p>{oferta.descricao}</p>
            </div>
            <div className="infosOfertaTrabalho">
                <div className="prazoOferta">
                    <img src="/calendarioOferta.svg"></img>
                    <p>{oferta.prazo}</p>
                </div>
                <div className="valorOferta">
                    <img src="/cifraoOferta.svg" alt="" />
                    <p>R${oferta.valor}</p>
                </div>
                <div className="tempoOferta">
                    <img src="/relogioOferta.svg" alt="" />
                    <p>{oferta.tempoDesdePublicacao} horas atrás</p>
                </div>
            </div>
            <div className="footerOfertaTrabalho">
                <Button textobtt={"Detalhes"} className={"buttonDetalhesOfertaTrabalho"} caminho={""} />
            </div>
        </div>
    )
}