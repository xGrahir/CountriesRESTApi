import styles from './Inputs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { countryActions } from '../store'
import { useSelector } from 'react-redux'

export const Inputs = () => {

	const dispatch = useDispatch()
	const name = useSelector(state => state.country.name)

	const chooseHandler = (e) => {
		dispatch(countryActions.changeRegion(e.target.value[0].toUpperCase() + e.target.value.slice(1)))
	}

	const searchHandler = (e) => {
		dispatch(countryActions.searchByName(e.target.value.toLowerCase()))
	}

	return (
		<form action=''>
			<div className={styles.container}>
				<div className={styles['input-container']}>
					<input onChange={searchHandler} type='text' defaultValue={name} placeholder='Search for a country...' className={styles.inputs} />
					<FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.icon} ${styles['glass-icon']}`} />
				</div>
				<div className={`${styles['input-container']} ${styles['input-select']}`}>
					<select onChange={chooseHandler} type='text' placeholder='Search for a country...' className={`${styles.inputs} ${styles.select}`}>
						<option value='all'>Filter by Region/All</option>
						<option value='africa'>Africa</option>
						<option value='americas' >America</option>
						<option value='asia' >Asia</option>
						<option value='europe' >Europe</option>
						<option value='oceania' >Oceania</option>
					</select>
					<FontAwesomeIcon icon={faAngleDown} className={`${styles.icon} ${styles['angle-icon']}`} />
				</div>
			</div>
		</form>
	)
}
