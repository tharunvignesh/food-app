const restaurants = [
	{
		name: 'Subway',
		id: 123,
		location: 'Hitesh city',
		rating: 4.1,
		ETA: 25,
		Tags: ['American', 'Healthy', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'A2B',
		id: 124,
		location: 'Metro city',
		rating: 4.5,
		ETA: 20,
		Tags: ['Healthy', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'KFC',
		id: 125,
		location: 'MG Road ',
		rating: 3.5,
		ETA: 21,
		Tags: ['NorthFood', 'Indian', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
		favorite: false,
	},
	{
		name: 'New Resturtant',
		id: 126,
		location: 'HighWay Road',
		rating: 3.1,
		ETA: 20,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Lassi Shop',
		id: 127,
		location: 'Majestic city',
		rating: 3.3,
		ETA: 19,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Thalappakatti Biriyani',
		id: 128,
		location: 'Nungabakkam',
		rating: 3.1,
		ETA: 22,
		Tags: ['FastFood', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Hot Chips',
		id: 129,
		location: 'Sholiganallur',
		rating: 2.9,
		ETA: 21,
		Tags: ['American', 'Healthy', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Sangeetha Hotel',
		id: 130,
		location: 'Hitech city',
		rating: 3.6,
		ETA: 22,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Vasantha Bhavan',
		id: 131,
		location: 'new city',
		rating: 3.9,
		ETA: 25,
		Tags: ['Healthy', 'Veg', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
		favorite: false,
	},
	{
		name: 'Sea Shell',
		id: 132,
		location: 'Anna Nagar',
		rating: 3.5,
		ETA: 19,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Saravana Bhavan',
		id: 133,
		location: 'Anna Nagar',
		rating: 1.5,
		ETA: 17,
		Tags: ['Healthy', 'Veg', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'BBQ Nation',
		id: 134,
		location: 'T Nagar',
		rating: 4.2,
		ETA: 30,
		Tags: ['NorthFood', 'American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'McDonalds',
		id: 135,
		location: 'Roundtana',
		rating: 3.5,
		ETA: 18,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: 'Akshayam',
		id: 136,
		location: 'Shanthi Colony',
		rating: 4.0,
		ETA: 18,
		Tags: ['Healthy', 'SouthIndianFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
	{
		name: "Domino's",
		id: 136,
		location: 'Shanthi Colony',
		rating: 4.2,
		ETA: 20,
		Tags: ['American', 'FastFood'],
		photo:
			'https://mycommontable.com/wp-content/uploads/2018/08/roasted-balsamic-cherry-tomato-burrata-pasta-paula-casimiro-4.jpg',
	},
]

const filteredRestaurants = (restaurants) => {
	document.getElementById('cards').innerHTML = `
	${restaurants
		.map((restaurant) => {
			return `
			<div class="card">
            <div class="card-image card-1"></div>
			<img src="./food-item.jpg" />
            <h2> ${restaurant.name}</h2>
            <p> Rating : ${restaurant.rating}</p>
            <p> ETA : ${restaurant.ETA}</p>
            <p> Location : ${restaurant.location}</p>
            <p>${restaurant.Tags}</p>
			<button onclick="this.disabled=true;favFunction(${restaurant.id})">Add to ❤</button>
			</div>`
		})
		.join('')}`
}

let searchInput = ''
document.getElementById('sort').addEventListener('input', selectHandler)
document.getElementById('type').addEventListener('input', foodTypeHandler)
document.getElementById('search-bar').addEventListener('input', searchHandler)
document.addEventListener('DOMContentLoaded', contentLoadedHandler)

function contentLoadedHandler() {
	filteredRestaurants(restaurants)
	sessionStorage.clear()
}

function favFunction(id) {
	let items = []
	items = JSON.parse(sessionStorage.getItem('liked')) || []
	const findById = restaurants.filter((r) => {
		return r.id === id
	})
	items.push(...findById)
	sessionStorage.setItem('liked', JSON.stringify(items))
	console.log(JSON.parse(sessionStorage.getItem('liked')))
	disabled = true
}

function favoriteFoods() {
	const likedFoods = JSON.parse(sessionStorage.getItem('liked'))
	likedFoods === null
		? alert('Oops! Your favorites are empty😓')
		: filteredRestaurants(likedFoods)
}

function searchHandler(e) {
	searchInput = e.target.value
	const nameFilter = restaurants.filter((r) =>
		r.name.toLowerCase().includes(searchInput.toLowerCase())
	)
	filteredRestaurants(nameFilter)
}

// For sorting ETA and Rating
function selectHandler(e) {
	searchInput = e.target.value
	if (searchInput === 'Rating') {
		const sortByRating = restaurants.sort((a, b) => {
			return b.rating - a.rating
		})
		filteredRestaurants(sortByRating)
	} else if (searchInput === 'ETA') {
		const sortByETA = restaurants.sort((a, b) => {
			return a.ETA - b.ETA
		})
		filteredRestaurants(sortByETA)
	}
}

// For sorting food based type
function foodTypeHandler(e) {
	searchInput = e.target.value
	const foodType = restaurants.filter((r) => {
		return r.Tags.join('|')
			.toLowerCase()
			.split('|')
			.includes(searchInput.toLowerCase())
	})
	console.log(foodType)
	filteredRestaurants(foodType)
}
