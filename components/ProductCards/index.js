import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";

function ProductCards({ product }) {
  const router = useRouter();


  return (
    <div
      className={styles.card}
      key={product.name}
      onClick={() =>
        router.push({
          pathname: "/product",
          query: { productSlug: product.slug },
        })
      }
    >
      <div className={styles.cardImgTop}>
        <Image
          src={product.image}
          layout="fill"
          objectFit="cover"
          className={styles.skeleton}
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
