import React from "react";
import "./PaginaLogin.css"
import Button from "../../components/Buttons/Button"
import ButtonTxt from "../../components/Buttons/ButtonTxt";
import ImageStandard from "../../components/Images/ImageStandard";
import Logo from "./Logo/Logo";
import CampoSenha from "./CampoSenha/CampoSenha";
import CampoLogin from "./CampoLogin/CampoLogin";
import Voltar from "../../components/Buttons/ButtonVoltar/Voltar";
import { Link } from "react-router-dom";

export default function PaginaLogin() {
    return (
        <div>
            <div className="retanguloBranco">
                <Voltar />
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
                <div className="camposPreencherLogin">
                    <CampoLogin className={"campoSenha"} iconSrc={"mail.png"} placeholder={"Email ou nome de usuário"} type={'text'} />
                    <div className="senha">
                        <CampoSenha className={"campoLogin"} iconSrc={"lock.png"} placeholder={"Senha"} />
                        {/* <Link to={"/recuperar-senha"}>Esqueci minha senha</Link> */}
                        <Link to={""}>Esqueci minha senha</Link>
                    </div>
                </div>

                {/* <Button className={"continuar"} textobtt={"CONTINUAR"} caminho={"/2fa-telefone"} /> */}
                <Button className={"continuar"} textobtt={"CONTINUAR"} caminho={"/home"} />
                <div className="semConta">
                    <p>Não tem uma conta?</p>
                    <Button caminho={"/precadastro"} className={"criarConta"} textobtt={"CRIAR CONTA"} />
                </div>
            </div>
        </div>
    )
}