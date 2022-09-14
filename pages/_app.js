import { Provider } from 'react-redux'
import { useStore } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { ThemeProvider } from 'styled-components'

// const theme = {
//   colors: {
//     primary: '#F7D100',
//     secondary: '#4CB654',
//   },
// }

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
