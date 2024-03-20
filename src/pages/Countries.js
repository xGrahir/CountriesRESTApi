import { CountriesHome } from '../components/CountriesHome'
import { useLoaderData } from 'react-router-dom'

export const Countries = () => {
	return <CountriesHome />
}

export const fetchCountries = async() => {

	let url = 'https://restcountries.com/v3.1/all'

	const response = await fetch(url)

	if (!response.ok) {
		console.log('error')
	}

	const data = await response.json()

	return data
}
