import styles from "./index.module.css";
import { Context } from "../../../context/AppContext";
import { useContext } from "react";
import CheckoutItem from "../../../components/CheckoutItem";
import { useRouter } from "next/router";
import { numberPriceToStringPrice } from "../../../utils/productUtils";
import BSILogo from "../../../public/images/BSILogo.png";
import moneyLogo from "../../../public/images/moneyLogo.png";
import newLogo from "../../../public/images/newLogo.png";

import Image from "next/image";
const Index = ({}) => {
  const route = useRouter();
  const { cart, getTotalPrice, data, handlerShipping, handlePayment, payment } =
    useContext(Context);
  // console.log(payment.payment);
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
            <input
              required
              type="text"
              placeholder="Nama Pelanggan"
              value={data.name}
            />
            <input
              required
              type="text"
              placeholder="Alamat"
              value={data.alamat}
            />
            <input
              required
              type="text"
              placeholder="Shipping"
              value={handlerShipping(data.shipping)}
            />
          </div>
          <h1 className={styles.formTitle}>Payment</h1>
          <div className={styles.radioFormContainer}>
            <label className={styles.radioForm} for="payment_1">
              <div className={styles.formText}>
                <div className={styles.imageContainer}>
                  <Image src={BSILogo} layout="fill" objectFit="cover" />
                </div>
                <h3>Bank Syariah Indonesia (BSI)</h3>
              </div>
              <input
                required
                type="radio"
                id="payment_1"
                name="payment_1"
                checked={payment.payment_1}
                value="payment_1"
                onChange={handlePayment}
              />
            </label>
            <label className={styles.radioForm} for="payment_2">
              <div className={styles.formText}>
                <div className={styles.imageContainer}>
                  <Image src={moneyLogo} layout="fill" objectFit="cover" />
                </div>
                <h3>Cash</h3>
              </div>
              <input
                required
                type="radio"
                id="payment_2"
                name="payment_2"
                checked={payment.payment_2}
                value="payment_2"
                onChange={handlePayment}
              />
            </label>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
            <div
              className={styles.btnLeft}
              onClick={() => route.push("/checkout/shipping")}
            >
              Kembali
            </div>
          </div>
          <div className={styles.cartFooterRight}>
            <div
              className={styles.btnRight}
              onClick={() => {
                if (payment.payment === "payment_1") {
                  route.push("/checkout/payment/method-bsi");
                } else {
                  route.push("/checkout/redirect");
                }
              }}
            >
              <span>Selesaikan Pesanan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
