import styles from './Contact.module.css'
import Input from '../layout/Input'
import contato from '../../img/contato.svg'

function Contact() {
    return (
        <div className={styles.contato_completo}>

            <h1>Entre em contato</h1>

            <div className={styles.contato_interno}>
                <div className={styles.contato_sugestao}>
                    <div className={styles.contato_email}>
                        <p>Insira seu e-mail e digite sua sugestão para entrar em contato conosco</p>

                        <Input type="text" text="E-mail: *" name="email" placeholder="Ex.: meuemail@gmail.com"/>
                    </div>
                    
                    <div className={styles.contato_mensagem}>
                        <Input type="text" text="Envie sua sugestão: *" name="sugestao" placeholder="Ex.: sua sugestão"/>
                        <div className={styles.btn_sugestion}>
                            <button>Enviar sugestão</button>
                        </div>
                    </div>
                    
                </div>
                <img src={contato} alt="Logo da página de contato"/>
            </div>      
        </div>
    )
}

export default Contact