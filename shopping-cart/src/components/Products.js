import { Component } from 'react'
import Product from './Product'

class Products extends Component {
	render() {
		const { products, add_to_cart } = this.props

		return (
			<div>
				{products.map(product => 
					<Product
						add_to_cart={add_to_cart}
						key={product.name}
						product={product}
					/>)}
			</div>
		)
	}
}

export default Products
