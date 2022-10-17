import { Provider } from 'react-redux'
import { useStore } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../public/style/global.module.css'
import { Navbar } from '../components'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <div className={style.mainWrapper}>
        <div className={style.main}>
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
