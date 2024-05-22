import React from "react";

const RestCard = (props) => {
  const { resData } = props;
  console.log(resData.card.card.info.deliveryTime);
  return (
    <div className="rest_card">
      <img
        style={{ width: "140px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h4>{resData.card.card.info.name}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} Mins</h4>
      <h4>{resData.card.card.info.avgRating} Stars</h4>
    </div>
  );
};

export default RestCard;
