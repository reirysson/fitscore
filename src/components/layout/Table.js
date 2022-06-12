import { useEffect, useState } from 'react'
import { listarAlimentos } from '../../api'
import styles from './Table.module.css'

function Table() {
    const [alimentos, setAlimentos] = useState([])
    const [alimentosFiltrados, setAlimentosFiltrados] = useState([])

    useEffect(() => {
        setAlimentos(listarAlimentos())
        setAlimentosFiltrados(listarAlimentos())
    }, [])

    function filtrarTipo(tipo) {
        if (tipo === "Todos")
            setAlimentosFiltrados(alimentos)
        else
            setAlimentosFiltrados(alimentos.filter(a => a.tipo === tipo))
    }

    return (
        <div className={styles.container}>
            <div className={styles.tipos}>
                <button onClick={() => filtrarTipo("Todos")}>Todos</button>
                <button onClick={() => filtrarTipo("Café da manhã")}>Café da manhã</button>
                <button onClick={() => filtrarTipo("Lanche da manhã")}>Lanche da manhã</button>
                <button onClick={() => filtrarTipo("Almoço")}>Almoço</button>
                <button onClick={() => filtrarTipo("Lanche da tarde")}>Lanche da tarde</button>
                <button onClick={() => filtrarTipo("Jantar")}>Jantar</button>
                <button onClick={() => filtrarTipo("Ceia")}>Ceia</button>
            </div>

            <table id="cafe_manha">
                <tbody>
                    <tr>
                        <th>Alimento</th>
                        <th>Quantidade (gramas)</th>
                        <th>Energia (Kcal)</th>
                    </tr>
                    {alimentosFiltrados.map((alimento) => (
                        <tr key={alimento.id}>
                            <td className={styles.itens_alimento}>{alimento.nome}</td>
                            <td className={styles.itens_alimento}>{alimento.quantidade}</td>
                            <td className={styles.itens_alimento}>{alimento.calorias}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table