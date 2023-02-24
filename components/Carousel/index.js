import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArrowBack from "../../public/images/arrow-back.svg";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { getAllBanner } from "../../api";

SwiperCore.use([Autoplay, Pagination]);

export default function Carousel({ data }) {
  const route = useRouter();
  const {
    query: { bannerSlug },
  } = route;
  
  const [imgLink, setImgLink] = useState(undefined);
  
  // const [carouselImageListIndex, setCarouselImageListIndex] = useState(data.map((data) => data.link));
  // const carouselImageList = ["/3.jpg", "/6.jpg", "/2.jpg", "/5.jpg", "/1.jpg"];

  const [carouselImageListIndex, setCarouselImageListIndex] = useState(0);
 

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCarouselImageListIndex((prevIndex) => (prevIndex + 1) % data.length);
  //   }, delay)

  //   return () => {
  //     clearInterval(intervalId);
  //     console.log(carouselImageListIndex)
  //   }
  // }, [data]);
  // useEffect(() => {
  //   setTimeout(
  //     () =>
  //     setCarouselImageListIndex((prevIndex) =>
  //         // prevIndex === imgLink + 1 ? 0 : prevIndex - 1
  //         (prevIndex + 1) % data.length),
  //     delay
  //   );

  //   return () => {};
  // }, [carouselImageListIndex]);


  useEffect(async () => {
    if (bannerSlug) {
      const data = await getAllBanner(bannerSlug);
      setImgLink(data);
    }
  }, [bannerSlug]);
  
  const delay = 2000;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);


  // console.log(categorySlug);
  // console.log(categoryData);

  // const [carouselImageListIndex, setCarouselImageListIndex] = useState(0);

  // const [imgLink, setImgLink] = useState(data.map((data) => data.link));
  // console.log("ini gambar", costDescriptions);

  

  


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
            autoplay= {{
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Keep autoplaying even if user interacts with swiper
            }}
            speed={800}
            loop
            className={styles.mySwiper}
            spaceBetween={20}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((dataGambar) => (
              <SwiperSlide key={carouselImageListIndex}>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src={dataGambar.link} alt={dataGambar.link}
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={20}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide>
            ))}
            {/* {data.map((data))} */}
            
            {/* <SwiperSlide>
              <div className={styles.carouselImageWrapper}>
                <Image
                  src={`${imgLink[carouselImageListIndex]}`}
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
                  src={`${imgLink[carouselImageListIndex]}`}
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
                  src={`${imgLink[carouselImageListIndex]}`}
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
                 src={`${imgLink[carouselImageListIndex]}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  speed={800}
                  loop
                  spaceBetween={30}
                  className={styles.skeleton}
                />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}