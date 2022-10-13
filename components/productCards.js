import styled from "styled-components";
import { color } from "../constant/primitive";

const IMAGE_WIDTH = 154;
const IMAGE_HEIGTH = 154;
const CARD_HEIGHT = 266;

const Style = styled.div`
  width: ${IMAGE_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin-right: 30px;
  .card-img-top {
    width: ${IMAGE_WIDTH}px;
    height: ${IMAGE_HEIGTH}px;
  }
  .card-body {
    .card-text {
      min-height: 40px;
      span {
        color: ${color.disable_black};
      }
    }
    .btn {
      background-color: ${color.primary};
      vertical-align: bottom;
    }
  }
`;

function ProductCard({ product }) {
  return (
    <Style>
      <div className="card" key={product.displayName}>
        <img src={product.image} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{product.displayName}</h5>
          <p className="card-text">
            Rp {product.pricePerQty}
            <span> / {product.qty}</span>
          </p>
          <a href="#" className="btn">
            <b>Beli</b>
          </a>
        </div>
      </div>
    </Style>
  );
}

export default ProductCard;
