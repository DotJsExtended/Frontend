import './Header.css'
import ButtonTxt from '../../../components/Buttons/ButtonTxt'

export default function Header() {
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