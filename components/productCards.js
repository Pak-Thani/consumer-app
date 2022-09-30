import Link from 'next/link'

function ProductCard({product}) {
    return (
        <div className="card mx-5px" style={{width: "16rem", margin: "5px 30px 5px 5px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)", filter : product.isStockAvailable === true ? "none" : "grayscale(100%)"}}>
            <img src={product.image} className="card-img-top" alt={product.description} style={{height: "200px"}} />
            <div className="card-body"style={{minHeight: "30px"}}>
                <h5 className="card-title" style={{minHeight: "50px"}}>{product.name}</h5>
                <p className="card-text">Rp <span style={{color: "rgba(0, 0, 0, 0.6)"}}>/ {product.qty}</span></p>
                <Link href="#">
                    <a className="btn" style={{backgroundColor: "#F7D100", height: "55px", width: "55px", fontSize: "20px", lineHeight: "40px", position: "absolute", margin: "-38px 184px", pointerEvents : product.isStockAvailable === true ? "" : "none"}}><b>&#43;</b></a>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard