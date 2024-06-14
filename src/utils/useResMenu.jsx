import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.444974&lng=78.383378&restaurantId=" +
        resId
    );
    const json = await data.json();
    //console.log(json.data);
    setResMenu(json?.data);
  };
  //console.log(resMenu);
  return resMenu;
};

export default useResMenu;
