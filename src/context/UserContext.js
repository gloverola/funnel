import React, { useState, createContext } from "react";

export const UserContext = createContext([{}, () => {}]);

export const UserProvider = (props) => {
  const [state, seState] = useState({
    username: "",
    email: "",
    uid: "",
    isLoggedIn: null,
    profilePhotoUrl: "default",
  });

  return (
    <UserContext.Provider value={[state, seState]}>
      {props.children}
    </UserContext.Provider>
  );
};
