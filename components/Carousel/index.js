import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBack from "../../public/images/arrow-back.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NukaCarousel from "nuka-carousel";

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

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.carouselImageWrapper}>
            <NukaCarousel
              slidesToShow={1}
              autoplay={1}
              nextDisabled={1}
              // disabled={nextDisabled}
              // renderTopCenterControls={({ currentSlide }) => (
              //   <div>Slide: {currentSlide}</div>
              // )}
              renderCenterLeftControls={({
                previousDisabled,
                previousSlide,
              }) => (
                <button
                  onClick={previousSlide}
                  disabled={previousDisabled}
                  className={styles.transparentButton}
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                      fill="#000000"
                    />
                    <path
                      d="M12 16.75C11.9015 16.7505 11.8038 16.7313 11.7128 16.6935C11.6218 16.6557 11.5393 16.6001 11.47 16.53L7.47001 12.53C7.32956 12.3894 7.25067 12.1988 7.25067 12C7.25067 11.8013 7.32956 11.6107 7.47001 11.47L11.47 7.47003C11.6122 7.33755 11.8002 7.26543 11.9945 7.26885C12.1888 7.27228 12.3742 7.35099 12.5116 7.48841C12.649 7.62582 12.7278 7.81121 12.7312 8.00551C12.7346 8.19981 12.6625 8.38785 12.53 8.53003L9.06001 12L12.53 15.47C12.6705 15.6107 12.7494 15.8013 12.7494 16C12.7494 16.1988 12.6705 16.3894 12.53 16.53C12.4608 16.6001 12.3782 16.6557 12.2872 16.6935C12.1962 16.7313 12.0986 16.7505 12 16.75Z"
                      fill="#000000"
                    />
                    <path
                      d="M16 12.75H8C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25H16C16.1989 11.25 16.3897 11.329 16.5303 11.4697C16.671 11.6103 16.75 11.8011 16.75 12C16.75 12.1989 16.671 12.3897 16.5303 12.5303C16.3897 12.671 16.1989 12.75 16 12.75Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              )}
              renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                <button
                  onClick={nextSlide}
                  disabled={nextDisabled}
                  className={styles.transparentButton}
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                      fill="#000000"
                    />
                    <path
                      d="M12 16.75C11.9015 16.7505 11.8038 16.7313 11.7128 16.6935C11.6218 16.6557 11.5393 16.6001 11.47 16.53C11.3296 16.3894 11.2507 16.1988 11.2507 16C11.2507 15.8013 11.3296 15.6107 11.47 15.47L14.94 12L11.47 8.53003C11.3375 8.38785 11.2654 8.19981 11.2688 8.00551C11.2723 7.81121 11.351 7.62582 11.4884 7.48841C11.6258 7.35099 11.8112 7.27228 12.0055 7.26885C12.1998 7.26543 12.3878 7.33755 12.53 7.47003L16.53 11.47C16.6705 11.6107 16.7494 11.8013 16.7494 12C16.7494 12.1988 16.6705 12.3894 16.53 12.53L12.53 16.53C12.4608 16.6001 12.3782 16.6557 12.2872 16.6935C12.1962 16.7313 12.0986 16.7505 12 16.75Z"
                      fill="#000000"
                    />
                    <path
                      d="M16 12.75H8C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25H16C16.1989 11.25 16.3897 11.329 16.5303 11.4697C16.671 11.6103 16.75 11.8011 16.75 12C16.75 12.1989 16.671 12.3897 16.5303 12.5303C16.3897 12.671 16.1989 12.75 16 12.75Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              )}
            >
              {data.map((i) => {
                console.log("data", i.link);
                return (
                  <div className={styles.carouselImageWrapper}>
                    <Image
                      src={`${i.link}`}
                      layout="fill"
                      objectFit="cover"
                      speed={800}
                      loop
                      spaceBetween={30}
                      className={styles.skeleton}
                    />
                  </div>
                );
              })}
            </NukaCarousel>
            {/* <ImageSlider effectDelay={500} autoPlayDelay={2000}>
              {data.map((i) => {
                console.log("data", i.link);
                return (
                  <Slide>
                    <div className={styles.carouselImageWrapper}>
                      <Image
                        src={`${i.link}`}
                        layout="fill"
                        objectFit="cover"
                        speed={800}
                        loop
                        spaceBetween={30}
                        className={styles.skeleton}
                      />
                    </div>{" "}
                  </Slide>
                );
              })}
            </ImageSlider> */}
            {/* <Swiper
            modules={[Navigation, EffectFade]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            speed={800}
            loop
            className={styles.mySwiper}
            >
            {data.map((i) => {
              console.log("data", i.link);
              return (
                <SwiperSlide>
                <div className={styles.carouselImageWrapper}>
                <Image
                src={`${i.link}`}
                layout="fill"
                objectFit="cover"
                speed={800}
                loop
                spaceBetween={30}
                className={styles.skeleton}
                />
                </div>
                </SwiperSlide>
                );
              })}
            </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
}
