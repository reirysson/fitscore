import styles from './Home.module.css'
import Resumo from '../layout/Resumo'
import Checklist from '../layout/Checklist'

function Home(){

    return (
        <div className={styles.container}>
            <Checklist />
            <Resumo />  
        </div>
    )
}

export default Home