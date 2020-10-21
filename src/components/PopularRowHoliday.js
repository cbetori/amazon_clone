import React, { useState, useEffect } from 'react'

function PopularRowHoliday(props) {
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
			marginRight: '10px',
		},
		buttonLeft: {
			display: 'none',
			position: 'absolute',
			height: '200px',
			width: '50px',
			backgroundColor: 'white',
			borderWidth: '1px',
		},
		buttonRight: {
			display: 'none',
			position: 'absolute',
			height: '200px',
			width: '50px',
			marginLeft: '1450px',
			backgroundColor: 'white',
			borderWidth: '1px',
		},
	}

	const handleHover = (id) => {
		document.getElementById(id).style.overflow = 'auto'
		document.getElementById(id + 'leftbtn').style.display = 'block'
		document.getElementById(id + 'rightbtn').style.display = 'block'
	}

	const handleLeave = (id) => {
		document.getElementById(id).style.overflow = 'hidden'
		document.getElementById(id + 'leftbtn').style.display = 'none'
		document.getElementById(id + 'rightbtn').style.display = 'none'
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
				style={styles.buttonLeft}
				onClick={() => scollHorzional(props.item.imagePath, true)}
			>
				{'<'}
			</button>
		)
		for (let i = 0; i < array.length; i++) {
			let image = imagePath + array[i]
			result.push(
				<img id={image} style={styles.image} src={require('../' + image)} />
			)
		}
		result.push(
			<button
				id={imagePath + 'rightbtn'}
				style={styles.buttonRight}
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

export default PopularRowHoliday
