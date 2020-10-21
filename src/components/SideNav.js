import React from 'react'

function SideNav() {
	const styles = {
		background: {
			visibility: 'hidden',
			opacity: 0,
			position: 'absolute',
			height: '100vh',
			width: '100%',
			backgroundColor: 'rgba(51,51,51,.9)',
		},
		header_container: {
			display: 'flex',
			visibility: 'hidden',
			opacity: 0,
		},
		side_nav: {
			height: '100vh',
			width: 400,
			backgroundColor: 'white',
		},
		header: {
			display: 'flex',
			color: 'white',
			height: 50,
			fontSize: 20,
			paddingLeft: 50,
			alignItems: 'center',
			backgroundColor: '#232f3e',
		},
		close: {
			cursor: 'default',
			fontSize: 30,
			color: 'white',
			margin: 15,
		},
		category: {
			color: 'grey',
			marginTop: 30,
			marginLeft: 50,
		},
		item: {
			marginTop: 30,
			marginLeft: 50,
		},
	}

	const handleClose = () => {
		document.getElementById('SideNav_Container').style.visibility = 'hidden'
		document.getElementById('SideNav_Container').style.opacity = '0'
		document.getElementById('SideNav').style.visibility = 'hidden'
		document.getElementById('SideNav').style.opacity = '0'
	}

	return (
		<div id='SideNav_Container' style={styles.background}>
			<div id='SideNav' style={styles.header_container}>
				<div style={styles.side_nav}>
					<div style={styles.header}>Hello</div>
					<div style={styles.category}>SHOP BY CATEGORY</div>
					<div style={styles.item}>Item 1</div>
					<div style={styles.item}>Item 2</div>
					<div style={styles.item}>Item 3</div>
					<div style={styles.item}>Item 4</div>
					<div style={styles.item}>Item 5</div>
					<div style={styles.item}>Item 6</div>
					<div style={styles.item}>Item 7</div>
					<div style={styles.item}>Item 8</div>
					<div style={styles.item}>Item 9</div>
				</div>
				<div onClick={() => handleClose()} style={styles.close}>
					X
				</div>
			</div>
		</div>
	)
}

export default SideNav
