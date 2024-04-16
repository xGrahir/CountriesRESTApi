import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useSelector } from 'react-redux'
import styles from './Root.module.css'

export const Root = () => {
	const mode = useSelector(state => state.mode.dark)

	return (
		<div className={mode ? styles['dark-mode'] : ''}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}
