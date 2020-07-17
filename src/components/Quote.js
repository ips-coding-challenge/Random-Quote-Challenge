import React, { useContext, useState, useEffect } from "react";
import { store } from "../store";

function Quote({ quote }) {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  // const [quote, setQuote] = useState(state.quote);

  const { quoteAuthor: author, quoteText: text, quoteGenre: genre } = quote;

  return (
    <div className="quote">
      {/* {state.loading && <div className="loading">Loading...</div>} */}

      {!state.loading && <div className="quote__text">{text}</div>}
      {!state.showQuotes && (
        <div
          className={`quote__meta ${!state.showQuotes ? "hover-state" : ""}`}
          onClick={() => dispatch({ type: "SHOW_QUOTES", value: true })}
        >
          <div className="quote__meta-text">
            <div className="quote__meta-author">{author}</div>
            <div className="quote__meta-genre">{genre}</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="32px"
            height="32px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Quote;
