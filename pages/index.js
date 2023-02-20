import styles from "./index.module.css";
import {
  Carousel,
  CategoryButton,
  CustomSection,
  FloatingButtonCart,
} from "../components";
import { getAllBanner, getAllCategory, getAllCustomSection } from "../api";
import { Context } from "../context/AppContext";
import { useContext } from "react";
// import { FloatingCart } from "../components/FloatingButtonCart";

const Index = ({ customSections, categorySections, carouselImg }) => {
  const { openMenu, isOpen } = useContext(Context);
  // console.log(isOpen);
  return (
    <div>
      <Carousel data={carouselImg} />
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
  const allCarouselImg = await getAllBanner();
  return {
    props: {
      customSections: allCustomSectionData.data || [],
      categorySections: allCategorySectionData.data || [],
      carouselImg: allCarouselImg.data,
    },
  };
}

export default Index;
