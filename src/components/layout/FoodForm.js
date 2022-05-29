import { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import styles from './FoodForm.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'

function FoodForm({handleSubmit, alimentoData, acionar}) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})
    const [alimentos, setAlimentos] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/horarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setHorarios(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(alimento)
        handleSubmit(alimento)
    }

    function handleChange(e) {
        setAlimento({ ...alimento, [e.target.name]: e.target.value})
        console.log(alimento)
    }

    function handleHorario(e) {
        setAlimento({
            ...alimento,
            tipo: e.target.options[e.target.selectedIndex].text
        })
        console.log(alimento)
    }

    
    
    return (acionar) ? (
        <div className={styles.popup}>
            <form className={styles.popup_inner} onSubmit={submit}>
            <button className={styles.close_btn} onClick={() => acionar=(false)}><AiFillCloseCircle /></button>
            <h2>Adicionar alimento</h2>
            <p>Preencha as informações a baixo para adicionar um alimento ao cardápio</p>
            <Input type="text" text="Nome do alimento:" name="nome" placeholder="Buscar nome do alimento" handleOnChange={handleChange} value={alimento.nome ? alimento.nome : ''}/>
            <Input type="number" text="Quantidade (em g):" name="quantidade" placeholder="Ex.: 100" handleOnChange={handleChange} value={alimento.quantidade ? alimento.quantidade : ''}/>
            <Input type="number" text="Calorias (Kcal):" name="calorias" placeholder="Ex.: 350" handleOnChange={handleChange} value={alimento.calorias ? alimento.calorias : ''}/>
            <Select name="horario_id" text="Selecione o horário" options={horarios} handleOnChange={handleHorario} value={alimento.tipo ? alimento.tipo : ''}/>
            <button type="submit" className={styles.save_btn} onClick={() => acionar=(false)}>Salvar alimento</button>
        </form>
        </div>
    ) : "";
}

export default FoodForm