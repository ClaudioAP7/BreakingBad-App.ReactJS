import React, { createContext, useState, useEffect } from "react";
import { charactersGet } from "../contants";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [ doneFetchCharacters, setDoneFetchCharacters ] = useState(false);

  useEffect(() => getCharacters(), []);

  const getCharacters = () => {
    fetch(charactersGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchCharacters(true);
        setCharacters(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <CharactersContext.Provider value={{ characters, doneFetchCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
