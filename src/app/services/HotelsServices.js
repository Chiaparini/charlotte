class HotelsService {
	getHotels () {
		return fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
			.then(response => response.json())
			.catch(err => err)
	}
}

export default new HotelsService()