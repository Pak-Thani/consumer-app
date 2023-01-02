import styles from "./index.module.css";
import { Carousel, CustomSection, FloatingButtonCart } from "../components";
import { getAllCustomSection } from "../api";
// import { FloatingCart } from "../components/FloatingButtonCart";

const Index = ({ customSections }) => {
  return (
    <div>
      <Carousel />
      TEST
      <div className={styles.customSectionWrapper}>
        <FloatingButtonCart />
        {customSections.map((customSection, key) => (
          <CustomSection data={customSection} key={key} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const allCustomSectionData = await getAllCustomSection();
  return {
    props: {
      customSections: allCustomSectionData.data.customSections,
    },
  };
}

export default Index;
