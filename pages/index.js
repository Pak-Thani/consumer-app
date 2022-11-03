import styles from "./index.module.css"
import { Carousel, CustomSection } from "../components";
import { getAllCustomSection } from "../api";

const Index = ({customSections}) => {
  return (
    <div>
      <Carousel/>
      <h1>TEST PUSH 1.1</h1>
      <div className={styles.customSectionWrapper}>
        {customSections.map((customSection, key) => (
          <CustomSection 
            data={customSection} 
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allCustomSectionData = await getAllCustomSection();
  return {
    props: {
      customSections: allCustomSectionData.data.customSections,
    },
  };
}

export default Index;
