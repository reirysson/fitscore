import { useEffect, useState } from 'react'
import styles from './Table.module.css'

function Table() {
    const [alimentos, setAlimentos] = useState([])

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
            })
            .catch(err => console.log(err))
    }, [])

    function mostrarTabela(){
        document.getElementById('cafe_manha').style.display = '';
    }

    return (
        <div className={styles.container}>
            <input type="button" id="tabela1" value="Café da manhã" onClick={(mostrarTabela)}></input>
            <input type="button" id="tabela2" value="Lanche da manhã" onClick={(mostrarTabela)}></input>
            <input type="button" id="tabela3" value="Almoço" onClick={(mostrarTabela)}></input>
            <input type="button" id="tabela4" value="Lanche da tarde" onClick={(mostrarTabela)}></input>
            <input type="button" id="tabela5" value="Jantar" onClick={(mostrarTabela)}></input>
            <input type="button" id="tabela6" value="Ceia" onClick={(mostrarTabela)}></input>

            <table id="cafe_manha">
                <tbody>
                    <tr>
                        <th>Alimento</th>
                        <th>Quantidade</th>
                        <th>Energia</th>
                    </tr>
                    {alimentos.map((alimento) => (
                        <tr>
                            <td>{alimento.nome}</td>
                            <td>{alimento.quantidade}</td>
                            <td>{alimento.calorias}</td>
                            <td>{alimento.horario.name}</td>
                        </tr>
                    ))}
                </tbody>  
            </table>
        </div>
    )
}

export default Table