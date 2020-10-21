import React, { useState, useEffect } from 'react'

function SignInBox(props) {
	const [items, itemsSet] = useState()
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			flexShrink: 3,
			height: '150px',
			width: '300px',
			backgroundColor: 'white',
		},
		header: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: '21px',
			width: '260px',
			fontWeight: '700',
			margin: '10px',
		},
		btn: {
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '30px',
			width: '260px',
			backgroundColor: 'rgb(240, 193, 75)',
			borderRadius: '3px',
			margin: '10px',
			fontSize: '12px',
		},
	}

	return (
		<div style={styles.container}>
			<div style={styles.header}>Sign in for the best experience</div>
			<div style={styles.btn}>Sign in securely</div>
		</div>
	)
}

export default SignInBox
