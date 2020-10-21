import React, { useEffect, useState } from 'react'

function ProductPageAddToCard(props) {
	const [quantity, quantitySet] = useState(1)
	let styles = {
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
		quantityAdded: {
			display: 'none',
			backgroundColor: '#efefef',
			zIndex: 1,
		},
		btnwrapper: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}

	const handleQuantity = () => {
		let visibility = document.querySelector('.quantityAdded')
		let currentQuantity = document.querySelector('.currentQuantity')
		console.log(visibility)
		if (visibility.style.display === 'none') {
			visibility.style.display = 'block'
			currentQuantity.style.display = 'none'
		} else {
			visibility.style.display = 'none'
			currentQuantity.style.display = 'block'
		}
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
			<button style={styles.quantity} onClick={() => handleQuantity()}>
				<div className={'currentQuantity'}>{'Qty: ' + quantity}</div>
				<div className={'quantityAdded'} style={styles.quantityAdded}>
					<div onClick={() => quantitySet(1)}>1</div>
					<div onClick={() => quantitySet(2)}>2</div>
					<div onClick={() => quantitySet(3)}>3</div>
					<div onClick={() => quantitySet(4)}>4</div>
					<div onClick={() => quantitySet(5)}>5</div>
					<div onClick={() => quantitySet(6)}>6</div>
					<div onClick={() => quantitySet(7)}>7</div>
					<div onClick={() => quantitySet(8)}>8</div>
					<div onClick={() => quantitySet(9)}>9</div>
					<div onClick={() => quantitySet(10)}>10</div>
				</div>
			</button>
			<div style={styles.btnwrapper}>
				<button style={styles.add} onClick={() => props.addToCart(quantity)}>
					Add to Cart
				</button>
				<button style={styles.buy}>Buy Now</button>
			</div>
		</div>
	)
}

export default ProductPageAddToCard
