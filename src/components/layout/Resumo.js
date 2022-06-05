import styles from './Resumo.module.css'
import { useState } from 'react'
import Meta from '../pages/Meta'
import edit from '../../img/edit.svg'
import legendaVerde from '../../img/legenda_verde.svg'
import legendaAmarela from '../../img/legenda_amarela.svg'
import legendaVermelha from '../../img/legenda_vermelha.svg'

function Resumo(){
    const [buttonPopup, setButtonPopup] = useState(false)

    return(
        <div className={styles.resumo_completo}>
            <h3>Resumo das calorias</h3>
            <hr></hr>
            <div className={styles.resumo_legenda}>
                
                <div>
                    <h4>Legenda do gráfico:</h4>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVerde} alt="Botão editar meta"/>
                        <p>Kcal consumidas: </p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaAmarela} alt="Botão editar meta"/>
                        <p>Kcal restantes: </p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVermelha} alt="Botão editar meta"/>
                        <p>Kcal excedidas: </p>
                    </div>
                </div>
                
                
                <div className={styles.resumo_editar}>
                    <button onClick={() => setButtonPopup(true)}><img src={edit} alt="Botão editar meta"/> Editar meta</button>
                </div>

            </div>
            
            <Meta acionar={buttonPopup}  setAcionar={setButtonPopup}/>
        </div>
    )
}

export default Resumo