import styles from "./index.module.css"
import { Carousel, CustomSection } from "../components";
import { getAllCustomSection } from "../api";

const Index = ({customSections}) => {
  console.log(customSections)
  return (
    <div>
      <Carousel/>
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
