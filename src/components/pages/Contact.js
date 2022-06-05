import styles from './Contact.module.css'
import Input from '../layout/Input'

function Contact() {
    return (
        <div>
            <h1>Entre em contato</h1>

            <p>Insira seu e-mail e digite sua sugestão para entrar em contato conosco</p>

            <Input type="text" text="E-mail: *" name="email" placeholder="Ex.: meuemail@gmail.com"/>
            <Input type="text" text="Envie sua sugestão: *" name="sugestao" placeholder="Ex.: sua sugestão"/>

            <div className={styles.btn_sugestion}>
                <button>Enviar sugestão</button>
            </div>
        </div>
    )
}

export default Contact