import styles from "./index.module.css";
import { Context } from "../../../context/AppContext";
import { useContext } from "react";
import CheckoutItem from "../../../components/CheckoutItem";
import { useRouter } from "next/router";
import { numberPriceToStringPrice } from "../../../utils/productUtils";
import deliveryLogo from '../../../public/images/deliveryLogo.png'
import Image from "next/image";
const Index = ({}) => {
    const route = useRouter();
  const { cart, getTotalPrice, data, handleChange } = useContext(Context);
  console.log(data)
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
        </div>
        <h1 className={styles.formTitle}>Select Shift Time</h1>
        <div className={styles.radioFormContainer}>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={deliveryLogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>08.00 - 10.00</h3>
                </div>
                <input type="radio" name="time_1" checked={data.shipping_1} onChange={handleChange}
                    value="time_1"/>
            </div>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={deliveryLogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>10.00 - 12.00</h3>
                </div>
                <input type="radio" name="time_2" checked={data.shipping_2} onChange={handleChange}
                    value="time_2"/>
            </div>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={deliveryLogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>13.00 - 15.00</h3>
                </div>
                <input type="radio" name="time_3" checked={data.shipping_3} onChange={handleChange}
                    value="time_3"/>
            </div>
            <div className={styles.radioForm}>
                <div className={styles.formText}>
                    <div className={styles.imageContainer}>
                        <Image src={deliveryLogo} layout="fill" objectFit="cover"/>
                    </div>
                    <h3>15.00 - 17.00</h3>
                </div>
                <input type="radio" name="time_4" checked={data.shipping_4} onChange={handleChange}
                    value="time_4"/>
            </div>
        </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
          <div className={styles.btnLeft} onClick={() => route.push("/checkout/information")}>Kembali</div>
          </div>
          <div className={styles.cartFooterRight}>
            <div className={styles.btnRight}  onClick={() => route.push("/checkout/payment")}>Selanjutnya  <span>Payment</span></div>
          </div>
        </div>
        </div>

      
    </>
  );
};

export default Index;
