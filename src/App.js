import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideNav from './components/SideNav'
import BookMarks from './components/BookMarks'
import HomePage from './components/HomePage'
import SearchResults from './components/SearchResults'
import ProductPage from './components/ProductPage'

function App() {
	const [currentPage, currentPageSet] = useState([])
	const [cartCount, cartCountSet] = useState(0)
	const styles = {
		container: {
			width: '100%',
			height: '100vh',
		},
	}

	//Basic router functionality
	const changePage = (component, data) => {
		if (component === 'searchresults')
			return currentPageSet(<SearchResults changePage={changePage} />)
		if (component === 'homepage')
			return currentPageSet(<HomePage changePage={changePage} />)
		if (component === 'productpage')
			return currentPageSet(
				<ProductPage
					item={data}
					addToCart={addToCart}
					changePage={changePage}
				/>
			)
	}

	let addToCart = (num) => {
		cartCountSet((cartCount) => cartCount + num)
	}

	useEffect(() => {
		currentPageSet(<HomePage changePage={changePage} />)
	}, [])

	return (
		<div style={styles.container}>
			<SideNav />
			<Header changePage={changePage} cartCount={cartCount} />
			<BookMarks />
			{currentPage}
			<Footer />
		</div>
	)
}

export default App
