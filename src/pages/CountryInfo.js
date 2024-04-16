import { CountryDetail } from '../components/CountryDetail'
import { Suspense } from 'react'
import { json, useLoaderData, defer,  Await } from 'react-router-dom'
import styles from './Root.module.css'

export const CountryInfo = () => {
	const data = useLoaderData()
	return (
		<Suspense fallback={<div className={styles.container}><p className={styles.loading}>Loading country info...</p></div>}>
			<Await resolve={data.country}>{country => <CountryDetail country={country} />}</Await>
		</Suspense>
	)
}

const loadCountry = async ({ request, params }) => {
	const id = params.countryID

	const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)

	if (!response.ok) {
		throw json({ message: 'Could not fetch country' }, { status: response.status })
	}

	const data = await response.json()

	return data[0]
}

export const loader = ({ params }) => {
	return defer({
		country: loadCountry({ params }),
	})
}

export const fetchBorders = async id => {
	let url = ''

	if (id) {
		url = `https://restcountries.com/v3.1/alpha/${id}`
	}

	const response = await fetch(url)

	if (!response.ok) {
		throw json({ message: 'Could not fetch borders' }, { status: response.status })
	}

	const data = await response.json()

	return data[0].name.common
}
