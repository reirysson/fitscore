import { useEffect, useState } from 'react'
import styles from './Table.module.css'

function Table() {
    const [alimentos, setAlimentos] = useState([])
    const [alimentosFiltrados, setAlimentosFiltrados] = useState([])

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

    function filtraTipo(tipo){
        setAlimentosFiltrados(alimentos.filter(a => a.tipo === tipo))
    }

    return (
        <div className={styles.container}>
            <button onClick={() => filtraTipo("Café da manhã")}>Café da manhã</button>
            <button onClick={() => filtraTipo("Lanche da manhã")}>Lanche da manhã</button>
            <button onClick={() => filtraTipo("Almoço")}>Almoço</button>
            <button onClick={() => filtraTipo("Lanche da tarde")}>Lanche da tarde</button>
            <button onClick={() => filtraTipo("Jantar")}>Jantar</button>
            <button onClick={() => filtraTipo("Ceia")}>Ceia</button>

            <table id="cafe_manha">
                <tbody>
                    <tr>
                        <th>Alimento</th>
                        <th>Quantidade</th>
                        <th>Energia</th>
                    </tr>
                    {alimentosFiltrados.map((alimento) => (
                        <tr key={alimento.id}>
                            <td>{alimento.nome}</td>
                            <td>{alimento.quantidade}</td>
                            <td>{alimento.calorias}</td>
                            <td>{alimento.tipo}</td>
                        </tr>
                    ))}
                </tbody>  
            </table>
        </div>
    )
}

export default Table