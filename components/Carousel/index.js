import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBack from "../../public/images/arrow-back.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function Carousel({ data }) {
  const [carouselImageListIndex, setCarouselImageListIndex] = useState(0);
  // const carouselImageList = ["/3.jpg", "/6.jpg", "/2.jpg", "/5.jpg", "/1.jpg"];
  const delay = 5000;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [imgLink, setImgLink] = useState(data.map((data) => data.link));
  // console.log("ini gambar", costDescriptions);
  useEffect(() => {
    setTimeout(
      () =>
        setCarouselImageListIndex((prevIndex) =>
          prevIndex === imgLink.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [carouselImageListIndex]);

  // const handleOnClickPrevCarousel = () => {
  //   if (carouselImageListIndex === 0) {
  //     setCarouselImageListIndex(carouselImageList.length - 1);
  //   } else {
  //     setCarouselImageListIndex(carouselImageListIndex - 1);
  //   }
  // };

  // const handleSwipe = () => {
  //   if (startX > endX) {
  //     setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  //   } else {
  //     setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  //   }
  // };

  // useEffect(() => {
  //   sliderRef.current.addEventListener('touchstart', handleTouchStart);
  //   sliderRef.current.addEventListener('touchend', handleTouchEnd);

  //   return () => {
  //     sliderRef.current.removeEventListener('touchstart', handleTouchStart);
  //     sliderRef.current.removeEventListener('touchend', handleTouchEnd);
  //   };
  // }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.carouselImageWrapper}>
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            speed={800}
            loop
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src={`${imgLink[carouselImageListIndex]}`}
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src="/../public/4.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src="/../public/5.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src="/../public/6.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src="/../public/1.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
