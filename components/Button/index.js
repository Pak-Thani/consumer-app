import styles from './index.module.css'

const Button = ({label, handleClick}) => (
        <button
            onClick={handleClick}
            className={styles.buttonStyle}
        >
            {label}
        </button>


);

export default Button;