const retrieveImage = async (string) => {
	let res = await fetch(
		'https://dog.ceo/api/breed/' + string + '/images/random'
	)
		.then((response) => response.json())
		.then((data) => {
			return data
		})
	return res
}

export default retrieveImage
