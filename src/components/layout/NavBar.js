import { NavLink, Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../img/fitscore_logo.svg'

function NavBar() {
    return (
        <nav>
            <Link to="/"><img src={logo} alt="Logo do FitScore" /></Link>
            <ul className={styles.list}>
                <li className={styles.item}><NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242", fontWeight: isActive ? "700" : "400" })}>Início</NavLink></li>
                <li className={styles.item}><NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242", fontWeight: isActive ? "700" : "400" })}>Cardápio</NavLink></li>
                <li className={styles.item}><NavLink to="/speak" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242", fontWeight: isActive ? "700" : "400" })}>Quem somos?</NavLink></li>
                <li className={styles.item}><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "#2A3F22" : "#424242", fontWeight: isActive ? "700" : "400" })}>Contato</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar