import React, { createContext, useState } from 'react';

// Create a context
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [PostValue, setPost] = useState([{
    pID:0,
    ToCountry:null,
    FromCountry:null,
    price:null,
    post:null,
    wgt:null,
    name:null,
    image:null
  
  }]);

  return (
    <MyContext.Provider value={{ PostValue, setPost }}>
      {children}
    </MyContext.Provider>
  );
};