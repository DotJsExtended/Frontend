import react from 'react';
import Logo from '../components/Logo';
import '../styles/Recuperaçãosenha4.css';
import Voltar from '../components/Voltar';
import TextoRecSenha4 from '../components/TextoRecSenha4';
import ImageStandard from '../components/Images/ImageStandard';
import Button from '../components/Buttons/Button';
import ButtonTxt from '../components/Buttons/ButtonTxt';

export default function RecuperaSenha4() {
  return (
    <div className="RecuperaSenha4">
      <Voltar/>
      <Logo className={"logorec"}/>
      <TextoRecSenha4/>
     <ImageStandard imagem={"./../imagemrec2.svg"} className={"Imagemrec4"}/>
    <ButtonTxt texto={"Não recebeu o email?"} className={"Bnttextrec4"}caminho={"/"}/>
    <Button className={"Voltarlogin"}textobtt={"Voltar para login"} caminho={"/login"}/>
    <Button className={"Btntreenviar"}textobtt={"Reenviar"} caminho={"/recuperasenha4"}/>
    </div>
  );
}