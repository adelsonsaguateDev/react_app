function Form() {

    function addUser(e){
        e.preventDefault();
        const nome = document.querySelector('input[name="nome"]').value;
        alert(`Nome cadastrado: ${nome}`);
        document.querySelector('input[name="nome"]').value = '';
        document.querySelector('form').reset();
    }
    
    return (
        <div>
            <h1>Dados Pessoais</h1>
            <form onSubmit={addUser}>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite o seu nome" name="nome"/>
                </div>
                <div>
                    <input type="submit" value="Registrar" />
                </div>
            </form>
        </div>
    )

}

export default Form