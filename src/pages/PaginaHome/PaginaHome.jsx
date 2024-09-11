import Container from '../PaginaHome/Container-trabalhos/Container.jsx'
import './PaginaHome.css'
import NavBarLateral from '../../components/NavBar lateral/NavBarLateral.jsx'

export default function PaginaHome() {

  return (
    <div className="paginaHome">
      <NavBarLateral />
      <Container />
    </div>
  )
}
