import Button from './evento/Button';

function Evento(){

    function meuevento() { 
        alert("Activando o primeiro Evento!");
    }

    function segundoEvento() { 
        alert("Activando o segundo Evento!");
    }

    return (
        <div>
            <p>Clique aqui, para acionar o evento</p>
            <Button event={meuevento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            
        </div>
    )
}

export default Evento