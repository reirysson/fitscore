import styles from './AddFood.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'

function AddFood(props) {
    return (props.acionar) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <h2>Adicionar alimento</h2>
                <p>Preencha as informações a baixo para adicionar um alimento ao cardápio</p>
                
                <div className={styles.popup_nome}>
                    <label for="name">Nome do alimento:</label>
                    <input type="text" id="name" name="name" placeholder="Buscar nome do alimento"></input>
                </div>

                    <div className={styles.popup_quantcalori}>
                        <div>
                            <label for="quantidade">Quantidade (em g):</label>
                            <input type="number" id="quantidade" name="quantidade" placeholder="Ex.: 100"></input>
                        </div>
                        
                        <div>
                            <label for="calorias">Calorias (Kcal):</label>
                            <input type="number" id="calorias" name="calorias" placeholder="Ex.: 350"></input>
                        </div>
                    </div>

                <button type="submit" className={styles.save_btn} onClick={() => props.setAcionar(false)}>Salvar alimento</button>
                <button className={styles.close_btn} onClick={() => props.setAcionar(false)}><AiFillCloseCircle /></button>
                { props.children }
            </div>
        </div>
    ) : "";  
}

export default AddFood