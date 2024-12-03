import styles from './Frase.module.css'

function Pessoa ({foto,nome, idade, profissao, sexo}){

    return (

        <div>
            <img src={foto} alt={nome} />
            <p className={styles.fraseContent}>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p className={styles.fraseContent}>Profissão: {profissao}</p>
            <p>Sexo: {sexo}</p>
        </div>

    )
}

export default Pessoa;