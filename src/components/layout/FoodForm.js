import { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import styles from './FoodForm.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { listarHorario } from '../../api'

function FoodForm({ handleSubmit, alimentoData, acionar, closeModal }) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})

    useEffect(() => {
        setHorarios(listarHorario())
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(alimento)
    }

    function handleChange(e) {
        setAlimento({ ...alimento, [e.target.name]: e.target.value })
    }

    function handleHorario(e) {
        console.log(e.target.options[e.target.selectedIndex].text)
        setAlimento({
            ...alimento,
            tipo: e.target.options[e.target.selectedIndex].text
        })
    }

    return (acionar) ? (
        <div className={styles.popup}>
            <form className={styles.popup_inner} onSubmit={submit}>
                <button type="button" className={styles.close_btn} onClick={() => closeModal()}><AiFillCloseCircle /></button>
                <h2>Adicionar alimento</h2>
                <p>Preencha as informações a baixo para adicionar um alimento ao cardápio</p>
                <div className={styles.input_container}>
                    <Input
                        type="text"
                        text="Nome do alimento:"
                        name="nome"
                        placeholder="Buscar nome do alimento"
                        handleOnChange={handleChange}
                        value={alimento.nome ? alimento.nome : ''}
                        required
                    />
                    <Input
                        type="number"
                        text="Quantidade (em g):"
                        name="quantidade"
                        placeholder="Ex.: 100"
                        handleOnChange={handleChange}
                        value={alimento.quantidade ? alimento.quantidade : ''}
                        required
                    />
                    <Input
                        type="number"
                        text="Calorias (Kcal):"
                        name="calorias"
                        placeholder="Ex.: 350"
                        handleOnChange={handleChange}
                        value={alimento.calorias ? alimento.calorias : ''}
                        required
                    />
                    <Select
                        name="horario_id"
                        text="Selecione o horário"
                        options={horarios}
                        handleOnChange={handleHorario}
                        value={alimento.tipo ? alimento.tipo : ''}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={styles.save_btn}
                    onClick={() => closeModal()}>Salvar alimento
                </button>
            </form>
        </div>
    ) : "";
}

export default FoodForm