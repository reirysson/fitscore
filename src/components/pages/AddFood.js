import styles from './AddFood.module.css'

function AddFood(props) {
    return (props.acionar) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <h2>Adicionar alimento</h2>
                <p>Preencha as informações a baixo para adicionar um alimento ao cardápio</p>

                <label for="name">Nome do alimento:</label>
                <input type="text" id="name" name="name" placeholder="Buscar nome do alimento"></input>

                <label for="quantidade">Quantidade (em g):</label>
                <input type="text" id="quantidade" name="quantidade" placeholder="Ex: 100"></input>

                <label for="calorias">Calorias (Kcal):</label>
                <input type="text" id="calorias" name="calorias" placeholder="Buscar nome do alimento"></input>

                <button className={styles.save_btn} onClick={() => props.setAcionar(false)}>Salvar alimento</button>
                <button className={styles.close_btn} onClick={() => props.setAcionar(false)}>Fechar</button>
                { props.children }
            </div>
        </div>
    ) : "";  
}

export default AddFood