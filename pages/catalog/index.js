import styles from "./index.module.css";
import {  CategoryButton, FloatingButtonCart } from "../../components";
import { getAllCategory } from "../../api";

const Index = ({ categorySections }) => {
  return (
    <>
    <FloatingButtonCart/>

    <div className={styles.container}>
      <div className={styles.headTitle}>
        
      <p>Category</p>
      </div>
      <div className={styles.catalogButtonContainer}>
        {categorySections.map((categorySection, key) => (
          <CategoryButton data={categorySection} key={key} />
          ))}
      </div>
    </div>
          </>
  );
};

export async function getStaticProps() {
  const allCategorySectionData = await getAllCategory();
  console.log(allCategorySectionData);
  return {
    props: {
      categorySections: allCategorySectionData.data,
    },
  };
}

export default Index;
