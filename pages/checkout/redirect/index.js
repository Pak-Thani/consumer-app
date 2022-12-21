import Image from "next/image";
import styles from "./index.module.css";
import newLogo from "../../../public/images/newLogo.png";
import WALogo from "../../../public/images/WhatsApp.png";

const redirect = () => {
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
          <h4>+62XXXXXXXXX</h4>
          <div
            className={styles.btnRight}
            onClick={() => {
              alert("inii akan redirect ke WA dan memunculkan pesan");
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
