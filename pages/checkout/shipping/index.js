import styles from "./index.module.css";
import { Context } from "../../../context/AppContext";
import { useContext } from "react";
import CheckoutItem from "../../../components/CheckoutItem";
import { useRouter } from "next/router";
import { numberPriceToStringPrice } from "../../../utils/productUtils";
import deliveryLogo from "../../../public/images/deliveryLogo.png";
import Image from "next/image";
import newLogo from "../../../public/images/newLogo.png";

const Index = ({}) => {
  const route = useRouter();
  const { cart, getTotalPrice, data, handleChange } = useContext(Context);
  // console.log(data);
  return (
    <>
      <div className={styles.logoWrapper}>
        <div className={styles.logo} onClick={() => route.push("/")}>
          <Image src={newLogo} />
        </div>
      </div>
      <div className={styles.globalContainer}>
        <div className={styles.container}>
          {cart.length === 0 ? (
            <p className={styles.emptyCardTitle}>Keranjang Kosong</p>
          ) : (
            cart.map((product) => {
              return <CheckoutItem product={product} />;
            })
          )}

          <div className={styles.totalPriceContainer}>
            <p>Total</p> <h1>{numberPriceToStringPrice(getTotalPrice())}</h1>
          </div>
          <div className={styles.formContainer}>
            <input type="text" placeholder="Nama Pelanggan" value={data.name} />
            <input type="text" placeholder="Alamat" value={data.alamat} />
          </div>
          <h1 className={styles.formTitle}>Select Shift Time</h1>
          <div className={styles.radioFormContainer}>
            <label className={styles.radioForm} for="time_1">
              <div className={styles.formText}>
                <div className={styles.imageContainer}>
                  <Image src={deliveryLogo} layout="fill" objectFit="cover" />
                </div>
                <h3>10.30 - 11.30</h3>
              </div>
              <input
                type="radio"
                id="time_1"
                name="time_1"
                checked={data.shipping_1}
                onChange={handleChange}
                value="time_1"
              />
            </label>
            <label className={styles.radioForm} for="time_2">
              <div className={styles.formText}>
                <div className={styles.imageContainer}>
                  <Image src={deliveryLogo} layout="fill" objectFit="cover" />
                </div>
                <h3>12.00 - 13.00</h3>
              </div>
              <input
                type="radio"
                name="time_2"
                id="time_2"
                checked={data.shipping_2}
                onChange={handleChange}
                value="time_2"
              />
            </label>
            <label className={styles.radioForm} for="time_3">
              <div className={styles.formText}>
                <div className={styles.imageContainer}>
                  <Image src={deliveryLogo} layout="fill" objectFit="cover" />
                </div>
                <h3>15.30 - 16.30</h3>
              </div>
              <input
                type="radio"
                name="time_3"
                id="time_3"
                checked={data.shipping_3}
                onChange={handleChange}
                value="time_3"
              />
            </label>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
            <div
              className={styles.btnLeft}
              onClick={() => route.push("/checkout/information")}
            >
              Kembali
            </div>
          </div>
          <div className={styles.cartFooterRight}>
            <div
              className={styles.btnRight}
              onClick={() => route.push("/checkout/payment")}
            >
              Selanjutnya <span>Payment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
