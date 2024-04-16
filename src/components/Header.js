import styles from './Header.module.css'
import { Wrapper } from '../utils/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { modeActions } from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
	const dispatch = useDispatch()
	const mode = useSelector(state => state.mode.dark)

	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.container}>
					<div>
						<h1>Where in the world?</h1>
					</div>
					<div>
						<button onClick={() => dispatch(modeActions.switchMode())}>
							{mode ? (
								<div className={styles['button-icon']}>
									<FontAwesomeIcon icon={regularMoon} />
									<p>Light Mode</p>
								</div>
							) : (
								<div className={styles['button-icon']}>
									<FontAwesomeIcon icon={solidMoon} />
									<p>Dark Mode</p>
								</div>
							)}
						</button>
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
