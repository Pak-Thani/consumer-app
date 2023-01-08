import Image from "next/image";
import styles from "./index.module.css";
import newLogo from "../../../../public/images/newLogo.png";
import BSILogo from "../../../../public/images/BSI.png";
import { Context } from "../../../../context/AppContext";
import { numberPriceToStringPrice } from "../../../../utils/productUtils";

import { useContext } from "react";
import { useRouter } from "next/router";

const redirect = () => {
  const route = useRouter();
  const { cart, getTotalPrice, data, handlerShipping, handlePayment, payment } =
    useContext(Context);
  return (
    <>
      <div className={styles.logoWrapper}>
        <div className={styles.logo} onClick={() => route.push("/")}>
          <Image src={newLogo} />
        </div>
      </div>
      <div className={styles.globalContainer}>
        <div></div>
        <div className={styles.midleContainer}>
          <div className={styles.imageContainer}>
            <Image src={BSILogo} layout="fill" objectFit="cover" />
          </div>
          <br />
          <div className={styles.totalPriceContainer}>
            <h1>{numberPriceToStringPrice(getTotalPrice())}</h1>
          </div>
          <h3>7205719274</h3>
          <h4>PT Mula Artha Utama</h4>
          <div
            className={styles.btnRight}
            onClick={() => {
              route.push("/checkout/redirect");
            }}
          >
            Selesai
          </div>
          <p className={styles.noteText}>
            *Note jangan lupa simpan bukti transfer dan kirimkan melalui
            WhatsApp
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default redirect;
