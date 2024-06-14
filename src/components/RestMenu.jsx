import { joinPaths } from "@remix-run/router";
import { useState } from "react";
//import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const RestMenu = () => {
  //const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resMenu = useResMenu(resId);

  //console.log(resMenu?.cards[2]?.card?.card?.info.name);
  if (resMenu === null) return <h2>Loading...</h2>;
  const { name } = resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="grid">
      <h2 className="font-bold text-lg p-10">{name}</h2>
      {/* <h3>Menu:</h3> */}
      <ul>
        {/* {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))} */}
        {categories.map((category, index) => {
          return (
            <ResCategory
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestMenu;
