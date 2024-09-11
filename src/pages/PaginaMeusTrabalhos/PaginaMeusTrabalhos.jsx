import Container from './Container-trabalhos/Container.jsx'
import './PaginaMeusTrabalhos.css'
import NavBarLateral from '../../components/NavBar lateral/NavBarLateral.jsx'

export default function PaginaMeusTrabalhos() {

  return (
    <div className="paginaHome">
      <NavBarLateral />
      <Container />
    </div>
  )
}
