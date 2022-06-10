import styles from './Resumo.module.css'
import { useState } from 'react'
import Meta from '../pages/Meta'
import edit from '../../img/edit.svg'
import barra from '../../img/barra.png'
import legendaVerde from '../../img/legenda_verde.svg'
import legendaAmarela from '../../img/legenda_amarela.svg'
import legendaVermelha from '../../img/legenda_vermelha.svg'
import { useCaloriasContext } from '../../context/calorias'


function Resumo(){
    const [buttonPopup, setButtonPopup] = useState(false)
    const calorias = useCaloriasContext()


    return(
        <div className={styles.resumo_completo}>
            <h3>Resumo das calorias</h3>
            <hr></hr>

            <p>Meta diária: 2.000 Kcal</p>
            <img src={barra} ></img>
            <div className={styles.resumo_legenda}>
                
                <div>
                    <h4>Legenda do gráfico:</h4>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVerde} alt="Botão editar meta"/>
                        <p>Kcal consumidas: {calorias} Kcal</p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaAmarela} alt="Botão editar meta"/>
                        <p>Kcal restantes: 0 Kcal</p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVermelha} alt="Botão editar meta"/>
                        <p>Kcal excedidas: 200 Kcal</p>
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