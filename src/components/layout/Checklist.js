import styles from './Checklist.module.css'
import Select from './Select'
import { useEffect,useState } from 'react'

function Checklist({ alimentoData }) {
    const [horarios, setHorarios] = useState([])
    const [alimento, setAlimento] = useState(alimentoData || {})
    
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

    function handleHorario(e) {
        setAlimento({
            ...alimento,
            tipo: e.target.options[e.target.selectedIndex].text
        })
        console.log(alimento)
    }

    return(
        <div>
            <Select name="tipo_id" options={horarios} handleOnChange={handleHorario} value={alimento.tipo ? alimento.tipo : ''} />
        </div>
    )
}

export default Checklist