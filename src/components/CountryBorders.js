import { useQuery } from '@tanstack/react-query'
import { fetchBorders } from '../pages/CountryInfo'
import { Button } from '../utils/Button'

export const CountryBorders = ({ border }) => {
	const { data } = useQuery({
		queryKey: ['border', border],
		queryFn: () => fetchBorders(border),
	})

	return (<Button to={`/countries/${data}`}>{data}</Button>)
}
