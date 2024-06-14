import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemCards = ({ cards }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  //console.log(cards);
  return (
    <div>
      {cards.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-self-auto">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                item.card.info.imageId
              }
              className="w-24"
            />
            <button
              className="px-5 m-7 font-bold border-x-2 border-y-0 bg-red-300 rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>

          <div className="py-2">
            <span className="text-lg">{item.card.info.name}</span>
            <span>
              - $
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
