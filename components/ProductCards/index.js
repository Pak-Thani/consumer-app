import Image from "next/image";
import styles from "./index.module.css";

function ProductCards({ product }) {
  return (
    <div className={styles.card} key={product.name}>
      <div className={styles.cardImgTop}>
        <Image
          src={product.image}
          layout="fill"
          objectFit="cover"
          alt="Product Image"
        />
      </div>
      <div className={styles.cardBottomSection}>
        <h5 className={styles.cardTitle}>{product.name}</h5>
        <p className={styles.cardText}>
          Rp {product.pricePerQty}
          <span> / {product.qty}</span>
        </p>
        <div className={styles.btn}>Beli</div>
      </div>
    </div>
  );
}

export default ProductCards;
