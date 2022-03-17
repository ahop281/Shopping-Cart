import React from 'react'
import PropTypes from 'prop-types'

function Product({
    id,
    name,
    price,
    currency,
    image,
    isInCart,
    addToCart,
    removeFromCart
}) {

    const handleClick = () => {
        if(isInCart) {
            removeFromCart(id)
        } else {
            addToCart(id)
        }
    }

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="product" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between align-items-end mt-4">
                    <p className="card-text mb-0">{price} {currency}</p>
                    <button
                        className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                        onClick={handleClick}
                    >
                        {isInCart ? 'Remove' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product
