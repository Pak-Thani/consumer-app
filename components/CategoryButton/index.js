import ProductCards from "../ProductCards";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import styles from "./index.module.css";
import saladLogo from "../../public/Salad.png";
const CategoryButton = ({ data }) => {
  const router = useRouter();

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
              <div
                style={{ width: "87px", height: "87px", position: "relative" }}
              >
                <Image
                  src={data.image}
                  className={styles.img}
                  // layout="fill"
                  // sizes="100vm"
                  width={87}
                  height={87}
                />
              </div>
            </div>
          </div>
          <p className={styles.categoryName}>{data.name}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryButton;
