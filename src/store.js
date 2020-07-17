import React, { useReducer } from "react";
import { fetchRandomQuote } from "./api/api";

const initialState = {
  loading: true,
  quotes: [],
  quote: null,
  showQuotes: false,
};

const store = React.createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_QUOTE":
        return { ...state, quote: action.value };
      case "SET_QUOTES":
        return { ...state, quotes: action.value };
      case "SET_LOADING":
        return { ...state, loading: action.value };
      case "SHOW_QUOTES":
        return { ...state, showQuotes: action.value };
      default:
        throw Error("Action not found");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
