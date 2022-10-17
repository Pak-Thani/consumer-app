import ProductCards from "../ProductCards";
import Link from "next/link";
import styles from "./index.module.css";

const CustomSection = ({ data }) => {
  return (
    <div key={data.title} className={styles.customSection}>
      <div className={styles.customSectionHead}>
        <h3>{data.title}</h3>
        <Link href="/">
          <a className={styles.viewMoreLink}>View More</a>
        </Link>
      </div>
      <div className={styles.customSectionBody}>
        {data.products.map((product) => {
          return <ProductCards product={product} />;
        })}
      </div>
    </div>
  );
};

export default CustomSection;
