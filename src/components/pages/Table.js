import { useEffect, useState } from 'react'

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
                console.log(data)
                setAlimentos(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <table>
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
            </table>

            
        </div>
    )
}

export default Table