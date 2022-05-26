import styles from './Home.module.css'
import Resumo from './Resumo'
import Checklist from './Checklist'

function Home(){
    return (
        <div className={styles.container}>
            <Checklist />
            <Resumo />
        </div>
    )
}

export default Home