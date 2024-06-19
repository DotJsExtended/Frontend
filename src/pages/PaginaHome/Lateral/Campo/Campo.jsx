import './Campo.css'

export default function Campo({ campo, nomeCampo, icone }) {
    return (
        <div className={campo}>
            <div className="campo">
                <div className="imagemCampo">
                    <img src={icone} alt="" />
                </div>
                <p>{nomeCampo}</p>
            </div>
        </div>
    )
}