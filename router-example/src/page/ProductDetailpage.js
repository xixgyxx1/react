import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailpage = () => {
  const { id } = useParams();

  return <div>ProductDetailpage{id}</div>;
};

export default ProductDetailpage;
