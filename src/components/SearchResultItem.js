import React, { useEffect, useState } from 'react'

function SearchResultItem(props) {
	const [stars, starsSet] = useState([])

	const styles = {
		container: {
			display: 'inline-flex',
			borderTopWidth: 2,
			borderTopColor: '#ececec',
			borderTopStyle: 'solid',
			height: '250px',
			width: '70vw',
			margin: 10,
			padding: 10,
		},
		description: {
			marginLeft: 20,
		},
		product: {
			margin: 10,
			marginBottom: '30px',
			textTransform: 'capitalize',
			fontSize: '18pt',
			fontWeight: '400',
		},
		rating: { margin: 10 },
		category: {
			margin: 10,
			fontWeight: 'bold',
			color: '#0066c0',
			fontSize: '14pt',
		},
		amount: {
			margin: 10,
			fontSize: '16pt',
			fontWeight: '400',
		},
	}
	const handleStars = () => {
		let result = []
		for (let i = 1; i < 6; i++) {
			if (props.item.review > i) {
				result.push(<i className='fas fa-star' style={{ color: 'orange' }} />)
				continue
			}
			if (Math.round(props.item.review) >= i) {
				result.push(
					<i className='fas fa-star-half-alt' style={{ color: 'orange' }} />
				)
				continue
			}
			if (props.item.review <= i) {
				result.push(<i className='far fa-star' style={{ color: 'orange' }} />)
				continue
			}
		}
		return result
	}

	useEffect(() => {
		starsSet(handleStars())
	}, [])

	return (
		<div style={styles.container}>
			<img
				id='imageSearchResult'
				src={require('../' + props.item.imagePath)}
				onClick={() => props.changePage('productpage', props.item)}
			/>

			<div style={styles.description}>
				<div
					style={styles.product}
					onClick={() => props.changePage('productpage', props.item)}
				>
					{props.item.title}
				</div>
				<div style={styles.rating}>{stars}</div>
				<div style={styles.amount}>{props.item.price}</div>
			</div>
		</div>
	)
}

export default SearchResultItem
