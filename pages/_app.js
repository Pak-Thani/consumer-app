import { Provider } from "react-redux";
import { useStore } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../public/style/global.module.css";
import { Navbar } from "../components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [isNavbar, setIsNavbar] = useState(true);
  const { route } = useRouter();

  // disable navbar for soume route
  useEffect(() => {
    switch (route) {
      case "/product":
        setIsNavbar(false);
        break;

      default:
        setIsNavbar(true);
        break;
    }
  }, [route]);

  return (
    <Provider store={store}>
      <div className={style.mainWrapper}>
        <div className={style.main}>
          {isNavbar && <Navbar />}
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
