import React from 'react'
import PropTypes from 'prop-types'

function CartItem({ name, price, currency, onClick }) {
    return (
        <div className="d-flex justify-content-between my-2">
            <div>
                <button className="btn btn-danger btn-sm" onClick={onClick}>X</button>
                <span className="ms-2">{name}</span>
            </div>
            <div className="fw-bold">{price} {currency}</div>
        </div>
    )
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem
