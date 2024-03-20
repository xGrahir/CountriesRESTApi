import { CountryDetail } from '../components/CountryDetail'
import { json, useLoaderData } from 'react-router-dom'

export const CountryInfo = () => {
	const data = useLoaderData()
	
	return <CountryDetail country={data} />
}

export const loader = async ({ request, params }) => {
	const id = params.countryID

	const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)

	if (!response.ok) {
		throw json({ message: 'Could not fetch country' }, { status: response.status })
	}

	const data = await response.json()

	return data[0]
}

export const fetchBorders = async(id) => {
	let url = ''

	if(id) {
		url = `https://restcountries.com/v3.1/alpha/${id}`
	}

	const response = await fetch(url)

	if (!response.ok) {
		throw json({ message: 'Could not fetch borders' }, { status: response.status })
	}

	const data = await response.json()

	return data[0].name.common

}
