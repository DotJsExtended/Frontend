import './PaginaBoasVindas.css'
import Header from './Header/Header'
import Button from '../../components/Buttons/Button'

function PaginaBoasVindas() {

  return (
    <>
      <Header/>
      <div className="sessao">
        <div className="texto">
          <div>
            <h1>Transforme Ideias</h1>
            <h1>em Realidade -</h1>
          </div>

          <h3>Contrate talentos flexíveis hoje mesmo!</h3>
          <p>Conectamos talentos excepcionais a projetos extraordinários. Descubra uma comunidade vibrante de freelancers qualificados prontos para transformar suas ideias em realidade.</p>
          <div className='botoesCadastrarBoasVindas'>
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

        </div>

        <div className='imagemComposta'>

          <div className="boneco">
            <img src="/boneco.png"></img>
          </div>
        </div>
      </div>


    </>
  )
}

export default PaginaBoasVindas