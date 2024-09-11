import "./SaudacoesPosLogin.css"

export default function SaudacoesPosLogin({apelido, fotoPerfil}){
    let today = new Date()
    let hour = today.getHours()
    let saudacao;
    if(hour < 12)
        saudacao = "Bom dia"
    else if (hour > 12 && hour < 18)
        saudacao = "Boa tarde"
    else
        saudacao = "Boa noite"
    return(
        <div className="saudacoesPosLogin">
            <p>{saudacao}, {apelido}!</p>
            <img src={fotoPerfil}></img>
        </div>
    )
}