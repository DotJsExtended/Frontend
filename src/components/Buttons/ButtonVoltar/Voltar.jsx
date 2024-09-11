import './Voltar.css'

export default function Voltar() {
    return (

        <div className="botaoVoltar" onClick={() => {
            if(history.state.idx != 0)
                history.back()
            else if(history.state.idx == 0)
                window.location.href = "/"

        }}>
            <img src="/seta.svg"></img>
            <p>VOLTAR</p>
        </div>
    )
}