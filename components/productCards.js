import styles from '../styles/Card.module.css'

function ProductCard({user}) {
    return (
        // <div className={styles.card}>
        //     <img src={user.avatar} alt='Product Image' style={{width: '100%'}} />
        //     <div className={styles.cardBody}>
        //         <h4><b>{user.name}</b></h4>
        //         <p>{user.email}</p>
        //         <button>Beli</button>
        //     </div>
        // </div>

        <div className="card" style={{width: "18rem"}}>
            <img src={user.avatar} className="card-img-top" alt="Product Image" />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email} <span className ={styles.span}>/ 1 kg</span></p>
                <a href="#" className="btn  btn-warning">Beli</a>
            </div>
        </div>
    )
}

export default ProductCard