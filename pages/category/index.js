import styles from "./index.module.css";
// import Image from "next/image";
import { useEffect, useState } from "react";
// import fotoproduct from "../../public/bayam.png";
// import ArrowBackBlack from "../../public/images/arrow-back-black.svg";
import { useRouter } from "next/router";
import { getCategoryProducyByCategorySlug } from "../../api";
// import { numberPriceToStringPrice } from "../../utils/productUtils";
import { ProductCards } from "../../components";

const CatalogSlug = ()=>  {
  const route = useRouter();
  const {
    query: { categorySlug },
  } = route;
  const [categoryData, setCategoryData] = useState(undefined);


  // console.log(categorySlug)

  useEffect(async () => {
    if (categorySlug) {
      const data = await getCategoryProducyByCategorySlug(categorySlug);
      setCategoryData(data);
    }
  }, [categorySlug]);
  console.log(categoryData)


  if (!categoryData) return <h1>loading</h1>;

  return (
    <div key={categoryData.name} className={styles.container}>
    <div className={styles.customSectionHead}>
      <h3>{categoryData.data.name}</h3>
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
