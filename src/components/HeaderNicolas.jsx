import { Link } from "react-router-dom";
import "../styles/HeaderNicolas.css"
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
        <Link to={"/login"}><button className="login">
          LOG-IN
        </button></Link>
        <Link to={"/precadastro"}><button className="criarconta">
        CRIAR CONTA
        </button></Link>
     </header>
    )
}