import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetailsCart from './DetailsCart'

const styles = {
	cart: {
		backgroundColor: '#359A2C',
		color: '#fff',
		border: 'none',
		padding: '15px',
		borderRadius: '15px',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
		left: 12,
		top: 20,
	}
}

class Cart extends Component {
	render() {
		const { cart, is_cart_visible, show_cart } = this.props
		const amount = cart.reduce((acc, el) => acc + el.amount, 0)
		return (
			<div>
				<span style={styles.bubble}>
					{amount !== 0
						? <BubbleAlert value={amount}/>
						: null}
				</span>
				<button onClick={show_cart} style={styles.cart}>
					Cart
				</button>
				{is_cart_visible ? <DetailsCart cart={cart}/> : null}
			</div>
		)
	}
}

export default Cart
