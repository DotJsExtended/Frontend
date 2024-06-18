import './PaginaBoasVindas.css'
import Header from './Header/Header'
import Texto from './Texto/Texto'
import Button from '../../components/Buttons/Button'

function PaginaBoasVindas() {

  return (
    <>
      <Header
        texto1={'SOBRE NÓS'} texto2={'SAIBA MAIS'}
      />
      <Texto
        texto1={'Transforme Ideias'}
        texto2={'em Realidade -'}
        texto3={'Contrate talentos flexíveis hoje mesmo!'}
        texto4={'Conectamos talentos excepcionais a projetos extraordinários. Descubra uma comunidade vibrante de freelancers qualificados prontos para transformar suas ideias em realidade.'}
      />
      <Button
        textobtt={'QUERO CONTRATAR'}
        className={'botaoContratar'}
        caminho={"/cadastro"}
      />
      <Button
        textobtt={'QUERO TRABALHAR'}
        className={'botaoTrabalhar'}
        caminho={"/cadastro"}
      />
    </>
  )
}

export default PaginaBoasVindas