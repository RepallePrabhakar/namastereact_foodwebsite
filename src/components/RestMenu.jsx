import { joinPaths } from "@remix-run/router";
//import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const RestMenu = () => {
  //const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  const resMenu = useResMenu(resId);

  //console.log(resMenu?.cards[2]?.card?.card?.info.name);
  if (resMenu === null) return <h2>Loading...</h2>;
  const { name } = resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestMenu;
