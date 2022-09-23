import styles from "../styles/Detail.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import fotoproduct from "../public/bayam.png";
import checkmark from "../public/Checkmark.png";

export default function ProductDetail() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const clicked1 = () => {
    setIsClicked1(!isClicked1);
    if (!isClicked1) {
      setIsClicked2(false);
      setIsClicked3(false);
    } else if (!isClicked2) {
      setIsClicked1(false);
      setIsClicked3(false);
    } else if (!isClicked3) {
      setIsClicked1(false);
      setIsClicked2(false);
    }
  };
  const clicked2 = () => {
    setIsClicked2(!isClicked2);
    if (!isClicked2) {
      setIsClicked1(false);
      setIsClicked3(false);
    } else if (!isClicked1) {
      setIsClicked2(false);
      setIsClicked3(false);
    } else if (!isClicked3) {
      setIsClicked2(false);
      setIsClicked2(false);
    }
  };
  const clicked3 = () => {
    setIsClicked3(!isClicked3);
    if (!isClicked3) {
      setIsClicked1(false);
      setIsClicked2(false);
    } else if (!isClicked2) {
      setIsClicked1(false);
      setIsClicked3(false);
    } else if (!isClicked1) {
      setIsClicked2(false);
      setIsClicked3(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://api.npoint.io/9f8b70d82a8cf71a2295")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    const interval = setInterval(() => setIsOpen(false), 5000)
    return () => clearInterval(interval)
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data.products.displayName);

  return (
    <div className={styles.container}>
      <div className={styles.Top}>
        <a className={styles.backbutton}>❮</a>
      </div>
      <div className={styles.imageproduct}>
        <Image style={{borderRadius: '10px', overflow: 'hidden'}} layout="fixed" src={fotoproduct} />
      </div>
      <div className={styles.productbody}>
        <h2 className={styles.displayName}>{data.products.displayName}</h2>
        <div className={styles.flex}>
          <h2 className={styles.price}>Rp. {data.products.pricePerQty}</h2>
          <h4 className={styles.qty}>/ {data.products.qty}</h4>
        </div>
        <hr className={styles.line}></hr>
        <p className={styles.detailproduk}>Detail Produk</p>
        <p className={styles.keterangan}>{data.products.detailProduct}</p>
        <p className={styles.varian}>Pilih Varian</p>
        <div className={styles.button}>
          <button
            className={
              isClicked1 === false
                ? styles.button1
                : styles.button1 + " " + styles.active
            }
            onClick={clicked1}
          >
            {" "}
            250 gr{" "}
          </button>
          <button
            className={
              isClicked2 === false
                ? styles.button2
                : styles.button2 + " " + styles.active
            }
            onClick={clicked2}
          >
            {" "}
            500 gr{" "}
          </button>
          <button
            className={
              isClicked3 === false
                ? styles.button3
                : styles.button3 + " " + styles.active
            }
            onClick={clicked3}
          >
            {" "}
            1 kg{" "}
          </button>
        </div>
      </div>
      <a
        className={
          isOpen === false
            ? styles.popbutton
            : styles.popbutton + " " + styles.active
        }
        onClick={openMenu}
      >
        <div className={styles.beli}>
          <button className={styles.buttonbeli} onClick={openMenu}>
            {" "}
            Beli{" "}
          </button>
        </div>
      </a>
      <div
        className={
          isOpen === false
            ? styles.Checkmark
            : styles.Checkmark + " " + styles.active
        }
      >
        <Image layout="fixed" src={checkmark} />
        <p>Added to cart!</p>
      </div>

      <div
        className={
          isOpen === false 
          ? styles.blur 
          : styles.blur + " " + styles.active
        }
      ></div>
    </div>
  );
}
