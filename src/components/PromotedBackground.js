import React from 'react'
import school from '../images/school.jpg'

function PromotedBackground(props) {
	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'center',
		},
		background: {
			width: '100%',
		},
	}
	return (
		<div style={styles.container}>
			<img style={styles.background} src={school} />
			{props.children}
		</div>
	)
}

export default PromotedBackground
