import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import fotoproduct from "../../public/bayam.png";
import checkmark from "../../public/Checkmark.png";
import ArrowBackBlack from "../../public/images/arrow-back-black.svg";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const route = useRouter();
  
  console.log(route.query)

  return (
    <div className={styles.container}>
      <div className={styles.imageProduct}>
        <div className={styles.backButton} onClick={() => route.push("/")}>
          <ArrowBackBlack />
        </div>
        <Image layout="fill" objectFit="cover" src={fotoproduct} />
      </div>
      <div className={styles.productBody}>
        <h2 className={styles.displayName}>Bayam Brazil</h2>
        <div className={styles.priceWrapper}>
          <h2 className={styles.price}>Rp. 45.000</h2>
          <h4 className={styles.qty}>/ 1 kg</h4>
        </div>
        <p className={styles.productDetailTitle}>Detail Produk</p>
        <p className={styles.productDetail}>
          Daging sapi yang berasal dari Amazon dengan tekstur kenyal yang sangat
          disukai oleh penggemar steak!
        </p>
        <p className={styles.variant}>Pilih Varian</p>
        <div className={styles.variantSelection}>1 kg</div>
      </div>
      <div className={styles.buyButtonWrapper}>
        <div className={styles.buyButton} onClick={openMenu}>
          Beli
        </div>
      </div>
    </div>
  );
}
