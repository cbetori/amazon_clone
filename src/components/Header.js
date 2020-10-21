import React, { useState } from 'react'
import logo from '../images/amazon-logo.png'
import cart from '../images/shopping_cart.svg'

function Header(props) {
	const styles = {
		header: {
			cursor: 'pointer',
			display: 'flex',
			backgroundColor: '#131921',
			justifyContent: 'space-between',
			alignItems: 'center',
			flexDirection: 'row',
			height: 40,
			padding: 10,
		},
		hamburger_button: {
			minWidth: 40,
			minHeight: 40,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			borderWidth: 0.01,
			borderColor: '#666666',
			borderStyle: 'solid',
			borderRadius: 3,
		},
		burger: {
			marginTop: 3,
			marginBottom: 3,
			marginLeft: 10,
			marginRight: 10,
			display: 'flex',
			borderBottomWidth: 3,
			borderBottomColor: 'white',
			borderBottomStyle: 'solid',
		},
		logo: {
			marginLeft: 10,
			marginRight: 50,
			minHeight: 30,
			borderStyle: 'none',
		},
		search: {
			display: 'flex',
			flexGrow: 1,
			height: 40,
			marginLeft: 5,
			marginRight: 5,
		},
		search_category: {
			cursor: 'pointer',
			width: 45,
			marginRight: -3,
			borderTopLeftRadius: 3,
			borderBottomLeftRadius: 3,
			borderStyle: 'none',
		},
		search_input: {
			padding: 10,
			flexGrow: 1,
			fontSize: 20,
			borderStyle: 'none',
		},
		search_button: {
			cursor: 'pointer',
			marginLeft: -3,
			backgroundColor: '#ffbd69',
			borderTopRightRadius: 3,
			borderBottomRightRadius: 3,
			borderStyle: 'none',
		},
		options: {
			cursor: 'pointer',
			fontSize: 14,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			alignItems: 'flex-start',
			height: 50,
			paddingBottom: 5,
			marginLeft: 10,
			marginRight: 10,
			color: 'white',
			backgroundColor: 'transparent',
			borderStyle: 'none',
		},
		options_cart: {
			cursor: 'pointer',
			fontSize: 14,
			padding: 5,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
			color: 'white',
			backgroundColor: 'transparent',
			borderStyle: 'none',
		},
		txt_bold: {
			whiteSpace: 'nowrap',
			fontWeight: 'bold',
		},
		cart_bold: {
			whiteSpace: 'nowrap',
			fontWeight: 'bold',
			marginLeft: 12,
		},
		sign_in: {
			borderStyle: 'none',
		},
		returns: {
			borderStyle: 'none',
		},
		try_prime: {
			borderStyle: 'none',
		},
		cart: {
			borderStyle: 'none',
		},
		shopping_cart: {
			height: 40,
		},
		cart_count: {
			fontSize: '12pt',
			color: '#f0680a',
			fontWeight: 'bold',
			marginLeft: -22,
			marginBottom: 15,
		},
	}

	const handleEnter = (e) => {
		if (e !== '') {
			document.getElementById(e).style.borderColor = 'white'
			document.getElementById(e).style.borderWidth = 'thin'
			document.getElementById(e).style.borderStyle = 'solid'
		}
	}

	const handleLeave = (e) => {
		if (e !== '') {
			document.getElementById(e).style.borderColor = styles[e].borderColor
			document.getElementById(e).style.borderWidth = styles[e].borderWidth
			document.getElementById(e).style.borderStyle = styles[e].borderStyle
		}
	}

	const handleSearchFocusIn = (e) => {
		document.getElementById(e).style.backgroundColor = '#ff9901'
		document.getElementById(e).style.borderColor = '#ff9901'
		document.getElementById(e).style.borderStyle = 'solid'
		document.getElementById(e).style.borderWidth = '3.5px'
		document.getElementById(e).style.borderRadius = '3px'
	}

	const handleSearchFocusOut = (e) => {
		document.getElementById(e).style.borderStyle = 'none'
	}

	const handleOpen = () => {
		document.getElementById('SideNav_Container').style.visibility = 'visible'
		document.getElementById('SideNav_Container').style.opacity = '1'
		document.getElementById('SideNav').style.visibility = 'visible'
		document.getElementById('SideNav').style.opacity = '1'
	}

	const handleAllEnter = (e) => {
		document.getElementById(e).style.backgroundColor = '#d3d3d3'
	}

	const handleAllLeave = (e) => {
		document.getElementById(e).style.backgroundColor = '#f3f3f3'
	}

	return (
		<div style={styles.header}>
			<div
				id='hamburger_button'
				style={styles.hamburger_button}
				onClick={() => handleOpen()}
				onMouseEnter={() => handleEnter('hamburger_button')}
				onMouseLeave={() => handleLeave('hamburger_button')}
			>
				<div style={styles.burger} />
				<div style={styles.burger} />
				<div style={styles.burger} />
			</div>
			<img
				id='logo'
				style={styles.logo}
				src={logo}
				onClick={() => props.changePage('homepage')}
				onMouseEnter={() => handleEnter('logo')}
				onMouseLeave={() => handleLeave('logo')}
			/>
			<div id='search' style={styles.search}>
				<button
					id='all'
					style={styles.search_category}
					onMouseEnter={() => handleAllEnter('all')}
					onMouseLeave={() => handleAllLeave('all')}
				>
					All
				</button>
				<input
					onKeyDown={(e) =>
						e.key === 'Enter' ? props.changePage('searchresults') : false
					}
					onFocus={() => handleSearchFocusIn('search')}
					onBlur={() => handleSearchFocusOut('search')}
					onEnter
					style={styles.search_input}
				/>
				<button
					style={styles.search_button}
					onClick={() => props.changePage('searchresults')}
				>
					Search
				</button>
			</div>
			<button
				id='sign_in'
				style={styles.options}
				onMouseEnter={(e) => handleEnter('sign_in')}
				onMouseLeave={(e) => handleLeave('sign_in')}
			>
				<div>Hello, Sign in</div>
				<div style={styles.txt_bold}>Account & Lists</div>
			</button>
			<button
				id='returns'
				style={styles.options}
				onMouseEnter={() => handleEnter('returns')}
				onMouseLeave={() => handleLeave('returns')}
			>
				<div>Returns</div>
				<div style={styles.txt_bold}>& Orders</div>
			</button>
			<button
				id='try_prime'
				style={styles.options}
				onMouseEnter={() => handleEnter('try_prime')}
				onMouseLeave={() => handleLeave('try_prime')}
			>
				<br />
				<div style={styles.txt_bold}>Try Prime</div>
			</button>
			<button
				id='cart'
				style={styles.options_cart}
				onMouseEnter={() => handleEnter('cart')}
				onMouseLeave={() => handleLeave('cart')}
			>
				<img
					id='shopping_cart'
					style={styles.shopping_cart}
					src={cart}
					onMouseEnter={() => handleEnter('logo')}
					onMouseLeave={() => handleLeave('logo')}
				/>
				<div style={styles.cart_count}>{props.cartCount}</div>
				<div style={styles.cart_bold}>Cart</div>
			</button>
		</div>
	)
}

export default Header
