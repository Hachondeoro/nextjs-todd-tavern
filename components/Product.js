import React from "react";
import Tilt from "react-parallax-tilt";

const Product = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <Tilt
          className="m-auto"
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.25}
        >
          <img
            src={props.product.image.url}
            className="card-img-top"
            alt="shirt"
          />
        </Tilt>
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <p className="card-title">$ {props.product.price}</p>
          <p className="card-title">{props.product.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => props.addItem(props.product)}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
