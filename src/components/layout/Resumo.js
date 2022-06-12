import styles from './Resumo.module.css'
import { useState } from 'react'
import Meta from '../pages/Meta'
import edit from '../../img/edit.svg'
import legendaVerde from '../../img/legenda_verde.svg'
import legendaAmarela from '../../img/legenda_amarela.svg'
import legendaVermelha from '../../img/legenda_vermelha.svg'
import { useCaloriasContext } from '../../context/calorias'
import Barra from './Barra'


function Resumo(){
    const [buttonPopup, setButtonPopup] = useState(false)
    const caloriasState = useCaloriasContext()


    return(
        <div className={styles.resumo_completo}>
            <h3>Resumo das calorias</h3>
            <hr></hr>

            <p>Meta diária: {caloriasState.metaDiaria.metaCaloria} Kcal</p>
            <Barra />
            <div className={styles.resumo_legenda}>
                
                <div>
                    <h4>Legenda do gráfico:</h4>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVerde} alt="Legenda verde gráfico"/>
                        <p>Kcal consumidas: {caloriasState.caloriaConsumida.caloriaConsumida} Kcal</p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaAmarela} alt="Legenda amarela gráfico"/>
                        <p>Kcal restantes: {
                        caloriasState.metaDiaria.metaCaloria - caloriasState.caloriaConsumida.caloriaConsumida >0
                        ? caloriasState.metaDiaria.metaCaloria - caloriasState.caloriaConsumida.caloriaConsumida
                        : 0
                        } Kcal</p>
                    </div>
                    <div className={styles.resumo_legenda_item}>
                        <img src={legendaVermelha} alt="Legenda vermelha gráfico"/>
                        <p>Kcal excedidas: {
                        caloriasState.caloriaConsumida.caloriaConsumida - caloriasState.metaDiaria.metaCaloria >0 
                        ? caloriasState.caloriaConsumida.caloriaConsumida - caloriasState.metaDiaria.metaCaloria
                        : 0
                        } Kcal</p>
                    </div>
                </div>
                
                
                <div className={styles.resumo_editar}>
                    <button onClick={() => setButtonPopup(true)}><img src={edit} alt="Botão editar meta"/> Editar meta</button>
                </div>

            </div>
            
            <Meta closeModal={(() => {setButtonPopup(false)})} acionar={buttonPopup}  setAcionar={setButtonPopup}/>
        </div>
    )
}

export default Resumo