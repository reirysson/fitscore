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
            <input type="submit" id="enviar" value="Café da manhã" onClick={(mostrarTabela)}></input>
            <a href="/">Lanche da manhã</a>
            <a href="/">Almoço</a>
            <a href="/">Lanche da tarde</a>
            <a href="/">Jantar</a>
            <a href="/">Ceia</a>

            <table id="cafe_manha">
                <tbody>
                    <tr>
                        <th>Alimento</th>
                        <th>Quantidade</th>
                        <th>Energia</th>
                    </tr>
                    <tr>
                        <td>
                            {alimentos.length > 0 &&
                            alimentos.map((alimento) => (
                            <p>{alimento.nome}</p>
                            ))}
                        </td>
                        <td>
                            {alimentos.length > 0 &&
                            alimentos.map((alimento) => (
                            <p>{alimento.quantidade}</p>
                            ))} 
                        </td>
                        <td>
                            {alimentos.length > 0 &&
                            alimentos.map((alimento) => (
                            <p>{alimento.calorias}</p>
                            ))}   
                        </td>
                    </tr>
                </tbody>  
            </table>

            
        </div>
    )
}

export default Table