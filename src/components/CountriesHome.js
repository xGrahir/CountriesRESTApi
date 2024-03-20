import { Wrapper } from '../utils/Wrapper'
import { Inputs } from './Inputs'
import { Country } from './Country'
import { fetchCountries } from '../pages/Countries'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import styles from './CountriesHome.module.css'

export const CountriesHome = () => {
	const { data, isPending, error, isError, fetchNextPage } = useQuery({
		queryKey: ['countries'],
		queryFn: fetchCountries,
	})

	console.log(data);

	const content = data?.map(country => (
		<li key={country.name.common}>
			<Country data={country} />
		</li>
	))

	// For Infinite Query
	// const content = data?.pages.map(el =>
	// 	el.map(country => (
	// 		<li key={country.name.common}>
	// 			<Country data={country} />
	// 		</li>
	// 	))
	// )

	return (
		<div className={styles.container}>
			<Wrapper>
				<Inputs />
				<ul> {content}</ul>
			</Wrapper>
		</div>
	)
}
