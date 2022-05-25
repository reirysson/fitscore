import styles from './Menu.module.css'
import { useState } from 'react'
import FoodForm from './FoodForm'
import Table from './Table'

function Menu(){
    const [buttonPopup, setButtonPopup] = useState(false)

    function createAlimento(alimento) {
        alimento.fitscore = 0
        alimento.services = []

        fetch('http://localhost:5000/alimentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alimento),
        })
            .then((resp) => resp.json())
            .then((data) => {
            setButtonPopup(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className={styles.menu_superior}>
                <button onClick={() => setButtonPopup(true)}>Adicionar alimento</button>
            </div>
            <FoodForm acionar={buttonPopup} handleSubmit={createAlimento}  setAcionar={setButtonPopup}/>
            <Table /> 
        </div>
    )
}

export default Menu