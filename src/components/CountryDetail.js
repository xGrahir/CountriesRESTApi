import { Wrapper } from '../utils/Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong as solidArrow } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../utils/Button'
import { CountryBorders } from './CountryBorders'
import styles from './CountryDetail.module.css'

export const CountryDetail = ({ country }) => {
	console.log(country)
	window.scroll(0, 0) // set position of site to 0
	const population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	const nativeName = country.name.official
	const listOfCurrencies = Object.values(country.currencies).map(currency => currency.name)
	const listOfLanguages = Object.values(country.languages).map(language => language)
	let currency = ''
	let languages = ''
	let borders

	for (let i = 0; i < listOfCurrencies.length; i++) {
		if (i === listOfCurrencies.length - 1) {
			currency += listOfCurrencies[i]
			break
		}

		currency += `${listOfCurrencies[i]}, `
	}

	for (let i = 0; i < listOfLanguages.length; i++) {
		if (i === listOfLanguages.length - 1) {
			languages += listOfLanguages[i]
			break
		}

		languages += `${listOfLanguages[i]}, `
	}

	if (country.borders) {
		borders = country.borders.map(border => (
			<li key={border} className={styles.border}>
				<CountryBorders border={border} />
			</li>
		))
	} else {
		borders = <p>This country has no border countries</p>
	}


	return (
		<div className={styles.container}>
			<Wrapper>
				<Button to='..'>
					<FontAwesomeIcon icon={solidArrow} />
					<span className={styles['btn-text']}>Back</span>
				</Button>
				<div className={styles.country}>
					<div className={styles['flag-container']}>
						<img src={country.flags.png} alt='' />
					</div>
				</div>
				<div className={styles['country-info']}>
					<h1>{country.name.common}</h1>
					<div className={styles['country-about']}>
						<p>
							Native Name: <span>{nativeName}</span>
						</p>
						<p>
							Population: <span>{population}</span>
						</p>
						<p>
							Region: <span>{country.region}</span>
						</p>
						<p>
							Subregion: <span>{country.subregion}</span>
						</p>
						<p>
							Capital: <span>{country.capital}</span>
						</p>
					</div>
					<div className={styles['country-about']}>
						<p>
							Top Level Domain: <span>{country.tld[0]}</span>
						</p>
						<p>
							Currencies: <span>{currency}</span>
						</p>
						<p>
							Languages: <span>{languages}</span>
						</p>
					</div>
					<div className={styles['country-about']}>
						<div>
							<h2 className={styles['border-title']}>Border Countries:</h2>
							<ul className={styles.borders}>{borders}</ul>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
