import React, { createContext, useReducer } from "react";
import { globalReducers, initialState } from "./reducer";

export const GlobalContext = createContext();
export const SetGlobalContext = createContext();

const ContextProvider = props => {
  const [globalState, dispatch] = useReducer(globalReducers, initialState);

  return (
    <GlobalContext.Provider value={globalState}>
      <SetGlobalContext.Provider value={dispatch}>
        {props.children}
      </SetGlobalContext.Provider>
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
