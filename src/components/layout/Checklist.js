import styles from './Checklist.module.css'
import Select from './Select'
import { useEffect,useState } from 'react'

function Checklist({ alimentoData }) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})
    const [alimentos, setAlimentos] = useState([])
    const [alimentosFiltrados, setAlimentosFiltrados] = useState([])
    
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

    useEffect(() => {
        fetch('http://localhost:5000/alimentos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                //console.log(data)
                setAlimentos(data)
                setAlimentosFiltrados(data)
            })
            .catch(err => console.log(err))
    }, [])

    function handleHorario(e) {
        setAlimento({
            ...alimento,
            tipo: e.target.options[e.target.selectedIndex].text
        })
        console.log(alimento)
    }

    function filtrarTipo(tipo){
        if (tipo === "Todos")
            setAlimentosFiltrados(alimentos)
        else 
            setAlimentosFiltrados(alimentos.filter(a => a.tipo === tipo))
    }

    return(
        <div>
            <div>
                <Select name="tipo_id" options={horarios} handleOnChange={handleHorario} value={alimento.tipo ? alimento.tipo : ''} />
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Nome do alimento</th>
                        </tr>
                        {alimentosFiltrados.map((alimento) => (
                            <tr key={alimento.id}>
                                <td>{alimento.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checklist