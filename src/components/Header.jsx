import '../styles/Header.css'
import "../styles/Voltar.css"
import ButtonTxt from './Buttons/ButtonTxt'

export default function Header()
{
    return (
        <div className="Header">
            <div className="titleHeader">
                Freelab
            </div>
            <div className="subtitleHeader2">
                <div className="subtitleHeader">
                    Cadastre-se e junte-se à nossa comunidade de talentosos freelancers e contratantes
                </div>
            </div>
            <ButtonTxt 
                    className={"botaoVoltar"} 
                    caminho={"/"} 
                    img={"/seta.svg"} 
                    texto={"VOLTAR"}  
            />
        </div>
    )
}