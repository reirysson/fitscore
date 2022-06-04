import styles from './Footer.module.css'


function Footer() {
    return (<footer className={styles.footer}>
        <div >
            <h1> &copy; FitScore </h1>
        </div>
        <div>
            <p>FitScore. Todos os direitos reservados - Desenvolvido por Reirysson Costa</p>
        </div>
    </footer>
    )
}

export default Footer