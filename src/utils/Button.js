import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom'

export const Button = props => {
    const navigate = useNavigate()

    const navigateHandler = (to) => {
        navigate(to)
    }

	return (<button className={styles.btn} onClick={() => navigateHandler(props.to)}>{props.children}</button>)
}
