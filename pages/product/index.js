import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import fotoproduct from "../../public/bayam.png";
import ArrowBackBlack from "../../public/images/arrow-back-black.svg";
import { useRouter } from "next/router";
import { getProductByProductSlug } from "../../api";
import { numberPriceToStringPrice } from "../../utils/productUtils";

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState(undefined);
  const openMenu = () => setIsOpen(!isOpen);

  const route = useRouter();
  const {
    query: { productSlug },
  } = route;

  useEffect(async () => {
    if (productSlug) {
      const data = await getProductByProductSlug(productSlug);
      setProductData(data);
    }
  }, [productSlug]);

  if (!productData) return(
    <div className={styles.loaderContainer}>
      <h1>Loading</h1>
      <div className={styles.ldsDualRing}></div>
    </div>
    );

  return (
    <div className={styles.container}>
      <div className={`${styles.imageProduct} ${styles.skeleton}`}>
        <div className={styles.backButton} onClick={() => route.push("/")}>
          <ArrowBackBlack />
        </div>
        <Image layout="fill" objectFit="cover" src={productData.data.image} className={styles.skeleton}/>
      </div>
      <div className={styles.productBody}>
        <h2 className={styles.displayName}>{productData.data.name}</h2>
        <div className={styles.priceWrapper}>
          <h2 className={styles.price}>
            {numberPriceToStringPrice(productData.data.pricePerQty)}
          </h2>
          <h4 className={styles.qty}>/ {productData.data.qty}</h4>
        </div>
        <p className={styles.productDetailTitle}>Detail Produk</p>
        <p className={styles.productDetail}>{productData.data.description}</p>
        <p className={styles.variant}>Varian</p>
        <div className={styles.variantSelection}>{productData.data.qty}</div>
      </div>
      <div className={styles.buyButtonWrapper}>
        <div className={styles.buyButton} onClick={openMenu}>
          Beli
        </div>
      </div>
    </div>
  );
}
