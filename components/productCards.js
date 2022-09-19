function ProductCard({product}) {
    return (
        <div className="card" style={{width: "16rem", marginRight: "30px"}}>
            <img src={product.imageId} className="card-img-top" alt="Product Image" />
            <div className="card-body" style={{height: "180px"}}>
                <h5 className="card-title">{product.displayName}</h5>
                <p className="card-text" style={{minHeight: "40px"}}>Rp {product.pricePerQty}<span style={{color: "rgba(0, 0, 0, 0.6)"}}>/ {product.qty}</span></p>
                <a href="#" className="btn" style={{backgroundColor: "#F7D100", width: "14rem", verticalAlign: "bottom"}}><b>Beli</b></a>
            </div>
        </div>
    )
}

export default ProductCard