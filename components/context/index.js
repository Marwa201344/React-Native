//Context
import React from 'react';
import { createContext, useReducer } from "react";
import { reducer } from "../reducer/index";
export const UsersContext = createContext();
export default UsersProvider = ({ children }) => {
 

  const [ state, dispatch ] = useReducer(reducer, {
    list: [],
    details:{}
  });

  return (
    <UsersContext.Provider value={{state,dispatch}}>{children}</UsersContext.Provider>
  );
};
