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
      // className={styles.card}
      key={data.name}
      onClick={() =>
        router.push({
          pathname: `/category`,
          query: { categorySlug : data.slug },
        })
      }
    >

      <div className={styles.catergoryWrapper}>
        <div className={styles.button}>
          <div className={styles.logoWrapper}>
            <div style={{width: '100px', height: '100px', position: 'relative'}}>
        <Image src={data.image} layout="fill"
    alt='icon category'
    sizes='100vm' />
      </div>
          </div>
        </div>
        <h4>{data.name}</h4>
      </div>
    </div>
    </>
  );
};

export default CategoryButton;
