import ProductCards from "../ProductCards";
import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./index.module.css";
import saladLogo from "../../public/Salad.png";
const CategoryButton = ({ data }) => {
  const [categoryLogoListIndex, setcategoryLogoListIndex] = useState(0);
  const [categoryColorListIndex, setcategoryColorListIndex] = useState(0);
  const categoryColorList = ["button", "button_2"];

  const categoryLogoList = ["/Salad.jpg", "/Steap.png"];
  // console.log(data.id);
  // useEffect(() => {
  //   switch (data.id) {
  //     case 1:
  //       setcategoryLogoListIndex(0);
  //       setcategoryColorListIndex(0);
  //     case 2:
  //       setcategoryLogoListIndex(1);
  //       setcategoryColorListIndex(1);
  //     default:
  //       // setIsNavbar(true);
  //       break;
  //   }
  // }, [data.id]);
  // console.log(categoryColorList);
  return (
    <>
      <div className={styles.catergoryWrapper}>
        <div className={styles.button}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Image src={data.icon} layout="fill" objectFit="cover" alt=" " />
              {/* <Image
                src={`${categoryLogoList[categoryLogoListIndex]}`}
                layout="fill"
                objectFit="cover"
                alt=" "
              /> */}
            </div>
          </div>
        </div>
        <h4>{data.name}</h4>
      </div>
      {/* <div key={data.title} className={styles.customSection}>
        <div className={styles.customSectionHead}>
          <h3>{data.title}</h3>
        </div>
      </div> */}
    </>
  );
};

export default CategoryButton;
