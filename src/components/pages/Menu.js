import styles from './Menu.module.css'
import { useState } from 'react'
import FoodForm from '../layout/FoodForm'
import Table from '../layout/Table'
import { inserirAlimento } from '../../api'
import { MdAddBox } from 'react-icons/md'

function Menu(){
    const [buttonPopup, setButtonPopup] = useState(false)
    const [chave, setChave] = useState(0)
    const [id, setId] = useState(0)

    function createAlimento(alimento) {
        inserirAlimento({...alimento, id})
        setButtonPopup(false)
        setChave(chave+1)
        setId(id+1)
    }

    return (
        <div>
            <Table key={chave}/> 
            <FoodForm closeModal={(() => {setButtonPopup(false)})} acionar={buttonPopup} handleSubmit={createAlimento} setAcionar={setButtonPopup}/>
            <div className={styles.btn_add}>
                <button onClick={() => setButtonPopup(true)}><MdAddBox />Adicionar alimento</button>
            </div>
        </div>
    )
}

export default Menu