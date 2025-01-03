import PropTypes from 'prop-types'

function Item({marca, ano_lacamento}){
    return (
        <>
            <li>{marca} - {ano_lacamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lacamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Marca não informada',
    ano_lacamento: 0
}

export default  Item