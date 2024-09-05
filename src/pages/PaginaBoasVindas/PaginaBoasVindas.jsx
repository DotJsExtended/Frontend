import './PaginaBoasVindas.css'
import Header from './Header/Header'
import Button from '../../components/Buttons/Button'

function PaginaBoasVindas() {

  return (
    <>
      <Header
        texto1={'SOBRE NÓS'} texto2={'SAIBA MAIS'}
      />
      <div className="sessao">
        <div className="texto">
          <h1>Transforme Ideias</h1>
          <h1>em Realidade -</h1>
          <h3>Contrate talentos flexíveis hoje mesmo!</h3>
          <p>Conectamos talentos excepcionais a projetos extraordinários. Descubra uma comunidade vibrante de freelancers qualificados prontos para transformar suas ideias em realidade.</p>
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
        </div>

        <div className='imagemComposta'>
          <div className="fundo">
            <img src="/fundo.png"></img>
          </div>
          <div className="boneco">
            <img src="/boneco.png"></img>
          </div>
        </div>
      </div>


    </>
  )
}

export default PaginaBoasVindas