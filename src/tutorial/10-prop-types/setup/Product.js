import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 0,
  image: {
    url: defaultImage,
  },
};

const Product2 = ({ image, name, price }) => {
  return (
    <article className="product">
      {image && <img src={image.url} alt={name} />}
      <h4>{name}</h4>
      {price && <p>${price}</p>}
    </article>
  );
};

export default Product;
