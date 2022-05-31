import { AiFillCloseCircle } from 'react-icons/ai'
import Input from '../layout/Input'
import styles from './Meta.module.css'

function Meta({ acionar }){
    return (acionar) ? (
        <div className={styles.popup}>
            <form className={styles.popup_inner}>
                <button className={styles.close_btn} onClick={() => acionar=(false)}><AiFillCloseCircle /></button>
                <h2>Editar meta</h2>
                <p>Edite as informações a baixo para alterar a sua meta diária de calorias</p>
                <Input type="number" text="Meta de calorias diárias (em Kcal):" name="meta" placeholder="Ex.: 2.000"/>
                <button type="submit" className={styles.save_btn} onClick={() => acionar=(false)}>Salvar nova meta</button>
            </form>
        </div>
    ) : "";
}

export default Meta