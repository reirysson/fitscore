import styles from './Checklist.module.css'
import Select from './Select'
import { useEffect,useState } from 'react'
import { listarAlimentos, listarHorario } from '../../api'

function Checklist({ alimentoData }) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})
    const [alimentos, setAlimentos] = useState([])
    const [alimentosFiltrados, setAlimentosFiltrados] = useState([])
    
    useEffect(() => {
        setHorarios(listarHorario())
        setAlimentos(listarAlimentos())
        setAlimentosFiltrados(listarAlimentos())
    }, [])

    function handleHorario(e) {
        filtrarTipo(e.target.options[e.target.selectedIndex].text)
    }

    function filtrarTipo(tipo){
        if (tipo === "Todos")
            setAlimentosFiltrados(alimentos)
        else 
            setAlimentosFiltrados(alimentos.filter(a => a.tipo === tipo))
    }

    return(
        <div className={styles.checklist_completo}>

            <div className={styles.checklist_select}>
                <Select name="tipo_id" options={horarios} handleOnChange={handleHorario} value={horarios.tipo ? horarios.tipo : ''} />
            </div>

            <div className={styles.checklist_tabela}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do alimento</th>
                            <th>Você comeu?</th>
                        </tr>
                    </thead>
                        <tbody>
                            {alimentosFiltrados.map((alimento) => (
                                <tr key={alimento.id}>
                                    <td>{alimento.nome}</td>
                                    <td>nao sim</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checklist