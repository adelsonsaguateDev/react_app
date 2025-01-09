function Saudacao({nome}){
     function gerarSaudacao(nome){
        return "Ola, "+nome+", tudo bem?"
     }
    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao