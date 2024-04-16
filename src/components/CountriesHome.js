import { Wrapper } from '../utils/Wrapper'
import { Inputs } from './Inputs'
import { Country } from './Country'
import { fetchCountries } from '../pages/Countries'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './CountriesHome.module.css'

export const CountriesHome = () => {
	let pos1 = localStorage.getItem('scroll')
	const region = useSelector(state => state.country.current)
	const search = useSelector(state => state.country.name)
	const [currentScroll, setCurrentScroll] = useState(pos1)
	const { data, isPending, error, isError } = useQuery({
		queryKey: ['countries'],
		queryFn: fetchCountries,
	})

	window.addEventListener('scroll', () => {
		if (!isPending) {
			// set position only if isPending is false, so mean data is loaded on site
			setCurrentScroll(window.scrollY)

			localStorage.setItem('scroll', currentScroll)
		}
	})

	const content = data?.map(country => {
		if ((region === 'All' || country.region === region) && country.name.common.toLowerCase().includes(search)) {
			return (
				<li key={country.name.common}>
					<Country data={country} />
				</li>
			)
		}
	})

	useEffect(() => {
		let position = localStorage.getItem('scroll')

		window.scroll(0, position) // scroll down only if isPending is done
	}, [isPending])

	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<Wrapper>
					<Inputs />
					{isPending ? <div className={styles.loading}>Loading...</div> : <ul> {content}</ul>}
				</Wrapper>
			</div>
		</div>
	)
}
