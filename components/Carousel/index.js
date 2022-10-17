import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBack from "../../public/images/arrow-back.svg";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const array = ["/3.jpg", "/6.jpg", "/2.jpg", "/5.jpg", "/1.jpg"];

  function loop(count) {
    if (count == array.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = array.length - 1);
    }
    return count;
  }

  useEffect(() => {
    const interval = setInterval(
      () => (setIndex) => (count) => (loop) => count + 1,
      2000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.main}>
      <div
        className={`${styles.prev} ${styles.button}`}
        onClick={() => setIndex((count) => count - 1)}
      >
        <ArrowBack />
      </div>

      <div
        className={`${styles.next} ${styles.button}`}
        onClick={() => setIndex((count) => count + 1)}
      >
        <ArrowBack />
      </div>

      <div className={styles.container}>
        <div className={styles.carouselImageWrapper}>
          <Image src={array[index]} layout="fill" objectFit="cover" alt=" " />
        </div>
      </div>
    </div>
  );
}
