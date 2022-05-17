import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import Container from './Container'

import styles from './Footer.module.css'


function Footer() {
    return (<footer className={styles.footer}>
        <Container>
        <div>
            <h1> &copy; FitScore </h1>
                <div className={styles.footer_menu}>
                    <Link to="/speak">Fale conosco</Link>
                    <Link to="/company">Quem somos</Link>
                    <Link to="/about">Sobre</Link>
                </div>
        </div>
        <p className={styles.down}>FitScore. Todos os direitos reservados</p>
        <div className={styles.footer_social}>
            <p>Redes sociais</p>
            <ul className={styles.social_list}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
            </ul>
        </div> 
        </Container>
          
    </footer>
    )
}

export default Footer