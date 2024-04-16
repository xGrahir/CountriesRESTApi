import styles from './Country.module.css'
import { Link } from 'react-router-dom'

export const Country = ({ data }) => {
	const population = data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

	return (
		<article>
			<Link to={data.name.common}>
				<div className={styles.container}>
					<div className={styles.image}>
						<img src={data.flags.svg} alt='' />
					</div>
					<div>
						<div className={styles.info}>
							<p className={styles.name}>{data.name.common}</p>
							<p>
								Population: <span>{population}</span>
							</p>
							<p>
								Region: <span>{data.region}</span>
							</p>
							<p>
								Capital: <span>{data.capital}</span>
							</p>
						</div>
					</div>
				</div>
			</Link>
		</article>
	)
}
