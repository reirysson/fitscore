import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Footer.module.css'

function Footer() {
    return (<footer className={styles.footer}>
        <h1> &copy; FitScore </h1>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/speak">Fale conosco</Link></li>
                    <li className={styles.item}><Link to="/company">Quem somos</Link></li>
                    <li className={styles.item}><Link to="/about">Sobre</Link></li>
                </ul>
            </Container>
    </footer>
    )
}

export default Footer