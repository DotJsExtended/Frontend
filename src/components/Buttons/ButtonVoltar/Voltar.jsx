import ButtonTxt from '../ButtonTxt'
import './Voltar.css'

export default function Voltar({ caminho }) {
    return (
        <ButtonTxt
            className={"botaoVoltar"}
            caminho={caminho}
            img={"/seta.svg"}
            texto={"VOLTAR"}
        />
    )
}