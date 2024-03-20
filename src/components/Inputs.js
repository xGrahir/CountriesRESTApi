import styles from './Inputs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const Inputs = () => {
	return (
		<form action=''>
			<div className={styles.container}>
				<div className={styles['input-container']}>
					<input type='text' placeholder='Search for a country...' className={styles.inputs} />
					<FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.icon} ${styles['glass-icon']}`} />
				</div>
				<div className={`${styles['input-container']} ${styles['input-select']}`}>
					<select type='text' placeholder='Search for a country...' className={`${styles.inputs} ${styles.select}`}>
						<option value=''>Filter by Region</option>
						<option value='dog'>Africa</option>
						<option value='cat'>America</option>
						<option value='hamster'>Asia</option>
						<option value='parrot'>Europe</option>
						<option value='spider'>Oceania</option>
					</select>
					<FontAwesomeIcon icon={faAngleDown} className={`${styles.icon} ${styles['angle-icon']}`} />
				</div>
			</div>
		</form>
	)
}
