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

  // you can start to explore data fetchin in next
  // instead we use client side data fetching
  // you can try another method data fetching that suitable for your case
  // i use this method to make me easier fetch data from client
  // if we can fetch data from server, we can reduce loading time and user experience
  useEffect(async () => {
    if (productSlug) {
      const data = await getProductByProductSlug(productSlug);
      setProductData(data);
    }
  }, [productSlug]);

  // please change this loading screen immediately
  // you can use temp data
  // or maybe use screen loading or skeleton component to make it more pretty
  // todo @angle: change this boring loading component 
  if (!productData) return <h1>loading</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.imageProduct}>
        <div className={styles.backButton} onClick={() => route.push("/")}>
          <ArrowBackBlack />
        </div>
        <Image layout="fill" objectFit="cover" src={productData.data.image} />
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
