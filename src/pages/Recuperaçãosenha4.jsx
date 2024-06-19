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
      <div className='logocentralizar'>
      <Logo className={"logorec"}/>
      </div>
      <TextoRecSenha4/>
     <div className='alinharbotoes'>
     <div className='buttonrecebeu'>
    <ButtonTxt texto={"Não recebeu o email?"} className={"Bnttextrec4"}caminho={"/"}/>
    </div>
    <div className='buttonreenviar'>
    <Button className={"Btntreenviar"}textobtt={"Reenviar"} caminho={"/recuperasenha4"}/>
    </div>
    </div>
    <div className='botaovoltar'>
    <Button className={"Voltarlogin"}textobtt={"Voltar para login"} caminho={"/login"}/>
    </div>
    <ImageStandard imagem={"./../imagemrec2.svg"} className={"Imagemrec4"}/>
    </div>
  );
}