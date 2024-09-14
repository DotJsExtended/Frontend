import './Header.css'
import ButtonTxt from '../../../components/Buttons/ButtonTxt'
import Voltar from '../../../components/Buttons/ButtonVoltar/Voltar'
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
            <Voltar />
        </div>
    )
}