import OfertaTrabalho from '../../../components/OfertaTrabalho/OfertaTrabalho'
import SaudacoesPosLogin from '../../../components/SaudacoesPosLogin/SaudacoesPosLogin'
import './Container.css'

export default function Container() {
    const oferta = {
        icon: "https://img.freepik.com/vetores-gratis/gradiente-de-ilustracao-de-passaro-colorido_343694-1741.jpg",
        nomeEmpresa: "LOKO",
        segmento: "Moda e estilo",
        situacao: "em andamento",
        cargoProcurado: "Designer Gráfico",
        descricao: "Estamos em busca de um designer gráfico talentoso para se juntar à nossa equipe de marketing digital. Esta vaga é dedicada a criar conteúdo para nossas redes sociais.",
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
        icon: "https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-various-industry-logos-png-image_2609762.jpg",
        nomeEmpresa: "Amigos da terra",
        segmento: "Sustentabilidade e Ecologia",
        situacao: "encerrado",
        cargoProcurado: "Designer Gráfico",
        descricao: "Estamos em busca de um designer gráfico talentoso para se juntar à nossa equipe de marketing digital. Esta vaga é dedicada a criar conteúdo com frequência para nossas redes sociais.",
        prazo: "28/12",
        valor: 103,
        tempoDesdePublicacao: 48

    }
    return (
        <div className="container">
            <div className='headerHome'>
                <div>
                    <h1>Meus Trabalhos</h1>
                </div>
                <SaudacoesPosLogin apelido={"Maria"} fotoPerfil={"https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"} />
            </div>

            <h2>Trabalhos em andamento</h2>
            <div className='ofertasEscolhidasHome'>
                <OfertaTrabalho oferta={oferta} />
            </div>
            <h2>Trabalhos concluídos</h2>
            <div className='oportunidadesDisponiveisHome'>
                <OfertaTrabalho oferta={oferta2} />
                <OfertaTrabalho oferta={oferta3} />
            </div>
        </div>
    )
}