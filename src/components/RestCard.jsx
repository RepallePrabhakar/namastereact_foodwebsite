import React from "react";

const RestCard = (props) => {
  const { name, cloudinaryImageId, sla, avgRating } =
    props.resData.card.card.info;

  return (
    <div className="rest_card">
      <img
        style={{ width: "140px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h4>{sla.deliveryTime} Mins</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestCard;
