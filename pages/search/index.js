import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductBySearch } from "../../api";
import styles from "./index.module.css";
import { FloatingButtonCart, ProductCards } from "../../components";
import { useSnackbar } from "../../utils/snackbartUtils";
import { CustomSnackbar } from "../../components/SnackBar";

export default function ProductSearch() {
  const {
    isActive,
    message,
    openSnackBar,
    setIsActive,
    setMessage,
    type,
    setType,
  } = useSnackbar();
  const [productData, setProductData] = useState(undefined);
  const route = useRouter();

  const {
    query: { productSlug },
  } = route;
  useEffect(async () => {
    if (productSlug) {
      const data = await getProductBySearch(productSlug);
      setProductData(data);
    }
  }, [productSlug]);
  //   console.log(productSlug);
  console.log(productData);
  //   console.log(productData.error);
  //   console.log(productData.data.products);
  if (!productData)
    return (
      <div className={styles.loaderContainer}>
        <h1>Loading</h1>
        <div className={styles.ldsDualRing}></div>
      </div>
    );
  return (
    <>
      <FloatingButtonCart />

      <div key={productData} className={styles.container}>
        <div className={styles.headTitle}>
          <p>
            Menampilkan Pencarian <span>"{productSlug}"</span>
          </p>
        </div>
        <div className={styles.gridLayoutForAlldatCard}>
          {/* {productData.data.products.map((product) => {
              return (
                <ProductCards
                  product={product}
                  setParentActive={setIsActive}
                  setParentMsg={setMessage}
                  setParentType={setType}
                />
              );
            })} */}
          {productData !== undefined && !productData.success ? (
            <h1> Product yang anda cari tidak ada</h1>
          ) : (
            // <h1>ada</h1>
            productData &&
            productData.data.products.map((product) => {
              return (
                <ProductCards
                  product={product}
                  setParentActive={setIsActive}
                  setParentMsg={setMessage}
                  setParentType={setType}
                />
              );
            })
          )}
        </div>
        <div className={styles.snackbarContainer}>
          <CustomSnackbar isActive={isActive} type={type} message={message} />
        </div>
      </div>
    </>
  );
}
