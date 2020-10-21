import React, { useEffect, useState } from 'react'
import SearchResultItem from './SearchResultItem'
import SearchResultSider from './SearchResultSider'

function SearchResults(props) {
	const [listView, listViewSet] = useState([])
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'row',
		},
	}

	const searchResults = [
		{
			imagePath: 'images/school_supplies/school1.jpg',
			title:
				'TOPS/Oxford 1-Subject Notebooks, 8" x 10-1/2", College Rule, 70 Sheets, 6 Pack, Color Assortment May Vary (65007)',
			review: 4.7,
			price: '$10.99',
		},
		{
			imagePath: 'images/school_supplies/school2.jpg',
			title: 'AmazonBasics Pre-sharpened Wood Cased #2 HB Pencils, 150 Pack',
			review: 4.2,
			price: '$3.99',
		},
		{
			imagePath: 'images/school_supplies/school3.jpg',
			title:
				'ZEYAR Highlighter Pastel Colors Chisel Tip Marker Pen, Assorted Colors, Water Based, Quick Dry (6 Macaron Colors)',
			review: 4.6,
			price: '$14.25',
		},
		{
			imagePath: 'images/school_supplies/school4.jpg',
			title:
				'Scissors, iBayam 8" Multipurpose Scissors Bulk 3-Pack, Ultra Sharp Blade Shears, Comfort-Grip Handles, Sturdy Sharp Scissors for Office ',
			review: 3.8,
			price: '$7.99',
		},
		{
			imagePath: 'images/school_supplies/school5.jpg',
			title:
				'Electric Pencil Sharpener, AC Power Adapter(Include)/Battery Operated Pencil Sharpener with Pencil Holder,Heavy Duty Blade',
			review: 4.7,
			price: '$26.85',
		},
		{
			imagePath: 'images/school_supplies/school6.jpg',
			title:
				"Elmer's All Purpose School Glue Sticks, Washable, 7 Gram, 30 Count",
			review: 4,
			price: '$16.79',
		},
		{
			imagePath: 'images/school_supplies/school7.jpg',
			title: 'BIC Ballpoint Pen, Assorted Colors, 60 Pack',
			review: 3.2,
			price: '$5.99',
		},
		{
			imagePath: 'images/school_supplies/school8.jpg',
			title:
				'Sharpie 27145 Pocket Highlighters, Chisel Tip, Assorted Colors, 12-Count',
			review: 4.4,
			price: '$13.99',
		},
		{
			imagePath: 'images/school_supplies/school9.jpg',
			title:
				'Crayola Bulk Colored Pencils, Pre-sharpened, Back to School Supplies, 12 Assorted Colors, Pack of 24',
			review: 4.6,
			price: '$42.70',
		},
		{
			imagePath: 'images/school_supplies/school10.jpg',
			title:
				'Lunmore Pencil Holder Desktop Storage Organizer Pen Box for School Home Office Art Supplies Set of 3',
			review: 4,
			price: '$14.89',
		},
	]

	let renderResults = () => {
		let result = []
		for (let i = 0; i < searchResults.length; i++) {
			result.push(
				<SearchResultItem
					item={{
						imagePath: searchResults[i].imagePath,
						title: searchResults[i].title,
						review: searchResults[i].review,
						price: searchResults[i].price,
					}}
					changePage={props.changePage}
				/>
			)
		}
		return result
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		listViewSet(renderResults())
	}, [])

	return (
		<div style={styles.container}>
			<SearchResultSider />
			<div>{listView}</div>
		</div>
	)
}

export default SearchResults
