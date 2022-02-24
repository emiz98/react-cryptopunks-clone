import React from "react";
import "./collectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">.#{id}</div>
        <div className="priceContainer">
          <img src="/assets/weth.png" alt="" />
          <p className="price">{traits[0]?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
