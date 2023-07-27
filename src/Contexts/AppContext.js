import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [favoriteSearches, setFavoriteSearches] = useState([]);

  const addCharacterToFavorites = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  const removeCharacterFromFavorites = (characterId) => {
    setCharacters((prevCharacters) => prevCharacters.filter((character) => character.id !== characterId));
  };

  const addComicToFavorites = (comic) => {
    setComics((prevComics) => [...prevComics, comic]);
  };

  const removeComicFromFavorites = (comicId) => {
    setComics((prevComics) => prevComics.filter((comic) => comic.id !== comicId));
  };

  const addSearchToFavorites = (search) => {
    setFavoriteSearches((prevSearches) => [...prevSearches, search]);
  };

  const contextValue = {
    characters,
    addCharacterToFavorites,
    removeCharacterFromFavorites,
    comics,
    addComicToFavorites,
    removeComicFromFavorites,
    favoriteSearches,
    addSearchToFavorites,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
