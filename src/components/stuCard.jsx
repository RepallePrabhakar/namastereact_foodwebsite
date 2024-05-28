import React from "react";

const RestCard = (props) => {
  const { resProps } = props;
  const { name, email, phone, website } = resProps;

  // const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
  //   resProps;
  console.log(props);
  return (
    <div className="rest_card">
      {/* <img
        style={{ width: "140px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      /> */}
      <h3 className={{ colour: "Black" }}>{name}</h3>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <h4>{website}</h4>
      {/* <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4> */}
    </div>
  );
};

export default RestCard;
