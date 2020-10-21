import React, { useState, useEffect } from 'react'
import retrieveImage from '../imageFetcher'

function PopularRow(props) {
	const [image, imageSet] = useState({ messsage: '', status: '' })
	const styles = {
		container: {
			display: 'flex',
			flexShrink: 3,
			alignItems: 'center',
			flexDirection: 'column',
			width: '325px',
			maxHeight: '420px',
			backgroundColor: 'white',
		},
		header: {
			margin: 10,
			textTransform: 'capitalize',
		},
		image: {
			width: '70%',
		},
	}

	let handleImage = async () => {
		let res = await retrieveImage(props.item.name.toLowerCase())
		if (res !== undefined) {
			imageSet(res)
			return res
		}
	}

	useEffect(() => {
		handleImage()
	}, [])
	return (
		<div style={styles.container}>
			<div style={styles.header}>{props.item.name}</div>
			<img src={image.message} style={styles.image} />
		</div>
	)
}

export default PopularRow
