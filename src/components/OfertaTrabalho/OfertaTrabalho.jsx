import "./OfertaTrabalho.css"

export default function OfertaTrabalho({ oferta }) {
    return (
        <div className="ofertaTrabalho">
            <div className="headerOfertaTrabalho">
                <img src={oferta.icon}></img>
                <div>
                    <p>{oferta.nomeEmpresa}</p>
                    <p>{oferta.segmento}</p>
                </div>
                <div className="situacaoOferta">
                    <p>{oferta.situacao}</p>
                </div>
            </div>
            <div className="descricaoOfertaTrabalho">
                <p>{oferta.cargoProcurado}</p>
                <p>{oferta.descricao}</p>

            </div>
            <div className="infosOfertaTrabalho">
                <div className="prazoOferta">
                    <img src="/calendarioOferta.svg"></img>
                    <p>{oferta.prazo}</p>
                </div>
                <div className="valorOferta">
                    <img src="/cifraoOferta.svg" alt="" />
                    <p>{oferta.valor}</p>
                </div>
                <div className="tempoOferta">
                    <img src="/relogioOferta.svg" alt="" />
                    <p>{oferta.tempoDesdePublicacao}</p>
                </div>
            </div>
            <div className="footerOfertaTrabalho">
                <button>Detalhes</button>
            </div>
        </div>
    )
}