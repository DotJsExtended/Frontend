import "./SaudacoesPosLogin.css"

export default function SaudacoesPosLogin({apelido, fotoPerfil}){
    let today = new Date()
    let hour = today.getHours()
    let saudacao;
    if(hour < 12)
        saudacao = "Bom dia"
    else
        saudacao = "Boa tarde"
    return(
        <div className="saudacoesPosLogin">
            <p>{saudacao}, {apelido}!</p>
            <img src={fotoPerfil}></img>
        </div>
    )
}