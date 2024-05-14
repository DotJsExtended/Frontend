export default function TextoProibido({textoProibido}) 
{
    return (
        <div className="textosProibidos">
            <div>
                <img src="../../public/proibido.svg"/>
            </div>
            <div>
                {textoProibido}oi
            </div>
        </div>
    )
}