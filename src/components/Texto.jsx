export default function Texto({texto1, texto2, texto3, texto4}) {
    return (
        <div className="sessao">
        <div className="texto">
            <h1>{texto1}</h1>
            <h1>{texto2}</h1>
            <h3>{texto3}</h3>
            <p>{texto4}</p>
        </div>
        <img width="400" src="coisa.png" alt="" />
        </div>
    )
}