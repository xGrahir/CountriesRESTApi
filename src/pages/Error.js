import { useRouteError } from 'react-router-dom'
import { Button } from '../utils/Button'
import styles from './Error.module.css'

export const Error = () => {
	const error = useRouteError()

	console.log(error.status)

	if (error.status === 404) {
		return (
			<div className={styles.background}>
				<div className={styles.container}>
					<div className={styles.image}></div>
					<p className={styles.text}>This page does not exist</p>
					<Button to='..' className={styles.button}>Back</Button>
				</div>
			</div>
		)
	}

	return <div>error</div>
}
