import styles from "./index.module.css";
import { Context } from "../../../context/AppContext";
import { useContext } from "react";
import CheckoutItem from "../../../components/CheckoutItem";
import { useRouter } from "next/router";
import { numberPriceToStringPrice } from "../../../utils/productUtils";
import BSILogo from '../../../public/images/BSILogo.png'
import moneyLogo from '../../../public/images/moneyLogo.png'

import Image from "next/image";
const Index = ({}) => {
    const route = useRouter();
  const { cart, getTotalPrice, data, handlerShipping } = useContext(Context);
  return (
    <>
      <div className={styles.globalContainer}>
        <div className={styles.container}>
          {cart.length === 0 ?  <p className={styles.emptyCardTitle}>Keranjang Kosong</p> : cart.map((product) => {
            return <CheckoutItem product={product} />;
          })}
          
        
        {/* <div className={styles.priceContainer}>
            <div><p className={styles.string}>Subtotal</p><p className={styles.price}>{numberPriceToStringPrice(getTotalPrice())}</p></div>
        </div> */}
        <div className={styles.totalPriceContainer}>
            <p>Total</p> <h1>
            {numberPriceToStringPrice(getTotalPrice())}
                </h1>
        </div>
        <div className={styles.formContainer}>
            <input type="text" placeholder="Nama Pelanggan" value={data.name}/>
            <input type="text" placeholder="Alamat" value={data.alamat}/>
            <input type="text" placeholder="Alamat" value={handlerShipping(data.shipping)}/>
        </div>
        <h1 className={styles.formTitle}>Payment</h1>
        <div className={styles.radioFormContainer}>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={BSILogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>Bank Syariah Indonesia (BSI)</h3>
                </div>
                <input type="radio" name="Shipping Time" value="1"/>
            </div>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={moneyLogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>Cash</h3>
                </div>
                <input type="radio" name="Shipping Time" value="1"/>
            </div>
        </div>
        </div>
        </div>
        <div className={styles.globalContainer2}>

        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
          <div className={styles.btnLeft} onClick={() => route.push("/checkout/shipping")}>Kembali</div>
          </div>
          <div className={styles.cartFooterRight}>
            <div className={styles.btnRight}  onClick={() => route.push("/checkout/shipping")}><span>Selesaikan Pesanan</span></div>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default Index;