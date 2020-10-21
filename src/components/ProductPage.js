import React, { useEffect, useState } from 'react'
import ProductPageAddToCard from './ProductPageAddToCart'
import PopularRow from './PopularRow'

function ProductPage(props) {
	const [stars, starsSet] = useState([])
	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'space-between',
			margin: 10,
			padding: 10,
		},
		title: {
			paddingLeft: '17px',
			marginTop: '10px',
			paddingBottom: '15px',
			fontSize: '21px',
			fontWeight: '700',
		},
		stars: {
			marginLeft: '20px',
			marginTop: '10px',
		},
		list: {
			paddingLeft: '-40px',
			marginTop: '10px',
			fontSize: '12pt',
		},
		wrapper: {
			marginRight: '50px',
		},
		image: {
			marginTop: 'auto',
			marginBottom: 'auto',
			width: 'auto',
			maxWidth: '400px',
			maxHeight: '400px',
			paddingRight: '25px',
		},
		shopnow: {
			fontSize: '14px',
			color: '#0066c0',
			marginLeft: '20px',
			cursor: 'pointer',
			borderBottomWidth: 'thin',
			borderBottomStyle: 'solid',
			borderBottomColor: '#e0e0e0',
		},
		popularrow: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: '100px',
			marginBottom: '100px',
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

	const holidayRows = [
		'home_holiday.jpg',
		'electronic_gifts.jpg',
		'holiday_dash.jpg',
		'toy_list.jpg',
		'fashion_list.jpg',
		'beauty_gift.jpg',
		'holiday_prep.jpg',
		'grocery_list.jpg',
		'gift_cards.jpg',
		'shop_gifts.jpg',
	]

	const basics = [
		'basics1.jpg',
		'basics2.jpg',
		'basics3.jpg',
		'basics4.jpg',
		'basics5.jpg',
		'basics6.jpg',
		'basics7.jpg',
	]

	useEffect(() => {
		window.scrollTo(0, 0)
		starsSet(handleStars())
	}, [])
	return (
		<div>
			<div style={styles.container}>
				<img style={styles.image} src={require('../' + props.item.imagePath)} />
				<div style={styles.wrapper}>
					<div style={styles.title}>{props.item.title}</div>
					<div style={styles.shopnow}>Visit our store</div>
					<div style={styles.stars}>{stars}</div>
					<ul>
						<li style={styles.list}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut
						</li>
						<li style={styles.list}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo
						</li>
						<li style={styles.list}>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident
						</li>
						<li style={styles.list}>
							Et harum quidem rerum facilis est et expedita distinctio. Nam
							libero tempore, cum soluta nobis est eligendi optio cumque nihil
							impedit quo minus id quod maxime placeat facere possimus, omnis
							voluptas assumenda est, omnis dolor repellendus.
						</li>
					</ul>
				</div>
				<ProductPageAddToCard item={props.item} addToCart={props.addToCart} />
			</div>
			<div style={styles.popularrow}>
				<PopularRow
					changePage={props.changePage}
					item={{
						title: 'All you need to get holiday ready',
						imagePath: 'images/holiday_images/',
						items: holidayRows,
					}}
				/>
				<PopularRow
					changePage={props.changePage}
					item={{
						title: 'Popular items from AmazonBasics',
						imagePath: 'images/basics/',
						items: basics,
					}}
				/>
			</div>
		</div>
	)
}

export default ProductPage
