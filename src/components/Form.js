import {useState} from 'react'
function Form() {
    function addUser(e){
        e.preventDefault();
        alert("O utilizador: " + nome+" foi registrado, com a senha: " + senha);
        
    }

    const [nome,setNome] = useState();
    const [senha,setSenha] = useState();
    
    return (
        <div>
            <h1>Dados Pessoais</h1>
            <form onSubmit={addUser}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="Digite o seu nome" 
                        onChange={(e) => setNome(e.target.value)}
                        
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Digite a sua senha"
                        onChange={(e) => setSenha(e.target.value)}

                   />
                </div>
                <div>
                    <input type="submit" value="Registrar" />
                </div>
            </form>
        </div>
    )

}

export default Form