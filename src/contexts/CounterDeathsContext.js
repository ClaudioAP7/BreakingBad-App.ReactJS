import React, { createContext, useState, useEffect } from "react";
import { counterDeathsGet } from "../contants";

export const CounterDeathsContext = createContext();

const CounterDeathsContextProvider = ({ children }) => {
  const [counterDeaths, setCounterDeaths] = useState(0);
  const [ doneFetchCounterDeaths, setDoneFetchCounterDeaths ] = useState(false);
  const [ counterDuration, setCounterDuration ] = useState("");

  useEffect(() => getCounterDeaths(), []);

  const getCounterDeaths = () => {
    fetch(counterDeathsGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchCounterDeaths(true);
        setCounterDeaths(data[0].deathCount);
        setCounterDuration("2");
      })
      .catch(err => console.log(err));
  };

  return (
    <CounterDeathsContext.Provider value={{ counterDeaths, doneFetchCounterDeaths, counterDuration }}>
      {children}
    </CounterDeathsContext.Provider>
  );
};

export default CounterDeathsContextProvider;
