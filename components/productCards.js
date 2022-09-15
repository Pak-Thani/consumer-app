// import styles from '../styles/Card.module.css'

function ProductCard({product}) {
    return (
        // <div className={styles.card}>
        //     <img src={user.avatar} alt='Product Image' style={{width: '100%'}} />
        //     <div className={styles.cardBody}>
        //         <h4><b>{user.name}</b></h4>
        //         <p>{user.email}</p>
        //         <button>Beli</button>
        //     </div>
        // </div>

        <div className="card" style={{width: "16rem", marginRight: "30px"}}>
            <img src={product.imageId} className="card-img-top" alt="Product Image" />
            <div className="card-body">
                <h5 className="card-title">{product.displayName}</h5>
                <p className="card-text" style={{minHeight: "50px"}}>Rp {product.pricePerQty}<span style={{color: "rgba(0, 0, 0, 0.6)"}}>/ {product.qty}</span></p>
                <a href="#" className="btn" style={{backgroundColor: "#F7D100", width: "14rem", alignItems: "center"}}><b>Beli</b></a>
            </div>
        </div>
    )
}

export default ProductCard