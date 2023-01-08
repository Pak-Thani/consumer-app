import styles from "./index.module.css";
import {
  Carousel,
  CategoryButton,
  CustomSection,
  FloatingButtonCart,
} from "../components";
import { getAllCategory, getAllCustomSection } from "../api";
// import { FloatingCart } from "../components/FloatingButtonCart";

const Index = ({ customSections, categorySections }) => {
  return (
    <div>
      <Carousel />
      <div className={styles.customSectionWrapper}>
        <FloatingButtonCart />
        <div className={styles.catalogButtonContainer}>
          {categorySections.map((categorySection, key) => (
            <CategoryButton data={categorySection} key={key} />
          ))}
        </div>
        {customSections.map((customSection, key) => (
          <CustomSection data={customSection} key={key} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const allCustomSectionData = await getAllCustomSection();
  const allCategorySectionData = await getAllCategory();
  return {
    props: {
      customSections: allCustomSectionData.data.customSections,
      categorySections: allCategorySectionData.data,
    },
  };
}

export default Index;
