import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt={item.title} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
      <div>Avaliable Sizes: {item.size.join(",")}</div>
    </div>
  );
};

export default ProductCard;
