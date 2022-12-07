import { useSelector } from 'react-redux'
import Link from 'next/link'
import styles from './index.module.css'

const ShowReduxState = () => {
  const state = useSelector((state) => state)

  return (
    <>
      <pre className={styles.codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState
