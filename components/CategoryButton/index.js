import { useRouter } from "next/router";

import Image from "next/image";

import styles from "./index.module.css";

const CategoryButton = ({ data }) => {
  const router = useRouter();
  // console.log("path", router.pathname);

  return (
    <>
      <div
        key={data.name}
        onClick={() =>
          router.push({
            pathname: `/category`,
            query: { categorySlug: data.slug },
          })
        }
      >
        <div className={styles.catergoryWrapper}>
          <div className={styles.button}>
            <div className={styles.logoWrapper}>
              {router.pathname === "/catalog" ? (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={data.image}
                    className={styles.img}
                    width={50}
                    height={50}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={data.image}
                    className={styles.img}
                    width={50}
                    height={50}
                  />
                </div>
              )}
            </div>
          </div>
          {router.pathname === "/catalog" ? (
            <p className={styles.categoryNameCatalog}>{data.name}</p>
          ) : (
            <p className={styles.categoryName}>{data.name}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryButton;
