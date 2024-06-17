import ButtonTxt from "../../components/Buttons/ButtonTxt"
import ImageStandard from "../../components/Images/ImageStandard"
import CodigoInput from "./CodigoInput/CodigoInput"
import "./Pagina2FAtelefone.css"

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
                    <p>número ** **** **61</p>
                </div>
                <CodigoInput />
                <ButtonTxt texto={"Não tenho mais acesso a esse número"} className={"semAcessoTxt"} caminho={"/2fa-email"} />
            </div>

            <ImageStandard imagem={"2fatelefoneImg.svg"} className={"Img2faTelefone"} />
            <ButtonTxt className={"botaoContinuarSeta"} texto={"CONTINUAR"} img={"arrowContinuar.svg"} caminho={"/home"} />

        </>
    )
}