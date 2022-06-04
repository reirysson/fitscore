import styles from './Resumo.module.css'
import { useState } from 'react'
import Meta from '../pages/Meta'

function Resumo(){
    const [buttonPopup, setButtonPopup] = useState(false)


    return(
        <div className={styles.resumo_completo}>
            <h3>Resumo das calorias</h3>
            <button onClick={() => setButtonPopup(true)}>Editar meta</button>
            <Meta acionar={buttonPopup}  setAcionar={setButtonPopup}/>
        </div>
    )
}

export default Resumo