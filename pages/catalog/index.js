import styles from "./index.module.css";
import { Carousel, CategoryButton, CustomSection } from "../../components";
import { getAllCategory, getAllCustomSection } from "../../api";

const Index = ({ categorySections }) => {
  // console.log(customSections);
  return (
    <div className={styles.main}>
      <h3>Category</h3>
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
