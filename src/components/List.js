import Item from './Item';
function List(){
    return (

        <>
        <h2>Minha lista:</h2>
            <ul>
                <Item marca="BT-50" ano_lacamento={1984}/>
                <Item marca="Mercedes" ano_lacamento={1976}/>
                <Item marca="Nissan-Kuke" ano_lacamento={1962}/>
                <Item /> {/* Uma forma de mostrar os valores definidos nos props */}
            </ul>
        </>
    )
}

export default List