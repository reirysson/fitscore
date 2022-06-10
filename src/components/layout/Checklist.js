import styles from './Checklist.module.css'
import Select from './Select'
import { useContext, useEffect,useState } from 'react'
import { listarAlimentos, listarHorario } from '../../api'
import verified from '../../img/verified.svg'
import not from '../../img/not.svg'
import { useCaloriasContext } from '../../context/calorias'

function Checklist({ alimentoData }) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})
    const [alimentos, setAlimentos] = useState([])
    const [alimentosFiltrados, setAlimentosFiltrados] = useState([])
    const [tipoSelecionado, setTipoSelecionado] = useState('')
    const calorias = useCaloriasContext()

    useEffect(() => {
        setHorarios(listarHorario())
        setAlimentos(listarAlimentos())
        setAlimentosFiltrados(listarAlimentos())
    }, [])

    function handleHorario(e) {
        filtrarTipo(e.target.options[e.target.selectedIndex].text)
    }

    function filtrarTipo(tipo){
        setTipoSelecionado(tipo)
        if (tipo === "Todos")
            setAlimentosFiltrados(alimentos)
        else 
            setAlimentosFiltrados(alimentos.filter(a => a.tipo === tipo))
    }

    function filtraCalorias(alimentoId){
        const pegarCalorias = alimentos.filter(alimento => { 
            return alimento.id === alimentoId
        })
        console.log(pegarCalorias)
    }

    return(
        <div className={styles.checklist_completo}>

            <div className={styles.checklist_select}>
                <Select name="tipo_id" options={horarios} handleOnChange={handleHorario} value={tipoSelecionado} />
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
                                    <td><button onClick={() => filtraCalorias(alimento.id)}><img src={verified} alt="Icone de marcar que comeu no checkist"/></button> <button><img src={not} alt="Icone de marcar que não comeu no checklist"/></button></td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checklist