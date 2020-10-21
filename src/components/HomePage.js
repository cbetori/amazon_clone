import React, { useEffect, useState } from 'react'
import PopularCard from './PopularCard'
import PopularRow from './PopularRow'
import PromotedBackground from './PromotedBackground'
import Collections from './Collections'
import SignInBox from './SignInBox'

function HomePage(props) {
	const [holidayRow, holidayRowSet] = useState()
	const [basicsRow, basicsRowSet] = useState()

	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: '#eaeded',
		},
		content_container: {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: 1500,
			minWidth: 1000,
			backgroundColor: '#eaeded',
		},
		image_container: {
			marginLeft: -10,
			marginRight: -10,
			display: 'flex',
		},
		row_container: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '10px',
			marginBottom: '10px',
		},
		row_container_top: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: '10px',
			marginTop: '-150px',
		},
		row_container_collections: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '10px',
			marginBottom: '10px',
			marginLeft: '-10px',
		},
		images: {},
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

	let renderHolidayRow = (array, title, imagePath) => {
		return (
			<PopularRow
				changePage={props.changePage}
				item={{ title: title, imagePath: imagePath, items: array }}
			/>
		)
	}

	useEffect(() => {
		holidayRowSet(
			renderHolidayRow(
				holidayRows,
				'All you need to get holiday ready',
				'images/holiday_images/'
			)
		)
		basicsRowSet(
			renderHolidayRow(
				basics,
				'Popular items from AmazonBasics',
				'images/basics/'
			)
		)
	}, [])

	return (
		<div style={styles.container}>
			<div style={styles.content_container}>
				<PromotedBackground />
				<div style={styles.row_container_top}>
					<PopularCard
						changePage={props.changePage}
						item={{
							imagePath: 'images/deal_of_day/deal_of_day.jpg',
							title: 'Deal of the day',
							price: '$19.31',
							description: 'Save on Sylvania New Smart Light Bulbs',
						}}
					/>
					<PopularCard
						changePage={props.changePage}
						item={{
							imagePath: 'images/deal_of_day/bath.jpg',
							title: 'Create a cozy bathroom',
							price: '$10.99',
							description: 'Update your bathroom',
						}}
					/>
					<PopularCard
						changePage={props.changePage}
						item={{
							imagePath: 'images/deal_of_day/lighting.jpg',
							title: 'Home Improvement',
							price: '$9.67',
							description: 'Lighting for every situation',
						}}
					/>
					<SignInBox />
				</div>
				<div style={styles.row_container}>{holidayRow}</div>
				<div style={styles.row_container}>{basicsRow}</div>
				<div style={styles.row_container_collections}>
					<Collections
						changePage={props.changePage}
						item={{
							title: 'Beat the rush shop toy gifts',
							imagePath: 'images/collections/toys/',
							imageName: 'toy',
						}}
					/>
					<Collections
						changePage={props.changePage}
						item={{
							title: 'Great stocking stuffers',
							imagePath: 'images/collections/stocking_stuffers/',
							imageName: 'stocking',
						}}
					/>
					<Collections
						changePage={props.changePage}
						item={{
							title: 'Holiday Deals',
							imagePath: 'images/collections/deals/',
							imageName: 'deals',
						}}
					/>
					<Collections
						changePage={props.changePage}
						item={{
							title: 'Find great gifts by price',
							imagePath: 'images/collections/gifts/',
							imageName: 'gifts',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
