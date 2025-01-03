function Evento({numero}){

    function meuevento() { 
        alert("Evento acionado: " + numero);
    }

    return (
        <div>
            <p>Clique aqui, para acionar o evento</p>
            <button 
                style={{ 
                    marginTop: "5px", 
                    borderRadius: "10px", 
                    color: "rgb(255,255,255)",
                    background: "rgb(11, 81, 185)"}} 
                    onClick={meuevento}>
                    Acionar evento</button>
        </div>
    )
}

export default Evento