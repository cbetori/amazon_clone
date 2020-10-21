import React, { useEffect, useState } from 'react'

function ProductPageAddToCard(props) {
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '250px',
			margin: 10,
			padding: 10,
			borderWidth: '1px',
			borderColor: '#dddddd',
			borderStyle: 'solid',
			borderRadius: '3px',
		},
		price: {
			marginTop: '10px',
			marginBottom: '10px',
			color: '#B12704',
			fontSize: '18px',
		},
		shipping: {
			marginTop: '10px',
			marginBottom: '10px',
			fontSize: '14px',
		},
		arrival: {
			display: 'flex',
			marginTop: '10px',
			marginBottom: '10px',
			fontSize: '14px',
		},
		bold: {
			marginLeft: '3px',
			marginRight: '3px',
			fontWeight: 'bold',
			fontSize: '14px',
		},
		blue: {
			marginLeft: '3px',
			marginRight: '3px',
			color: '#0066c0',
			fontSize: '14px',
		},
		bluedetails: {
			color: '#0066c0',
			fontSize: '14px',
		},
		details: {
			color: '#0066c0',
			marginTop: '10px',
			marginBottom: '10px',
			fontSize: '14px',
		},
		stock: {
			color: '#007600',
			marginTop: '10px',
			marginBottom: '10px',
		},
		containerreturns: {
			display: 'inline-flex',
		},
		quantity: {
			width: '60px',
		},
		add: {
			cursor: 'pointer',
			marginTop: '10px',
			width: '205px',
			height: '30px',
			backgroundColor: '#f0c14b',
			borderColor: '#a88734',
			borderRadius: '3px',
			borderWidth: '1px',
		},
		buy: {
			cursor: 'pointer',
			marginTop: '10px',
			width: '205px',
			height: '30px',
			backgroundColor: '#f2ad58',
			borderRadius: '3px',
			borderWidth: '1px',
		},
		image: {
			width: '200px',
		},
	}
	return (
		<div style={styles.container}>
			<div style={styles.price}>{props.item.price}</div>
			<div style={styles.shipping}>
				FREE Shipping on your first order.
				<div style={styles.containerreturns}>
					<div style={styles.bluedetails}>Details </div>&
					<div style={styles.blue}>FREE Returns</div>
				</div>
			</div>
			<div style={styles.arrival}>
				Arrives:
				<div style={styles.bold}>Friday, Oct 23</div>
			</div>

			<div style={styles.arrival}>
				Fastest delivery:
				<div style={styles.bold}>Saturday, Oct 17 </div>
			</div>

			<div>Order within 8 hrs and 19 mins</div>
			<div style={styles.details}>Details</div>
			<div style={styles.stock}>In Stock</div>
			<button style={styles.quantity}>Qty: 1</button>
			<button style={styles.add} onClick={() => props.addToCart(1)}>
				Add to Cart
			</button>
			<button style={styles.buy}>Buy Now</button>
		</div>
	)
}

export default ProductPageAddToCard
