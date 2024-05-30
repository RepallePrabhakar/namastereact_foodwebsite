import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import RestCard from "./RestCard";
//import resreq from "../utils/mockdata";
const Body = () => {
  const [resData, setResData] = useState([]);
  //const [resAPIFlag, setResAPIFlag] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [inputData, setInputData] = useState("");

  useEffect(() => {
    //if (!resAPIFlag) {
    fetchData();
    //}
  }, []);

  const fetchData = async () => {
    //setResAPIFlag(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444974&lng=78.383378&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://jsonplaceholder.typicode.com/users"
    );
    const json = await data.json();

    setResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //json
    );
    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleInput = (e) => {
    setInputData(e.target.value);
  };
  const handleBtnSubmit = () => {
    const filteredRes = resData.filter((res) =>
      res.info.name.toLowerCase().includes(inputData.toLowerCase())
    );
    console.log(filteredRes);
    setFilteredData(filteredRes);
  };
  //console.log(resData);
  return (
    <div>
      <input
        className="input_bar"
        type="text"
        placeholder="search restaurant"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button className="search_btn" onClick={handleBtnSubmit}>
        Search
      </button>
      <div className="app">
        {filteredData.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant?.info.id}>
              <RestCard key={restaurant.info.id} resProps={restaurant?.info} />
            </Link>
          );
          //console.log(resturent.info.id);
        })}
        {/* {resData &&
          resData.map((resturent) => {
            //console.log(resturent);
            return (
              <RestCard key={resturent.info.id} resProps={resturent?.info} />
              //<RestCard key={resturent.id} resProps={resturent} />
            );
          })} */}
      </div>
    </div>
  );
};

export default Body;
