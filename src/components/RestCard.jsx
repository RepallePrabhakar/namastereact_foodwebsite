import React from "react";

const RestCard = (props) => {
  const { resProps } = props;

  const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resProps;
  return (
    <div className="rest_card">
      <img
        style={{ width: "140px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>ID: {id}</h4>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestCard;
