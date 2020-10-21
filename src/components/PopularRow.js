import React, { useState, useEffect } from 'react'

function PopularRow(props) {
	const [items, itemsSet] = useState()
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			flexShrink: 3,
			maxHeight: '420px',
			width: '1500px',
			backgroundColor: 'white',
			marginBottom: '10px',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
		},
		header: {
			fontWeight: '400',
			fontSize: '21px',
			margin: '20px',
			textTransform: 'capitalize',
			backgroundColor: 'white',
		},
		row: {
			display: 'inline-flex',
			backgroundColor: 'white',
		},
		image: {
			cursor: 'pointer',
			marginRight: '10px',
		},
		button: {
			marginTop: '-20px',
			borderWidth: '1px',
			borderColor: '#e0e0e0',
			display: 'none',
			position: 'absolute',
			height: '200px',
			width: '50px',
			backgroundColor: 'white',
			borderWidth: '1px',
		},
		buttonLeft: {},
		buttonRight: {
			marginLeft: '1450px',
		},
	}

	const handleHover = (id) => {
		try {
			document.getElementById(id).style.overflow = 'auto'
			document.getElementById(id + 'leftbtn').style.display = 'block'
			document.getElementById(id + 'rightbtn').style.display = 'block'
		} catch {}
	}

	const handleLeave = (id) => {
		try {
			document.getElementById(id).style.overflow = 'hidden'
			document.getElementById(id + 'leftbtn').style.display = 'none'
			document.getElementById(id + 'rightbtn').style.display = 'none'
		} catch {}
	}

	const scollHorzional = (id, direction) => {
		if (direction) {
			document.getElementById(id).scrollLeft -= 20
		} else {
			document.getElementById(id).scrollLeft += 20
		}
	}

	let renderRow = (array, imagePath) => {
		let result = []
		result.push(
			<button
				id={imagePath + 'leftbtn'}
				style={{ ...styles.button, ...styles.buttonLeft }}
				onClick={() => scollHorzional(props.item.imagePath, true)}
			>
				{'<'}
			</button>
		)
		for (let i = 0; i < array.length; i++) {
			let image = imagePath + array[i]
			result.push(
				<img
					onClick={() => props.changePage('searchresults')}
					id={image}
					style={styles.image}
					src={require('../' + image)}
				/>
			)
		}
		result.push(
			<button
				id={imagePath + 'rightbtn'}
				style={{ ...styles.button, ...styles.buttonRight }}
				onClick={() => scollHorzional(props.item.imagePath, false)}
			>
				{'>'}
			</button>
		)
		itemsSet(result)
	}

	useEffect(() => {
		renderRow(props.item.items, props.item.imagePath)
	}, [])

	return (
		<div
			id={props.item.imagePath}
			style={styles.container}
			onMouseOver={() => handleHover(props.item.imagePath)}
			onMouseLeave={() => handleLeave(props.item.imagePath)}
		>
			<div style={styles.header}>{props.item.title}</div>
			<div style={styles.row}>{items}</div>
		</div>
	)
}

export default PopularRow
