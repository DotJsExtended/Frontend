import BarraPesquisa from '../../../components/BarraPesquisa/BarraPesquisa'
import OfertaTrabalho from '../../../components/OfertaTrabalho/OfertaTrabalho'
import SaudacoesPosLogin from '../../../components/SaudacoesPosLogin/SaudacoesPosLogin'
import './Container.css'

export default function Container() {
    const oferta = {
        icon: "https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg",
        nomeEmpresa: "THE LAB",
        segmento: "Produções Visuais",
        situacao: "disponivel",
        cargoProcurado: "Editor de Vídeo",
        descricao: "Você é apaixonado por transformar ideias em vídeos incríveis e dinâmicos? Estamos buscando um talentoso editor de vídeo para se juntar à nossa equipe em um projeto empolgante e inovador.",
        prazo: "25/04",
        valor: 99,
        tempoDesdePublicacao: 10

    }
    const oferta2 = {
        icon: "https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg",
        nomeEmpresa: "THE LAB",
        segmento: "Produções Visuais",
        situacao: "encerrado",
        cargoProcurado: "Editor de Vídeo",
        descricao: "Você é apaixonado por transformar ideias em vídeos incríveis e dinâmicos? Estamos buscando um talentoso editor de vídeo para se juntar à nossa equipe em um projeto empolgante e inovador.",
        prazo: "25/04",
        valor: 99,
        tempoDesdePublicacao: 10

    }
    const oferta3 = {
        icon: "https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg",
        nomeEmpresa: "THE LAB",
        segmento: "Produções Visuais",
        situacao: "andamento",
        cargoProcurado: "Editor de Vídeo",
        descricao: "Você é apaixonado por transformar ideias em vídeos incríveis e dinâmicos? Estamos buscando um talentoso editor de vídeo para se juntar à nossa equipe em um projeto empolgante e inovador.",
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
                <OfertaTrabalho oferta={oferta3} />
                <OfertaTrabalho oferta={oferta3} />
            </div>
        </div>
    )
}