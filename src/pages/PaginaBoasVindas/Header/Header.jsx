import { Link } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <header>

      <div className="logo">FreeLab</div>
      <div className="acoesHeaderBoasVindas">
        <h3>Sobre Nós</h3>
        <h3>Saiba Mais</h3>
        <div className="botoesHeaderBoasVindas">
          <Link to={"/login"}>
            <button className="login">LOG-IN</button>
          </Link>
          <Link to={"/precadastro"}>
            <button className="criarconta">CRIAR CONTA</button>
          </Link>
        </div>
      </div>


    </header>
  )
}