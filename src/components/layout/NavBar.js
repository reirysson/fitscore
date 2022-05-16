import { NavLink, Link } from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../img/fitscore_logo2.png'
import icon from '../../img/icon_user.png'



function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Logo do FitScore"/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242" }, {fontWeight: isActive ? "700" : "400"})}>Início</NavLink></li>
                    <li className={styles.item}><NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242" }, {fontWeight: isActive ? "700" : "400"})}>Cardápio</NavLink></li>
                </ul>
                <Link to="/"><img src={icon} alt="Ícone de usuário"></img></Link>
            </Container>
        </nav>
    )
}

export default NavBar