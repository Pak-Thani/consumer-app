import ProductCards from "../ProductCards";
import Link from "next/link";
import styles from "./index.module.css";
import { useSnackbar } from "../../utils/snackbartUtils";
import { CustomSnackbar } from "../SnackBar";

const CustomSection = ({ data }) => {
  // console.log(data);
  const { isActive, message, setIsActive, setMessage, type, setType } =
    useSnackbar();
  return (
    <div key={data.title} className={styles.customSection}>
      <div className={styles.customSectionHead}>
        <h3>{data.title}</h3>
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
