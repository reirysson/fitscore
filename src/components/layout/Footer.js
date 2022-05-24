import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import Container from './Container'

import styles from './Footer.module.css'


function Footer() {
    return (<footer className={styles.footer}>
        <Container>
        <div>
            <h1> &copy; FitScore </h1>
                <nav className={styles.footer_menu}>
                    <Link to="/speak">Fale conosco</Link>
                    <Link to="/company">Quem somos</Link>
                    <Link to="/about">Sobre</Link>
                </nav>
        </div>
        <div>
            <p className={styles.down}>FitScore. Todos os direitos reservados</p>
        </div>
        </Container>
    </footer>
    )
}

export default Footer