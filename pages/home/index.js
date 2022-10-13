import Link from "next/link";
import ProductCards from "../../components/productCards";
import styled from "styled-components";
import { getAllCustomSection } from "../../api";

const Style = styled.div`
  .section {
    width: 100%;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    .sectionHead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      & a {
        color: #4cb654;
        text-decoration: none;
      }
    }
    .sectionBody {
      display: flex;
      flex-direction: row;
      margin: 0px 4px;
      overflow: auto;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

function Home({ customSection }) {
  console.log(customSection);
  return (
    <Style>
      <div>
        {customSection.map((customSec, key) => {
          return (
            <div key={key} className="section">
              <div className="sectionHead">
                <h3>{customSec.title}</h3>
                <Link href="/">
                  <a>View More</a>
                </Link>
              </div>
              <div className="sectionBody">
                {customSec.products.map((product) => {
                  return <ProductCards product={product} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Style>
  );
}
export default Home;

export async function getStaticProps() {
  const allCustomSectionData = await getAllCustomSection();
  console.log(allCustomSectionData);
  return {
    props: {
      customSection: allCustomSectionData.data.customSections,
    },
  };
}
