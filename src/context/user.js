// user context
// user context
import React, { useState } from "react";
const userConext = React.createContext();
function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}
const UserProvider = ({ children }) => {
  const [user, setuser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({ 
    show: false, 
    msg: "", 
    type: "success" 
});
// alert function
const ShowAlert = ({msg, type="success"})=>{
    setAlert({show:true, msg , type})
}

const HideAlert= ()=>{
    setAlert({...alert,show:false})
}
// end of alert 
  const userLogin = (user) => {
    setuser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const userLogout = () => {
    setuser({ username: null, token: null });
    localStorage.removeItem("user");
  };
  return (
    <userConext.Provider
      value={{
        user,
        alert,
        userLogin,
        userLogout,
        ShowAlert,
        HideAlert
      }}
    >
      {children}
    </userConext.Provider>
  );
};

const useGlobalUserProvider = () => {
  return React.useContext(userConext);
};

export { UserProvider, useGlobalUserProvider };
