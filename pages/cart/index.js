import styles from "./index.module.css";
import { Context } from "../../context/AppContext";
import { useContext } from "react";
import ItemCart from "../../components/CartItem";
import { numberPriceToStringPrice } from "../../utils/productUtils";
const Index = ({}) => {
  const { cart, getTotalPrice } = useContext(Context);
  if (!cart)
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <p className={styles.headerTitle}>Keranjang Kosong</p>
      </div>
    </div>
  );
  console.log(cart.length)
  return (
    <>
      <div className={styles.globalContainer}>
        <div className={styles.container}>
          <p className={styles.headerTitle}>Cart</p>
          {cart.length === 0 ?  <p className={styles.emptyCardTitle}>Keranjang Kosong</p> : cart.map((product) => {
            return <ItemCart product={product} />;
          })}
          
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
            <p className={styles.cartFooterTitle}>Total Harga</p>
            <p className={styles.totalPrice}>
              {numberPriceToStringPrice(getTotalPrice())}
            </p>
          </div>
          <div className={styles.cartFooterRight}>
            <div className={styles.btn}>Beli</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
