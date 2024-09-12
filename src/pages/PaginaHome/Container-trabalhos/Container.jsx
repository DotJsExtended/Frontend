import BarraPesquisa from '../../../components/BarraPesquisa/BarraPesquisa'
import OfertaTrabalho from '../../../components/OfertaTrabalho/OfertaTrabalho'
import SaudacoesPosLogin from '../../../components/SaudacoesPosLogin/SaudacoesPosLogin'
import './Container.css'

export default function Container() {
    const oferta = {
        icon: "https://vowels.ae/wp-content/uploads/2022/07/best-ideas-for-tech-logo-design.jpg",
        nomeEmpresa: "creative corner",
        segmento: "Conteúdo criativo",
        situacao: "disponivel",
        cargoProcurado: "Designer gráfico",
        descricao: "Estamos à procura de um talentoso designer gráfico e web design para se juntar à nossa equipe em um projeto emocionante e dinâmico.",
        prazo: "25/04",
        valor: 99,
        tempoDesdePublicacao: 10

    }
    const oferta2 = {
        icon: "https://images.vexels.com/media/users/3/218237/isolated/preview/be2f9b483137cf7973f948a38ac18e0f-icone-de-formas-de-fumaca-de-fios.png",
        nomeEmpresa: "Fit Life",
        segmento: "Academia e desporto",
        situacao: "disponivel",
        cargoProcurado: "Designer gráfico",
        descricao: "Estamos em busca de um designer gráfico talentoso para se juntar à nossa equipe de marketing digital. Esta vaga é dedicada a criar conteúdo para nossas redes sociais.",
        prazo: "25/04",
        valor: 99,
        tempoDesdePublicacao: 10

    }


    return (
        <div className="container">
            <div className='headerHome'>
                <div>
                    <h1>Página inicial</h1>
                    <BarraPesquisa />
                </div>
                <SaudacoesPosLogin apelido={"Dan"} fotoPerfil={"https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"} />
            </div>

            <h2>Principais escolhas para você</h2>
            <div className='ofertasEscolhidasHome'>
                <OfertaTrabalho oferta={oferta} />
            </div>
            <h2>Oportunidades disponíveis</h2>
            <div className='oportunidadesDisponiveisHome'>
                <OfertaTrabalho oferta={oferta} />
                <OfertaTrabalho oferta={oferta2} />

            </div>
        </div>
    )
}