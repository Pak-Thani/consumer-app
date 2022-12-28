import styles from "./index.module.css";
import Image from "next/image";
import { numberPriceToStringPrice } from "../../utils/productUtils";

const CheckoutItem = ({ product }) => {
  return (
    <>
      <div className={styles.ItemContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            className={styles.skeleton}
          />
        </div>
        <div className={styles.midleContainer}>
          <p className={styles.productName}>{product.name}</p>
          <span className={styles.productQty}>{product.qty}</span>
          <p className={styles.productPrice}>
            {numberPriceToStringPrice(product.pricePerQty)} x {product.quantity}
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
