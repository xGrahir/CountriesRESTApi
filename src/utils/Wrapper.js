import styles from './Wrapper.module.css'

export const Wrapper = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}