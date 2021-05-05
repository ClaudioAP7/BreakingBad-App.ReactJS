import React, { createContext, useState, useEffect } from "react";
import { quoteRandomGet } from "../contants";

export const QuoteContext = createContext();

const QuoteContextProvider = ({ children }) => {
  const [quoteRandom, setQuoteRandom] = useState([]);
  const [ doneFetchQuoteRandom, setDoneFetchQuoteRandom ] = useState(false);

  useEffect(() => getQuoteRandom(), []);

  const getQuoteRandom = () => {
    fetch(quoteRandomGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchQuoteRandom(true);
        setQuoteRandom(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <QuoteContext.Provider value={{ quoteRandom, doneFetchQuoteRandom, getQuoteRandom }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContextProvider;
