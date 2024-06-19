import ButtonTxt from "../../components/Buttons/ButtonTxt"
import ImageStandard from "../../components/Images/ImageStandard"
import EmailInput from "./EmailInput/EmailInput"
import "./PaginaRecuperarSenha.css"

export default function Pagina2FAtelefone() {
    return (
        <>
            <ButtonTxt
                className={"botaoVoltar"}
                caminho={"/login"}
                img={"/seta.svg"}
                texto={"VOLTAR"}
            />
            <div className="centerRecuperaSenha">
                <h1>FreeLaB</h1>
                <EmailInput />
            </div>

            <ImageStandard imagem={"recuperarSenhaImg.svg"} className={"ImgRecSenha"} />
            <ButtonTxt className={"botaoContinuarSeta"} texto={"CONTINUAR"} img={"arrowContinuar.svg"} caminho={"/recuperar-senha-confirmacao"} />

        </>
    )
}