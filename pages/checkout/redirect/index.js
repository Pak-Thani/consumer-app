import Image from "next/image";
import styles from "./index.module.css";
import newLogo from "../../../public/images/newLogo.png";
import WALogo from "../../../public/images/WhatsApp.png";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../../../context/AppContext";

const redirect = () => {
  const route = useRouter();
  const {
    cart,
    getTotalPrice,
    data,
    handlerShipping,
    handlerPaymenttoStr,
    payment,
  } = useContext(Context);
  // console.log("Keranjang", cart);
  // console.log("dataPembeli", data);
  // console.log("totalPrice", getTotalPrice);

  // console.log(encodeURI("Alamat ; data"));
  const TotalHarga = getTotalPrice();
  return (
    <>
      <div className={styles.logoWrapper}>
        <div className={styles.logo} onClick={() => route.push("/")}>
          <Image src={newLogo} />
        </div>
      </div>
      <div className={styles.globalContainer}>
        <div></div>
        <div className={styles.midleContainer}>
          <div className={styles.imageContainer}>
            <Image src={WALogo} layout="fill" objectFit="cover" />
          </div>
          <h3>Dialihkan Ke WhatsApp</h3>
          <h3>Pak Thani</h3>
          <h4>+62 822-7220-7548</h4>
          <div
            className={styles.btnRight}
            onClick={() => {
              route.push(
                `https://api.whatsapp.com/send/?phone=6282272207548&text=Selamat%20Datang,%20${encodeURI(
                  data.name
                )}%20di%20Pakthani,%20silahkan%20klik%20tombol%20kirim%20pada%20whatsapp%20anda%20agar%20dikonfirmasi%20admin.
                %0A%0ABerikut+Pesanan+Anda%3A${cart.map((item, index) => {
                  return `%0A${index + 1}.%20${item.name}+x${
                    item.quantity
                  }+Rp.${item.quantity * item.pricePerQty}`;
                })}0%0ATotal+harga%3A+Rp.${TotalHarga}
                %0A%0AAlamat%20:%20${encodeURI(data.alamat)}%20${encodeURI(
                  data.detailAlamat
                )}
                %0AShift%20Pengantaran%20:%20${handlerShipping(
                  data.shipping
                )} %0AMetode%20Pembayaran%20:%20${handlerPaymenttoStr(
                  payment.payment
                )}&type=phone_number&app_absent=0`
              );
            }}
          >
            Selesai
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default redirect;
