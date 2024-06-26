import React from "react";
import "./PaginaLogin.css"
import Button from "../../components/Buttons/Button"
import ButtonTxt from "../../components/Buttons/ButtonTxt";
import ImageStandard from "../../components/Images/ImageStandard";
import Logo from "./Logo/Logo";
import CampoSenha from "./CampoSenha/CampoSenha";
import CampoLogin from "./CampoLogin/CampoLogin";

export default function PaginaLogin() {
    return (
        <div>
            <div className="retanguloBranco">
                <ButtonTxt className={"botaoVoltar"} caminho={"/cadastro"} img={"seta.svg"} texto={"VOLTAR"} />
                <Logo className={"Logo"} />
                <div className="textoBemVindo">
                    <p>Bem vindo de volta! Faça login para acessar sua conta e explorar novas oportunidades ou gerenciar seus projetos</p>
                </div>
                <ImageStandard imagem={"image-removebg-preview 1.png"} className={"imagem"} />
            </div>
            <div className="retanguloAzul">
                <h1>LOGIN</h1>
                <img className="oAuthIcons" src="Group 4.png"></img>
                <div className="alternatives">
                    <p>ou use seu endereço de email ou</p>
                    <p>nome de usuário</p>
                </div>
                <CampoLogin className={"campoSenha"} iconSrc={"mail.png"} placeholder={"Email ou nome de usuário"} type={'text'} />
                <div className="senha">
                    <CampoSenha className={"campoLogin"} iconSrc={"lock.png"} placeholder={"Senha"} icon2Src={"eye.png"} />
                    <ButtonTxt texto={"Esqueci minha senha"} caminho={"/recuperar-senha"} />
                </div>
                <Button className={"continuar"} textobtt={"CONTINUAR"} caminho={"/2fa-telefone"} />
                <div className="semConta">
                    <p>Não tem uma conta?</p>
                    <Button caminho={"/cadastro"} className={"criarConta"} textobtt={"CRIAR CONTA"} />
                </div>
            </div>
        </div>
    )
}