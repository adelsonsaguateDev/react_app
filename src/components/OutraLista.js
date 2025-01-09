function OutraLista({ itens }){

    return (
        <>
            <h3>Lista de Disciplinas: {itens.length}</h3>
            {itens.length > 0 ? (
                 itens.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>Não há disciplinas disponíveis</p>
                )}


        </>
    )

}

export default OutraLista;