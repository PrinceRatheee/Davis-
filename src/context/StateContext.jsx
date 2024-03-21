import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const fetchUserData = async () => {
    const response = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    setUser(response?.data?.user);
  };
  useEffect(() => {
    fetchUserData();
  
   
  }, [])
  
  return (
    <StateContext.Provider
      value={{
       user
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
