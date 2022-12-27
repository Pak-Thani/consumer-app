import styles from "./index.module.css";
import Image from "next/image";
import { Context } from "../../context/AppContext";
import { numberPriceToStringPrice } from "../../utils/productUtils";
import { useContext } from "react";
import trashCan from "../../public/images/trashCan.png";

const ItemCart = ({ product }) => {
  const {
    setEmptyQuantity,
    quantityPlus,
    quantityMinus,
  } = useContext(Context);
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
            {numberPriceToStringPrice(product.pricePerQty)}
          </p>
          <div className={styles.buttonContainer}>
            <div onClick={() => quantityMinus(product)}>-</div>
            <p>{product.quantity}</p>
            <div onClick={() => quantityPlus(product)}>+ </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div
            className={styles.trashCan}
            onClick={() => setEmptyQuantity(product)}
          >
            <Image
              src={trashCan}
              layout="fill"
              objectFit="cover"
              //   className={styles.skeleton}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
