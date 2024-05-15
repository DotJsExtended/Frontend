export default function Header({ label, texto1, texto2 }) {
  return (
   <header>
      <div className="headertexto">
      <div className="logo">FreeLab</div>
      <h3>{texto1}</h3>SOBRE NÓS
      <h3>{texto2}</h3>SAIBA MAIS
      </div>
        <button className="login">
          {label} <p>LOG-IN</p>
        </button>
        <button className="criarconta">
          {label} <p>CRIAR CONTA</p>
        </button>
     </header>
    )
}