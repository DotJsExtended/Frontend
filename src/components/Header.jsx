export default function Header({ texto1, texto2 }) {
  return (
   <header>
      <div className="headertexto">
      <div className="logo">FreeLab</div>
      <div className="textos">
      <h3>{texto1}</h3>
      <h3>{texto2}</h3>
      </div>
      </div>
        <button className="login">
        LOG-IN
        </button>
        <button className="criarconta">
        CRIAR CONTA
        </button>
     </header>
    )
}