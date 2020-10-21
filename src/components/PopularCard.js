import React, { useState, useEffect } from 'react'
import retrieveImage from '../imageFetcher'

function PopularCard(props) {
	const [image, imageSet] = useState({ messsage: '', status: '' })
	const styles = {
		container: {
			display: 'flex',
			flexShrink: 3,
			margin: 10,
			flexDirection: 'column',
			minWidth: '325px',
			height: '420px',
			backgroundColor: 'white',
		},
		header: {
			margin: 10,
			fontWeight: '700',
			fontSize: '21px',
		},
		image: {
			width: '90%',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		shopnow: {
			color: '#0066c0',
			margin: 'auto',
			marginBottom: '20px',
			marginLeft: '10px',
			cursor: 'pointer',
		},
		price: {
			marginTop: '25px',
			marginBotom: '20px',
			marginLeft: '10px',
			fontSize: '21px',
		},
		description: {
			marginTop: '10px',
			marginLeft: '10px',
			fontSize: '13px',
		},
	}

	return (
		<div style={styles.container}>
			<div style={styles.header}>{props.item.title}</div>
			<img src={require('../' + props.item.imagePath)} style={styles.image} />
			<div style={styles.price}>{props.item.price}</div>
			<div style={styles.description}>{props.item.description}</div>
			<div style={styles.shopnow}>Shop Now</div>
		</div>
	)
}

export default PopularCard
