import styles from './Speak.module.css'
import fotoperfil from '../../img/foto_perfil.png'

function Speak() {
    return (
        <div className={styles.quemsomos_completo}>

            <h1>Quem somos?</h1>

            <div className={styles.quemsomos_descricao}>
                <div className={styles.quemsomos_texto}>
                    <p>O FitScore é um projeto para o Trabalho de Conclusão de Curso do discente Reirysson Thiago da Costa, 
                        do curso Interdisciplinar de Ciência e Tecnologia - UFERSA, campus Pau dos Ferros, 
                        sob orientação do Professor Me. Felipe Torres Leite.
                    </p>
                    <p>O FitScore trata-se de uma ferramenta tecnológica que propõe um melhor gerenciamento da 
                        alimentação diária do usuário. Nela é possível inserir informações sobre a 
                        quantidade de calorias consumida em cada refeição ao longo do dia, estabelecendo 
                        metas desejadas e comparando com o consumo real de calorias de forma diária, semanal e mensal. 
                        As informações calóricas sobre alimentos estarão cadastradas no software, baseadas em referências nacionais.
                    </p>

                   <a href="https://forms.gle/rcb4FXj7AwkBbrE4A">Faça uma avaliação do nosso projeto</a>
                </div>

                <div className={styles.quemsomos_foto}>
                    <img src={fotoperfil} alt="Foto do perfil"/>
                    <h4>Reirysson Costa</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Speak