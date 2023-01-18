import React, { useContext } from "react";
import styles from "./index.module.css";
import floatingCart from "../../public/images/floatingCart.png";
import Image from "next/image";
import { Context } from "../../context/AppContext";
import { useRouter } from "next/router";

const FloatingCart = () => {
  const route = useRouter();

  const { getTotalItem } = useContext(Context);
  return (
    <>
      <div
        className={styles.floatingContainer}
        onClick={() => route.push("/cart")}
      >
        <div
          className={
            getTotalItem() === 0
              ? [styles.totalItemContainer]
              : [styles.totalItemContainer, styles.visible].join(" ")
          }
        >
          <p>{getTotalItem()}</p>
        </div>
        <Image
          layout="fill"
          objectFit="cover"
          src="https://pakthani.s3.ap-southeast-1.amazonaws.com/media/upload/floatingCart.png"
          className={styles.imgCart}
        />
      </div>
    </>
  );
};
export default FloatingCart;
