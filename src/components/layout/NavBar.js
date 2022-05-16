import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/fitscore_logo.png'



function NavBar() {
    return (
        <nav>
            <Container>
                <Link to="/"><img src={logo} alt="Logo do FitScore"/></Link>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/menu">Cardápio</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar