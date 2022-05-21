import styles from './Menu.module.css'
import { useState } from 'react'
import AddFood from './AddFood'

function Menu(){
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div>
            <div className={styles.menu_superior}>
                <input type="text" id="name" name="name" placeholder="Pesquisar alimento na tabela"></input>
                <button onClick={() => setButtonPopup(true)}>Adicionar alimento</button>
            </div>
            <AddFood acionar={buttonPopup} setAcionar={setButtonPopup}/> 
        </div>
    )
}

export default Menu