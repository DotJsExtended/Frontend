import React from "react";
import "../style/paginaLogin.css"
import Input from "../components/Input"
import InputImg from "../components/InputImg"
import Button from "../components/Button"
import Buttontxt from "../components/Buttontxt";
import ImagemPadrao from "../components/ImageStandard";
import Logo from "../components/Logo"; 

export default function PaginaLogin(){
    return(
        <div>
            <div className="retanguloBranco">   
                <Buttontxt 
                    className={"botaoVoltar"} 
                    href={""} 
                    img={"seta.png"} 
                    texto={"VOLTAR"}  
                />
                <Logo className={"Logo"}/>
                <div className="textoBemVindo">
                    <p>Bem vindo de volta! Faça login para
                    acessar sua conta e explorar novas
                    oportunidades ou gerenciar seus projetos</p>
                </div>
                <ImagemPadrao imagem = {"image-removebg-preview 1.png"} className={"imagem"} />
            </div>
            <div className="retanguloAzul">
                <h1>LOGIN</h1>
                <img className="oAuthIcons" src="Group 4.png"></img>
                <div className="alternatives">
                    <p>ou use seu endereço de email ou</p>
                    <p>nome de usuário</p>
                </div>
                <Input className={"campoSenha"} iconSrc={"mail.png"} placeholder={"Email ou nome de usuário"} />
                <div className="senha">
                    <InputImg className={"campoLogin"} iconSrc={"lock.png"} placeholder={"Senha"} icon2Src={"eye.png"}/>
                    <a href="">Esqueci a minha senha</a>
                </div>
                <Button campoLogin
                className={"continuar"}
                textobtt={"CONTINUAR" }
                caminho={"/home"}
                />
                <div className="semConta">
                    <p>Não tem uma conta?</p>
                    <Button
                     className={"criarConta"}
                     textobtt={"CRIAR CONTA"} />
                </div>
                
            </div>
        </div>
    )
}