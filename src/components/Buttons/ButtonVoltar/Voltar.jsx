import './Voltar.css'

export default function Voltar() {
    return (
        
        <div className="botaoVoltar" onClick={() => {history.back()}}>
            <img src="/seta.svg"></img>
            <p>VOLTAR</p>
        </div>
    )
}