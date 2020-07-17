import React, { useContext, useCallback, useEffect } from "react";
import Quote from "../components/Quote";
import { store } from "../store";
import { fetchQuotesByAuthor } from "../api/api";

function Quotes() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const fetchAll = useCallback(async () => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      if (!state.quote) {
        throw Error("There is not quote so... no Author associated");
      }
      console.log(`Quote author`, state.quote.quoteAuthor);
      const response = await fetchQuotesByAuthor(state.quote.quoteAuthor);
      dispatch({ type: "SET_QUOTES", value: response.data.quotes });
      console.log(`Response.data fetchAll`, response.data);
    } catch (e) {
      console.log(`Error`, e);
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  });

  useEffect(() => {
    fetchAll();
  }, []);
  console.log(`Quotes`, state.quotes);
  return (
    <div className="quotes">
      <div
        className="back"
        onClick={() => dispatch({ type: "SHOW_QUOTES", value: false })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
        </svg>
        <span>Back</span>
      </div>
      <div className="quotes__author">{state.quote.quoteAuthor}</div>
      {state.quotes.length > 0 && state.quotes.map((q) => <Quote quote={q} />)}
    </div>
  );
}

export default Quotes;
