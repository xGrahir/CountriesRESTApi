import { useQuery } from '@tanstack/react-query'
import { fetchBorders } from '../pages/CountryInfo'
import styles from '../utils/Button.module.css'
import { useNavigate } from 'react-router-dom'

export const CountryBorders = ({ border, showMap }) => {
	const navigate = useNavigate()

	const { data } = useQuery({
		queryKey: ['border', border],
		queryFn: () => fetchBorders(border),
	})

	const setShowMapHandler = () => {
		showMap()
		navigate(`/countries/${data}`)
	}

	return(<button className={styles.btn} onClick={setShowMapHandler}>{data}</button>)
}
