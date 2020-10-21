import React, { useEffect, useState } from 'react'
import ProductPageAddToCard from './ProductPageAddToCart'

function ProductPage(props) {
	const [stars, starsSet] = useState([])
	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'space-between',
			margin: 10,
			padding: 10,
		},
		title: { marginTop: '10px', fontSize: '21px', fontWeight: '400' },
		stars: { marginTop: '10px' },
		list: { marginTop: '10px' },
		image: {},
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
			<img style={styles.image} src={require('../' + props.item.imagePath)} />
			<div>
				<div style={styles.title}>{props.item.title}</div>
				<div style={styles.stars}>{stars}</div>
				<ul>
					<li style={styles.list}>
						A CLASSROOM CLASSIC: this 6-pack of 1-subject notebooks helps you
						identify your subjects at a glance with color-coding efficiency;
						color assortment may vary
					</li>
					<li style={styles.list}>
						THE RIGHT RULING: these 8" x 10-1/2", college-ruled notebooks fit
						more writing per page than wide-ruled sheets; each notebook provides
						70 double-sided sheets with red margin lines
					</li>
					<li style={styles.list}>
						PERFECT PERFORATION: Dependable micro perforated sheets retain your
						must-have notes but still detach cleanly when you’re ready to revise
						GLIDE FROM PAGE TO PAGE: Your favorite gel or ballpoint pens will
						move effortlessly across these smooth pages for A+ notes with
					</li>
					<li style={styles.list}>
						minimal ink bleeding or show-through 3-HOLE PUNCHED: Every notebook
						comes 3-hole punched to fit a standard binder; take along one
						notebook or several to save extra trips to the locker
					</li>
				</ul>
			</div>
			<ProductPageAddToCard item={props.item} addToCart={props.addToCart} />
		</div>
	)
}

export default ProductPage
