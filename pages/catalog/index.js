import styles from "./index.module.css";
import {  CategoryButton } from "../../components";
import { getAllCategory } from "../../api";

const Index = ({ categorySections }) => {
  // console.log(customSections);
  return (
    <div className={styles.container}>
      <div className={styles.headTitle}>
        
      <p>Category</p>
      </div>
      <div className={styles.catalogButtonContainer}>
        {/* <h1>Test for katalog page</h1> */}
        {categorySections.map((categorySection, key) => (
          <CategoryButton data={categorySection} key={key} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allCategorySectionData = await getAllCategory();
  console.log(allCategorySectionData);
  return {
    props: {
      categorySections: allCategorySectionData.data,
      // console.log(categorySection)
    },
  };
}

export default Index;
