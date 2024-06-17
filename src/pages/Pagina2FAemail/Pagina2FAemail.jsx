import ButtonTxt from "../../components/Buttons/ButtonTxt"
import ImageStandard from "../../components/Images/ImageStandard"
import CodigoInput from "../Pagina2FAtelefone/CodigoInput/CodigoInput"
import "./Pagina2FAemail.css"

export default function Pagina2FAtelefone() {
    return (
        <>
            <ButtonTxt
                className={"botaoVoltar"}
                caminho={"/login"}
                img={"/seta.svg"}
                texto={"VOLTAR"}
            />
            <div className="center2FA">
                <h1>FreeLaB</h1>
                <div>
                    <p>Digite abaixo o código que enviamos para o</p>
                    <p>e-mail e*****@gmail.com</p>
                </div>
                <CodigoInput />
                <ButtonTxt texto={"Não tenho mais acesso a esse e-mail"} className={"semAcessoTxt"} caminho={"/2fa-telefone"} />
            </div>

            <ImageStandard imagem={"2faemailImg.svg"} className={"Img2faTelefone"} />
            <ButtonTxt className={"botaoContinuarSeta"} texto={"CONTINUAR"} img={"arrowContinuar.svg"} caminho={"/home"} />

        </>
    )
}