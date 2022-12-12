import styles from "./index.module.css";
import { Context } from "../../../context/AppContext";
import { useContext } from "react";
import CheckoutItem from "../../../components/CheckoutItem";
import { useRouter } from "next/router";
import { numberPriceToStringPrice } from "../../../utils/productUtils";

const Index = ({}) => {
    const route = useRouter();
  const { cart, getTotalPrice, data, setData, handleSubmit, handleChange } = useContext(Context);
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
            <p>Total</p> <h1>{numberPriceToStringPrice(getTotalPrice())}</h1>
        </div>
        <h1 className={styles.formTitle}>Shipping Address</h1>
        <div className={styles.formContainer}>
        <input type="text" name="name" placeholder="Nama Pelanggan" onChange={handleChange} value={data.name}/>
        <div className={styles.horizontalFormContainer}>
        <input type="text" name="kabupaten" placeholder="Kabupaten" onChange={handleChange} value={data.kabupaten}/>
        <input type="text" name="kecamatan" placeholder="Kecamatan" onChange={handleChange} value={data.kecamatan}/>
        </div>
        <input type="text" name="alamat" placeholder="Alamat" onChange={handleChange} value={data.alamat}/>
        <input type="text" name="detailAlamat" placeholder="Detail Alamat (e.grumah abu-abu tingkat 2)" onChange={handleChange} value={data.detailAlamat}/>
        <input type="text" name="nomorWa" placeholder="Nomor Whatsapp" onChange={handleChange} value={data.nomorWa}/>

        </div>
        </div>
        
        <div className={styles.cartFooter}>
          <div className={styles.cartFooterLeft}>
          <div className={styles.btnLeft} onClick={() => route.push("/cart")}>Kembali</div>
          </div>
          <div className={styles.cartFooterRight}>
            <div className={styles.btnRight}  onClick={() => route.push("/checkout/shipping")}>Selanjutnya  <span>Shipping</span></div>
          </div>
        </div>
        </div>
        {/* <div className={styles.globalContainer2}>

        </div> */}
      
    </>
  );
};

export default Index;
