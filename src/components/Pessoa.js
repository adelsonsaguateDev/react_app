function Pessoa ({foto,nome, idade, profissao, sexo}){

    return (

        <div>
            <img src={foto} alt={nome} />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Sexo: {sexo}</p>
        </div>

    )
}

export default Pessoa;