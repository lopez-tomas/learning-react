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
	render() {
		return (
			<span style={styles.bubble_alert}>
				5
			</span>
		)
	}
}

export default BubbleAlert
