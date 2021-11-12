import { Component } from 'react'
import Product from './Product'

const styles = {
	products: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
}

class Products extends Component {
	render() {
		const { products, add_to_cart } = this.props

		return (
			<div style={styles.products}>
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
