import React, { useState, useEffect, useContext, useCallback } from "react";
import Axios from "axios";
import { fetchRandomQuote } from "./api/api";
import Quote from "./components/Quote";
import "./App.css";
import { store } from "./store";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";

function App() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  // const fetchQuotesByAuthor = async () => {
  //   try {
  //     const response = Axios.get(
  //       `${BASE_URL}/authors/${quote.quoteAuthor}?page=1&limit=10`
  //     );
  //     console.log(`Resposne`, response.data);
  //   } catch (e) {
  //     console.log(`Error`, e);
  //   } finally {
  //   }
  // };

  // const fetchRandomQuote = async () => {
  //   setQuote("");
  //   setLoading(true);

  //   try {
  //     const response = await Axios.get(`${BASE_URL}/quotes/random`);
  //     setQuote(response.data.quote);
  //     console.log(`Response`, response.data);
  //   } catch (e) {
  //     console.log(`Error`, e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="app">
      {!state.showQuotes && <Home />}
      {state.showQuotes && <Quotes />}
      {state.loading && <div className="loading">Loading...</div>}

      <footer>IpsCodingChallenge@DevChallenges.io</footer>
    </div>
  );
}

export default App;
