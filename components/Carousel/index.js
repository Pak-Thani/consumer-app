import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBack from "../../public/images/arrow-back.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";


export default function Carousel() {
  const [carouselImageListIndex, setCarouselImageListIndex] = useState(0);
  const carouselImageList = ["/3.jpg", "/6.jpg", "/2.jpg", "/5.jpg", "/1.jpg"];
  const delay = 5000;
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  useEffect(() => {
    setTimeout(
      () =>
      setCarouselImageListIndex((prevIndex) =>
          prevIndex === carouselImageList.length - 1 ? 0 : prevIndex + 1
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

  // const handleOnClickNextCarousel = () => {
  //   if (carouselImageListIndex === carouselImageList.length - 1) {
  //     setCarouselImageListIndex(0);
  //   } else {
  //     setCarouselImageListIndex(carouselImageListIndex + 1);
  //   }
  // };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.carouselImageWrapper}>
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            
            // navigation={{
            //   prevEl: swiperNavPrevRef.current,
            //   nexrEl: swiperNavNextRef.current,
            // }}
            effect
            slidesPerView={1}
            speed={800}
            loop
            className={styles.mySwiper}
          > 

          {/* <div
            className={styles.swiperNavPrev} ref={swiperNavPrevRef}>
          </div>
          <div
            className={styles.swiperNavNext} ref={swiperNavNextRef}>
          </div> */}

          <SwiperSlide >
            <div className={styles.carouselImageWrapper}>
              <Image
                src={`${carouselImageList[carouselImageListIndex]}`}
                layout="fill"
                objectFit="cover"
                effect={'fade'}
                slidesPerView={1}
                speed={800}
                loop
                alt=" "
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

