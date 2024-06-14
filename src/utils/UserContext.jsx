import { createContext } from "react";

const UserConstext = createContext({
  loggedInUser: "default",
});

export default UserConstext;
