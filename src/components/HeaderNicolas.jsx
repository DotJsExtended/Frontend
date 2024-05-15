import Button from "./Buttons/Button"

export default function Header({ label, texto1, texto2 }) {
  return (
   <header>
      <div className="headertexto">
      <div className="logo">FreeLab</div>
      <h3>{texto1}</h3>
      <h3>{texto2}</h3>
      </div>
      <Button
                className={"login"}
                textobtt={"LOG-IN"} 
                caminho={"/login"}
            />
      <Button
                className={"criarconta"}
                textobtt={"CRIAR CONTA"} 
                caminho={"/cadastro"}
            />
     </header>
    )
}