import { Provider } from "react-redux";
import { useStore } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../public/style/global.module.css";
import { Navbar } from "../components";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
// import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { Context, ContextProvider } from "../context/AppContext";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [isNavbar, setIsNavbar] = useState(true);
  const { route } = useRouter();
  // const { openMenu } = useContext(Context);

  // disable navbar for soume route
  useEffect(() => {
    switch (route) {
      case "/product":
        setIsNavbar(false);
        break;
      case "/checkout/redirect":
        setIsNavbar(false);
        break;
      case "/checkout/information":
        setIsNavbar(false);
        break;
      case "/checkout/shipping":
        setIsNavbar(false);
        break;
      case "/checkout/payment":
        setIsNavbar(false);
        break;
      case "/checkout/payment/method-bsi":
        setIsNavbar(false);
        break;

      default:
        setIsNavbar(true);
        break;
    }
  }, [route]);

  return (
    <ContextProvider>
      <Provider store={store}>
        <div className={style.mainWrapper}>
          <div className={style.main}>
            {isNavbar && <Navbar />}
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </ContextProvider>
  );
}
