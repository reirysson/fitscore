import styles from './Menu.module.css'
import { useState } from 'react'
import FoodForm from './FoodForm'
import { useNavigate } from 'react-router-dom'

function Menu(){
    const [buttonPopup, setButtonPopup] = useState(false)

    const navigate = useNavigate()

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
                console.log(data)
                navigate('/alimentos', { state: {message: 'Alimento adicionado com sucesso'}})  
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className={styles.menu_superior}>
                <input type="text" id="name" name="name" placeholder="Pesquisar alimento na tabela"></input>
                <button onClick={() => setButtonPopup(true)}>Adicionar alimento</button>
            </div>
            <FoodForm acionar={buttonPopup} handleSubmit={createAlimento}  setAcionar={setButtonPopup}/> 
        </div>
    )
}

export default Menu