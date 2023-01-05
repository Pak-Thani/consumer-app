import ProductCards from "../ProductCards";
import Link from "next/link";
import styles from "./index.module.css";
import { useSnackbar } from "../../utils/snackbartUtils";
import { CustomSnackbar } from "../SnackBar";
import { useRouter } from "next/router";

const CustomSection = ({ data }) => {
  const router = useRouter();

  console.log(data);
  const {
    isActive,
    message,
    openSnackBar,
    setIsActive,
    setMessage,
    type,
    setType,
  } = useSnackbar();
  return (
    <div key={data.title} className={styles.customSection}>
      <div className={styles.customSectionHead}>
        <h3>{data.title}</h3>
        {/* <Link href="/"> */}
        <a
          className={styles.viewMoreLink}
          onClick={() =>
            router.push({
              pathname: `/category`,
              query: { categorySlug: data.slug },
            })
          }
        >
          {" "}
          More
        </a>
        {/* </Link> */}
      </div>
      <div className={styles.customSectionBody}>
        {data.products.map((product) => {
          return (
            <ProductCards
              product={product}
              setParentActive={setIsActive}
              setParentMsg={setMessage}
              setParentType={setType}
            />
          );
        })}
      </div>
      <div className={styles.snackbarContainer}>
        <CustomSnackbar isActive={isActive} type={type} message={message} />
      </div>
    </div>
  );
};

export default CustomSection;
