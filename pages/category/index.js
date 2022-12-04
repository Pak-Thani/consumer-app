import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCategoryProducyByCategorySlug } from "../../api";
import { FloatingButtonCart, ProductCards } from "../../components";
import { useSnackbar } from "../../utils/snackbartUtils";
import { CustomSnackbar } from "../../components/SnackBar";
// import Snackbar from "../../components/SnackBar";
const CatalogSlug = () => {
  const {
    isActive,
    message,
    openSnackBar,
    setIsActive,
    setMessage,
    type,
    setType,
  } = useSnackbar();

  const route = useRouter();
  const {
    query: { categorySlug },
  } = route;
  const [categoryData, setCategoryData] = useState(undefined);

  useEffect(async () => {
    if (categorySlug) {
      const data = await getCategoryProducyByCategorySlug(categorySlug);
      setCategoryData(data);
    }
  }, [categorySlug]);
  // console.log(categoryData);

  if (!categoryData)
    return (
      <div className={styles.loaderContainer}>
        <h1>Loading</h1>
        <div className={styles.ldsDualRing}></div>
      </div>
    );
  return (
    <>
    <FloatingButtonCart/>
      <div key={categoryData.name} className={styles.container}>
        <div className={styles.headTitle}>
          <p>
            Menampilkan produk untuk <span>"{categoryData.data.name}"</span>
          </p>
        </div>
        <div className={styles.gridLayoutForAlldatCard}>
          {categoryData.data.products.map((product) => {
            return (
              <ProductCards
                product={product}
                setParentActive={setIsActive}
                setParentMsg={setMessage}
                setParentType={setType}
              />
            );
          })}
        </div>
        <div className={styles.snackbarContainer}>
          <CustomSnackbar isActive={isActive} type={type} message={message} />
        </div>
      </div>
    </>
  );
};
export default CatalogSlug;
