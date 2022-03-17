import React from 'react'
import PropTypes from 'prop-types'
import Product from '../../containers/Product'

function ProductList({ products }) {
    return (
        <div>
            <h3 className="mb-3">Products</h3>
            <ul className="d-flex flex-wrap justify-content-between p-0">
                {products.map(product => (
                    <li key={product.id} style={{ listStyleType: 'none', width: '32%', marginBottom: '20px' }}>
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList
