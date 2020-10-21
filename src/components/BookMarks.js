import React, { useState, useEffect } from 'react'

function BookMarks() {
	const [listView, listViewSet] = useState()
	const items = [
		'Best Sellers',
		'Customer Service',
		"Today's Deals",
		'New Releases',
		'Find a Gift',
		'Whole Foods',
		'Gift Cards',
		'Free Shipping',
		'Registry',
		'Sell',
		'Coupons',
		'AmazonBasics',
		'#FoundItOnAmazon',
		'Shopper Toolkit',
	]

	const styles = {
		bookmarks: {
			display: 'flex',
			height: 40,
			color: 'white',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: '#232f3e',
		},
		address: {
			cursor: 'pointer',
			display: 'flex',
			flexDirection: 'column',
			marginLeft: 20,
		},
		list_container: {
			display: 'flex',
			justifyContent: 'space-evenly',
			whiteSpace: 'nowrap',
		},
		items: {
			cursor: 'pointer',
			fontSize: 14,
			borderStyle: 'none',
			padding: 5,
			margin: 5,
		},
	}

	const handleEnter = (e) => {
		if (e !== '') {
			document.getElementById(e).style.borderColor = 'white'
			document.getElementById(e).style.borderWidth = 'thin'
			document.getElementById(e).style.borderStyle = 'solid'
			document.getElementById(e).style.borderRadius = '3px'
		}
	}

	const handleLeave = (e) => {
		if (e !== '') {
			document.getElementById(e).style.borderColor = styles.items.borderColor
			document.getElementById(e).style.borderWidth = styles.items.borderWidth
			document.getElementById(e).style.borderStyle = styles.items.borderStyle
		}
	}

	let renderItems = () => {
		let result = items.map((e, i) => {
			return (
				<div
					key={i}
					id={'item' + i}
					style={styles.items}
					onMouseEnter={() => handleEnter('item' + i)}
					onMouseLeave={() => handleLeave('item' + i)}
				>
					{e}
				</div>
			)
		})
		listViewSet(result)
		return result
	}

	useEffect(() => {
		renderItems()
	}, [])

	return (
		<div style={styles.bookmarks}>
			<div style={styles.address}>
				<div style={{ whiteSpace: 'nowrap', fontSize: 12 }}>Hello </div>
				<div style={{ whiteSpace: 'nowrap', width: 200 }}>
					Select your address
				</div>
			</div>
			<div style={styles.list_container}>{listView}</div>
		</div>
	)
}

export default BookMarks
