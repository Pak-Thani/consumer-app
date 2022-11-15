import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";

function ProductCards({ product }) {
  const router = useRouter();

  return (
    <>
      {product.isStockAvailable ? (
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
            {product.stockAvailable < 10 ? (
              <div className={styles.textContainer}>
                <p className={styles.sisaText}>
                  Sisa {product.stockAvailable}!
                </p>
              </div>
            ) : (
              <></>
            )}
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
      ) : (
        <div
          className={styles.cardEmpty}
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
            <div className={styles.btnEmpty}>Beli</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCards;
