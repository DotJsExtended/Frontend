import "./BarraPesquisa.css"

export default function BarraPesquisa(){
    return(
        <div className="barraPesquisa">
            <input placeholder="Pesquisar"></input>
            <img src="/lupaPesquisa.svg"></img>
        </div>
    )
}