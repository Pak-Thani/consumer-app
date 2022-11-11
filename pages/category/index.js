import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCategoryProducyByCategorySlug } from "../../api";
import { ProductCards } from "../../components";

const CatalogSlug = ()=>  {
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
  console.log(categoryData)


  if (!categoryData) return(
  <div className={styles.loaderContainer}>
    <h1>Loading</h1>
    <div className={styles.ldsDualRing}></div>
  </div>
  );
  return (
    <div key={categoryData.name} className={styles.container}>
    <div className={styles.headTitle}>
      <p>Menampilkan produk untuk <span>"{categoryData.data.name}"</span></p>
    </div>
    <div className={styles.gridLayoutForAlldatCard}>
      {categoryData.data.products.map((product) => {
        return <ProductCards product={product} />;
      })}
    </div>
  </div>
  );
}
export default CatalogSlug;
