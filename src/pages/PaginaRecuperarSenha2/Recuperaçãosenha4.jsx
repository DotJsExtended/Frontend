import Logo from '../../pages/PaginaLogin/Logo/Logo';
import './Recuperaçãosenha4.css';
import Voltar from '../../components/Buttons/ButtonVoltar/Voltar';
import TextoRecSenha4 from './BlocoRecSenha2/TextoRecSenha4';
import ImageStandard from '../../components/Images/ImageStandard';
import Button from '../../components/Buttons/Button';
import ButtonTxt from '../../components/Buttons/ButtonTxt';

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
    <Button className={"Btntreenviar"}textobtt={"Reenviar"} caminho={"/recuperar-senha-confirmacao"}/>
    </div>
    </div>
    <div className='botaovoltar'>
    <Button className={"Voltarlogin"}textobtt={"Voltar para login"} caminho={"/login"}/>
    </div>
    <ImageStandard imagem={"./../imagemrec2.svg"} className={"Imagemrec4"}/>
    </div>
  );
}