import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBack from "../../public/images/arrow-back.svg";

export default function Carousel() {
  const [carouselImageListIndex, setCarouselImageListIndex] = useState(0);
  const carouselImageList = ["/3.jpg", "/6.jpg", "/2.jpg", "/5.jpg", "/1.jpg"];

  // todo @angle: Fix this logic
  // function loop(count) {
  //   if (count == array.length) {
  //     return (count = 0);
  //   }
  //   if (count < 0) {
  //     return (count = array.length - 1);
  //   }
  //   return count;
  // }

  // todo @angle: Fix this logic
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => (setCarouselImageListIndex) => (count) => (loop) => count + 1,
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  const handleOnClickPrevCarousel = () => {
    if (carouselImageListIndex === 0) {
      setCarouselImageListIndex(carouselImageList.length - 1);
    } else {
      setCarouselImageListIndex(carouselImageListIndex - 1);
    }
  };

  const handleOnClickNextCarousel = () => {
    if (carouselImageListIndex === carouselImageList.length - 1) {
      setCarouselImageListIndex(0);
    } else {
      setCarouselImageListIndex(carouselImageListIndex + 1);
    }
  };

  return (
    <div className={styles.main}>
      <div
        className={`${styles.prev} ${styles.button}`}
        onClick={handleOnClickPrevCarousel}
      >
        <ArrowBack />
      </div>

      <div
        className={`${styles.next} ${styles.button}`}
        onClick={handleOnClickNextCarousel}
      >
        <ArrowBack />
      </div>

      <div className={styles.container}>
        <div className={styles.carouselImageWrapper}>
          <Image
            src={`${carouselImageList[carouselImageListIndex]}`}
            layout="fill"
            objectFit="cover"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}
