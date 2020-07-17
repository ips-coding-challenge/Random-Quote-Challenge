import Axios from "axios";

const BASE_URL = "https://quote-garden.herokuapp.com/api/v2";

const fetchRandomQuote = async () => {
  return await Axios.get(`${BASE_URL}/quotes/random`);
};

const fetchQuotesByAuthor = async (author) => {
  return Axios.get(`${BASE_URL}/authors/${author}?page=1&limit=10`);
};

export { fetchRandomQuote, fetchQuotesByAuthor };
