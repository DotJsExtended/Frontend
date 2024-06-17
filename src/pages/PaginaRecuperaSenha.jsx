import ButtonTxt from "../components/Buttons/ButtonTxt"
import ImageStandard from "../components/Images/ImageStandard"
import EmailInput from "../components/PaginaRecuperarSenha.jsx/EmailInput"
import Voltar from "../components/Voltar"
import "../styles/PaginaRecuperarSenha.css"

export default function Pagina2FAtelefone(){
    return(
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

            <ImageStandard imagem={"recuperarSenhaImg.svg"} className={"Img2faTelefone"}/>
            <ButtonTxt className={"botaoContinuarSeta"} texto={"CONTINUAR"} img={"arrowContinuar.svg"} caminho={"/home"}/>

        </>
    )
}