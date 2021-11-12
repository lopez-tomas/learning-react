import { Component } from 'react'

const styles = {
	bubble_alert: {
		backgroundColor: '#E9725A',
		color: '#fff',
		borderRadius: '15px',
		padding: '2px 10px',
		fontSize: '0.9rem',
		width: '20px',
	}
}

class BubbleAlert extends Component {
	getNumber(n) {
		if (!n) { return ' ' }
		return n > 9 ? '9+' : n
	}

	render() {
		const { value } = this.props

		return (
			<span style={styles.bubble_alert}>
				{this.getNumber(value)}
			</span>
		)
	}
}

export default BubbleAlert
