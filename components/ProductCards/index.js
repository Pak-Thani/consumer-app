import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";
function ProductCards({
  product,
  setParentActive,
  setParentMsg,
  setParentType,
}) {
  const router = useRouter();
  const handleSubmitProduct = () => {
    setParentActive(true);
    setParentMsg("Added to Cart");
    setParentType("info");
  };
  const handleEmptyProduct = () => {
    setParentActive(true);
    setParentMsg("Product Unavailable");
    setParentType("error");
  };
  return (
    <>
      <>
        {product.isStockAvailable ? (
          <div className={styles.card} key={product.name}>
            <div
              className={styles.cardImgTop}
              onClick={() =>
                router.push({
                  pathname: "/product",
                  query: { productSlug: product.slug },
                })
              }
            >
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
              <div className={styles.btn} onClick={handleSubmitProduct}>
                Beli
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cardEmpty} key={product.name}>
            <div
              className={styles.cardImgTop}
              onClick={() =>
                router.push({
                  pathname: "/product",
                  query: { productSlug: product.slug },
                })
              }
            >
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
              <div className={styles.btnEmpty} onClick={handleEmptyProduct}>
                Beli
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default ProductCards;
