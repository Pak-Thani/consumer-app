import styles from "./index.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ArrowBackBlack from "../../public/images/arrow-back-black.svg";
import { useRouter } from "next/router";
import { getProductByProductSlug } from "../../api";
import { numberPriceToStringPrice } from "../../utils/productUtils";
import { useSnackbar } from "../../utils/snackbartUtils";
import { CustomSnackbar } from "../../components/SnackBar";
import { Context } from "../../context/AppContext";
import { FloatingButtonCart } from "../../components";

export default function ProductDetail() {
  const [productData, setProductData] = useState(undefined);
  const { isActive, message, setIsActive, setMessage, type, setType } =
    useSnackbar();

  const route = useRouter();
  const {
    query: { productSlug },
  } = route;
  const { addToCart2 } = useContext(Context);

  useEffect(async () => {
    if (productSlug) {
      const data = await getProductByProductSlug(productSlug);
      setProductData(data);
    }
  }, [productSlug]);
  const handleSubmitProduct = () => {
    addToCart2(productData.data);
    setIsActive(true);
    setMessage("Added to Cart");
    setType("info");
  };
  const handleEmptyProduct = () => {
    setIsActive(true);
    setMessage("Product Unavailable");
    setType("error");
  };

  if (!productData)
    return (
      <div className={styles.loaderContainer}>
        <h1>Loading</h1>
        <div className={styles.ldsDualRing}></div>
      </div>
    );

  return (
    <>
      <div className={styles.container}>
        <FloatingButtonCart />
        <div className={styles.snackbarContainer}>
          <CustomSnackbar isActive={isActive} message={message} type={type} />
        </div>
        <div className={`${styles.imageProduct} ${styles.skeleton}`}>
          <div className={styles.backButton} onClick={() => route.push("/")}>
            <ArrowBackBlack />
          </div>
          <Image
            layout="fill"
            objectFit="cover"
            src={productData.data.image}
            className={styles.skeleton}
          />
        </div>
        <div className={styles.productBody}>
          <h2 className={styles.displayName}>{productData.data.name}</h2>
          <div className={styles.priceWrapper}>
            <h2 className={styles.price}>
              {numberPriceToStringPrice(productData.data.pricePerQty)}
            </h2>
          </div>
          <p className={styles.productDetailTitle}>Detail Produk</p>
          <p className={styles.productDetail}>{productData.data.description}</p>
        </div>
        <div className={styles.buyButtonWrapper}>
          {productData.data.isStockAvailable ? (
            <div className={styles.buyButton} onClick={handleSubmitProduct}>
              Beli
            </div>
          ) : (
            <div className={styles.EmptybuyButton} onClick={handleEmptyProduct}>
              Beli
            </div>
          )}
        </div>
      </div>
    </>
  );
}
